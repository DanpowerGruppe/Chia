import { Model, Msg, ModelModule_init } from "./Domain.js";
import { Cmd_OfAsync_start, Cmd_OfAsyncWith_perform, Cmd_none } from "../../.fable/Fable.Elmish.3.1.0/cmd.fs.js";
import { singleton } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/AsyncBuilder.js";
import { sleep } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Async.js";
import { successToast } from "../Chia.Client/Style.js";
import { toString } from "../../.fable/fable-library.3.0.0-nagareyama-rc-007/Types.js";

export function init() {
    return [ModelModule_init, Cmd_none()];
}

function delay(msg) {
    const builder$0040 = singleton;
    return builder$0040.Delay(() => builder$0040.Bind(sleep(2000), () => builder$0040.Return(msg)));
}

export function update(msg, currentModel) {
    let ShowLoader;
    switch (msg.tag) {
        case 2: {
            const page = msg.fields[0];
            return [currentModel, successToast(toString(currentModel.CurrentPage), page)];
        }
        case 1: {
            const cmd = (!currentModel.ShowLoader) ? Cmd_OfAsyncWith_perform((x_1) => {
                Cmd_OfAsync_start(x_1);
            }, delay, new Msg(1), (x) => x) : Cmd_none();
            return [(ShowLoader = (!currentModel.ShowLoader), new Model(currentModel.CurrentPage, currentModel.ShowQuickView, ShowLoader)), cmd];
        }
        default: {
            const p = msg.fields[0];
            return [new Model(p, currentModel.ShowQuickView, currentModel.ShowLoader), Cmd_none()];
        }
    }
}

