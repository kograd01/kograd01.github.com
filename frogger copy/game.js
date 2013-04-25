var objs = [
	{"name":"ycar1",
	"posx":150,
	"posy":460,
	"speed":2,
	"width":30,
	"height":24,
	"startx":80,
	"starty":263,
	"dir":"left"},
	{"name":"ycar2",
	"posx":300,
	"posy":460,
	"speed":2,
	"width":30,
	"height":24,
	"startx":80,
	"starty":263,
	"dir":"left"},
	{"name":"ycar3",
	"posx":0,
	"posy":460,
	"speed":2,
	"width":30,
	"height":24,
	"startx":80,
	"starty":263,
	"dir":"left"},
	{"name":"wcar1",
	"posx":61,
	"posy":425,
	"speed":2.5,
	"width":31,
	"height":27,
	"startx":46,
	"starty":261,
	"dir":"right"},
	{"name":"wcar2",
	"posx":300,
	"posy":425,
	"speed":2.5,
	"width":31,
	"height":27,
	"startx":46,
	"starty":261,
	"dir":"right"},
	{"name":"pcar1",
	"posx":140,
	"posy":390,
	"speed":2,
	"width":30,
	"height":24,
	"startx":12,
	"starty":263,
	"dir":"left"},
	{"name":"pcar2",
	"posx":40,
	"posy":390,
	"speed":2,
	"width":30,
	"height":24,
	"startx":12,
	"starty":263,
	"dir":"left"},
	{"name":"pcar3",
	"posx":240,
	"posy":390,
	"speed":2,
	"width":30,
	"height":24,
	"startx":12,
	"starty":263,
	"dir":"left"},
	{"name":"rcar1",
	"posx":240,
	"posy":355,
	"speed":3,
	"width":30,
	"height":25,
	"startx":12,
	"starty":300,
	"dir":"right"},
	{"name":"rcar2",
	"posx":49,
	"posy":355,
	"speed":3,
	"width":29,
	"height":24,
	"startx":12,
	"starty":298,
	"dir":"right"},
	{"name":"truck1",
	"posx":300,
	"posy":320,
	"speed":2,
	"width":50,
	"height":20,
	"startx":104,
	"starty":301,
	"dir":"left"},
	{"name":"truck2",
	"posx":150,
	"posy":320,
	"speed":2,
	"width":50,
	"height":20,
	"startx":104,
	"starty":301,
	"dir":"left"},
	{"name":"log1a",
	"posx":100,
	"posy":180,
	"speed":3,
	"width":180,
	"height":23,
	"startx":10,
	"starty":164,
	"dir":"right"},
	{"name":"log2a",
	"posx":50,
	"posy":110,
	"speed":2,
	"width":120,
	"height":23,
	"startx":10,
	"starty":195,
	"dir":"right"},
	{"name":"log1b",
	"posx":400,
	"posy":180,
	"speed":3,
	"width":180,
	"height":23,
	"startx":10,
	"starty":165,
	"dir":"right"},
	{"name":"log2b",
	"posx": 200,
	"posy":110,
	"speed":2,
	"width":120,
	"height":23,
	"startx":10,
	"starty":195,
	"dir":"right"},
	{"name":"log3a",
	"posx":1,
	"posy":215,
	"speed":2,
	"width":85,
	"height":23,
	"startx":10,
	"starty":228,
	"dir":"right"},
	{"name":"log3b",
	"posx":151,
	"posy":215,
	"speed":2,
	"width":85,
	"height":23,
	"startx":10,
	"starty":228,
	"dir":"right"},
	{"name":"log1c",
	"posx":100,
	"posy":250,
	"speed":2,
	"width":180,
	"height":23,
	"startx":10,
	"starty":165,
	"dir":"left"},
	{"name":"log2c",
	"posx":300,
	"posy":145,
	"speed":2,
	"width":120,
	"height":23,
	"startx":10,
	"starty":195,
	"dir":"left"},
	{"name":"log1d",
	"posx": 400,
	"posy":250,
	"speed":2,
	"width":180,
	"height":23,
	"startx":10,
	"starty":165,
	"dir":"left"},
	{"name":"log2d",
	"posx":20,
	"posy":145,
	"speed":2,
	"width":120,
	"height":23,
	"startx":10,
	"starty":195,
	"dir":"left"}
]

	var score;
	var highscore;
	var level;
	var lives;
	var frogx;
	var frogy;
	var onlog;
	var home;
	var isDead;
	var deadFor;
	var deathx;
	var deathy;
	var flyTime;
	var flyx;
	var flyy;
	var isFly;

	
function start_game(){
	canvas = document.getElementById('game');
	if(canvas.getContext){
	ctx = canvas.getContext('2d');
	
	initialize();
	delay = 30;
	img = new Image();
	img.src = 'assets/frogger_sprites.png';
	frogPic = img;
	img.onload = function(){
		draw_background();
		draw_objects();	
		intervalID = window.setInterval(run, delay);
	 }
	}
	else{
		alert('Sorry, canvas is not supported on your browser')
	}

}
function draw_background(){
		//water
		ctx.fillStyle = '191970';
		ctx.fillRect (0, 1, 399, 283);
		//road
		ctx.fillStyle = '000000';
		ctx.fillRect (0, 283, 399, 282); 
		//frogger heading
		ctx.drawImage(img, 0, 0, 398, 108, 1, 1, 398, 108);
		//purple
		ctx.drawImage(img, 0, 113, 399, 42, 1, 273, 399, 42);
		ctx.drawImage(img, 0, 113, 399, 42, 1, 485, 399, 42);
}

function initialize(){
	score = 0;
	highscore = 0;
	level = 1;
	lives = 3;
	home = 0;
	frogx = 200;
	frogy = 495;
	flyTime=0;
	flyx=200;
	flyy=300;
	deadFor = 0;
	onLog = false;
	isFly = false;
	isDead = false;	
}

function draw_objects(){

		//lives
		if(lives >0){
		ctx.drawImage(img, 12, 332, 26, 28, 1, 525, 26, 28);
		}
		if(lives >1){
		ctx.drawImage(img, 12, 332, 26, 28, 27, 525, 26, 28);
		}
		if(lives >2){
		ctx.drawImage(img, 12, 332, 26, 28, 53, 525, 26, 28);
		}
		//score
		ctx.fillStyle = "green";
		ctx.font = "bold 13pt Arial";
		currentScore = "Score: " +score;
		ctx.fillText(currentScore, 1, 562);
		//level
		currentLevel = "Level " + level;
		ctx.fillText(currentLevel, 80, 540);
		//highscore
		currentHighscore = "Highscore: " + highscore;
		ctx.fillText(currentHighscore, 100, 560);
		
		for(var j=0; j<objs.length; j++){
			ctx.drawImage(img, objs[j].startx, objs[j].starty, objs[j].width,
			 objs[j].height, objs[j].posx, objs[j].posy, objs[j].width, objs[j].height);
		}
		//fly
		if(flyTime<100){		
        	flyTime++;
        }
        if((flyTime == 100)||(isFly==true)){
        	flyx = Math.floor(Math.random() * 399);
        	flyy = Math.floor(Math.random() * 170)+100;
        	flyTime = 0;
        	isFly = false;
        }
		ctx.drawImage(img, 138, 230, 20, 20, flyx, flyy, 20, 20);
		
		//frog
		dead_img = new Image();
		dead_img.src = 'assets/dead_frog.png';
		
		if (isDead == true){
			if(deadFor < 15){
				ctx.drawImage(dead_img, 0, 0, 30, 30, deathx, deathy, 40, 40);
				frogx = 200;
				frogy = 495;
				deadFor++;
			}
			else{
				deadFor = 0;
				isDead = false;
			}
		}
		else{
			ctx.drawImage(img, 12, 365, 26, 28, frogx, frogy, 30, 30);
		}
		
		
}

function run(){
		draw_background();
		animate();
		document.addEventListener("keyup", moveFrog);
		draw_objects();
		collision();
}

function moveFrog(evt){
	if(evt.keyCode == 38){
		frogy -= 35;
		score += 10;
	}
	else if(evt.keyCode == 40){
		frogy += 35;
	}
	else if(evt.keyCode == 39){
		frogx += 35;
	}
	else if(evt.keyCode == 37){
		frogx -= 35;
	}
	onlog = false;
}

function animate(){
	for(var i=0; i<objs.length; i++){
		if(objs[i].dir == "left"){
			if(objs[i].posx+objs[i].width > 0){
				objs[i].posx -= objs[i].speed;
			}
			else{
				objs[i].posx = 400;
			}
		}
		if(objs[i].dir == "right"){
			if(objs[i].posx-objs[i].width < 400){
				objs[i].posx += objs[i].speed;
			}
			else{
				objs[i].posx = 0-objs[i].width;
			}
		}
	}	
}

function collision(){
	if(frogx < -20 || frogx+30 > 420){
			deathx = frogx;
			deathy = frogy;
			frogx = 200;
			frogy = 495;
			lives --;
			isDead = true;
	}
	if(frogy == 75){
		if((frogx>10 && frogx<35)||(frogx>85 && frogx<115)||(frogx>170 && frogx<195)
		||(frogx>255 && frogx<285)||(frogx>340 && frogx<365)){
		frogx = 200;
		frogy = 495;
		score += 50;
		home++;
		}
	}
	if(home ==5){
		level_up();
		home =0;
	}
	var k=0;
	while(objs[k].name != "log1a"){
		if(frogy == objs[k].posy){
			if((frogx>objs[k].posx && frogx<objs[k].posx+objs[k].width)
			||(frogx+30>objs[k].posx && frogx+30<objs[k].posx+objs[k].width)){	
				deathx = frogx;
				deathy = frogy;
				frogx = 200;
				frogy = 495;
				lives --;
				isDead = true;
			}
		}
		k++;
	}
	while(k != objs.length){
		if(frogy == objs[k].posy){
			if((frogx>objs[k].posx && frogx<objs[k].posx+objs[k].width)
			||(frogx+30>objs[k].posx && frogx+30<objs[k].posx+objs[k].width)){
				if(objs[k].dir == "left"){
					frogx-= objs[k].speed;
				}
				if(objs[k].dir == "right"){
					frogx+= objs[k].speed;
				}
				onlog = true;
			}
		}
		k++
	}
	if(onlog ==false && frogy < 285){
		deathx = frogx;
		deathy = frogy;
		frogx = 200;
		frogy = 495;
		lives --;
		isDead = true;
	}
	if((frogy>flyy&&frogy<flyy+20)||(frogy+30>flyy && frogy+30<flyy+20)){
		if((frogx>flyx&&frogx<flyx+20)||(frogx+30>flyx && frogx+30<flyx+20)){
			score += 200;
			flyTime = 0;
			isFly = true;
		}
	}
	if(lives == 0){
		game_over();
	}
}
function level_up(){
	level++;
	score+= 1000;
	for(var l = 0; l<objs.length; l++){
		objs[l].speed++;
	}
}
function game_over(){
	window.clearInterval(intervalID);
	ctx.drawImage(dead_img, 0, 0, 30, 30, 50, 50, 300, 300);
}

