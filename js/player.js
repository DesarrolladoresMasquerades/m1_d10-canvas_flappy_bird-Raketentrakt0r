class Player {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 100
        this.y = 200

        this.width = 46
        this.heigth = 32
    }

    move(frameNumber){
        
    }

    draw(frameNumber){
       
    }

    collidesWith(object){
        return (
            this.x < object.x + object.width && 
            this.x + this.width > obstacles.x &&
        
            this.y < object.y + object.heigth &&
            this.y + this.heigth > object.y
            )

    }

    exitsCanvas(){
        return this.y > this.ctx.canvas.heigth || this.y + this.heigth < 0;

    }

}