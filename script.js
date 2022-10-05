var hrs = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var timer = false;

function start(){
   timer = true;
       stopWatch();
   
}

function stop(){
    timer = false;
    
}

function reset(){
    timer = false;
    hrs = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    document.getElementById('hrs').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00' ;
    document.getElementById('milisec').innerHTML = '00' ;
}

function stopWatch(){
  if(timer==true){
    milisec = milisec + 1;

    if(milisec==100){
        sec = sec + 1;
          milisec = 0;
    }

    if(sec==60){
        min = min + 1;
          sec = 0;
    }

    if(min==60){
        hrs = hrs + 1;
        min = 0;
        sec = 0;
    }

    var hrsString = hrs;
    var minString = min;
    var secString = sec;
    var milisecString = milisec;

    if(hrs<10){
        hrsString = '0' +   hrsString;
    }

    if(min<10){
        minString = '0' + minString;
    }

    if(sec<10){
        secString = '0' +  secString;
    }

    if(milisec<10){
        milisecString = '0' + milisecString;
    }
    document.getElementById('hrs').innerHTML = hrsString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('milisec').innerHTML = milisecString;

    setTimeout( 'stopWatch()' , 10 )
  }

}