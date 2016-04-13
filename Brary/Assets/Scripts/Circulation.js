#pragma strict
import System.IO;
import System.Collections.Generic;



var populated : boolean;

var stackList : List.<GameObject> = new List.<GameObject>();

var stackCount : int;

var book : GameObject;

var bookshelf : GameObject;


function Start () {
    
}

function Update () {
    if(Input.GetButtonUp("Fire2") && populated != true)
    {
        Cursor.visible = true;
        Cursor.lockState = CursorLockMode.None;
        GetBooks();
    }
    if(Input.GetButtonUp("1") && !populated)
    {
        Cursor.visible = true;
        Cursor.lockState = CursorLockMode.None;
        GetBooks1();
    }
}

function GetBooks()
{
    var folder: String = EditorUtility.OpenFolderPanel("Books Location", "", "");

    var files : String[] = Directory.GetFiles(folder);

    var noFiles : int = files.length;

    var noShelves : int = noFiles / 200;

    var remShelves : int = noFiles % 200;
    
    
        for (var i = 0; i<= noShelves; i++)
        {
           
            var shelf : GameObject = Instantiate(bookshelf, stackList[i].transform.position, stackList[i].transform.rotation);
            shelf.GetComponent(Bookshelf).FillShelves(files);
        }
    

    Debug.Log(noShelves);
    Debug.Log(remShelves);

    for (var file in files)
    {
        if(file.EndsWith(".txt"))
        {
           // Debug.Log(file);
        }
    }

    populated = true;
}

function GetBooks1()
{
    var folder: String = EditorUtility.OpenFolderPanel("Books Location", "", "");
    var info = new DirectoryInfo(folder);
    var fileInfo = info.GetFiles();
    for(file in fileInfo)
    {
        if(file.Extension == ".txt")
            var newBook : GameObject = Instantiate(book, transform.position, transform.rotation);
            var stack : GameObject = stackList[Random.Range(0, stackList.Count -1)];
            newBook.transform.position = stack.transform.position;
            //newBook.transform.position.y += stack.GetComponent(BookStack).height * book.GetComponent(BoxCollider).bounds.size.y     ;
            stack.GetComponent(BookStack).height++;
            newBook.transform.rotation.y = Random.Range(0,360);
            newBook.name = file.Name;         
            newBook.AddComponent(Book);
            newBook.GetComponent(Book).file = file;
            //yield WaitForSeconds(.25);
    }

    populated = true;
}
