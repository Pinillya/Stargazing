function MakePlane (texture, hight, pWith, quality, positionY, positionX, rotate) 
{
	var plane;// texture, hight, pWith, quality, positionY, positionX;
	///Make a plane Object
	var playerMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture(texture), transparent: true});

	plane = new THREE.Mesh(
		new THREE.PlaneGeometry(
		pWith,
		hight,
		quality,
		quality),
		playerMaterial);

	scene.add(plane);

	plane.position.y = positionY;
	plane.position.x = positionX;
	plane.rotation.x = rotate;
}