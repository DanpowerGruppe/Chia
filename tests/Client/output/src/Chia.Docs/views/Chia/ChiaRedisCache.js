import { reactElement, reactApi, mkAttr } from "../../../../.fable/Feliz.1.17.0/Interop.fs.js";
import { singleton, empty, ofArray } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/List.js";
import { createObj } from "../../../../.fable/fable-library.3.0.0-nagareyama-rc-007/Util.js";
import { fixDocsView, code } from "../../Utils.js";

export const overview = (() => {
    let xs, xs_1, elms_2, xs_3;
    const children_3 = ofArray([(xs = ofArray([mkAttr("className", "title is-1"), mkAttr("children", reactApi.Children.toArray(["Chia.RedisCache"]))]), reactElement("h1", createObj(xs))), (xs_1 = ofArray([mkAttr("className", "subtitle is-2"), mkAttr("children", reactApi.Children.toArray(["Helper to create or directly query a RedisCache"]))]), reactElement("h2", createObj(xs_1))), reactElement("hr", createObj(empty())), (elms_2 = ofArray([reactElement("p", createObj(singleton(["children", ["To create or read a Redis values with a Redis Key you first have to create a Redis cache info:"]]))), code("\r\n                let cacheInfo : RedisCache = {\r\n                    Cache = Redis.cache\r\n                    Key = key\r\n                    FileWriterInfo = fileWriterInfo }"), reactElement("p", createObj(singleton(["children", ["To deserialze your Redis values to your pass in a System.Text.Json mapper."]]))), reactElement("p", createObj(singleton(["children", ["You also should pass in a task to receive your data. The function tries to find the cache in Redis."]]))), reactElement("p", createObj(singleton(["children", ["If there is no Redis cache it will create a new cache by executing your task."]]))), reactElement("p", createObj(singleton(["children", ["The following example showes how to reveice a a Plant array directly out of Redis or creates a new cache if theres no existing cache and returns the Plant array."]])))]), (xs_3 = ofArray([mkAttr("className", "content"), mkAttr("children", reactApi.Children.toArray(Array.from(elms_2)))]), reactElement("div", createObj(xs_3)))), fixDocsView("ChiaRedisCache", false)]);
    return reactElement("div", createObj(singleton(["children", reactApi.Children.toArray(Array.from(children_3))])));
})();

