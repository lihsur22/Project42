class Sec {
    constructor(){}

    display(){
        push();
        translate(400,400);
        rotate(sAngle - 90);
        stroke("#D70071");
        strokeWeight(8);
        line(0,0,150,0);
        pop();
    }
};