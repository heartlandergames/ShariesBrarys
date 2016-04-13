#pragma strict

function Start () {

}

function Update () {
    SunRotate();
}

function SunRotate()
{
    //transform.rotation.x += Time.deltaTime * .05;
    transform.Rotate(Vector3(1,0,0) * -Time.deltaTime);
}