import { bind as Option_bind, map as Option_map } from "../../../.fable/fable-library.3.0.0-nagareyama-beta-003/Option.js";

export const Impl_allowsPassiveEvents = (() => {
    let passive = false;
    try {
        if ((typeof window !== 'undefined') ? (typeof window.addEventListener === 'function') : false) {
            const options = {
                passive: true,
            };
            window.addEventListener("testPassiveEventSupport", (value) => {
                void value;
            }, options);
            window.removeEventListener("testPassiveEventSupport", (value_1) => {
                void value_1;
            });
        }
    }
    catch (matchValue) {
    }
    return passive;
})();

export const Impl_defaultPassive = {
    passive: true,
};

export function Impl_adjustPassive(maybeOptions) {
    const option = maybeOptions;
    return Option_map((options) => {
        if (options.passive ? (!Impl_allowsPassiveEvents) : false) {
            return {
                capture: options.capture,
                once: options.once,
                passive: false,
            };
        }
        else {
            return options;
        }
    }, option);
}

export function Impl_createRemoveOptions(maybeOptions) {
    const option = maybeOptions;
    return Option_bind((options) => {
        if (options.capture) {
            return {
                capture: true,
            };
        }
        else {
            return void 0;
        }
    }, option);
}

