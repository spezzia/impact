var direccion;
class Bootloader extends Phaser.Scene{
    constructor(direccion){
        super({
            key:"Bootloader" // Nombre interno o clave de referencia
        });
        this.cargar= "Cargando";
        this.disparo = true;
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
        this.load.atlas('nave', 'nave_PP3/nave.png',
        'nave_PP3/nave_atlas.json');
        this.load.animation('navee', 'nave_PP3/nave_anim.json');
        this.load.image('platano','platano.png');
        this.load.image('municion','MunicionNE1.png');
        this.load.image('sandia','sandia.png');
        

        this.load.atlas('enemigo1', 'enemigo1_PP3/enemigo1.png',
        'enemigo1_PP3/enemigo1_atlas.json');
        this.load.animation('enemigoo1', 'enemigo1_PP3/enemigo1_anim.json');
        
    }

    create()
    {
        this.fondo = this.add.image(0,0,"fondo");
        this.fondo.setOrigin(0,0);
        this.fondo.setScale(.5);
        this.rose = this.add.image(1250,400,'rose').setScale(.7);
        this.nombre = this.add.image(625,10,'nombre').setScale(.7);
        this.nombre.setOrigin(.5,0);


        this.enemigo1 = this.physics.add.sprite(800,200,'enemigo1').setScale(3);
        this.enemigo1.anims.play('ene_disparar');
        this.enemigo1.on('animationcomplete',()=>{
            this.municion = this.add.image(800-25,200+18,'municion').setScale(.1); 
            this.timeline = this.tweens.createTimeline();
            this.timeline.add({
                targets: [this.municion],
                x: -10,
                duration: 5000,
            });
            this.timeline.play();
            this.municion = this.add.image(800-25,200-28,'municion').setScale(.1); 
            this.timeline = this.tweens.createTimeline();
            this.timeline.add({
                targets: [this.municion],
                x: -10,
                duration: 5000,
            });
            this.timeline.play();
            this.enemigo1.anims.play('ene_disparar');


        },this);

        this.nave = this.physics.add.sprite(100, 200, 'nave').setScale(1.2);
        this.nave.setBounce(0.1);
        this.nave.setCollideWorldBounds(true);
        this.flechas = this.input.keyboard.createCursorKeys();
        this.nave.on('animationcomplete-carga',()=>{
             this.flechas.space.on('down', () => {
                this.flechas.space.destroy();
                this.nave.anims.play('disparo');
                var sandi  = this.palatano.create(this.nave.x+45,this.nave.y-28,'sandia').setScale(.5).setFlipX(1); 
                sandi.setBounce(0.2);
                sandi.setCollideWorldBounds(true);
                this.timelinesandi = this.tweens.createTimeline();
                this.timelinesandi.add({
                    targets: [sandi],
                    x: 1500,
                    scaleX: 2,
                    scaleY: 2,
                    duration: 5000,
                });
                
                this.timelinesandi.play();
                //this.disparo = !this.disparo;  
        });
    },this);

         this.nave.on('animationcomplete-disparo', ()=>{
            this.flechas.space.destroy();
            this.nave.anims.play('carga');

         });
        this.nave.anims.play('carga');
        this.sandia = this.physics.add.group();

        


       /* var timer1 = this.time.addEvent({
            delay: 250,                // ms
            callback: () =>  {
                

            },
           loop:true
        });*/
        this.palatano = this.physics.add.group();
        console.log(this.palatano);
        

        var timer = this.time.addEvent({
            delay: 1000,                // ms
            callback: () =>  {
                var ano  = this.palatano.create(this.nave.x+60,this.nave.y+5,'platano').setScale(.9); 
                ano.setBounce(0.2);
                ano.setCollideWorldBounds(true);
                this.timeline = this.tweens.createTimeline();
                this.timeline.add({
                    targets: [ano],
                    x: 1250,
                    rotation: 35 * Math.PI,
                    duration: 5000,
                });
                this.timeline.play();
                

            },
           loop:true
        });

        this.physics.add.collider(this.palatano, this.enemigo1,function(enemigo,platano){
            //console.log(ano);
            platano.destroy();
            enemigo.setTint(0xff0000);
            setTimeout(()=>{enemigo.setTint()},150); 
        });

    }
    update(time,delta)
    {
        if( this.flechas.left.isDown ){
            this.nave.x -= 4; 
        }  
        if( this.flechas.right.isDown ){
            this.nave.x += 4; 
        }   
        if( this.flechas.down.isDown ){
            this.nave.y += 4; 
        }  
        if( this.flechas.up.isDown ){
            this.nave.y -= 4; 
        }  
    }
    
}


export default Bootloader;
