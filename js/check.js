const Computer = function(){
    this.ram = 8;
    this.cpu = "Intel";
    this.storage = 223;
    this.runProgram = function(program){
        console.log("Running " + program);
    }
} 

const Laptop = function(){
    this.battery = 700;
    this.carryAround = function(){
        console.log("carrying laptop:  cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
    }
}

Laptop.prototype = new Computer();
    let lap = new Laptop();
    lap.runProgram("MS Paint");
    lap.carryAround();