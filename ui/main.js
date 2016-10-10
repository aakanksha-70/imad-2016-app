/*console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML='New value';
/*function moveLeft (){
    marginRight = marginRight + 1;
    element.style.marginRight = marginRight + 'px';
}
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
};*/
//counter code


var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
  
  //Make a request to the counter endpoint
  
  // Capture the response and store it in a variable
  
  // Render the variable in the correct span
  counter= counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};