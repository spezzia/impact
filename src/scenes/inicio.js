class inicio extends Phaser.Scene{
    constructor(){
        super({
            key: 'inicio'
        });
    }
    init() {
        console.log('Escena Inicio');
    }
    preload(){
        this.load.path="./assets/"; // Rutas de todas las imaganes
        this.load.image('ini','impact.jpg');
         //this.load.audio('intro', 'sonidos/intro.mp3');
         this.load.audio('menu', 'sonidos/menu.mp3');
        this.load.image('b1','boton1.png');
        this.load.image('b2','boton2.png');
        //this.load.image('enter','enter0.png');
    }
    create() {
        this.intro = this.sound.add('intro');
        this.menu = this.sound.add('menu');
       // this.intro.play({loop:1});
        this.menu.play({loop:1});
        this.ini = this.add.image(620, 270, 'ini');
        this.ini.setScale(1.25)
        //this.ini.flipX = true;
        //this.ent = this.add.image(600,250, 'enter').setScale(.7);
        this.b1 = this.add.text(400, 400, ' Iniciar', {
            fontSize: 50,
            fontFamily: 'Impact'
        }).setOrigin(.5,.5).setInteractive();

        this.b2 = this.add.text(900, 400, ' Controles', {
            fontSize: 50,
            fontFamily: 'Impact'
        }).setOrigin(.5,.5).setInteractive();

        const eventos = Phaser.Input.Events;///creamos la constante eventos
        const teclado = Phaser.Input.Keyboard;

        this.b1.on(eventos.POINTER_MOVE, (evento) => {
            this.b1.setScale(1.2);
         });
        this.b1.on(eventos.POINTER_OUT, (evento) => {
             this.b1.setScale(1);
             this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>
             {
                 this.b1.setVisible(false);
                 this.intro.stop();
                 this.menu.stop();
                 this.b2.setVisible(false);
                 this.scene.sendToBack('controles')
                 this.scene.launch('Control');
                 console.log(this.scene.manager.scenes.map( x => x.scene.key )); 
             });
        });

        this.registry.events.on('controles', ()=>
        {
            this.scene.sendToBack('controles')
            //this.scene.remove('controles');
        })

        this.b2.on(eventos.POINTER_MOVE, (evento) => {
            this.b2.setScale(1.2);
         });
        this.b2.on(eventos.POINTER_OUT, (evento) => {
             this.b2.setScale(1);
             this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>
             {
                 //this.b1.setVisible(false);
                 //this.b2.setVisible(false);
                 this.scene.launch('controles');
                 console.log(this.scene.manager.scenes.map( x => x.scene.key )); 
             });
        });
    

        // this.boton1 = this.add.image(200,300,'b1').setScale(.1).setInteractive();
        // this.boton2 = this.add.image(800,300,'b2').setScale(.1).setInteractive();

        // const eventos = Phaser.Input.Events;///creamos la constante eventos
        // const teclado = Phaser.Input.Keyboard;

        // this.boton1.on(eventos.POINTER_MOVE, (evento) => {
        //     this.boton1.setScale(.05);             
        // });
        // this.boton1.on(eventos.POINTER_OUT, (evento) => {
        //     this.boton1.setScale(.1);
        //     this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>
        //     {
        //         this.boton1.setVisible(false);
        //         this.boton2.setVisible(false);
        //         this.scene.launch('Control');
        //         console.log(this.scene.manager.scenes.map( x => x.scene.key )); 
        //     });
        // });

        // this.boton2.on(eventos.POINTER_MOVE, (evento) => {
        //     this.boton2.setScale(.05);
        // });
        // this.boton2.on(eventos.POINTER_OUT, (evento) => {
        //     this.boton2.setScale(.1);
        //     /*this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, GameObject) =>
        //     {
        //         this.boton1.setVisible(false);
        //         this.boton2.setVisible(false);
        //         this.scene.launch('Control');
        //         console.log(this.scene.manager.scenes.map( x => x.scene.key )); 
        //     });*/
        // });
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;

        this.saltar = this.input.keyboard.addKey(keyCodes.K);
        this.saltar.on('down',()=>
        {
            this.scene.launch('Control');
            
            console.log(this.scene.manager.scenes.map( x => x.scene.key ));
        })

        /*this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor.shift.on('down', () =>{
            this.scene.launch('Control');
            
            console.log(this.scene.manager.scenes.map( x => x.scene.key ));
        });*/
    }
    update(time, delta) {
        
    }
}

export default inicio; 