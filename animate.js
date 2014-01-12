
function draw () 
{
	requestAnimationFrame(draw);
	keyHandeling();
	partikles();

	renderer.render( scene, camera );

	//Move player and camera
	if (player)
	{
		player.movePlayer();
	}
}

function partikles () 
{
	if (hotspots == 0)
	{

	}
	for (var i=0; i < hotspots.length; i++)
	{
	}

}

//Globale movement variables
var moveX = false;
var moveZ = false;
var movementX = 0;
var movementZ = 0;
function keyHandeling () 
{
	//X side
	var walkSpeed = 0.4;
	if (Key.isDown(Key.A))
	{
		moveX = true;
		movementX = -walkSpeed;
	}
	else if (Key.isDown(Key.D))
	{
		moveX = true;
		movementX = walkSpeed;
	}
	else 
	{
		moveX = false;
	}

	//Z side
	if (Key.isDown(Key.W))
	{
		moveZ = true;
		movementZ = -walkSpeed;
	}
	else if (Key.isDown(Key.S))
	{
		moveZ = true;
		movementZ = walkSpeed;
	}
	else 
	{
		moveZ = false;
	}
}

