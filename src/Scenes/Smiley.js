//Phineas Asmelash


class Smiley extends Phaser.Scene {
    constructor() {
        super("smileyScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        // Create variables to hold constant values for sprite locations
        this.bodyX = 400;
        this.bodyY = 350;

        // Define the locations of the smile and hands relative to the
        // main body location. This way, if we change the main body
        // location, the other values update too.
        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 20;

        this.leftHandX = this.bodyX - 125;
        this.lefthandY = this.bodyY + 20;

        this.rightHandX = this.bodyX + 125;
        this.rightHandY = this.bodyY + 20;
        
        this.counter = 0;
        this.smileType = 'Smile';

        this.Pkey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Shape Characters"
        // https://kenney.nl/assets/shape-characters
        this.load.setPath("./assets/");
        // body
        this.load.image("yellowBody", "yellow_body_squircle.png");
        // smiles
        this.load.image("smile", "face_a.png");
        this.load.image("smileDimple", "face_c.png");
        // hands
        this.load.image("handOpen", "hand_yellow_open.png");
        this.load.image("handPeace", "hand_yellow_peace.png");


        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Smiley.js</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "yellowBody");

        // Create the two sprites, one for each type of smile
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "smile");
        my.sprite.dimple = this.add.sprite(this.smileX, this.smileY, "smileDimple");
        
        // Create the sprite for the left and right hands
        my.sprite.leftOpenHand = this.add.sprite(this.leftHandX, this.lefthandY, "handOpen");
        my.sprite.leftOpenHand.flipX = true;   // flip sprite to have thumb on correct side
        my.sprite.rightOpenHand = this.add.sprite(this.rightHandX, this.rightHandY, "handOpen");
        my.sprite.leftPeaceHand = this.add.sprite(this.leftHandX, this.lefthandY, "handPeace");

        // Since sprites are visible when created and we only want one smile to be shown
        // at a time, make the "dimple" smile not visible to start.
        my.sprite.dimple.visible = false;

        //Polling definition of key "P"
        this.Pkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

        //Event input: dimple smile
        this.input.keyboard.on('keydown-D', (event) => {
            my.sprite.smile.visible = false;
            my.sprite.dimple.visible = true;
        });

        //Event input: regular smile
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.smile.visible = true;
            my.sprite.dimple.visible = false;
        });
    }

    update() {

        //Polling input: Peace hand
        let my = this.my;    // create an alias to this.my for readability
        if(this.Pkey.isDown) {
            my.sprite.leftOpenHand.visible = false;
            my.sprite.leftPeaceHand.visible = true;
        }
        else {
            my.sprite.leftOpenHand.visible = true;
            my.sprite.leftPeaceHand.visible = false;
        }
    }

}