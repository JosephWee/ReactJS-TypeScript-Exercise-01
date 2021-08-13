var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
//For more information please see:
//https://www.typescriptlang.org/docs/handbook/namespaces.html
var Example;
(function (Example) {
    var _ElementId, _Name;
    class HiWorld {
        constructor(config) {
            _ElementId.set(this, void 0);
            _Name.set(this, void 0);
            __classPrivateFieldSet(this, _ElementId, config.ElementId);
            __classPrivateFieldSet(this, _Name, config.Name);
            $("#" + __classPrivateFieldGet(this, _ElementId)).html("Hi " + __classPrivateFieldGet(this, _Name));
        }
    }
    _ElementId = new WeakMap(), _Name = new WeakMap();
    Example.HiWorld = HiWorld;
})(Example || (Example = {}));
var HiWorldApp = new Example.HiWorld({ ElementId: "root", Name: "Joe" });
