var direccion;
class Bootloader extends Phaser.Scene{
    constructor(direccion){
        super({
            key:"Bootloader" // Nombre interno o clave de referencia
        });
    }
    init()
    {
        console.log("Soy init");
       direccion = true;
        
    }
    preload()
    {
        this.load.path="./assets/"; // Rutas de todas las imaganes
        this.load.image("fondo","universo.jpg"); //  alias y archivo
        this.load.image("rose","rose1.png"); //  alias y archivo
        this.load.image("nombre",'nombre.png');
        
    }

    create()
    {
        this.fondo = this.add.image(0,0,"fondo");
        this.fondo.setOrigin(0,0);
        this.fondo.setScale(1);
        this.rose = this.add.image(900,300,'rose').setScale(.7);
        this.nombre = this.add.image(500,10,'nombre').setScale(.7);
        this.nombre.setOrigin(.5,0);

    }
    update(time,delta)
    {  
    }
}

export default Bootloader;
