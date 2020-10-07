class Hr {
    constructor(){}

    display(){
        push();
        translate(400,400)
        rotate(hAngle - 90);
        stroke("#0035AA");
        strokeWeight(9);
        line(0,0,75,0);
        pop();
    }
};