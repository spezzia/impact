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
        this.load.atlas('canion', 'canion_PP3/canion.png','canion_PP3/canion_atlas.json');
        this.load.animation('canioon', 'canion_PP3/canion_anim.json');
        this.load.atlas('nav', 'nav_PP3/nav.png','nav_PP3/nav_atlas.json');
        this.load.animation('vueloo', 'nav_PP3/nav_anim.json');
        this.load.image('platano','platano.png');
        this.load.image('municion','MunicionNE1.png');
        //this.load.image('sandia','sandia.png');
        this.load.image('calabaza', 'Calabaza.png');
        this.load.image('papaya', 'Papaya.png');
        this.load.image('selector', 'selector.png');
        this.load.atlas('enemigo2', 'enemigo2_PP3/enemigo2.png','enemigo2_PP3/enemigo2_atlas.json');
        this.load.animation('enemigoo1', 'enemigo2_PP3/enemigo2_anim.json');
        this.load.image('vida','barra_vida/barra_vida00.png');
        this.load.image('+vida','+vida.png');
        this.load.image('corazon','corazonvida.png');
        this.load.atlas('sandia', 'sandia_PP3/sandia.png','sandia_PP3/sandia_atlas.json');
        this.load.animation('sandiaa', 'sandia_PP3/sandia_anim.json');
        
    }

    create()
    {
        
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
       /* this.fondo = this.add.image(0,0,"fondo");
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

        this.sandiaselec = this.add.image(10, 420, 'sandia').setOrigin(0).setFlipX(1).setScale(1.2);
        this.calabazaselec = this.add.image(80, 420, 'calabaza').setOrigin(0).setScale(1.2);
        this.papayaselec = this.add.image(150, 410, 'papaya').setOrigin(0).setScale(1.2);
        this.selector = this.add.image(47, 480, 'selector').setScale(1.6);*/

        this.municion =  this.physics.add.group();
       
        this.enemigo1 = this.physics.add.sprite(800,200,'enemigo2').setScale(.35).setFlipX(1);
        this.enemigo1.anims.play('disparare2');
        this.enemigo1.on('animationcomplete',()=>{
            var mun = this.municion.create(this.enemigo1.x-60,this.enemigo1.y,'municion').setScale(.1); 
            this.timeline = this.tweens.createTimeline();
            this.timeline.add({
                targets: [mun],
                x: -10,
                duration: 5000,
            });
            this.timeline.play();
            this.enemigo1.anims.play('disparare2');
            console.log("Hola");
            
        },this);

        this.container = this.add.container(100, 200);
        this.nave = this.physics.add.sprite(0, 0, 'nav').setScale(1.4);
        this.nave.setSize(60,48,0,0);
        this.nave.setCollideWorldBounds(true);

        this.container.add([
            this.nave
        ])
        this.flechas = this.input.keyboard.createCursorKeys();
        this.canion = this.physics.add.sprite( 0 , -33 , 'canion').setScale(1.4);
        this.canion.setBounce(0.1);
        this.canion.setSize(1,1,1)
        this.canion.setCollideWorldBounds(true);
        this.container.add([
            this.canion
        ])
        this.sandia = this.physics.add.group();
        this.flechas = this.input.keyboard.createCursorKeys();
        this.canion.on('animationcomplete-carga',()=>{
             this.flechas.space.on('down', () => {
                this.flechas.space.destroy();
                this.canion.anims.play('disparo');
                var sandi  = this.sandia.create(this.container.x+45,this.container.y-38,'sandia').setScale(.5).setFlipX(1);  
                sandi.setBounce(0.2);
                sandi.setCollideWorldBounds(false);
                sandi.body.setSize(50,50,0);
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

         this.canion.on('animationcomplete-disparo', ()=>{
            this.flechas.space.destroy();
            this.canion.anims.play('carga');

         });
        this.nave.anims.play('vuelo');
        this.canion.anims.play('carga')
        

        this.palatano = this.physics.add.group();
        console.log(this.palatano);
        this.timer = this.time;
        this.timer.addEvent({
            delay: 500,                // ms
            callback: () =>  {
                var ano  = this.palatano.create(this.container.x+60,this.container.y,'platano').setScale(.9); 
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
        
        this.physics.add.collider(this.palatano, this.enemigo1,(enemigo,platano) =>{
            //console.log(enemigo);
            platano.destroy();
            enemigo.setTint(0xff0000);
            setTimeout(()=>{enemigo.setTint()},150); 
        });

        this.physics.add.collider(this.sandia, this.enemigo1,(enemigo,sandia)=>{
            sandia.anims.play('destruccion',true);
            sandia.on('animationcomplete-destruccion', ()=>{
               sandia.destroy();
               console.log('eeeoo');
             });
            enemigo.setTint(0xff0000);
            setTimeout(()=>{enemigo.setTint()},150); 
        });
          
        this.physics.add.collider(this.municion,this.nave,(nave,municion)=> {
             municion.destroy();
            nave.setTint(0xff0000);
            this.canion.setTint(0xff0000);
            setTimeout(()=>{nave.setTint();this.canion.setTint();},150); 
         });

    }
    update(time,delta)
    {
        if( this.flechas.left.isDown ){
            //this.nave.x -= 4; 
            //this.canion.x -= 4; 
            this.container.x -= 4;
        }  
        if( this.flechas.right.isDown ){
            if(this.nave.x + 4 <= 625 )
            {
                /*this.nave.x += 4;
                this.canion.x += 4;*/
                this.container.x += 4;
            } 
        }   
        if( this.flechas.down.isDown ){
            if(this.container.y + 4 < 400)
            {
                /*this.nave.y += 4; 
                this.canion.y += 4;*/
                this.container.y += 4;
            }
        }  
        if( this.flechas.up.isDown ){
            if(this.container.y - 4 > 80)
            {
                /*this.nave.y -= 4;
                this.canion.y -= 4; */
                this.container.y -= 4;
            }
        }  
    }
    
}


export default Bootloader;
