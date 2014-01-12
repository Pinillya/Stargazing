function Player (texture, hight, pWith, quality, positionY, positionX, rotate) 
{
	var plane;
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
	var stopXUp = false;
	var stopXDown = false;
	var stopZUp = false;
	var stopZDown = false;

	var playerPos = new THREE.Vector3( this.plane.position.x, this.plane.position.y, this.plane.position.z); 
	var center = new THREE.Vector3(0, 0, 0); 	

	if (playerPos.distanceTo(center) < sceneSize && this.plane.position.y < 5) 
	{
		grounded = true;
	}
	else
	{
		this.plane.position.y -= 0.2;
		grounded = false;
	};

	for (var i = trees.length - 1; i >= 0; i--) 
	{
		var bBoxCenter = new THREE.Vector3(trees[i].plant.position.x, trees[i].plant.position.y, trees[i].plant.position.z);
		
		if (playerPos.distanceTo(bBoxCenter) < 5)
		{
			//BB Z
			if (this.plane.position.z > trees[i].plant.position.z + 2)
			{
				stopZUp = true;
			}
			else if (this.plane.position.z < trees[i].plant.position.z - 3)
			{
				stopZDown = true;
			}
			else{
				stopZDown = false;
				stopZUP = false;
			}	

			//BB X
			if (this.plane.position.x > trees[i].plant.position.x + 3)
			{
				stopXUp = true;
			}
			else if (this.plane.position.x < trees[i].plant.position.x - 3)
			{
				stopXDown = true;
			}
			else{
				stopXDown = false;
				stopXUP = false;
			}	
		}
	};

	if (moveZ)
	{
		if (movementZ > 0 && !stopZDown)
		{
			this.plane.position.z += movementZ;
			camera.position.z += movementZ;
		}
		if (movementZ < 0 && !stopZUp)
		{
			this.plane.position.z += movementZ;
			camera.position.z += movementZ;
		}		
	}
	if (moveX)
	{
		if (movementX > 0 && !stopXDown)
		{
			this.plane.position.x += movementX;
			camera.position.x += movementX;
		}
		if (movementX < 0 && !stopXUp)
		{
			this.plane.position.x += movementX;
			camera.position.x += movementX;
		}	
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

var plant;
function Trees (texture, hight, pWith, quality, positionZ, positionX, rotate) 
{
	///Make a plant Object
	var plantMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(texture), transparent: true});

	this.plant = new THREE.Mesh(
		new THREE.PlaneGeometry(
		pWith,
		hight,
		quality,
		quality),
		plantMaterial);

	scene.add(this.plant);

	this.plant.position.z = positionZ;
	this.plant.position.x = positionX;
	this.plant.position.y = 5;
	this.plant.rotation.x = rotate;

	var plantPos = new THREE.Vector3( this.plant.position.x, this.plant.position.y, this.plant.position.z); 
	var center = new THREE.Vector3(0, 0, 0); 	

	if (plantPos.distanceTo(center) > sceneSize) 
	{
		this.plant.position.z = -sceneSize/2 + THREE.Math.random16() * sceneSize;
		this.plant.position.x = -sceneSize/2 + THREE.Math.random16() * sceneSize;
	}
}

var box;
function HitBoxes (texture, hight, bWith, depth, positionZ, positionX)
{
	
	///Make a boundingBox Object
	var boxMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(texture), transparent: false});

	this.box = new THREE.Mesh(
		new THREE.CubeGeometry(
		hight,
		bWith,
		depth),
		boxMaterial);

	scene.add(this.box);

	this.box.position.z = positionZ;
	this.box.position.x = positionX;
	this.box.position.y = hight/2;

}