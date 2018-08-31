

var osc;
var env;
var att = 0.2;
var rel = 0.5;
var slider1;
var slider2;
var slider3;
var sound, amplitude, cnv;

function  keyPressed(){
    console.log("You Pressed the key:" + key);
    osc = new p5.Oscillator();
    env = new p5.Env();

    if(keyPressed==true){
        console.log("true");
    }

    env.setADSR(valslider1,0.1,0.8,valslider2);
 osc.start();
 env.play();
    var note =0;
    switch(key){
        case"q":
        note =60;
        break;
        case"2":
        note =61;
        break;
        case"w":
        note =62;
        break;
        case"3":
        note =63;
        break;
        case"e":
        note =64;
        break;
        case"r":
        note =65;
        break;
        case"5":
        note =66;
        break;
        case"t":
        note =67;
        break;
        case"6":
        note =68;
        break;
        case"y":
        note =69;
        break;
        case"7":
        note =70;
        break;
        case"u":
        note =71;
        break;
        case"i":
        note =72;
        break;
        case"9":
        note =73;
        break;
        case"o":
        note =74;
        break;
        case"0":
        note =75;
        break;
        case"p":
        note =76;
        break;

        case"z":
        note =72;
        break;
        case"s":
        note =73;
        break;
        case"x":
        note =74;
        break;
        case"d":
        note =75;
        break;
        case"c":
        note =76;
        break;
        case"v":
        note =77;
        break;
        case"g":
        note =78;
        break;
        case"b":
        note =79;
        break;
        case"h":
        note =80;
        break;
        case"n":
        note =81;
        break;
        case"j":
        note =82;
        break;
        case"m":
        note =83;
        break;
        case",":
        note =84;
        break;
        case"l":
        note =85;
        break;
        case".":
        note =86;
        break;
        case"ñ":
        note =87;
        break;
        case"-":
        note =88;
        break;
    }
    console.log("and the note:" + note);
    osc.freq(midiToFreq(note));
    osc.amp(env);
    osc.mult(valslider3);
} //Aquí termina la función keypressed

function setup() {
  slider1 = createSlider(0, 100, 50);
  slider1.position(300, 640);
  slider1.style('width', '150px');

  slider2 = createSlider(0, 100, 50);
    slider2.position(300, 690);
    slider2.style('width', '150px');

    slider3 = createSlider(0, 120, 60);
    slider3.position(300, 740);
    slider3.style('width', '150px');

    cnv = createCanvas(250,250);
  amplitude = new p5.Amplitude();

  cnv.mouseClicked(function() {
    if (sound.isPlaying() ){
      sound.stop();
    } else {
      sound.play();
    }
  });
}

function draw(){

    valslider1 = slider1.value()*0.02;
    valslider2 = slider2.value()*0.02;
    valslider3 = slider3.value()*0.01;
    
    background(0);
  fill(255);
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, 200);
  ellipse(width/2, height/2, size*3, size*3);

}





