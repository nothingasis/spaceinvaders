//Nurthin Aziz
//Mockup of spaceinvaders for the BBC microbit
//Canvas is a 5x5 LED Matrix
//

//Globals
let player: game.LedSprite = null;
let enemy: game.LedSprite = null;
let pbullet: game.LedSprite = null;
let ebullet: game.LedSprite = null;

//Button Map
//left
input.onButtonPressed(Button.A, () => {
    player.move(-1);
})
//right
input.onButtonPressed(Button.B, () => {
    player.move(1);
})
//shoot
input.onButtonPressed(Button.AB, () => {
    pbullet = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    for (let i = 0; i < 4; i++) {
        pbullet.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    pbullet.delete()
    if (pbullet.get(LedSpriteProperty.X) == enemy.get(LedSpriteProperty.X) && pbullet.get(LedSpriteProperty.Y) == enemy.get(LedSpriteProperty.Y)) {
        basic.showString("WIN!")
    }
})
//Build players
enemy = game.createSprite(0, 0);
player = game.createSprite(4, 4);

//Enemy movement
while (true) {
    for (let i = 0; i < 4; i++) {
        enemy.change(LedSpriteProperty.X, 1);
        basic.pause(100);
        if (enemy.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X)) {
            ebullet = game.createSprite(enemy.get(LedSpriteProperty.X), enemy.get(LedSpriteProperty.Y));
            for (let i = 0; i < 4; i++) {
                ebullet.change(LedSpriteProperty.Y, 1);
                basic.pause(100);
                if (ebullet.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X) && ebullet.get(LedSpriteProperty.Y) == player.get(LedSpriteProperty.Y)) {
                    game.gameOver();
                }
            }
            ebullet.delete();
        }
    }

    for (let i = 0; i < 4; i++) {
        enemy.change(LedSpriteProperty.X, -1);
        basic.pause(100);
        if (enemy.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X)) {
            ebullet = game.createSprite(enemy.get(LedSpriteProperty.X), enemy.get(LedSpriteProperty.Y));
            for (let i = 0; i < 4; i++) {
                ebullet.change(LedSpriteProperty.Y, 1);
                basic.pause(100);
                if (ebullet.get(LedSpriteProperty.X) == player.get(LedSpriteProperty.X) && ebullet.get(LedSpriteProperty.Y) == player.get(LedSpriteProperty.Y)) {
                    game.gameOver();
                }
            }
            ebullet.delete();
        }
    }
}
