"use strict";
exports.__esModule = true;
var likeComponent_1 = require("./likeComponent");
var component = new likeComponent_1.LikeComponent(10, false);
component.onClick();
console.log("likesCount: ".concat(component.likesCount, " and isSelected: ").concat(component.isSelected));
