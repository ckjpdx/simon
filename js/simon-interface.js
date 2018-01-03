var Simon = require('./../js/simon.js').moduleSimon;


$(document).ready(function(){
  var element = $('.simon-game');
  var myGame = new Simon(element);
  console.log(myGame);
  myGame.colorSeq = ['red','green','yellow','blue','red','green','yellow','blue'];
  console.log(myGame.colorSeq);
  myGame.playColorSeq();
});
