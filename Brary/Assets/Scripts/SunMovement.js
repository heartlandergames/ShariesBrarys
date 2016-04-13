#pragma strict

function Start () {

}

function Update () {
    SunRotate();
}

function SunRotate()
{
    transform.rotation.x += Time.deltaTime * .05;
}