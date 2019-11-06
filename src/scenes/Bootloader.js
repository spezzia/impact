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
        this.load.atlas('nave', 'nave_PP3/nave.png','nave_PP3/nave_atlas.json');
        this.load.animation('navee', 'nave_PP3/nave_anim.json');
        this.load.image('platano','platano.png');
        this.load.image('municion','MunicionNE1.png');
        this.load.image('sandia','sandia.png');
        this.load.atlas('enemigo2', 'enemigo2_PP3/enemigo2.png','enemigo2_PP3/enemigo2_atlas.json');
        this.load.animation('enemigoo1', 'enemigo2_PP3/enemigo2_anim.json');
        this.load.image('vida','barra_vida/barra_vida00.png');
        this.load.image('+vida','+vida.png');
        this.load.image('corazon','corazonvida.png');
        
    }

    create()
    {
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        this.fondo = this.add.image(0,0,"fondo");
        this.fondo.setOrigin(0,0);
        this.fondo.setScale(.5);
        this.fondo.setDepth(0);
        this.rose = this.add.image(1250,400,'rose').setScale(.7);
        this.nombre = this.add.image(625,10,'nombre').setScale(.7);
        this.nombre.setOrigin(.5,0);
        this.nombre.setDepth(6);
        this.vida = this.add.image(10,10,'vida').setOrigin(0).setScale(.5);
        this.corazon = this.add.image(6,110,'corazon').setOrigin(0).setScale(1.7);
        this.masvida = this.physics.add.sprite(625,0,'+vida').setScale(.7);
        this.masvida.body.setGravityY(30);
        this.masvida.body.setGravityX(10);
       
        this.enemigo1 = this.physics.add.sprite(800,200,'enemigo2').setScale(.35).setFlipX(1);
        this.enemigo1.anims.play('disparare2');
        this.enemigo1.on('animationcomplete',()=>{
            this.municion = this.add.image(this.enemigo1.x-60,this.enemigo1.y,'municion').setScale(.1); 
            this.timeline = this.tweens.createTimeline();
            this.timeline.add({
                targets: [this.municion],
                x: -10,
                duration: 5000,
            });
            this.timeline.play();
            this.enemigo1.anims.play('disparare2');
            console.log("Hola");
            
        },this);

        this.nave = this.physics.add.sprite(100, 200, 'nave').setScale(1.4);
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

        this.palatano = this.physics.add.group();
        console.log(this.palatano);
        this.timer = this.time;
        this.timer.addEvent({
            delay: 500,                // ms
            callback: () =>  {
                var ano  = this.palatano.create(this.nave.x+60,this.nave.y+5,'platano').setScale(.9); 
                ano.setBounce(0.2);
                //ano.setCollideWorldBounds(true);
                this.timeline = this.tweens.createTimeline();
                this.timeline.add({
                    targets: [ano],
                    x:5000,
                    rotation: 35 * Math.PI,
                    duration: 10000,
                });
                this.timeline.play();
                

            },
           loop:true
        });
        this.timer.paused = true;
        this.saltar = this.input.keyboard.addKey(keyCodes.SHIFT);
        this.saltar.on('down',()=>
        {
           this.timer.paused = false;
        })

        this.saltar.on('up',()=>
        {
            this.timer.paused = true;
        })
        
        this.physics.add.collider(this.palatano, this.enemigo1,function(enemigo,platano){
            //console.log(enemigo);
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
            if(this.nave.x + 4 <= 625 )
            {
                this.nave.x += 4;
            } 
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
