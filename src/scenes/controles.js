class controles extends Phaser.Scene{
    constructor(){
        super({
            key: 'controles'
        });
    }
    init() {
        console.log('Escena controles');
    }
    preload(){
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
    create() {
        this.fondo = this.add.image(1250,500,"fondo");
        this.fondo.setOrigin(1,1);
        this.fondo.setScale(.7);
        this.nombre = this.add.image(625,10,'nombre').setScale(.7);
        this.nombre.setOrigin(.5,0);

        this.contenedor = this.add.container(30,100);

        this.t1 = this.add.text(0, 0, 'Tecla A', {
            fontSize: 30
        });
        this.sandi = this.add.image(160,10,"sandia");
        this.t1a = this.add.text(180, 0, ' Seleccionas la fruta sandia', {
            fontSize: 30
        });

        this.t2 = this.add.text(0, 50, 'Tecla S', {
            fontSize: 30
        });
        this.cala = this.add.image(160,60,"calabaza");
        this.t2a = this.add.text(180, 50, ' Seleccionas la fruta calabaza', {
            fontSize: 30
        });

        this.t3 = this.add.text(0, 100, 'Tecla D', {
            fontSize: 30
        });
        this.papay = this.add.image(160,110,"papaya");
        this.t3a = this.add.text(180, 100, ' Seleccionas la fruta papaya', {
            fontSize: 30
        });

        this.t4 = this.add.text(0, 150, 'Tecla W', {
            fontSize: 30
        });
        this.plat = this.add.image(160,160,"platano");
        this.t4a = this.add.text(180, 150, ' Disparas la fruta platano', {
            fontSize: 30
        });

        this.t5 = this.add.text(0, 200, 'Tecla SPACE', {
            fontSize: 30
        });
        //this.sandi = this.add.image(120,0,"sandia");
        this.t5a = this.add.text(200, 200, ' Disparas el cañon', {
            fontSize: 30
        });

        this.t6 = this.add.text(0, 250, 'Tecla SHIFT', {
            fontSize: 30
        });
        //this.sandi = this.add.image(120,0,"sandia");
        this.t6a = this.add.text(200, 250, ' Reinicias el juego', {
            fontSize: 30
        });

        this.reg = this.add.text(100, 350, ' REGRESAR', {
            fontSize: 50,
            fontFamily: 'Impact'
        }).setOrigin(.5,.5).setInteractive();

        const eventos = Phaser.Input.Events;///creamos la constante eventos
        const teclado = Phaser.Input.Keyboard;

        this.contenedor.add([
            this.t1,
            this.sandi,
            this.t1a,
            this.t2,
            this.cala,
            this.t2a,
            this.t3,
            this.papay,
            this.t3a,
            this.t4,
            this.plat,
            this.t4a,
            this.t5,
            this.t5a,
            this.t6,
            this.t6a,
            this.reg,
        ]);

        this.contenedor2 = this.add.container(760,100);

        this.fd = this.add.text(0, 0, '| Tecla Derecha - Avanzar', {
            fontSize:25
        });

        this.fi = this.add.text(0, 50, '| Tecla Izquierda - Retroceder', {
            fontSize: 25
        });

        this.fa = this.add.text(0, 100, '| Tecla Abajo - Descender', {
            fontSize: 25
        });

        this.far = this.add.text(0, 150, '| Tecla Arriba - Ascender \n\n|\n\n|', {
            fontSize: 25
        });

        this.contenedor2.add([
           this.fd,
           this.fi,
           this.fa,
           this.far,
        ]);


        this.reg.on(eventos.POINTER_MOVE, (evento) => {
            this.reg.setScale(1.2);
         });
        this.reg.on(eventos.POINTER_OUT, (evento) => {
             this.reg.setScale(1);
             this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>
             {
                this.registry.events.emit('control');
                 this.contenedor.setVisible(false);
                 this.contenedor2.setVisible(false);
                 this.fondo.setVisible(false);
                 this.nombre.setVisible(false);
                 //this.scene.launch('inicio');
                // this.scene.stop();
                 //this.scene.destroy();
                 console.log(this.scene.manager.scenes.map( x => x.scene.key )); 
             });
        });

        
    }
    update(time, delta) {
        
    }
}

export default controles; 