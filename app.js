!function(e){function t(t){for(var i,n,h=t[0],o=t[1],l=t[2],d=0,p=[];d<h.length;d++)n=h[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(c&&c(t);p.length;)p.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,h=1;h<s.length;h++){var o=s[h];0!==a[o]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},a={0:0},r=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var h=window.webpackJsonp=window.webpackJsonp||[],o=h.push.bind(h);h.push=t,h=h.slice();for(var l=0;l<h.length;l++)t(h[l]);var c=o;r.push([3,1]),s()}([,function(e,t,s){"use strict";(function(e){var i=s(0),a=s.n(i);class r extends a.a.Scene{constructor(){super("PreloadScene")}preload(){this.load.tilemapTiledJSON("level_1","assets/crystal_world_map_level_1.json"),this.load.tilemapTiledJSON("level_2","assets/crystal_world_map_level_2.json"),this.load.image("tiles-1","assets/main_lev_build_1.png"),this.load.image("tiles-2","assets/main_lev_build_2.png"),this.load.image("bg-spikes-tileset","assets/bg_spikes_tileset.png"),this.load.image("bg-spikes-dark","assets/bg_spikes_dark.png"),this.load.image("sky-play","assets/sky_play.png"),this.load.image("menu-bg","assets/background01.png"),this.load.image("back","assets/back.png"),this.load.image("iceball-1","assets/weapons/iceball_001.png"),this.load.image("iceball-2","assets/weapons/iceball_002.png"),this.load.image("fireball-1","assets/weapons/improved_fireball_001.png"),this.load.image("fireball-2","assets/weapons/improved_fireball_002.png"),this.load.image("fireball-3","assets/weapons/improved_fireball_003.png"),this.load.image("diamond","assets/collectables/diamond.png"),this.load.image("diamond-1","assets/collectables/diamond_big_01.png"),this.load.image("diamond-2","assets/collectables/diamond_big_02.png"),this.load.image("diamond-3","assets/collectables/diamond_big_03.png"),this.load.image("diamond-4","assets/collectables/diamond_big_04.png"),this.load.image("diamond-5","assets/collectables/diamond_big_05.png"),this.load.image("diamond-6","assets/collectables/diamond_big_06.png"),this.load.spritesheet("player","assets/player/move_sprite_1.png",{frameWidth:32,frameHeight:38,spacing:32}),this.load.spritesheet("player-slide-sheet","assets/player/slide_sheet_2.png",{frameWidth:32,frameHeight:38,spacing:32}),this.load.spritesheet("birdman","assets/enemy/enemy_sheet.png",{frameWidth:32,frameHeight:64,spacing:32}),this.load.spritesheet("snaky","assets/enemy/enemy_sheet_2.png",{frameWidth:32,frameHeight:64,spacing:32}),this.load.spritesheet("player-throw","assets/player/throw_attack_sheet_1.png",{frameWidth:32,frameHeight:38,spacing:32}),this.load.spritesheet("hit-sheet","assets/weapons/hit_effect_sheet.png",{frameWidth:32,frameHeight:32}),this.load.spritesheet("sword-default","assets/weapons/sword_sheet_1.png",{frameWidth:52,frameHeight:32,spacing:16}),this.load.audio("theme","assets/music/theme_music.wav"),this.load.audio("projectile-launch","assets/music/projectile_launch.wav"),this.load.audio("step","assets/music/step_mud.wav"),this.load.audio("jump","assets/music/jump.wav"),this.load.audio("swipe","assets/music/swipe.wav"),this.load.audio("coin-pickup","assets/music/coin_pickup.wav");e.env.FB_ENV;this.load.once("complete",(()=>{this.startGame()}))}startGame(){this.registry.set("level",1),this.registry.set("unlocked-levels",1),this.scene.start("MenuScene")}}t.a=r}).call(this,s(2))},,function(e,t,s){"use strict";s.r(t);var i=s(0),a=s.n(i);var r=class{constructor(e,t,s,i=1,r){this.bar=new a.a.GameObjects.Graphics(e),this.x=t/i,this.y=s/i,this.scale=i,this.value=r,this.size={width:40,height:8},this.pixelPerHealth=this.size.width/this.value,e.add.existing(this.bar),this.draw(this.x,this.y,this.scale)}decrease(e){this.value=e<=0?0:e,this.draw(this.x,this.y,this.scale)}draw(e,t,s){this.bar.clear();const{width:i,height:a}=this.size;this.bar.fillStyle(0),this.bar.fillRect(e,t,i+2,a+2),this.bar.fillStyle(16777215),this.bar.fillRect(e+2,t+2,i-2,a-2);const r=Math.floor(this.pixelPerHealth*this.value);return r<=this.size.width/3?this.bar.fillStyle(16711680):this.bar.fillStyle(65280),r>0&&this.bar.fillRect(e+2,t+2,r-2,a-2),this.bar.setScrollFactor(0,0).setScale(s)}};class n extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i,a){super(e,t,s),e.add.existing(this),e.physics.add.existing(this),this.target=null,this.effectName=i,this.impactPosition=a,this.on("animationcomplete",(e=>{e.key===this.effectName&&this.destroy()}),this)}preUpdate(e,t){super.preUpdate(e,t),this.placeEffect()}placeEffect(){if(!this.target||!this.body)return;const e=this.target.getCenter();this.body.reset(e.x,this.impactPosition.y)}playOn(e){this.target=e,this.play(this.effectName,!0),this.placeEffect()}}var h=n;var o=class{constructor(e){this.scene=e}playEffectOn(e,t,s){new h(this.scene,0,0,e,s).playOn(t)}};class l extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),e.add.existing(this),e.physics.add.existing(this),this.speed=300,this.maxDistance=300,this.traveledDistance=0,this.damage=10,this.cooldown=500,this.body.setSize(this.width-13,this.height-20),this.effectManager=new o(this.scene)}preUpdate(e,t){super.preUpdate(e,t),this.traveledDistance+=this.body.deltaAbsX(),this.isOutOfRange()&&(this.body.reset(0,0),this.activateProjectile(!1),this.traveledDistance=0)}fire(e,t,s){this.activateProjectile(!0),this.body.reset(e,t),this.setVelocityX(this.speed),s&&this.play(s,!0)}deliversHit(e){this.activateProjectile(!1),this.traveledDistance=0;const t={x:this.x,y:this.y};this.body.reset(0,0),this.effectManager.playEffectOn("hit-effect",e,t)}activateProjectile(e){this.setActive(e),this.setVisible(e)}isOutOfRange(){return this.traveledDistance&&this.traveledDistance>=this.maxDistance}}var c=l;const d=()=>(new Date).getTime();class p extends a.a.Physics.Arcade.Group{constructor(e,t){super(e.physics.world,e),this.createMultiple({frameQuantity:5,active:!1,visible:!1,key:t,classType:c}),this.timeFromLastProjectile=null}fireProjectile(e,t){const s=this.getFirstDead(!1);if(!s)return;if(this.timeFromLastProjectile&&this.timeFromLastProjectile+s.cooldown>d())return;const i=e.getCenter();let r;e.lastDirection===a.a.Physics.Arcade.FACING_RIGHT?(s.speed=Math.abs(s.speed),s.setFlipX(!1),r=i.x+10):(s.speed=-Math.abs(s.speed),s.setFlipX(!0),r=i.x-10),s.fire(r,i.y,t),this.timeFromLastProjectile=d()}}var y=p;class u extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),e.add.existing(this),e.physics.add.existing(this),this.damage=15,this.attackSpeed=1e3,this.weaponAnim=i+"-swing",this.wielder=null,this.effectManager=new o(this.scene),this.setOrigin(.5,1),this.setDepth(10),this.activateWeapon(!1),this.on("animationcomplete",(e=>{e.key===this.weaponAnim&&(this.activateWeapon(!1),this.body.checkCollision.none=!1,this.body.reset(0,0))}))}preUpdate(e,t){super.preUpdate(e,t),this.active&&(this.wielder.lastDirection===a.a.Physics.Arcade.FACING_RIGHT?(this.setFlipX(!1),this.body.reset(this.wielder.x+15,this.wielder.y)):(this.setFlipX(!0),this.body.reset(this.wielder.x-15,this.wielder.y)))}swing(e){this.wielder=e,this.activateWeapon(!0),this.anims.play(this.weaponAnim,!0)}deliversHit(e){const t={x:this.x,y:this.getRightCenter().y};this.effectManager.playEffectOn("hit-effect",e,t),this.body.checkCollision.none=!0}activateWeapon(e){this.setActive(e),this.setVisible(e)}}var m=u,g={addCollider(e,t,s){return this.scene.physics.add.collider(this,e,t,null,s||this),this},addOverlap(e,t,s){return this.scene.physics.add.overlap(this,e,t,null,s||this),this},bodyPositionDifferenceX:0,prevRay:null,prevHasHit:null,raycast(e,t,{raylength:s=30,precision:i=0,steepnes:r=1}){const{x:n,y:h,width:o,halfHeight:l}=e;if(this.bodyPositionDifferenceX+=e.x-e.prev.x,Math.abs(this.bodyPositionDifferenceX)<=i&&null!==this.prevHasHit)return{ray:this.prevRay,hasHit:this.prevHasHit};const c=new a.a.Geom.Line;let d=!1;switch(e.facing){case a.a.Physics.Arcade.FACING_RIGHT:c.x1=n+o,c.y1=h+l,c.x2=c.x1+s*r,c.y2=c.y1+s;break;case a.a.Physics.Arcade.FACING_LEFT:c.x1=n,c.y1=h+l,c.x2=c.x1-s*r,c.y2=c.y1+s}const p=t.getTilesWithinShape(c);return p.length>0&&(d=this.prevHasHit=p.some((e=>-1!==e.index))),this.prevRay=c,this.bodyPositionDifferenceX=0,{ray:c,hasHit:d}}},f={isPlayingAnims(e){return this.anims.isPlaying&&this.anims.getCurrentKey()===e}};class b extends a.a.Events.EventEmitter{constructor(){super()}}var v=new b;class w extends a.a.Physics.Arcade.Sprite{constructor(e,t,s){super(e,t,s,"player"),e.add.existing(this),e.physics.add.existing(this),Object.assign(this,g),Object.assign(this,f),this.init(),this.initEvents()}init(){this.gravity=500,this.playerSpeed=150,this.jumpCount=0,this.consecutiveJumps=1,this.hasBeenHit=!1,this.bounceVelocity=150,this.cursors=this.scene.input.keyboard.createCursorKeys(),this.projectiles=new y(this.scene,"iceball-1"),this.meleeWeapon=new m(this.scene,0,0,"sword-default"),this.jumpSound=this.scene.sound.add("jump",{volume:.2}),this.projectileSound=this.scene.sound.add("projectile-launch",{volume:.2}),this.stepSound=this.scene.sound.add("step",{volume:.2}),this.swipeSound=this.scene.sound.add("swipe",{volume:.2}),this.lastDirection=a.a.Physics.Arcade.FACING_RIGHT,this.health=100,this.hp=new r(this.scene,this.scene.config.leftTopCorner.x+5,this.scene.config.leftTopCorner.y+5,2,this.health),this.isSliding=!1,this.body.setSize(20,36),this.body.setGravityY(this.gravity),this.setCollideWorldBounds(!0),this.setOrigin(.5,1),(e=>{e.create({key:"idle",frames:e.generateFrameNumbers("player",{start:0,end:8}),frameRate:8,repeat:-1}),e.create({key:"run",frames:e.generateFrameNumbers("player",{start:11,end:16}),frameRate:8,repeat:-1}),e.create({key:"jump",frames:e.generateFrameNumbers("player",{start:17,end:23}),frameRate:2,repeat:1}),e.create({key:"throw",frames:e.generateFrameNumbers("player-throw",{start:0,end:7}),frameRate:14,repeat:0}),e.create({key:"slide",frames:e.generateFrameNumbers("player-slide-sheet",{start:0,end:2}),frameRate:20,repeat:0})})(this.scene.anims),this.handleAttacks(),this.handleMovements(),this.scene.time.addEvent({delay:400,repeat:-1,callbackScope:this,callback:()=>{this.isPlayingAnims("run")&&this.stepSound.play()}})}initEvents(){this.scene.events.on(a.a.Scenes.Events.UPDATE,this.update,this)}update(){if(this.hasBeenHit||this.isSliding||this.hasBeenHit||!this.body)return;const{left:e,right:t,space:s}=this.cursors,i=a.a.Input.Keyboard.JustDown(s),r=this.body.onFloor();this.getBounds().top>this.scene.config.height&&v.emit("PLAYER_LOSE"),e.isDown?(this.setVelocityX(-this.playerSpeed),this.setFlipX(!0),this.lastDirection=this.lastDirection=a.a.Physics.Arcade.FACING_LEFT):t.isDown?(this.setVelocityX(this.playerSpeed),this.lastDirection=this.lastDirection=a.a.Physics.Arcade.FACING_RIGHT,this.setFlipX(!1)):this.setVelocityX(0),i&&(r||this.jumpCount<this.consecutiveJumps)&&(this.jumpSound.play(),this.setVelocityY(2*-this.playerSpeed),this.jumpCount++),r&&(this.jumpCount=0),this.isPlayingAnims("throw")||this.isPlayingAnims("slide")||(r?0!==this.body.velocity.x?this.play("run",!0):this.play("idle",!0):this.play("jump",!0))}handleAttacks(){this.scene.input.keyboard.on("keydown-Q",(()=>{this.isSliding||(this.projectileSound.play(),this.projectiles.fireProjectile(this,"iceball"))}))}handleMovements(){this.scene.input.keyboard.on("keydown-DOWN",(()=>{this.body.onFloor()&&(this.body.setSize(this.width,this.height/2),this.setOffset(0,this.height/2),this.setVelocityX(0),this.play("slide",!0),this.isSliding=!0)})),this.scene.input.keyboard.on("keyup-DOWN",(()=>{this.isSliding=!1,this.body.setSize(this.width,38),this.setOffset(0,0)})),this.scene.input.keyboard.on("keydown-E",(()=>{this.timeFromLastSwing&&this.timeFromLastSwing+this.meleeWeapon.attackSpeed>d()||(this.swipeSound.play(),this.play("throw",!0),console.log("melee"),this.meleeWeapon.swing(this),this.timeFromLastSwing=d())}))}playDamageTween(){return this.scene.tweens.add({targets:this,duration:100,repeat:-1,tint:16711680})}bounceOff(e){e.body?this.body.touching.right?this.setVelocityX(-this.bounceVelocity):this.setVelocityX(this.bounceVelocity):this.body.blocked.right?this.setVelocityX(-this.bounceVelocity):this.setVelocityX(this.bounceVelocity),setTimeout((()=>this.setVelocityY(-this.bounceVelocity)),0)}takesHit(e){if(this.hasBeenHit)return;if(this.health-=e.damage||e.properties.damage||0,this.health<=0)return v.emit("PLAYER_LOSE"),void(this.hasBeenHit=!1);this.hasBeenHit=!0,this.bounceOff(e);const t=this.playDamageTween();this.hp.decrease(this.health),e.deliversHit&&e.deliversHit(this),this.scene.time.delayedCall(500,(()=>{this.hasBeenHit=!1,t.stop(),this.clearTint()}))}}var k=w;class S extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),this.config=e.config,e.add.existing(this),e.physics.add.existing(this),Object.assign(this,g),Object.assign(this,f),this.init(),this.initEvents()}init(){this.gravity=500,this.speed=50,this.timeFromLastTurn=0,this.maxPatrolDistance=100,this.damage=20,this.health=20,this.currentPatrolDistance=0,this.platformCollidersLayer=null,this.rayGraphics=this.scene.add.graphics({lineStyle:{width:2,color:11141290}}),this.body.setGravityY(this.gravity),this.setCollideWorldBounds(!0),this.setImmovable(!0),this.setOrigin(.5,1),this.setVelocityX(this.speed)}initEvents(){this.scene.events.on(a.a.Scenes.Events.UPDATE,this.update,this)}update(e,t){if(this.getBounds().bottom>600)return this.scene.events.removeListener(a.a.Scenes.Events.UPDATE,this.update,this),this.setActive(!1),this.rayGraphics.clear(),void this.destroy();this.patrol(e)}patrol(e){if(!this.body||!this.body.onFloor())return;this.currentPatrolDistance+=Math.abs(this.body.deltaX());const{ray:t,hasHit:s}=this.raycast(this.body,this.platformCollidersLayer,{raylength:30,precision:1,steepness:.1});(!s||this.currentPatrolDistance>=this.maxPatrolDistance)&&this.timeFromLastTurn+100<e&&(this.setFlipX(!this.flipX),this.setVelocityX(this.speed=-this.speed),this.timeFromLastTurn=e,this.currentPatrolDistance=0),this.config.debug&&t&&(this.rayGraphics.clear(),this.rayGraphics.strokeLineShape(t))}setPlatformColliders(e){this.platformCollidersLayer=e}deliversHit(){}takesHit(e){e.deliversHit(this),this.health-=e.damage,console.log(this.health),this.health<=0&&(console.log("DEAD!"),this.setTint(16711680),this.setVelocity(0,-200),this.setActive(!1),this.body.checkCollision.none=!0,this.setCollideWorldBounds(!1))}}var x=S;var _=class extends x{constructor(e,t,s){super(e,t,s,"birdman"),(e=>{e.create({key:"birdman-idle",frames:e.generateFrameNumbers("birdman",{start:0,end:12}),frameRate:8,repeat:-1}),e.create({key:"birdman-hurt",frames:e.generateFrameNumbers("birdman",{start:25,end:26}),frameRate:10,repeat:0})})(e.anims)}init(){super.init(),this.setSize(20,45),this.setOffset(7,20)}update(e,t){super.update(e,t),this.active&&(this.isPlayingAnims("birdman-hurt")||this.play("birdman-idle",!0))}takesHit(e){super.takesHit(e),this.play("birdman-hurt",!0)}};const P={Birdman:_,Snaky:class extends x{constructor(e,t,s){super(e,t,s,"snaky"),(e=>{e.create({key:"snaky-walk",frames:e.generateFrameNumbers("snaky",{start:0,end:8}),frameRate:8,repeat:-1}),e.create({key:"snaky-hurt",frames:e.generateFrameNumbers("snaky",{start:21,end:22}),frameRate:10,repeat:0})})(e.anims)}init(){super.init(),this.speed=25,this.projectiles=new y(this.scene,"fireball-1"),this.timeFromLastAttack=0,this.attackDelay=this.getAttackDelay(),this.lastDirection=null,this.setSize(this.width-20,45),this.setOffset(10,15),this.health=25}update(e,t){super.update(e,t),this.active&&(this.body.velocity.x>0?this.lastDirection=Phaser.Physics.Arcade.FACING_RIGHT:this.lastDirection=Phaser.Physics.Arcade.FACING_LEFT,this.timeFromLastAttack+this.attackDelay<=e&&(this.projectiles.fireProjectile(this,"fireball"),this.timeFromLastAttack=e,this.attackDelay=this.getAttackDelay()),this.isPlayingAnims("snaky-hurt")||this.play("snaky-walk",!0))}getAttackDelay(){return Phaser.Math.Between(2500,4e3)}takesHit(e){super.takesHit(e),this.play("snaky-hurt",!0)}}};class C extends a.a.GameObjects.Group{constructor(e){super(e),Object.assign(this,g)}getProjectiles(){const e=new a.a.GameObjects.Group;return this.getChildren().forEach((t=>{t.projectiles&&e.addMultiple(t.projectiles.getChildren())})),e}getTypes(){return P}}var O=C;class j extends a.a.Physics.Arcade.Sprite{constructor(e,t,s,i){super(e,t,s,i),e.add.existing(this),this.score=1,this.setOrigin(0,1),e.tweens.add({targets:this,y:this.y-3,duration:a.a.Math.Between(1500,2500),repeat:-1,easy:"linear",yoyo:!0})}}var A=j;class E extends a.a.Physics.Arcade.StaticGroup{constructor(e){super(e.physics.world,e),this.createFromConfig({classType:A})}mapProperties(e){return e&&0!==e.length?e.reduce(((e,t)=>(e[t.name]=t.value,e)),{}):{}}addFromLayer(e){const{score:t,type:s}=this.mapProperties(e.properties);e.objects.forEach((e=>{const i=this.get(e.x,e.y,s),a=this.mapProperties(e.properties);i.score=a.score||t}))}}var F=E;class L extends a.a.GameObjects.Container{constructor(e,t,s){super(e,t,s),e.add.existing(this);const{rightTopCorner:i}=e.config;this.containerWidth=70,this.setPosition(i.x-this.containerWidth,i.y+10),this.setScrollFactor(0),this.setDepth(99),this.fontSize=20,this.setupList()}setupList(){const e=this.createScoreboard();this.add([e]);let t=0;this.list.forEach((e=>{e.setPosition(e.x,e.y+t),t+=20}))}createScoreboard(){const e=this.scene.add.text(0,0,"0",{fontSize:this.fontSize+"px",fill:"#fff"}),t=this.scene.add.image(e.width+5,0,"diamond").setOrigin(0).setScale(1.3),s=this.scene.add.container(0,0,[e,t]);return s.setName("scoreBoard"),s}updateScoreboard(e){const[t,s]=this.getByName("scoreBoard").list;t.setText(e),s.setX(t.width+5)}}var D=L;class H extends a.a.Scene{constructor(e){super("PlayScene"),this.config=e}create({gameStatus:e}){this.score=0,this.hud=new D(this,0,0),this.playBgMusic(),this.collectSound=this.sound.add("coin-pickup",{volume:.2});const t=this.createMap();(e=>{e.create({key:"hit-effect",frames:e.generateFrameNumbers("hit-sheet",{start:0,end:4}),frameRate:10,repeat:0}),e.create({key:"sword-default-swing",frames:e.generateFrameNumbers("sword-default",{start:0,end:2}),frameRate:20,repeat:0}),e.create({key:"fireball",frames:[{key:"fireball-1"},{key:"fireball-2"},{key:"fireball-3"}],frameRate:5,repeat:-1}),e.create({key:"iceball",frames:[{key:"iceball-1"},{key:"iceball-2"}],frameRate:5,repeat:-1}),e.create({key:"diamond-shine",frames:[{key:"diamond-1"},{key:"diamond-2"},{key:"diamond-3"},{key:"diamond-4"},{key:"diamond-5"},{key:"diamond-6"}],frameRate:5,repeat:-1})})(this.anims);const s=this.createLayers(t),i=this.getPlayerZones(s.playerZones),a=this.createPlayer(i.start),r=this.createEnemies(s.enemySpawns,s.platformsColliders),n=this.createCollectables(s.collectables);this.createEnemyColliders(r,{colliders:{platformsColliders:s.platformsColliders,player:a}}),this.createPlayerColliders(a,{colliders:{platformsColliders:s.platformsColliders,projectiles:r.getProjectiles(),collectables:n,traps:s.traps}}),this.createBG(t),this.createBackButton(),this.createEndOfLevel(i.end,a),this.setupFollowupCameraOn(a),"PLAYER_LOSE"!==e&&this.createGameEvents()}playBgMusic(){this.sound.get("theme")||this.sound.add("theme",{loop:!0,volume:.03}).play()}createMap(){const e=this.make.tilemap({key:"level_"+this.getCurrentLevel()});return e.addTilesetImage("main_lev_build_1","tiles-1"),e.addTilesetImage("bg_spikes_tileset","bg-spikes-tileset"),e}createLayers(e){const t=e.getTileset("main_lev_build_1"),s=e.getTileset("bg_spikes_tileset");e.createStaticLayer("distance",s).setDepth(-12);const i=e.createStaticLayer("platforms_colliders",t).setAlpha(0),a=e.createStaticLayer("environment",t).setDepth(-2),r=e.createStaticLayer("platforms",t),n=e.getObjectLayer("player_zones"),h=e.getObjectLayer("enemy_spawns"),o=e.getObjectLayer("collectables"),l=e.createStaticLayer("traps",t);return i.setCollisionByProperty({collides:!0}),l.setCollisionByExclusion(-1),{environment:a,platforms:r,platformsColliders:i,playerZones:n,enemySpawns:h,collectables:o,traps:l}}createBG(e){const t=e.getObjectLayer("distance_bg").objects[0];this.spikesImage=this.add.tileSprite(t.x,t.y,this.config.width,t.height,"bg-spikes-dark").setOrigin(0,1).setDepth(-10).setScrollFactor(0,1),this.skyImage=this.add.tileSprite(0,0,this.config.width,180,"sky-play").setOrigin(0,0).setDepth(-11).setScale(1.1).setScrollFactor(0,1)}createBackButton(){this.add.image(this.config.rightBottomCorner.x,this.config.rightBottomCorner.y,"back").setOrigin(1).setScrollFactor(0).setScale(2).setInteractive().on("pointerup",(()=>{this.scene.start("MenuScene")}))}createGameEvents(){v.on("PLAYER_LOSE",(()=>{console.log("Dead!"),this.scene.restart({gameStatus:"PLAYER_LOSE"})}))}createCollectables(e){const t=new F(this).setDepth(-1);return t.addFromLayer(e),t.playAnimation("diamond-shine"),t}createPlayer(e){return new k(this,e.x,e.y)}createEnemies(e,t){const s=new O(this),i=s.getTypes();return e.objects.forEach(((e,a)=>{const r=new i[e.type](this,e.x,e.y);r.setPlatformColliders(t),s.add(r)})),s}onPlayerCollision(e,t){t.takesHit(e)}onHit(e,t){e.takesHit(t)}onCollect(e,t){this.score+=t.score,this.hud.updateScoreboard(this.score),this.collectSound.play(),t.disableBody(!0,!0)}createEnemyColliders(e,{colliders:t}){e.addCollider(t.platformsColliders).addCollider(t.player,this.onPlayerCollision).addCollider(t.player.projectiles,this.onHit).addOverlap(t.player.meleeWeapon,this.onHit)}createPlayerColliders(e,{colliders:t}){e.addCollider(t.platformsColliders).addCollider(t.projectiles,this.onHit).addCollider(t.traps,this.onHit).addOverlap(t.collectables,this.onCollect,this)}setupFollowupCameraOn(e){const{height:t,width:s,mapOffset:i,zoomFactor:a}=this.config;this.physics.world.setBounds(0,0,s+i,t+200),this.cameras.main.setBounds(0,0,s+i,t).setZoom(a),this.cameras.main.startFollow(e)}getPlayerZones(e){const t=e.objects;return{start:t.find((e=>"startZone"===e.name)),end:t.find((e=>"endZone"===e.name))}}getCurrentLevel(){return this.registry.get("level")||1}createEndOfLevel(e,t){const s=this.physics.add.sprite(e.x,e.y,"end").setAlpha(0).setSize(5,this.config.height).setOrigin(.5,1),i=this.physics.add.overlap(t,s,(()=>{i.active=!1,this.registry.get("level")!==this.config.lastLevel?(this.registry.inc("level",1),this.registry.inc("unlocked-levels",1),this.scene.restart({gameStatus:"LEVEL_COMPLETED"})):this.scene.start("CreditsScene")}))}update(){this.spikesImage.tilePositionX=.3*this.cameras.main.scrollX,this.skyImage.tilePositionX=.1*this.cameras.main.scrollX}}var G=H,T=s(1);class B extends a.a.Scene{constructor(e,t){super(e),this.config=t,this.screenCenter=[t.width/2,t.height/2],this.fontSize=75,this.lineHeight=82,this.fontOptions={fontSize:this.fontSize+"px",fill:"#713E01"}}create(){if(this.add.image(0,0,"menu-bg").setOrigin(0).setScale(2.7),this.config.canGoBack){this.add.image(this.config.width-10,this.config.height-10,"back").setOrigin(1).setScale(2).setInteractive().on("pointerup",(()=>{this.scene.start("MenuScene")}))}}createMenu(e,t){let s=0;e.forEach((e=>{const i=[this.screenCenter[0],this.screenCenter[1]+s];e.textGO=this.add.text(...i,e.text,this.fontOptions).setOrigin(.5,1),s+=this.lineHeight,t(e)}))}}var M=B;var R=class extends M{constructor(e){super("MenuScene",e),this.menu=[{scene:"PlayScene",text:"Play"},{scene:"LevelScene",text:"Levels"},{scene:null,text:"Exit"}]}create(){super.create(),this.createMenu(this.menu,this.setupMenuEvents.bind(this))}setupMenuEvents(e){const t=e.textGO;t.setInteractive(),t.on("pointerover",(()=>{t.setStyle({fill:"#ff0"})})),t.on("pointerout",(()=>{t.setStyle({fill:"#713E01"})})),t.on("pointerup",(()=>{e.scene&&this.scene.start(e.scene),"Exit"===e.text&&this.game.destroy(!0)}))}};var N=class extends M{constructor(e){super("LevelScene",{...e,canGoBack:!0})}create(){super.create(),this.menu=[];const e=this.registry.get("unlocked-levels");for(let t=1;t<=e;t++)this.menu.push({scene:"PlayScene",text:"Level "+t,level:t});this.createMenu(this.menu,this.setupMenuEvents.bind(this))}setupMenuEvents(e){const t=e.textGO;t.setInteractive(),t.on("pointerover",(()=>{t.setStyle({fill:"#ff0"})})),t.on("pointerout",(()=>{t.setStyle({fill:"#713E01"})})),t.on("pointerup",(()=>{e.scene&&(this.registry.set("level",e.level),this.scene.start(e.scene)),"Exit"===e.text&&this.game.destroy(!0)}))}};var X=class extends M{constructor(e){super("CreditsScene",{...e,canGoBack:!0}),this.menu=[{scene:null,text:"THANKS FOR PLAYING"},{scene:null,text:"<3 h"}]}create(){super.create(),this.createMenu(this.menu,(()=>{}))}};const I=document.body.offsetWidth,V=600,W=1.5,z={mapOffset:1600>I?1600-I:0,width:I,height:V,zoomFactor:W,debug:!1,leftTopCorner:{x:(I-I/W)/2,y:100},rightTopCorner:{x:I/W+(I-I/W)/2,y:100},rightBottomCorner:{x:I/W+(I-I/W)/2,y:500},lastLevel:2},U=[T.a,R,N,G,X],Y=e=>new e(z),J={type:a.a.AUTO,...z,pixelArt:!0,physics:{default:"arcade",arcade:{debug:z.debug}},scene:U.map(Y)};new a.a.Game(J)}]);