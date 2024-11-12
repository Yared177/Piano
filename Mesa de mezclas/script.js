//SONIDOS
function sonido1(){
    var snd= new Audio("Sonidos/Sonidos/babyscratch-87371.mp3")
    snd.play();
}

function sonido2(){
    var snd= new Audio("Sonidos/Sonidos/scratch_transform_010-46202.mp3")
    snd.play();
}

function sonido3(){
    var snd= new Audio("Sonidos/Sonidos/clap-amp-snap-244422.mp3")
    snd.play();
}

function sonido4(){
    var snd= new Audio("Sonidos/Sonidos/duff-loops-175-bpm-188353.mp3")
    snd.play();
}

function sonido5(){
    var snd= new Audio("Sonidos/Sonidos/sanfte-hardstyle-kick-149796.mp3")
    snd.play();
}

function sonido6(){
    var snd= new Audio("Sonidos/Sonidos/hi-hat-8-231040.mp3")
    snd.play();
}

//CANCIONES
function Cancion1(){
    var snd= new Audio("Sonidos/aviccii-wake-me-up.mp3.mp4")
    snd.play();
}

function Cancion2(){
    var snd= new Audio("Sonidos/avicii-the-nights-ringtone-53439.mp3")
    snd.play();
}

function Cancion3(){
    var snd= new Audio("Sonidos/avicii-waiting-for-love-(lyrics)-2-made-with-Voicemod.mp3")
    snd.play();
}

//VARIABLE
let configTeclat = {prevent_repeat : true};
let evenTeclat = new window.keypress.Listener(this,configTeclat);

//SIMPLE COMBO
evenTeclat.simple_combo('1',sonido1);
evenTeclat.simple_combo('2',sonido2);
evenTeclat.simple_combo('3',sonido3);
evenTeclat.simple_combo('4',sonido4);
evenTeclat.simple_combo('5',sonido5);
evenTeclat.simple_combo('6',sonido6);

//SEQUENCE COMBO
evenTeclat.sequence_combo('z x',Cancion1);
evenTeclat.sequence_combo('a s d',Cancion2);
evenTeclat.sequence_combo('q w e r',Cancion3);