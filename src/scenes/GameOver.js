export class GameOver extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        // Pantalla screamer
        const screamer = this.add.image(this.scale.width / 2, this.scale.height / 2, 'screamer')
            .setOrigin(0.5)
            .setDisplaySize(this.scale.width, this.scale.height);

        this.sound.play('scream', { volume: 1 });

        // Después de 1.5s quitar screamer y mostrar "Game Over"
        this.time.delayedCall(1500, () => {
            screamer.destroy();

            this.background1 = this.add.image(0, 0, 'background').setOrigin(0);

            this.add.text(this.scale.width * 0.5, this.scale.height * 0.5, 'Game Over', {
                fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
                stroke: '#000000', strokeThickness: 8,
                align: 'center'
            }).setOrigin(0.5);
        });
    }
}
