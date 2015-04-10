//you will need a ball prefab in your prefabs folder 


var ball : GameObject;
var readynow : boolean = true;

function Update () {

	if(readynow){
		MakeBall();
		
	}
	
}

function MakeBall(){
	readynow=false;
	Instantiate(ball, transform.position, transform.rotation);
	yield WaitForSeconds(1.5);
	readynow=true;
}