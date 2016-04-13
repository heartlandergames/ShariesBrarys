#pragma strict
import UnityEngine.UI;

var ret : Text;
var cam : Transform;
var hands : Transform;
var delBooks : Transform;

function Start () {

}

function Update () {
    AimQuery();

    if(Input.GetButtonUp("Fire1"))
    {
        if(AimQuery().tag=="BOOK")
        {
            var book = AimQuery();
            book.transform.position = hands.position;
            book.GetComponent(Rigidbody).useGravity = false;
            book.GetComponent(Rigidbody).isKinematic = true;
            book.transform.SetParent(hands);
        }
    }

    if(Input.GetButton("F"))
    {   
        Debug.Log("Waka");
        for(var t : Transform in hands.transform)
        {
            Debug.Log("waka");
            t.GetComponent(Rigidbody).isKinematic = false;
            t.GetComponent(Rigidbody).useGravity= true;
            t.SetParent(delBooks);

        }
}
}

function AimQuery() : GameObject
    {
        var hit : RaycastHit;
        if(Physics.Raycast(cam.position,cam.forward, hit, 10))
        {
            if(hit.collider.gameObject.tag == "BOOK")
            {
                ret.text = hit.collider.gameObject.name;
                return hit.collider.gameObject;
            }
            else
            {
                ret.text = " ";
            }
        }
        else
        {
            ret.text = " ";
        }
    }