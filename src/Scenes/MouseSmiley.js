//Phineas Asmelash


class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");

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

    }

    create() {
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>'
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "yellowBody");

        // Create the two sprites, one for each type of smile
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "smile");


        this.input.on('pointerdown', function(pointer) {
            console.log("down");
            this.add.image(pointer.x, pointer.y, 'yellowBody');
            this.add.image(pointer.x, pointer.y, 'smile');
        }, this);
    }

}