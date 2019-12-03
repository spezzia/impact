class nivel2 extends Phaser.Scene{
    constructor(direccion){
        super({
            key:"nivel2" // Nombre interno o clave de referencia
        });
        this.cargar= "Cargando";
        this.disparo = true;
    }
    init(data)
    {
        console.log("Soy init");
        this.cont1 = data.cont1;
        this.cont2 = data.cont2;
        this.cont3 = data.cont3;
        this.puntos = data.puntos;
        this.sandiaselec = data.sandi;
        this.calabazaselec = data.cala;
        this.papayaselec = data.papa;
        this.selector = data.sele;
        this.vidanave = data.vidanave;
        this.barravida = data.barra;
        this.vida_nave = data.vida_na;
        this.olea = data.text;
        
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
        this.load.atlas('naveelite', 'naveelite_PP3/naveelite.png', 'naveelite_PP3/naveelite_atlas.json');
        this.load.animation('naveelite', 'naveelite_PP3/naveelite_anim.json');
        this.load.image('vida','barra_vida/barra_vida00.png');
        this.load.image('+vida','+vida.png');
        this.load.image('corazon','corazonvida.png');
        this.load.atlas('sandia', 'sandia_PP3/sandia.png','sandia_PP3/sandia_atlas.json');
        this.load.animation('sandiaa', 'sandia_PP3/sandia_anim.json');
        this.load.atlas('calabaza', 'calabaza_PP3/calabaza.png','calabaza_PP3/calabaza_atlas.json');
        this.load.animation('calabazaa', 'calabaza_PP3/calabaza_anim.json');
        this.load.atlas('papaya', 'papaya_PP3/papaya.png','papaya_PP3/papaya_atlas.json');
        this.load.animation('papayaa', 'papaya_PP3/papaya_anim.json');
        this.load.atlas('jefe', 'jefe_PP3/jefe.png', 'jefe_PP3/jefe_atlas.json');
        this.load.animation('gfazo', 'jefe_PP3/jefe_anim.json');
        this.load.image('balazo', 'MunicionNE2.png');

        this.load.audio('cargarcanion', 'sonidos/cargarcanion.mp3');
        this.load.audio('potenciador1', 'sonidos/potenciador1.mp3');
        this.load.audio('potenciador2', 'sonidos/potenciador2.mp3');
        //this.load.audio('vocho', 'sonidos/vocho.mp3');
        this.load.audio('sonidoe', 'sonidos/elite.mp3');
        
    }

    create()
    {
        this.cargarcanion = this.sound.add('cargarcanion');
        this.potenciador1 = this.sound.add('potenciador1');
        this.potenciador2 = this.sound.add('potenciador2');
        this.vocho = this.sound.add('vocho');
        this.sonidoe = this.sound.add('sonidoe');
        
        const keyCodes = Phaser.Input.Keyboard.KeyCodes;
        this.navesenemigasdead = 0;
        this.olea.text = "Oleada 1"
      

        this.navesenemigasdead = 0;
        this.drops = this.physics.add.group();

        this.droper= this.time.addEvent({
            delay: 2000,                // ms
            callback: () =>  {
                var ale = Phaser.Math.Between(0, 8);
                var lugar =  Phaser.Math.Between(50, 400);
                console.log(ale);
                
                switch(ale)
                {
                    case 0:
                            this.masvida = this.drops.create(1250, lugar ,'+vida').setScale(.7);
                            this.masvida.body.setSize(30,75);
                            this.masvida.setOffset(47,25);
                            this.droppear = this.tweens.createTimeline();
                            this.droppear.add({
                                targets: [this.masvida],
                                x: -100,
                                duration: 4000,
                            });
                            this.droppear.play();
                        break;
                    case 1:
                        if(this.cont1.text < 5)
                        {
                            this.massandi = this.drops.create(1250,lugar,'sandia').setScale(.7);
                            this.massandi.body.setSize(45,45,0);
                            this.massandi.body.setOffset(10,10);
                            this.droppear = this.tweens.createTimeline();
                            this.droppear.add({
                                targets: [this.massandi],
                                x: -100,
                                duration: 4000,
                            });
                            this.droppear.play();
                        }
                        break;
                    case 2:
                        if(this.cont2.text < 5)
                        {
                            this.mascalaba = this.drops.create(1250,lugar,'calabaza').setScale(.7);
                            this.mascalaba.body.setSize(45,45,0);
                            this.mascalaba.body.setOffset(10,10);
                            this.droppear = this.tweens.createTimeline();
                            this.droppear.add({
                                targets: [this.mascalaba],
                                x: -100,
                                duration: 4000,
                            });
                            this.droppear.play();
                        }
                        break;
                    case 3:
                        if(this.cont3.text < 5)
                        {
                            this.maspapaya = this.drops.create(1250,lugar,'papaya').setScale(.7);
                            this.maspapaya.body.setSize(45,45,0);
                            this.maspapaya.body.setOffset(10,10);
                            this.droppear = this.tweens.createTimeline();
                            this.droppear.add({
                                targets: [this.maspapaya],
                                x: -100,
                                duration: 4000,
                            });
                            this.droppear.play();
                        }
                        break;
                    default:
                            this.asteroide = this.drops.create(1250,this.container.y,'asteroide').setScale(.2);
                            this.asteroide.body.setSize(200,200,0);
                            this.asteroide.body.setOffset(50,20);
                            this.droppear = this.tweens.createTimeline();
                            this.droppear.add({
                                targets: [this.asteroide],
                                x: -100,
                                rotation:  -10 * Math.PI,
                                duration: 4000,
                            });
                            this.droppear.play();

                        break;
                    
                }  
            },
           loop:true
        });


    this.municion =  this.physics.add.group();
    this.municion2 = this.physics.add.group();
    this.container = this.add.container(100, 200);
    this.nave = this.physics.add.sprite(0, 0, 'nav').setScale(1.4);
    
    this.nave.setMass(10);
    this.nave.setSize(58,48);
    this.nave.setOffset(3,0)
    this.nave.setCollideWorldBounds(true);

    this.container.add([
        this.nave
    ])
    this.flechas = this.input.keyboard.createCursorKeys();
    this.canion = this.physics.add.sprite( 0 , -33 , 'canion').setScale(1.4);
    this.canion.setBounce(0.1);
    this.canion.setSize(56,10);
    this.canion.setOffset(4,23);
    this.canion.setCollideWorldBounds(true);
    this.container.add([
        this.canion
    ])
    this.potenciador = this.physics.add.group();
    this.flechas = this.input.keyboard.createCursorKeys();
    this.canion.on('animationcomplete-carga',()=>{
        
         this.flechas.space.on('down', () => {
             console.log(this.selector.x);
             console.log(this.cont1.text);
             
            if(this.selector.x == 35 && this.cont1.text > 0)
            {
                this.potenciador1.play();
                this.flechas.space.destroy();
                var sandi  = this.potenciador.create(this.container.x+45,this.container.y-38,'sandia').setScale(.5).setFlipX(1);  
                sandi.setBounce(0.2);
                sandi.setCollideWorldBounds(false);
                sandi.body.setSize(45,45,0);
                sandi.body.setOffset(10,10);
                this.cont1.text = this.cont1.text - 1;
                this.canion.anims.play('disparo');
                this.timelinesandi = this.tweens.createTimeline();
                this.timelinesandi.add({
                    targets: [sandi],
                    x: 1500,
                    scaleX: 1.5,
                    scaleY: 1.5,
                    duration: 5000,
                });
                this.timelinesandi.play();
            }
            if( this.selector.x == 100 && this.cont2.text > 0)
            {
                this.potenciador2.play();
                this.flechas.space.destroy();
                var sandi  = this.potenciador.create(this.container.x+45,this.container.y-38,'calabaza').setScale(.5);  
                sandi.setBounce(0.2);
                sandi.setCollideWorldBounds(false);
                sandi.body.setSize(45,35,0);
                sandi.body.setOffset(10,15);
                this.cont2.text = this.cont2.text - 1;
                this.canion.anims.play('disparo');
                this.timelinesandi = this.tweens.createTimeline();
                this.timelinesandi.add({
                    targets: [sandi],
                    x: this.container.x + 200,
                    scaleX: 2,
                    scaleY: 2,
                    duration: 500,
                    onCompleat: () => {
                        sandi.body.setVelocityX(300);
                        
                    }
                });
                this.timelinesandi.play();
            }
            if( this.selector.x == 160 && this.cont3.text > 0)
            {
                this.flechas.space.destroy();
                var sandi  = this.potenciador.create(this.container.x+45,this.container.y-38,'papaya').setScale(.5);  
                sandi.setBounce(0.2);
                sandi.setCollideWorldBounds(false);
                sandi.body.setSize(25,40,0);
                sandi.body.setOffset(20,20);
                this.canion.anims.play('disparo');
                this.cont3.text = this.cont3.text - 1;
                this.timelinesandi = this.tweens.createTimeline();
                this.timelinesandi.add({
                    targets: [sandi],
                    x: this.container.x + 200,
                    scaleX: 1.5,
                    scaleY: 1.5,
                    duration: 500,
                });
                this.timelinesandi.add({
                    targets: [sandi],
                    x: 1300,
                    duration: 5000,
                });
                this.timelinesandi.play();

            }
            
           
            //this.disparo = !this.disparo;  
    });  
              
},this);

   

    this.teclaA = this.input.keyboard.addKey(keyCodes.A);
    this.teclaD = this.input.keyboard.addKey(keyCodes.D);
    this.teclaS = this.input.keyboard.addKey(keyCodes.S);

    

     this.canion.on('animationcomplete-disparo', ()=>{
        this.flechas.space.destroy();
        this.canion.anims.play('carga');
        this.cargarcanion.play(); 
     });
    this.nave.anims.play('vuelo');
    this.canion.anims.play('carga');
        

    this.palatano = this.physics.add.group();
    console.log(this.palatano);
    this.timer= this.time.addEvent({
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
       loop:true,
       paused: true
    });
        this.saltar = this.input.keyboard.addKey(keyCodes.W);
        this.saltar.on('down',()=>
        {
           this.timer.paused = false;
        })

        this.saltar.on('up',()=>
        {
            this.timer.paused = true;
        })

         //Creación de grupo de naves enemigas
         this.grupo=this.physics.add.group({
            key: 'enemigo2',
            repeat: 6,
            setXY:{
               x:1200,
               y: 100,
               stepY: 50
            }             
        });

        this.add.tween({
            targets: this.olea,
            x: 1100,
            y: 25,
            scaleX: .5,
            scaleY: .5,
           duration: 6000,
           ease: 'Power1',
           onCompleat: ()=>
           {
            this.timelineN.play();
            this.timelineO.play();
            this.timelineP.play();    
           }
        });

        this.grupo.children.iterate( (enemigo1) => {
            
            enemigo1.setScale(.2).setFlipX(1);
            setTimeout(()=>{enemigo1.anims.play('disparare2')},Phaser.Math.Between(0,1500)); 
            enemigo1.on('animationcomplete',()=>{
            var mun = this.municion.create(enemigo1.x-60,enemigo1.y,'municion').setScale(.1); 
               mun.body.setVelocityX(-100);
               setTimeout(()=>{enemigo1.anims.play('disparare2')},Phaser.Math.Between(0,1500));                               
               //console.log("Hola");
           },this);
        });

        this.add.tween({
            targets: this.grupo.getChildren()[3],
            x: 600,
           duration: 2000,
           ease: 'Power1',
        });

        this.timelineN = this.tweens.createTimeline()
        this.timelineN.add({
            targets: [this.grupo.getChildren()[2], this.grupo.getChildren()[4]],
            x: 650,
            duration: 2000,
            ease: 'Power1'
        })

        this.timelineO = this.tweens.createTimeline()
        this.timelineO.add({
            targets: [this.grupo.getChildren()[1], this.grupo.getChildren()[5]],
            x: 700,
            duration: 2000,
            ease: 'Power1'
        })

        this.timelineP = this.tweens.createTimeline()
        this.timelineP.add({
            targets: [this.grupo.getChildren()[0], this.grupo.getChildren()[6]],
            x: 750,
            duration: 2000,
            ease: 'Power1'
        })

       
        


        //Creación de grupo NAVES ELITE

       // this.elite = this.physics.add.sprite(1100, 400, 'disparar').setScale(.5);
        this.grupoe=this.physics.add.group({
            key: 'naveelite',
            repeat: 2,
            setXY: {
                x:1000,
                y:150,
               stepY:100
            }
        });
        

        this.grupoe.children.iterate((elite) => {
            
            elite.setScale(.5);
            elite.setSize(110,140);
            elite.setOffset(50, 25);
            setTimeout(()=>{elite.anims.play('disparar')},Phaser.Math.Between(0,1500)); 
            elite.on('animationcomplete',()=>{
            var mun = this.municion.create(elite.x-60,elite.y,'municion').setScale(.1); 
               mun.body.setVelocityX(-100);
               setTimeout(()=>{elite.anims.play('disparar')},Phaser.Math.Between(0,1500));                
              // console.log("Hola");
           },this);
        });

        this.timelineE = this.tweens.createTimeline();
        this.timelineE.add({
            targets: this.grupoe.getChildren(),
            ease: 'Power1',
            x: 820,
            
            duration:2500,
            
            
        })

         this.timelineE.play();
         
         
        
         this.physics.add.collider(this.palatano, this.grupo,(platano, enemigo) =>{
            if(enemigo.getData('vida') == null)
            {
                this.graphics = this.add.graphics({
                    fillStyle:{color: 0x1BFF00}
                })
                this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,50,5);
                this.graphics.fillRectShape(this.life_bar);
                this.graphics.setDepth(7);
                enemigo.setData('vida', 50);
                enemigo.setData('linea',this.life_bar);
                enemigo.setData('grafico',this.graphics);

            }else
            {
                var vida = enemigo.getData('vida');
                if(vida - 20 < 0)
                {
                    var grafico = enemigo.getData('grafico');
                   grafico.clear();
                   enemigo.destroy() ;
                   this.navesenemigasdead++;
                   
                }else{
                    enemigo.setData('vida',vida - 20);
                    var linea = enemigo.getData('linea');
                    linea.x = enemigo.x-25;
                    linea.width = vida - 20;
                    var grafico = enemigo.getData('grafico');
                    grafico.clear();
                    grafico.fillRectShape(linea);
                }
            }
            platano.destroy();
            enemigo.setTint(0xff0000);
            setTimeout(()=>{enemigo.setTint()},150); 
        });

        this.physics.add.collider(this.potenciador, this.grupo,(potenciador, enemigo)=>{
            
            if(potenciador.texture.key == "sandia")
            {
                potenciador.anims.play('destruccion',true);
                potenciador.on('animationcomplete-destruccion', ()=>{
                potenciador.destroy();
                console.log('eeeoo');
                });
                enemigo.setTint(0xff0000);
                setTimeout(()=>{enemigo.setTint()},150); 
                if(enemigo.getData('vida') == null)
                {
                    this.graphics = this.add.graphics({
                        fillStyle:{color: 0x1BFF00}
                    })
                    this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,50,5);
                    this.graphics.fillRectShape(this.life_bar);
                    this.graphics.setDepth(7);
                    enemigo.setData('vida', 50);
                    enemigo.setData('linea',this.life_bar);
                    enemigo.setData('grafico',this.graphics);
    
                }else
                {
                    var vida = enemigo.getData('vida');
                    if(vida - 50 < 0)
                    {
                        var grafico = enemigo.getData('grafico');
                       grafico.clear();
                       enemigo.destroy() ;
                       this.navesenemigasdead++;
                       
                    }else{
                        enemigo.setData('vida',vida - 50);
                        var linea = enemigo.getData('linea');
                        linea.x = enemigo.x-25;
                        linea.width = vida - 50;
                        var grafico = enemigo.getData('grafico');
                        grafico.clear();
                        grafico.fillRectShape(linea);
                    }
                }
            }
            if(potenciador.texture.key == "calabaza")
            {
                enemigo.setVelocity(0);
                enemigo.setAcceleration(0);
                setTimeout(()=>{potenciador.body.destroy();},10); 
                
                potenciador.anims.play('explotar',true);
                potenciador.on('animationcomplete-explotar', ()=>{
                potenciador.destroy();
                console.log('eeeoo');
                });
                enemigo.setTint(0xff0000);
                setTimeout(()=>{enemigo.setTint()},150); 
                if(enemigo.getData('vida') == null)
                {
                    this.graphics = this.add.graphics({
                        fillStyle:{color: 0x1BFF00}
                    })
                    this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,25,5);
                    this.graphics.fillRectShape(this.life_bar);
                    this.graphics.setDepth(7);
                    enemigo.setData('vida', 25);
                    enemigo.setData('linea',this.life_bar);
                    enemigo.setData('grafico',this.graphics);

    
                }else
                {
                    var vida = enemigo.getData('vida');
                    if(vida - 25 <= 0)
                    {
                        var grafico = enemigo.getData('grafico');
                       grafico.clear();
                       enemigo.destroy() ;
                       this.navesenemigasdead++;
                       
                    }else{
                        enemigo.setData('vida',vida - 25);
                        var linea = enemigo.getData('linea');
                        linea.x = enemigo.x - 25;
                        linea.width = vida - 25;
                        var grafico = enemigo.getData('grafico');
                        grafico.clear();
                        grafico.fillRectShape(linea);
                    }
                }
            }
            if(potenciador.texture.key == "papaya")
            {
                enemigo.setVelocity(0);
                enemigo.setAcceleration(0);
                if(enemigo.getData('vida') == null)
                {
                    this.graphics = this.add.graphics({
                        fillStyle:{color: 0x1BFF00}
                    })
                    this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,50,5);
                    this.graphics.fillRectShape(this.life_bar);
                    this.graphics.setDepth(7);
                    enemigo.setData('vida', 50);
                    enemigo.setData('linea',this.life_bar);
                    enemigo.setData('grafico',this.graphics);
    
                }else
                {
                    var vida = enemigo.getData('vida');
                    if(vida - 100 < 0)
                    {
                        var grafico = enemigo.getData('grafico');
                       grafico.clear();
                       enemigo.destroy() ;
                       this.navesenemigasdead++;
                       
                    }else{
                        enemigo.setData('vida',vida - 100);
                        var linea = enemigo.getData('linea');
                        linea.x = enemigo.x-25;
                        linea.width = vida - 100;
                        var grafico = enemigo.getData('grafico');
                        grafico.clear();
                        grafico.fillRectShape(linea);
                    }
                }
            }
        });

//////Potenciadores contra naves elite/////////////////////////////////

        this.physics.add.collider(this.palatano, this.grupoe,(platano, enemigo) =>{
            console.log("colisiono");
            
            if(enemigo.getData('vida') == null)
            {
                this.graphics = this.add.graphics({
                    fillStyle:{color: 0x1BFF00}
                })
                this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,50,5);
                this.graphics.fillRectShape(this.life_bar);
                this.graphics.setDepth(7);
                enemigo.setData('vida', 50);
                enemigo.setData('linea',this.life_bar);
                enemigo.setData('grafico',this.graphics);

            }else
            {
                var vida = enemigo.getData('vida');
                if(vida - 5 < 0)
                {
                    var grafico = enemigo.getData('grafico');
                   grafico.clear();
                   enemigo.destroy() ;
                   this.navesenemigasdead++;
                   
                }else{
                    enemigo.setData('vida',vida - 5);
                    var linea = enemigo.getData('linea');
                    linea.x = enemigo.x-25;
                    linea.width = vida - 5;
                    var grafico = enemigo.getData('grafico');
                    grafico.clear();
                    grafico.fillRectShape(linea);
                }
            }
            platano.destroy();
            this.puntos.text = parseInt(this.puntos.text) +25;
            enemigo.setTint(0xff0000);
            setTimeout(()=>{enemigo.setTint()},150); 
        });

        this.physics.add.collider(this.potenciador, this.grupoe,(potenciador, enemigo)=>{
            enemigo.setVelocity(0);
            
            if(potenciador.texture.key == "sandia")
            {
                potenciador.body.destroy();
                potenciador.anims.play('destruccion',true);
                potenciador.on('animationcomplete-destruccion', ()=>{
                potenciador.destroy();
                
                console.log('eeeoo');
                });
                enemigo.setTint(0xff0000);
                setTimeout(()=>{enemigo.setTint()},150); 
                if(enemigo.getData('vida') == null)
                {
                    this.graphics = this.add.graphics({
                        fillStyle:{color: 0x1BFF00}
                    })
                    this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,25,5);
                    this.graphics.fillRectShape(this.life_bar);
                    this.graphics.setDepth(7);
                    enemigo.setData('vida', 25);
                    enemigo.setData('linea',this.life_bar);
                    enemigo.setData('grafico',this.graphics);
                    this.puntos.text = parseInt(this.puntos.text) +50;
                }else
                {
                    var vida = enemigo.getData('vida');
                    if(vida - 25 <= 0)
                    {
                        var grafico = enemigo.getData('grafico');
                       grafico.clear();
                       enemigo.destroy() ;
                       this.navesenemigasdead++;
                       
                    }else{
                        enemigo.setData('vida',vida - 25);
                        var linea = enemigo.getData('linea');
                        linea.x = enemigo.x-25  ;
                        linea.width = vida - 25;
                        var grafico = enemigo.getData('grafico');
                        grafico.clear();
                        grafico.fillRectShape(linea);
                    }
                }
            }
            if(potenciador.texture.key == "calabaza")
            {
                enemigo.setVelocity(0);
                enemigo.setAcceleration(0);
                setTimeout(()=>{potenciador.body.destroy();},10); 
                
                potenciador.anims.play('explotar',true);
                potenciador.on('animationcomplete-explotar', ()=>{
                potenciador.destroy();
                console.log('eeeoo');
                });
                enemigo.setTint(0xff0000);
                setTimeout(()=>{enemigo.setTint()},150); 
                if(enemigo.getData('vida') == null)
                {
                    this.graphics = this.add.graphics({
                        fillStyle:{color: 0x1BFF00}
                    })
                    this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,38,5);
                    this.graphics.fillRectShape(this.life_bar);
                    this.graphics.setDepth(7);
                    enemigo.setData('vida', 38);
                    enemigo.setData('linea',this.life_bar);
                    enemigo.setData('grafico',this.graphics);
                    this.puntos.text = parseInt(this.puntos.text) +75;
    
                }else
                {
                    var vida = enemigo.getData('vida');
                    if(vida - 12 <= 0)
                    {
                        var grafico = enemigo.getData('grafico');
                       grafico.clear();
                       enemigo.destroy() ;
                       this.navesenemigasdead++;
                       
                    }else{
                        enemigo.setData('vida',vida - 12);
                        var linea = enemigo.getData('linea');
                        linea.x = enemigo.x - 25;
                        linea.width = vida - 12;
                        var grafico = enemigo.getData('grafico');
                        grafico.clear();
                        grafico.fillRectShape(linea);
                    }
                }
            }
            if(potenciador.texture.key == "papaya")
            {
                enemigo.setVelocity(0);
                enemigo.setAcceleration(0);
                if(enemigo.getData('vida') == null)
                {
                    this.graphics = this.add.graphics({
                        fillStyle:{color: 0x1BFF00}
                    })
                    this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,50,5);
                    this.graphics.fillRectShape(this.life_bar);
                    this.graphics.setDepth(7);
                    enemigo.setData('vida', 50);
                    enemigo.setData('linea',this.life_bar);
                    enemigo.setData('grafico',this.graphics);
                    this.puntos.text = parseInt(this.puntos.text) +100;
                }else
                {
                    var vida = enemigo.getData('vida');
                    if(vida - 100 < 0)
                    {
                        var grafico = enemigo.getData('grafico');
                       grafico.clear();
                       enemigo.destroy() ;
                       this.navesenemigasdead++;
                       
                    }else{
                        enemigo.setData('vida',vida - 100);
                        var linea = enemigo.getData('linea');
                        linea.x = enemigo.x-25;
                        linea.width = vida - 100;
                        var grafico = enemigo.getData('grafico');
                        grafico.clear();
                        grafico.fillRectShape(linea);
                    }
                }
            }
        });




        this.physics.add.collider(this.municion,this.nave,(nave,municion)=> {
            this.vidanave -= 1;
            this.vida_nave.height = this.vidanave;
            this.barravida.clear();
            this.barravida.fillRectShape(this.vida_nave)
            nave.setVelocity(0);
            nave.setAcceleration(0);
            this.puntos.text = parseInt(this.puntos.text) -25;
            municion.destroy();
            nave.setTint(0xff0000);
            this.canion.setTint(0xff0000);
            setTimeout(()=>{nave.setTint();this.canion.setTint();},150); 
         });

         this.physics.add.collider(this.municion,this.palatano,(platano,municion)=> {
            municion.destroy();
            platano.destroy();
        });

        this.physics.add.collider(this.drops,this.nave,(nave,drops)=>
        {
           switch(drops.texture.key)
           {
               case "papaya":
                   this.cont3.text = parseInt(this.cont3.text) + 1;
                   break;
               case "sandia":
                   this.cont1.text = parseInt(this.cont1.text) + 1;
                   break;
               case "calabaza":
                   this.cont2.text = parseInt(this.cont2.text) + 1;
                   break;
               case "+vida":
                   this.vidanave = 90;
                   this.vida_nave.height = this.vidanave;
                   this.barravida.clear();
                   this.barravida.fillRectShape(this.vida_nave);
                   break;
               case "asteroide":
                       this.vidanave -= 20;
                       this.vida_nave.height = this.vidanave;
                       this.barravida.clear();
                       this.barravida.fillRectShape(this.vida_nave)
                   break;
           } 
           drops.destroy();
           nave.setTint(0x1ADC03);
           this.canion.setTint(0xff0000);
           setTimeout(()=>{nave.setTint();this.canion.setTint();},150); 
        });


        this.physics.add.collider(this.nave, this.grupo, () => {
            this.nave.setVelocity(0);
            this.nave.setAcceleration(0);
        })

        this.physics.add.collider(this.municion,this.palatano,(platano,municion)=> {
            municion.destroy();
            platano.destroy();
        });

        this.physics.add.collider(this.municion,this.potenciador,(potenciador,municion)=> {
           potenciador.destroy();
           municion.body.setVelocityX(300);
        });

        this.physics.add.collider(this.drops,this.potenciador,(potenciador,drops)=> {
            if(potenciador.texture.key == "asteroide"){
                potenciador.destroy();
                drops.destroy();
            }
         });

        this.gfazo();
        
    }
    update(time,delta)
    {
        this.canion.x = 0;
        this.canion.y = -33;
        this.nave.x = 0;
        this.nave.y = 0;
        
        if( this.flechas.left.isDown ){
            if(this.container.x - 4 > 0) 
            {
                this.container.x -= 4;
            }
        }  
        if( this.flechas.right.isDown ){
            if(this.container.x + 4 <= 625 )
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
        if( Phaser.Input.Keyboard.JustDown(this.teclaA) ){
            console.log('Haz presionado la tecla A');
            this.selector.x= 35;
        }
        if( Phaser.Input.Keyboard.JustDown(this.teclaS) ){
            console.log('Haz presionado la tecla S');
            this.selector.x= 100;
        }
        if( Phaser.Input.Keyboard.JustDown(this.teclaD) ){
            console.log('Haz presionado la tecla D');
            this.selector.x= 160;
        }
        if(this.cont3.text == 0)
        {
            this.papayaselec.setTint(0x5C5A63);
        }
        else{
            this.papayaselec.setTint();
        }
        if(this.cont1.text == 0)
        {
            this.sandiaselec.setTint(0x5C5A63);
        }
        else{
            this.sandiaselec.setTint();
        }
        if(this.cont2.text == 0)
        {
            this.calabazaselec.setTint(0x5C5A63);
        }
        else{
            this.calabazaselec.setTint();
      
        }

        if(this.navesenemigasdead == 10)
        {
            this.navesenemigasdead++;

            this.olea.text = "Oleada 2";
            this.olea.x = 550;
            this.olea.y = 250;
            this.olea.setScale(1);
            setTimeout(()=>
            {
                this.text();
            },1000)
            setTimeout(()=>
            {
                this.ordaelite1();
                this.ordaelite1_Aux();
                this.ordaelite2_Aux();
                this.ordaelite3_Aux();
                this.disparar();
            },2000)
            
        }
        if(this.navesenemigasdead == 24){
            this.navesenemigasdead++;
            this.olea.text = "Oleada Final";
            this.olea.x = 550;
            this.olea.y = 250;
            this.olea.setScale(1);
            setTimeout(()=>
            {
                this.text();
            },1000)
            setTimeout(()=>
            {
                this.gfazo();
                this.ordaelite1();
                this.ordaelite1_Aux();
                this.disparar();
            },2000)
           
        }
        if(this.navesenemigasdead == 32)
        {
            this.navesenemigasdead = 25;
            setTimeout(() => {
                this.ordaelite1();
                this.ordaelite1_Aux();
                this.disparar();
            }, 2000);
        }
    }

    ordaelite1(){
        this.grupoe.createMultiple({
            key: 'naveelite',
            repeat: 2,
            setXY: {
                x: 1200,
                y: 150,
                stepY: 100
            }

        });

        this.timelineA = this.tweens.createTimeline()
        this.timelineA.add({
            targets:this.grupoe.getChildren(),
            x: 600,
            duration: 1500,
            ease: 'Power2'
        })

        this.timelineA.play();
    }

    ordaelite1_Aux(){
        this.grupoe.createMultiple({
            key:'naveelite',
            repeat: 3,
            setXY: {
                x:1200,
                y: 100,
                stepY:100
            }
        })

        this.timelineB = this.tweens.createTimeline()
        this.timelineB.add({
            targets:[this.grupoe.getChildren()[3], this.grupoe.getChildren()[4], this.grupoe.getChildren()[5], this.grupoe.getChildren()[6]],
            x: 700,
            duration: 1500,
            ease: 'Power2'
        })

        this.timelineB.play();
    }

    ordaelite2_Aux(){
        this.grupoe.createMultiple({
            key: 'naveelite',
            repeat: 2,
            setXY: {
                x: 1200,
                y: 150,
                stepY: 100
            }

        });

        this.timelineC = this.tweens.createTimeline()
        this.timelineC.add({
            targets:[this.grupoe.getChildren()[7], this.grupoe.getChildren()[8], this.grupoe.getChildren()[9]],
            x: 800,
            duration: 1500,
            ease: 'Power2'
        })

        this.timelineC.play();
    }

    ordaelite3_Aux(){
        this.grupoe.createMultiple({
            key: 'naveelite',
            repeat: 2,
            setXY: {
                x: 1200,
                y: 200,
                stepY: 100
            }

        });

        this.timelineC = this.tweens.createTimeline()
        this.timelineC.add({
            targets:[this.grupoe.getChildren()[10], this.grupoe.getChildren()[11]],
            x: 900,
            duration: 1500,
            ease: 'Power2'
        })

        this.timelineC.play();

        this.add.tween({
            targets: this.grupoe.getChildren()[12],
            x: 1000,
            y: 250,
            duration:1500,
            ease: 'Power2'
        })
    }
    
    

    disparar(){
        this.grupoe.children.iterate((elite) => {

            elite.setScale(.5);
            elite.setSize(110,140);
            elite.setOffset(50, 25);
            setTimeout(()=>{elite.anims.play('disparar')},Phaser.Math.Between(0,1500)); 
            elite.on('animationcomplete',()=>{
            var mun = this.municion.create(elite.x-60,elite.y,'municion').setScale(.1); 
               mun.body.setVelocityX(-100);
               setTimeout(()=>{elite.anims.play('disparar')},Phaser.Math.Between(0,1500));                
              // console.log("Hola");
           },this);
        });
    }

    gfazo(){
        this.gfazo=this.physics.add.sprite(500, 350, 'jefe');
        this.gfazo.setSize(125, 127);
        this.gfazo.setOffset(15, 8);

      

        this.add.tween({
            targets: [this.gfazo,this.graphics],
            x: 950,
            duration: 3000,
            ease: 'Power1',
            onCompleat: () => {
                
                this.timelineX.play();
            }
        })

        this.timelineX = this.tweens.timeline({
            targets: [this.gfazo],
            totalDuration: 5000,
            tweens: [
                {
                    y: 150
                },
                {
                    y: 400
                }
            ],
            yoyo: true,
            repeat: -1
        });

        this.gfazo.on('animationcomplete',()=>{
            var mun = this.municion.create(this.gfazo.x-60,this.gfazo.y,'balazo').setScale(.8); 
            mun.setSize(60, 25);
            mun.setOffset(30, 48);
            
               mun.body.setVelocityX(-100);
               setTimeout(()=>{this.gfazo.anims.play('jefe_laser')},Phaser.Math.Between(0,3000));                
             //  console.log("Hola");
           });

        this.gfazo.anims.play('jefe_laser');

        /////////Potenciadores contra el Gfazo////////////////////
this.physics.add.collider(this.palatano, this.gfazo,(enemigo,platano) =>{
    console.log("colisiono");
    
    if(enemigo.getData('vida') == null)
    {
        this.text1 = this.add.text(625, 420, 'Gfazo', {
            fontSize: 20
        });

        this.graphics1 = this.add.graphics({
            fillStyle:{color: 0xFFFFFF}
        })
        this.life_bar1 = new Phaser.Geom.Rectangle(390,445,520,25);
        this.graphics1.fillRectShape(this.life_bar1);
        this.graphics1.setDepth(7);

        this.graphics = this.add.graphics({
            fillStyle:{color: 0xFF9D36}
        })
        this.life_bar = new Phaser.Geom.Rectangle(400,450,500,15);
        this.graphics.fillRectShape(this.life_bar);
        this.graphics.setDepth(7);

        

        enemigo.setData('vida', 500);
        enemigo.setData('linea',this.life_bar);
        enemigo.setData('grafico',this.graphics);

    }else
    {
        var vida = enemigo.getData('vida');
        if(vida - 1 < 0)
        {
            var grafico = enemigo.getData('grafico');
           grafico.clear();
           enemigo.destroy() ;
           this.navesenemigasdead++;
           
        }else{
            enemigo.setData('vida',vida - 1);
            var linea = enemigo.getData('linea');
            //linea.x = enemigo.x-25;
            linea.width = vida - 1;
            var grafico = enemigo.getData('grafico');
            grafico.clear();
            grafico.fillRectShape(linea);
        }
    }
    platano.destroy();
    enemigo.setTint(0xff0000);
    setTimeout(()=>{enemigo.setTint()},150); 
});

// this.physics.add.collider(this.potenciador, this.gfazo,(potenciador, enemigo)=>{
    
//     if(potenciador.texture.key == "sandia")
//     {
//         potenciador.body.destroy();
//         potenciador.anims.play('destruccion',true);
//         potenciador.on('animationcomplete-destruccion', ()=>{
//         potenciador.destroy();
        
//         console.log('eeeoo');
//         });
//         enemigo.setTint(0xff0000);
//         setTimeout(()=>{enemigo.setTint()},150); 
//         if(enemigo.getData('vida') == null)
//         {
//             this.graphics = this.add.graphics({
//                 fillStyle:{color: 0x1BFF00}
//             })
//             this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,25,5);
//             this.graphics.fillRectShape(this.life_bar);
//             this.graphics.setDepth(7);
//             enemigo.setData('vida', 25);
//             enemigo.setData('linea',this.life_bar);
//             enemigo.setData('grafico',this.graphics);

//         }else
//         {
//             var vida = enemigo.getData('vida');
//             if(vida - 25 <= 0)
//             {
//                 var grafico = enemigo.getData('grafico');
//                grafico.clear();
//                enemigo.destroy() ;
//                this.navesenemigasdead++;
               
//             }else{
//                 enemigo.setData('vida',vida - 25);
//                 var linea = enemigo.getData('linea');
//                 linea.x = enemigo.x-25  ;
//                 linea.width = vida - 25;
//                 var grafico = enemigo.getData('grafico');
//                 grafico.clear();
//                 grafico.fillRectShape(linea);
//             }
//         }
//     }
//     if(potenciador.texture.key == "calabaza")
//     {
//         enemigo.setVelocity(0);
//         enemigo.setAcceleration(0);
//         setTimeout(()=>{potenciador.body.destroy();},10); 
        
//         potenciador.anims.play('explotar',true);
//         potenciador.on('animationcomplete-explotar', ()=>{
//         potenciador.destroy();
//         console.log('eeeoo');
//         });
//         enemigo.setTint(0xff0000);
//         setTimeout(()=>{enemigo.setTint()},150); 
//         if(enemigo.getData('vida') == null)
//         {
//             this.graphics = this.add.graphics({
//                 fillStyle:{color: 0x1BFF00}
//             })
//             this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,38,5);
//             this.graphics.fillRectShape(this.life_bar);
//             this.graphics.setDepth(7);
//             enemigo.setData('vida', 38);
//             enemigo.setData('linea',this.life_bar);
//             enemigo.setData('grafico',this.graphics);


//         }else
//         {
//             var vida = enemigo.getData('vida');
//             if(vida - 12 <= 0)
//             {
//                 var grafico = enemigo.getData('grafico');
//                grafico.clear();
//                enemigo.destroy() ;
//                this.navesenemigasdead++;
               
//             }else{
//                 enemigo.setData('vida',vida - 12);
//                 var linea = enemigo.getData('linea');
//                 linea.x = enemigo.x - 25;
//                 linea.width = vida - 12;
//                 var grafico = enemigo.getData('grafico');
//                 grafico.clear();
//                 grafico.fillRectShape(linea);
//             }
//         }
//     }
//     if(potenciador.texture.key == "papaya")
//     {
//         enemigo.setVelocity(0);
//         enemigo.setAcceleration(0);
//         if(enemigo.getData('vida') == null)
//         {
//             this.graphics = this.add.graphics({
//                 fillStyle:{color: 0x1BFF00}
//             })
//             this.life_bar = new Phaser.Geom.Rectangle(enemigo.x-25,enemigo.y + 25,50,5);
//             this.graphics.fillRectShape(this.life_bar);
//             this.graphics.setDepth(7);
//             enemigo.setData('vida', 50);
//             enemigo.setData('linea',this.life_bar);
//             enemigo.setData('grafico',this.graphics);

//         }else
//         {
//             var vida = enemigo.getData('vida');
//             if(vida - 100 < 0)
//             {
//                 var grafico = enemigo.getData('grafico');
//                grafico.clear();
//                enemigo.destroy() ;
//                this.navesenemigasdead++;
               
//             }else{
//                 enemigo.setData('vida',vida - 100);
//                 var linea = enemigo.getData('linea');
//                 linea.x = enemigo.x-25;
//                 linea.width = vida - 100;
//                 var grafico = enemigo.getData('grafico');
//                 grafico.clear();
//                 grafico.fillRectShape(linea);
//             }
//         }
//     }
// });
     }
     text()
    {
        this.add.tween({
            targets: this.olea,
            x: 1100,
            y: 25,
            scaleX: .5,
            scaleY: .5,
           duration: 6000,
           ease: 'Power1'
        });
    }
    
}


export default nivel2;
