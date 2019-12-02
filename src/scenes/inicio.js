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
        //this.load.image('enter','enter0.png');
    }
    create() {

        this.ini = this.add.image(650, 270, 'ini').setScale(1.5,1);
        //this.ini.flipX = true;
        //this.ent = this.add.image(600,250, 'enter').setScale(.7);

        

        this.cursor = this.input.keyboard.createCursorKeys();
        this.cursor.shift.on('down', () =>{
            this.scene.launch('Control');
            console.log(this.scene.manager.scenes.map( x => x.scene.key ));
        });

        /*this.registry.events.on('Fin',()=>
        {
            this.scene.stop('Control');
            this.scene.remove('Control');
        });*/
    }
    update(time, delta) {
        
    }
}

export default inicio; 