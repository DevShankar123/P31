class Particle{
	constructor(x,y,r)
	{
	
	var options={
		restitution:0.5,
		
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y,this.r, options)
        this.color=color(random(1,254),random(1,254),random(1,254));
		World.add(world, this.body);

	}
	display()
	{
			var particlepos=this.body.position;	
            var angle=this.body.angle;	

			push()
			translate(particlepos.x, particlepos.y);
            rotate(angle);
			noStroke();
            fill (this.color)
            ellipseMode(RADIUS);
		    ellipse(0,0,this.r,this.r)
			

			pop()
	}

}