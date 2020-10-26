import { createElement as react_createElement } from "react";
import react from "react";

export const reactApi = react;

export const reactElement = react_createElement;

export function mkAttr(key, value) {
    return [key, value];
}

export function mkStyle(key, value) {
    return [key, value];
}

