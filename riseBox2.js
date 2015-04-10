#pragma strict
 
function Start () {
 
}
 
function Update () {
  if(Input.GetKeyDown("v")) {
    transform.position.y = 5.1f;
    // transform.position.x += 10;
    // transform.position.x = transform.position.x + 10;
    // transform.Translate(10, 0, 0);
  }
}
