class Game {
    constructor(ctx,player,background,obstacles){ //es un metodo especial para crear e inicializar un objeto creado a partir de una clase
        this.ctx = ctx; // constext of the canvas
        this.player = player;
        this.background = background;
        this.obstacles = obstacles;
        this.frameNumber = null;
    }

 
    start(){ // iniciarlo para jugarlo
        this.init()
        this.play()
    }

    init (){ 
        this.frameNumber = 0; // to refresh the page
        //this.sound.stop()
        // background.init()
    }

    play(){
        this.frameNumber += 1;
        this.move();
        this.checkCollision();
        this.ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
        this.draw();
        requestAnimationFrame(this.play.bind(this));
    }

    move(){
        this.background.move(this.frameNumber)
        this.obstacles.move(this.frameNumber)
        this.player.move(this.frameNumber)
    }

    draw(){
        this.background.draw(this.frameNumber)
        this.obstacles.draw(this.frameNumber)
        this.player.draw(this.frameNumber)
    }

    checkCollision(){
        let collision = false

        if ( this.obstacles.objects.some(obstacle => this.player.collidesWith(obstacle)) ) collision = true

        if ( this.player.exitsCanvas() ) collision = true

        return collision
    }


}

