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

button.onclick = function () {
  
  //Create a request object
  var request = new XMLHttpRequest();
  
  
  // Capture the response and store it in a variable
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take some action
          if(request.status===200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      // not done yet
  };
  
  //make the request
  request.open('GET', 'http://aakanksha-70.imad.hasura-app.io/counter',true);
  request.send(null);
};