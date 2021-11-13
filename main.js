function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_monster_kill = loadSound("kick.wav");
	mario_lose_life = loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotposes);
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("Model is Loaded");
}

function gotposes(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

noseX = 0;
noseY = 0;