
function draw () 
{
	requestAnimationFrame(draw);
	keyHandeling();
	rotationAndPlayer();
	partikles();

	renderer.render( scene, camera );
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

function rotationAndPlayer () 
{
/*
	if (player.position.y <= 5) 
	{
		player.position.y = 5;
	}
	else
	{
		player.position.y -= 0.2;
	}
*/
}

function keyHandeling () 
{
	if (Key.isDown(Key.A))
	{
	}
	else if (Key.isDown(Key.D))
	{
	}

	if (Key.isDown(Key.W))
	{
	}
	else if (Key.isDown(Key.S))
	{
	}
}
