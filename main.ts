import { LikeComponent } from "./likeComponent";

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}`);