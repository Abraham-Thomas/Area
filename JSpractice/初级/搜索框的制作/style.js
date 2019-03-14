var getDOM = function (id) {
    return document.getElementById(id);
};
var addEvent = function (id,event,fn) {
    var el = getDOM(id) || document;
    if(el.addEventListener){
        el.addEventListener(event,fn,false);
    }else if (el.attachEvent) {
        el.attachEvent('on'+event,fn);
    }
};
var getElementLeft = function (element) {
    var actualLeft += element.offsetLeft;
    var current = element.offsetParent;

    while (current != null){
        actualLeft += element.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
};
var getElementTop = function (element) {
    var actualTop += element.offsetTop;
    var current = element.offsetParent;

    while (current != null){
        actualTop += element.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
};

var ajaxGet = function(url,callback){
    var _xhr = null;
    if(window.XMLHttpRequest){
        xhr = new window.XMLHttpRequest();
    }else if (window.ActiveXObject){
        _xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }
    _xhr.onreadystatechange = function(){
        if(_xhr.readyState === 4 && _xhr.status === 200){
            callback(JSON.parse(_xhr.responseText));
        }
    };
    _xhr.open('get',url,false);
    _xhr.send(null);
};

var delegateEvent = function(target,event,fn){
    addEvent(document,event,function(e){
        if(e.target.nodeName === target.toUpperCase()){
            fn.call(e.target);
        }
    });
}

addEvent('search_input','keyup',function() {
    var searchText = getDOM('search_input').value;
    ajaxGet('http://api.bing.com/qsonhs.aspx?q='+searchText,function(d){
        var d= d.AS.Results[0].Suggests;
        var html = '';
        for(var i=0;i<d.length;i++){
            html += '<li>' + d[i].Txt + '</li>';
        }
    var _dom = getDOM('search-suggest');
    _dom('search-result').innerHTML = html;
    _dom('search-suggest').style.top = getElementTop(getDOM('search-form')) + 38 + 'px';
    _dom('search-suggest').style.left = getElementLeft(getDOM('search-form')) + 'px';
    _dom('search-suggest').style.position = 'absolute';
    _dom('search-suggest').style.display = 'block';
});});

delegateEvent('li','click',function(){
    var keyword = this.innerHTML;
    location.href = 'http://cn.bing.com/search?q='+keyword;
});