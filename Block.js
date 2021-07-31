class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visiblity=255;
      
    }
    display(){

      if(this.body.speed<3){
        fill(85,136,238);

      }else{
       World.remove(world,this.body);
       push();
       this.visiblity = this.visiblity-5;
       tint(255,this.visiblity);
       image(this.image,this.body.position.x,this .body.position.y);

       pop();
      }

      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
      //this.image(this.image,this.body.position.x,this .body.position.y,this.height,this.weight);

      
      
    }
} 