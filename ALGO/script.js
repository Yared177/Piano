
function sonidoA(){
    var snd= new Audio("Sonidos/Cuervos.mp3")
    snd.play();
}

function sonidoS(){
    var snd= new Audio("Sonidos/Hechizo.mp3")
    snd.play();
}

function sonidoD(){
    var snd= new Audio("Sonidos/SonidoGraveCorto.mp3")
    snd.play();
}

function sonidoF(){
    var snd= new Audio("Sonidos/Viniloparando.mp3")
    snd.play();
}

function sonidoG(){
    var snd= new Audio("Sonidos/SonidoGraveLargo.mp3")
    snd.play();
}
function sonidoQ(){
    var snd= new Audio()
    snd.play();
}
function sonidoW(){
    var snd= new Audio()
    snd.play();
}
function sonidoE(){
    var snd= new Audio()
    snd.play();
}
function sonidoR(){
    var snd= new Audio()
    snd.play();
}
function sonidoT(){
    var snd= new Audio()
    snd.play();
}
function sonidoZ(){
    var snd= new Audio()
    snd.play();
}
function sonidoX(){
    var snd= new Audio()
    snd.play();
}
function Cancion1(){
    var snd= new Audio()
    snd.play();
}
function Cancion2(){
    var snd= new Audio()
    snd.play();
}
function Cancion3(){
    var snd= new Audio()
    snd.play();
}




let configTeclat = {prevent_repeat : true};
let evenTeclat = new window.keypress.Listener(this,configTeclat);

evenTeclat.simple_combo('a',sonidoA);
evenTeclat.simple_combo('b',sonidoS);
evenTeclat.simple_combo('g',sonidoG);
evenTeclat.simple_combo('d',sonidoD);
evenTeclat.simple_combo('f',sonidoF);
evenTeclat.simple_combo('q',sonidoQ);
evenTeclat.simple_combo('w',sonidoW);
evenTeclat.simple_combo('e',sonidoE);
evenTeclat.simple_combo('r',sonidoR);
evenTeclat.simple_combo('t',sonidoR);
evenTeclat.simple_combo('z',sonidoZ);
evenTeclat.simple_combo('x',sonidoX);
evenTeclat.sequence_combo('up down a b',Cancion1);
evenTeclat.sequence_combo('up down a r f',Cancion2);
evenTeclat.sequence_combo('up down a q d e',Cancion3);