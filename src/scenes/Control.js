class Control extends Phaser.Scene{
    constructor(direccion){
        super({
            key:"Control" // Nombre interno o clave de referencia
        });
    }
    init()
    {
    }
    preload()
    {
        this.load.path="./assets/"; // Rutas de todas las imaganes
        this.load.image("fondo","universo.jpg"); //  alias y archivo
        
        this.load.image("rose","rose1.png"); //  alias y archivo
        this.load.image("nombre",'nombre.png');
        this.load.atlas('canion', 'canion_PP3/canion.png','canion_PP3/canion_atlas.json');
        this.load.animation('canioon', 'canion_PP3/canion_anim.json');
        this.load.atlas('nav', 'nav_PP3/nav.png','nav_PP3/nav_atlas.json');
        this.load.animation('vueloo', 'nav_PP3/nav_anim.json');
        this.load.image('platano','platano.png');
        this.load.image('municion','MunicionNE1.png');
        //this.load.image('sandia','sandia.png');
        //this.load.image('CaLaBaZa', 'Calabaza.png');
        this.load.image('papayades', 'Papayades.png');
        this.load.image('selector', 'selector.png');
        this.load.atlas('enemigo2', 'enemigo2_PP3/enemigo2.png','enemigo2_PP3/enemigo2_atlas.json');
        this.load.animation('enemigoo1', 'enemigo2_PP3/enemigo2_anim.json');
        this.load.image('vida','Barra_Vida.png');
        this.load.image('+vida','+vida.png');
        this.load.image('corazon','corazonvida.png');
        this.load.atlas('sandia', 'sandia_PP3/sandia.png','sandia_PP3/sandia_atlas.json');
        this.load.animation('sandiaa', 'sandia_PP3/sandia_anim.json');
        this.load.atlas('calabaza', 'calabaza_PP3/calabaza.png','calabaza_PP3/calabaza_atlas.json');
        this.load.animation('calabazaa', 'calabaza_PP3/calabaza_anim.json');
        this.load.atlas('papaya', 'papaya_PP3/papaya.png','papaya_PP3/papaya_atlas.json');
        this.load.animation('papayaa', 'papaya_PP3/papaya_anim.json');
        this.load.atlas('asteroide', 'asteroide_PP3/asteroide.png','asteroide_PP3/asteroide_atlas.json');
        this.load.animation('asteroidee', 'asteroide_PP3/asteroide_anim.json');
        this.load.atlas('naveelite', 'naveelite_PP3/naveelite.png', 'naveelite_PP3/naveelite_atlas.json');
        this.load.animation('naveelite', 'naveelite_PP3/naveelite_anim.json');
        
    }
    create()
    {
        this.vidanave = 90;
        this.fondo = this.add.image(0,0,"fondo");
        this.fondo.setOrigin(0,0);
        this.fondo.setScale(.7);
        this.fondo.setDepth(0);
        this.rose = this.add.image(1250,400,'rose').setScale(.7);
        this.nombre = this.add.image(625,10,'nombre').setScale(.7);
        this.nombre.setOrigin(.5,0);
        this.nombre.setDepth(6);
        this.vida = this.add.image(10,10,'vida').setOrigin(0).setScale(.5);
        this.barravida = this.add.graphics({
            fillStyle:{color: 0xDA161C}
        })
        this.vida_nave = new Phaser.Geom.Rectangle(15,15,15,this.vidanave);
        this.barravida.fillRectShape(this.vida_nave);
        this.barravida.setDepth(7);
        this.corazon = this.add.image(6,120,'corazon').setOrigin(0).setScale(1.7);
        this.oleada = this.add.text(500, 225, 'Oleada 1', {
            font: "50px Arial"
        });

        this.score = this.add.text(100, 20, 'Score: 000000000', {
            fontSize: 20
        });

        
        this.contenedor2 = this.add.container(10,420);

        this.sandiaselec = this.add.image(0, 0, 'sandia').setOrigin(0).setFlipX(1).setScale(1.2);
        this.calabazaselec = this.add.image(60, 0, 'calabaza').setOrigin(0).setScale(1.2);
        this.papayaselec = this.add.image(120, 0, 'papaya').setOrigin(0).setScale(1.2);
        this.selector = this.add.image(35, 65, 'selector').setScale(1.6);
        this.cont1 = this.add.text(55, 0, '3', {
            fontSize: 20
        });
        this.cont2 = this.add.text(110, 0, '3', {
            fontSize: 20
        });
        this.cont3 = this.add.text(165, 0, '3', {
            fontSize: 20
        });

        this.contenedor2.add([
            this.sandiaselec,
            this.calabazaselec,
            this.papayaselec,
            this.selector,
            this.cont1,
            this.cont2,
            this.cont3
        ]);
        this.sceneB = this.scene.launch('Bootloader',{
            cont1:this.cont1,
            cont2:this.cont2,
            cont3:this.cont3,
            sandi:this.sandiaselec,
            cala:this.calabazaselec,
            papa: this.papayaselec,
            sele: this.selector,
            barra: this.barravida,
            vida_na:this.vida_nave,
            vidanave: this.vidanave,
            text:  this.oleada,
        });
        
        
        

    }
    update(time,delta)
    {
        this.vidanave = this.scene.manager.keys.Bootloader.vidanave;
        //console.log(this.vidanave);
        
       if(this.vidanave <= 0)
        {
            this.scene.stop('Bootloader');
            this.scene.remove('Booloader');
            this.vida_nave.height = 90;
            this.barravida.clear();
            this.barravida.fillRectShape(this.vida_nave)

        }   
    }
    
}
export default Control;
