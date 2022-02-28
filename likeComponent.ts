export class LikeComponent {
  
  constructor(public likesCount:number, public isSelected:boolean) { 
  }
  onClick(){
    /*
    if (this.isSelected) {
      this.likesCount--;
      this.isSelected = false;
    } else {
      this.likesCount++;
      this.isSelected = true;
    }
    */
    //or
    this.likesCount += this.isSelected ? -1 : 1;
    this.isSelected = !this.isSelected;
  }

}