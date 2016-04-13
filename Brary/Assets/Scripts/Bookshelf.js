#pragma strict
import System.Collections.Generic;

var bookPrefab : GameObject;

var cols : List.<GameObject> = new List.<GameObject>();

var shelves : List.<GameObject> = new List.<GameObject>();

var books  : List.<GameObject> = new List.<GameObject>();

function Start () {

    for(var child : Transform in transform)
    {
        if(child.gameObject.name == "Column")
    {
            cols.Add(child.gameObject);
        }
    }
    
    for(var col : GameObject in cols)
    {
        for(var shelf : Transform in col.transform)
        {
            if(shelf.gameObject.name == "Shelf")
            {
                shelves.Add(shelf.gameObject);
            }
        }
    }
    for(var shel : GameObject in shelves)
    {
        for(var book : Transform in shel.transform)
        {
            if(book.gameObject.tag == "BOOK")
            {
                books.Add(book.gameObject);
            }
        }
    }
}

function Update () {

    }

function FillShelves(list : String[])
{
    var number : int = list.length;
    var count : int = 0;
    
    for(var b : GameObject in books)
    {
        if(count <= number)
        {
            b.GetComponent(BoxCollider).enabled = false;
            var book : GameObject = Instantiate(bookPrefab, b.transform.position, b.transform.rotation);
            book.name = list[count];
            Destroy(b);
            count++;
            Debug.Log(book.name);
        }
        if(count > number)
        {
            Destroy(b);
        }
    }
}