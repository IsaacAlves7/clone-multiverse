"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Caused when user parameter is given, but is invalid and cannot be parsed.
 */
var ParameterParseJsonError = /** @class */ (function (_super) {
    __extends(ParameterParseJsonError, _super);
    function ParameterParseJsonError(value) {
        var _this = _super.call(this, "Parameter is invalid. Value (" + JSON.stringify(value) + ") cannot be parsed to JSON") || this;
        _this.name = "ParameterParseJsonError";
        _this.stack = new Error().stack;
        return _this;
    }
    return ParameterParseJsonError;
}(Error));
exports.ParameterParseJsonError = ParameterParseJsonError;

//# sourceMappingURL=ParameterParseJsonError.js.map
