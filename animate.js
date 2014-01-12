
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
	
	if (player.position.y <= sceneSize + 5) 
	{
		player.position.y = sceneSize + 5;
	}
	else
	{
		player.position.y -= 0.2;
	}

	ball.rotation.z = rotateZ * Math.PI / 180;
	ball.rotation.x = rotateX * Math.PI / 180;
/*
	//var earthRotation; = new THREE.Quaternion();
	//earthRotation.setFromAxisAngle (new THREE.Vector3(0,1,0), Math.PI/2);
	//earthVector = new THREE.Vector3(1,0,0);
	//earthVector.applyQuaternion(earthRotation);

	//var zVec = new THREE.Vector3(0,0,1);
	//zVec.applyQuaternion(ball.quaternion);

	//var qm = new THREE.Quaternion();
	//THREE.Quaternion.slerp(ball.quaternion, 1, qm, 0.07);
	//ball.quaternion = qm;
	//ball.quaternion.normalize();
	//ball.rotation.set(rotateX, 0, rotateZ);
	//ball.quaternion.x = rotateX;
	//ball.quaternion.z = rotateZ;
	//ball.quaternion.normalize();
	//ball.quaternion.x = new THREE.Vector3(rotateX, 0, rotateZ);
	//var quat = new 

	//var v = new THREE.Vector3(rotateX, 0, rotateZ);
	//var v = rotateX;
	//var q = new THREE.Quaternion().setFromEuler(v);
	//var newQuaternion = new THREE.Quaternion();

	//ball.useEuler = true
	//ball.position = new THREE.Vector3(0,0,0);
	//quaternion = new THREE.Quaternion(rotateX, ball.position.y, rotateZ, 1);
	//ball.setFromQuaternion( quaternion, 'XYZ')

	//var quaternion = new THREE.Quaternion(); 
	//quaternion.setFromAxisAngle( new THREE.Vector3(1, 0, 1), Math.PI / 2 ); 
	//var vectorX = new THREE.Vector3(1, 0, 0); 
	//var vectorZ = new THREE.Vector3(0, 0, 1); 
	//vectorX.applyQuaternion(quaternion);
	//var vectorZ = new THREE.Vector3(0, 0, rotateZ); 
	//vectorZ.applyQuaternion(quaternion);

	//ball.quaternion = (vectorZ, 0);
	//ball.quaternion.x = rotateX;
	//ball.quaternion.y = rotateZ;
	//ball.rotation.x = vector.x;
	//ball.rotation.y = 0;
	//ball.rotation.z = vector.z;

	//quaternion = new THREE.Quaternion().setFromAxisAngle( ball.position, 40 );

	//ball.rotation.setEulerFromQuaternion( quaternion );
	//ball.useQuaternion = true;
	//ball.quaternion.x = 0;
	//ball.rotateOnAxis(vectorX, rotateX);
	//ball.rotateOnAxis(vectorZ, rotateZ);
*/	
}

var rotateX = 0;
var rotateZ = 0;
function keyHandeling () 
{
	
	var rotationSpeed = 1;

	if (Key.isDown(Key.A))
	{
		rotateZ -= rotationSpeed;
	}
	else if (Key.isDown(Key.D))
	{
		rotateZ += rotationSpeed;
	}


	if (Key.isDown(Key.W))
	{
		rotateX += rotationSpeed;
	}
	else if (Key.isDown(Key.S))
	{
		rotateX -= rotationSpeed;
	}
}
