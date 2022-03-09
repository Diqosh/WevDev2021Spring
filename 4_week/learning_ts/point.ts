interface Point{
    x: number,
    y: number,
    draw: () => void
}

export class PointClass{

    constructor(private x: number,private y?: number) {
        this.x= x
        this.y= y
    }
    draw(){
        console.log(this)
    }
}