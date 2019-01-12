function getByClassName(obj, cls){
    var elements = obj.getElementsByTagName("*");
    var result = [];
    for (var i = 0;i<elements.length;i++){
        if (elements[i].className == cls){
            result.push(elements[i]);
        }
    }
    return result;
}

window.onload = function () {
    window.onscroll = function () {
        var top = document.documentElement ? document.documentElement.scrollTop : document.body.scrollTop;
        var menu = document.getElementById("menu").getElementsByTagName("a");
        var items = getByClassName(document.getElementById("content"),"item");
    }
}