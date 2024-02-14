// Angry Birds with Matter.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/content/videos/challenges/138-angry-birds-with-matterjs
// https://youtu.be/TDQzoe9nslY

// Code from Challenge: https://editor.p5js.org/codingtrain/sketches/UOR4nIcNS

class Bird {
  constructor(x, y, r) {
    const options = {
      restitution: 0.5
    };
    var line = [];
    this.rock = Matter.Bodies.circle(x, y, r, options);
    Matter.Body.setMass(this.rock, this.rock.mass * 4);
    Matter.World.add(world, this.rock);
    this.r = r;
    this.lineq=[];
    var i=1;
    for(let i=1;i<17;i++){
        this.lineq[i]=Matter.Bodies.polygon(x, y+90*i, 5, 2,{ render: { visible: false, restitution:0.5 } });
        Matter.Body.setMass(this.lineq[i], this.lineq[i].mass * 1);

        var line_constraint=Matter.Constraint.create({
          bodyA: this.lineq[i],
          bodyB: this.rock,
          length: 20,
          damping: 1,
          stiffness: .1
        });
        if(i>1){
          line_constraint.bodyB=this.lineq[i-1];
        }else{
            line_constraint.bodyB=this.rock;
        };
        Matter.World.add(world, this.lineq[i]);
        Matter.World.add(world, line_constraint);
      }
  }

  show() {
    var i=1;
    const pos = this.rock.position;

    const angle = this.rock.angle;
    push(); //function saves the current drawing style settings ,stores information related to the current transformation state
    translate(pos.x, pos.y);
    rotate(angle);
//    fill(255, 204, 0);
//    square(-4, -4, 8);

    imageMode(CENTER);
    image(dotImg, 0, 0, this.r * 2, this.r * 2);
    pop(); //restores these current drawing style setting 


    for(let i=1;i<17;i++){

      const pos_line=this.lineq[i].position;
      const angle_line = this.lineq[i].angle;
      push();//function saves the current drawing style settings stores information related to the current transformation state
      translate(pos_line.x, pos_line.y);
      //rotate(angle_line);
      //fill(255, 204, 0);
      //square(-4, -4, 8);

      translate(-pos_line.x, -pos_line.y);
      if(i>1){
          line((this.lineq[i-1].position.x), (this.lineq[i-1].position.y),(this.lineq[i].position.x), (this.lineq[i].position.y));
          }else{
          line((this.rock.position.x), (this.rock.position.y),(this.lineq[i].position.x), (this.lineq[i].position.y));
          }
      //image(dotImg, 0, 0, this.r, this.r );
      pop(); //restores these current drawing style setting 
    }

  }
}