import { LikeComponent } from "./likeComponent";

let component = new LikeComponent(10, false);
component.onClick();
console.log(`likesCount: ${component.likesCount} and isSelected: ${component.isSelected}`);