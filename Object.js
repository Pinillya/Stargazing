function Player (texture, hight, pWith, quality, positionY, positionX, rotate) 
{
	var plane;// texture, hight, pWith, quality, positionY, positionX;
	///Make a plane Object
	var playerMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(texture), transparent: true});

	this.plane = new THREE.Mesh(
		new THREE.PlaneGeometry(
		pWith,
		hight,
		quality,
		quality),
		playerMaterial);

	scene.add(this.plane);

	this.plane.position.y = positionY;
	this.plane.position.x = positionX;
	this.plane.rotation.x = rotate;
}

Player.prototype.movePlayer = function()
{
	var grounded = false;
	if (this.plane.position.y <= 5) 
	{
		this.plane.position.y = 5;
		grounded = true;
	}
	else
	{
		this.plane.position.y -= 0.2;
		grounded = false;
	}	
	if (moveZ)
	{
		this.plane.position.z += movementZ;
		camera.position.z += movementZ;
	}
	if (moveX)
	{
		this.plane.position.x += movementX;	
		camera.position.x += movementX;
	}
};

function StaticCircle (texture, radius, segments, positionY, positionX, rotate) 
{
	var circle;
	///Make a circle Object
	var circleMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(texture), transparent: true});

	this.circle = new THREE.Mesh(
		new THREE.CircleGeometry(
		radius,
		segments),
		circleMaterial);

	scene.add(this.circle);

	this.circle.position.y = positionY;
	this.circle.position.x = positionX;
	this.circle.rotation.x = rotate;
}