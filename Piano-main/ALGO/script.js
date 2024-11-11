// Función para reproducir "The Nights"
function playTheNights() {
    var song = new Audio("Piano-main\ALGO\Sonidos\avicii-the-nights-ringtone-53439.mp3");
    song.volume = 0.5;
    song.play();
    setTimeout(() => {
        song.pause();
        song.currentTime = 0;
    }, 30000); // Dura 90 segundos (0:30 min)
}

// Función para reproducir "Waiting for Love"
function playWaitingForLove() {
    var song = new Audio("Piano-main\ALGO\Sonidos\avicii-waiting-for-love-(lyrics)-2-made-with-Voicemod.mp3");
    song.volume = 0.5;
    song.play();
    setTimeout(() => {
        song.pause();
        song.currentTime = 0;
    }, 30000); // Dura 90 segundos (0:30min)
}

// Función para reproducir "Wake Me Up"
function playWakeMeUp() {
    var song = new Audio("Piano-main\ALGO\Sonidos\aviccii-wake-me-up.mp3.mp4");
    song.volume = 0.5;
    song.play();
    setTimeout(() => {
        song.pause();
        song.currentTime = 0;
    }, 30000); // Dura 90 segundos(0:30)
}

// Funciones para los sonidos adicionales (Clap, Bass, Kick, Hi-hat, Synth)

function playClap() {
    var clap = new Audio("Piano-main\ALGO\Sonidos\561115__sorinious_genious__clap-3.wav");
    clap.volume = 0.7;
    clap.play();
}

function playBass() {
    var bass = new Audio("Piano-main\ALGO\Sonidos\bass.m4a");
    bass.volume = 0.7;
    bass.play();
}

function playKick() {
    var kick = new Audio("Piano-main\ALGO\Sonidos\448880__deleted_user_4541234__wowew-kick.wav");
    kick.volume = 0.7;
    kick.play();
}

function playHiHat() {
    var hiHat = new Audio("Piano-main\ALGO\Sonidos\448880__deleted_user_4541234__wowew-kick.wav");
    hiHat.volume = 0.7;
    hiHat.play();
}

function playSynth() {
    var synth = new Audio("Piano-main\ALGO\Sonidos\424051__realdavidfloat__biggish-saw-synth-e-e-g-b-102-bpm-08.wav");
    synth.volume = 0.7;
    synth.play();
}

// Asignación de teclas para canciones y sonidos adicionales
evenTeclat.simple_combo('1', playTheNights);        // Presiona '1' para "The Nights"
evenTeclat.simple_combo('2', playWaitingForLove);    // Presiona '2' para "Waiting for Love"
evenTeclat.simple_combo('3', playWakeMeUp);          // Presiona '3' para "Wake Me Up"

evenTeclat.simple_combo('q', playClap);              // Presiona 'q' para clap
evenTeclat.simple_combo('w', playBass);              // Presiona 'w' para bass
evenTeclat.simple_combo('e', playKick);              // Presiona 'e' para kick
evenTeclat.simple_combo('r', playHiHat);             // Presiona 'r' para hi-hat
evenTeclat.simple_combo('t', playSynth);             // Presiona 't' para synth

// Asignación de teclas para la secuencia de canciones y sonidos
evenTeclat.sequence_combo('a b c d e f', function() {
    // Reproduce las canciones en el orden: "The Nights", "Waiting for Love", "Wake Me Up"
    playTheNights();      // 'a' para "The Nights"
    setTimeout(playWaitingForLove, 30000); // 'b' para "Waiting for Love" después de 30 segundos
    setTimeout(playWakeMeUp, 60000); // 'c' para "Wake Me Up" después de 60 segundos
    
    // Reproduce los efectos de sonido en momentos clave
    setTimeout(playClap, 5 * 1000);   // 'd' para Clap en el segundo 5
    setTimeout(playKick, 8 * 1000);   // 'e' para Kick en el segundo 8
    setTimeout(playSynth, 28 * 1000); // 'f' para Synth en el segundo 28
});