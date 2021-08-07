class Duck{
    constructor(flying = false, quacking = false, xPos, yPos){
       this.flying = flying;
       this.quacking = quacking;
       this.xPos = xPos;
       this.yPos = yPos;
    }
    takeOff(){
      this.flying = true;
    }
    land(){
      this.flying = false;
    }
    startQuacking(){
      this.quacking = true;
    }
    stopQuacking(){
      this.quacking = false;
    }
    moveTo(x,y){
       this.xPos = x;
       this.yPos = y;
       let action = this.flying ? 'Flying' : 'Swimming';
       let quackingText = this.quacking ? 'while quacking' : '';
       console.log(`Duck is ${action } to : ${this.xPos}, ${this.yPos} ${quackingText}`);
    }
}
module.exports = Duck;