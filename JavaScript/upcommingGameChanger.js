function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                return allText;
            }
        }
    }
    rawFile.send(null);
}

function loadedDocumentUpCommingGameChanger(){
    var path = window.location.pathname
    path = path.substring(0,path.lastIndexOf("/")+1);
    path += "upcommingGame/name.txt"

    var text = readTextFile("file://" + path)
    window.alert("Working!")
    window.alert(path)
}