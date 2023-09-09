"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const SafeArea_module_less_1 = __importDefault(require("./SafeArea.module.less"));
const SafeArea = () => {
    return <components_1.View className={SafeArea_module_less_1.default['safe-area']}/>;
};
exports.default = SafeArea;
