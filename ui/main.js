console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML='New value';
/*function moveLeft (){
    marginRight = marginRight + 1;
    element.style.marginRight = marginRight + 'px';
}*/
element.onclick = function () {
    var inter = setInterval(moveRight, 50);
};

var img = document.getElementById('madi');
var marginLeft=0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};