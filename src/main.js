import Bootloader from "./scenes/Bootloader.js";

const config = {
    title: "Curso Phaser",  //Nombre del juego (opcional)
    url: "http://google.es", //Dirección de la página del juego (opcional)
    version: "0.0.1",   //Versión alfanumérica (opcional)
    type: Phaser.AUTO,  //Tipo de renderizado (WEBGL, CANVAS, AUTO)// AUTO: busca primero WEBGL y si no está disponible//eligirá CANVAS
    width: 1250, //Ancho de pantalla del juego
    height: 500,    //Alto de pantalla del juego
    physics: {
        default: 'arcade',
        arcade: {
            gravity: 0,
            debug: false
        }
    },
    parent: "contenedor",   //Nombre del id del elemento <div> enel index.html// se refiere a dónde se pondrá el canvas o lienzo
    pixelArt: false, //Diseño con pixeles definidos (no borrosos)
    backgroundColor: "#34495e", //Color de fondo del canvas ()
    scene: [Bootloader],  // Aqui ira la lista  de scenas del juego
    banner:{
        hidePhaser: true,//ocultar leyendaPhasery versión
        text: "#fff00f",//cambiar color de texto
        background: [//cambiar color de fondo:
            "#16a085",//cambiar color de barras 1
            "#2ecc71",//cambiar color de barras 2
            "#e74c3c", //cambiar color de barras 3
            "#000000"]//cambiar color de fondo del texto},
        },
};
const game = new Phaser.Game(config);
