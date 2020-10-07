class Min {
    constructor(){}

    display(){
        push();
        translate(400,400)
        rotate(mAngle - 90);
        stroke("#9C4E97");
        strokeWeight(8);
        line(0,0,100,0);
        pop();
    }
};