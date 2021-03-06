function setup () 
{
	createScene();
	draw();
}

var renderer, scene, camera, pointLight, spotLight;

function createScene () 
{
	var WIDTH = 800,
	HEIGHT = 450;

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
	camera.position.y = 30;
	camera.rotation.x = -20 * Math.PI / 180;

	makeAMesh();
	makeLight();
	nextLevel(1);
}

var player;
var sceneSize;
var boudingBoxes = [];
var trees = [];
function makeAMesh () {

	player = new Player('player.png', 10, 10, 10, 30, 0, -20 * Math.PI / 180);
	var ground = new StaticCircle('earth.png', sceneSize, sceneSize, 0, 0, -90 * Math.PI / 180);

	var tempTreePosX = new THREE.Vector3(0, 0, 0); 
	var tempTreePosZ = new THREE.Vector3(0, 0, 0);
	var treeAmount = 50;
	for (var i=0; i < treeAmount; i++) 
	{
		tempTreePosX = -sceneSize + THREE.Math.random16() * sceneSize*2;
		tempTreePosZ = -sceneSize + THREE.Math.random16() * sceneSize*2;

		if (i>treeAmount/7)
		{
			trees[i] = new Trees('tree.png', 10, 10, 1, tempTreePosZ, tempTreePosX, -20 * Math.PI / 180);
		}
		else
		{
			trees[i] = new Trees('flower.png', 10, 10, 1, tempTreePosZ, tempTreePosX, -20 * Math.PI / 180);
		}
	};
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
