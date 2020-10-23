import { Model as Domain_Model, Msg as Domain_Msg, ModelModule_init as Domain_ModelModule_init } from "./Domain.js";
import { Cmd_OfAsync_start as cmd_Cmd_OfAsync_start, Cmd_OfAsyncWith_perform as cmd_Cmd_OfAsyncWith_perform, Cmd_none as cmd_Cmd_none } from "./output/.fable/Fable.Elmish.3.1.0/cmd.js";
import { singleton as AsyncBuilder_singleton } from "./.fable/fable-library.3.0.0-nagareyama-beta-002/AsyncBuilder.js";
import { sleep as Async_sleep } from "./.fable/fable-library.3.0.0-nagareyama-beta-002/Async.js";
import { successToast as Style_successToast } from "./Chia.Client/Style.js";
import { toString as Types_toString } from "./.fable/fable-library.3.0.0-nagareyama-beta-002/Types.js";

export function init() {
    return [Domain_ModelModule_init, cmd_Cmd_none()];
}

function delay(msg) {
    const builder$0040 = AsyncBuilder_singleton;
    return builder$0040.Delay(() => builder$0040.Bind(Async_sleep(2000), () => builder$0040.Return(msg)));
}

export function update(msg, currentModel) {
    let ShowLoader;
    switch (msg.tag) {
        case 2: {
            const page = msg.fields[0];
            return [currentModel, Style_successToast(Types_toString(currentModel.CurrentPage), page)];
        }
        case 1: {
            const cmd = (!currentModel.ShowLoader) ? cmd_Cmd_OfAsyncWith_perform((x_1) => {
                cmd_Cmd_OfAsync_start(x_1);
            }, delay, new Domain_Msg(1), (x) => x) : cmd_Cmd_none();
            return [(ShowLoader = (!currentModel.ShowLoader), new Domain_Model(currentModel.CurrentPage, currentModel.ShowQuickView, ShowLoader)), cmd];
        }
        default: {
            const p = msg.fields[0];
            return [new Domain_Model(p, currentModel.ShowQuickView, currentModel.ShowLoader), cmd_Cmd_none()];
        }
    }
}

