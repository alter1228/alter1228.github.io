
function mdtohtml(){
    var result = null;
    var filePath = './nodes/a.md'
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    document.getElementById("content").innerHTML = marked.parse(result);
}
setInterval(mdtohtml, 1000000);