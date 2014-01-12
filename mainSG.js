function setup () 
{
	createScene();
	draw();
}

var renderer, scene, camera, pointLight, spotLight;

function createScene () 
{
	var WIDTH = 640,
	HEIGHT = 360;

	var VIEW_ANGLE = 50,
	  ASPECT = WIDTH / HEIGHT,
	  NEAR = 0.1,
	  FAR = 10000;

	renderer = new THREE.WebGLRenderer();

	renderer.setSize(WIDTH, HEIGHT);

	var c = document.getElementById("gameCanvas");
	c.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE,
		ASPECT,
		NEAR,
		FAR);
	scene = new THREE.Scene();
	scene.add(camera);

	sceneSize = 100;

	camera.position.z = 50;
	camera.position.y = sceneSize + 20;
	camera.rotation.x = -20 * Math.PI / 180;

	makeAMesh();
	makeLight();
	nextLevel(1);
}


var ball;
var player;
var sceneSize;
//var myObjects = [];
function makeAMesh () {

	/// Make the Earth!
	var segments = 30, rings = 30;

	var sphereMaterial = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture('earth.png')});

	ball = new THREE.Mesh(new THREE.SphereGeometry(sceneSize, segments, rings), sphereMaterial);
	//ball = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), sphereMaterial);
	scene.add(ball);
	//myObjects.push (ball);


	///Make the man
	var playerHight = 10, playerWith = 10, playerQuality = 10, playerYPos = sceneSize+playerHight/2;
	var playerMaterial = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture( 'player.png' ), transparent: true});

	player = new THREE.Mesh(
		new THREE.PlaneGeometry(
		playerWith,
		playerHight,
		playerQuality,
		playerQuality),
		playerMaterial);

	scene.add(player);
	player.position.y = playerYPos + 4;
}

function makeLight () {
	pointLight = new THREE.SpotLight(0xF8D898);

	pointLight.position.x = -1000;
	pointLight.position.y = 0;
	pointLight.position.z = 1000;
	pointLight.intensity = 2.9;
	pointLight.distance = 10000;

	scene.add(pointLight);
}
