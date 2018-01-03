class Simon {
  constructor(element) {
    this.element = element;
    this.colorSeq = [];
    this.isActive = true;
    this.gameTurn = 1;
    this.colorArr = ['green','red','yellow','blue'];
  }
  getRandomColor(){
    let colorArrNum = Math.floor(Math.random() * 4);
    return this.colorArr[colorArrNum];
  }
  addRandomColor(){
    this.colorSeq.push(this.getRandomColor());
  }
  playColorSeq(){
    var i = 1;
    var ctx = this;
    this.colorSeq.forEach((color)=>{
      setTimeout(function(){ctx.playNote(color)}, (1000 * (1 * i)) );
      i++;
    });
    // for (var i = 0; i < this.colorSeq.length; i++) {
    //   setTimeout(this.playNote(this.colorSeq[i]), 1000 * (i+1));
    // }
  }
  playNote(color){
    switch (color) {
      case 'green':
        var greenBtn = this.element.find('.green');
        console.log(greenBtn);
        //play music note for 1s

        //light button for 1s
        greenBtn.toggleClass('lit');
        setTimeout(function(){greenBtn.toggleClass('lit')}, 1000);
        break;

      case 'red':
        console.log('red switch statement');
        var redBtn = this.element.find('.red');
        //play music note for 1s

        //light button for 1s
        redBtn.toggleClass('lit');
        setTimeout(function(){redBtn.toggleClass('lit')}, 1000);
        break;

      case 'yellow':
        var yellowBtn = this.element.find('.yellow');
        //play music note for 1s

        //light button for 1s
        yellowBtn.toggleClass('lit');
        setTimeout(function(){yellowBtn.toggleClass('lit')}, 1000);
        break;

      case 'blue':
        var blueBtn = this.element.find('.blue');
        //play music note for 1s

        //light button for 1s
        blueBtn.toggleClass('lit');
        setTimeout(function(){blueBtn.toggleClass('lit')}, 1000);
        break;

      default:
        return;
    }
  }
}

exports.moduleSimon = Simon;
