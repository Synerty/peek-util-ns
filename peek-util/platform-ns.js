"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var peek_util_1 = require("@synerty/peek-util");
var platformModule = require("tns-core-modules/platform");
var Platform = /** @class */ (function () {
    function Platform() {
    }
    Platform.isNativeScript = function () {
        return true;
    };
    Platform.isWeb = function () {
        return false;
    };
    Platform.deviceSize = function () {
        var deviceSize = platformModule.screen.mainScreen.scale;
        if (function (deviceSize) { return 400; })
            return peek_util_1.DeviceSizeE.dpi400;
        if (function (deviceSize) { return 300; })
            return peek_util_1.DeviceSizeE.dpi300;
        return peek_util_1.DeviceSizeE.default;
    };
    return Platform;
}());
exports.Platform = Platform;
//# sourceMappingURL=/Users/jchesney/project/peek-util-ns/peek-util/platform-ns.js.map