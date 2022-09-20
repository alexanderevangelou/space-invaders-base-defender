namespace SpriteKind {
    export const defense = SpriteKind.create()
    export const brokenDefense = SpriteKind.create()
    export const missleDefense = SpriteKind.create()
    export const superProjectile = SpriteKind.create()
    export const brokenShip = SpriteKind.create()
}
namespace StatusBarKind {
    export const turrets = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursurPostion_row += -1
    if (cursurPostion_row <= 0) {
        cursurPostion_row = 6
    }
    tiles.placeOnTile(cursur, tiles.getTileLocation(cursurPostion_col, cursurPostion_row))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursurPostion_col += -1
    if (cursurPostion_col <= 0) {
        cursurPostion_col = 10
    }
    tiles.placeOnTile(cursur, tiles.getTileLocation(cursurPostion_col, cursurPostion_row))
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.missleDefense, function (sprite, otherSprite) {
    broken_turret = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e f . . . . . 
        . e e b b b b b f f e . . . . . 
        e e e b b b b f f c e . . . . . 
        f e e b b b f f b c e . . . . . 
        e f e b f f b b b c e e e f f e 
        e f e f b b b b b c e e e f f e 
        e e f b b b b b b c e e e f f e 
        e f f b b b b b b c e . . . . . 
        f f f b b b b b b c e . . . . . 
        f e f b b b b b b c e . . . . . 
        f f f c c c c c c c e . . . . . 
        . f f f f f f f f f f . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.brokenDefense)
    broken_turret.y = otherSprite.y
    broken_turret.x = otherSprite.x
    otherSprite.destroy()
    sprite.destroy()
    if (achivement_3 == false) {
        game.setDialogFrame(img`
            ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffbbbbffffbbfffbbbbfffbbbbffffffffbbffffffffff
            fffbbbbbbbfbbbbfbbbbbbfbbbbbbffbbbfbbbbffbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbff
            fcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbff
            fcccbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbccbbbbccbff
            fcfcbbbbbbbbbcccccbbbbbbbbbbbcccccbbbcccbbbcccff
            fcccbbbcccbbbcfffcbbbbcccccbbcfffcbbccccbbbcccff
            fcfcbbcccccbbcccccbbbbcccccbbcccccbbcfccbbbcccff
            fcccbbcfcfcbbcfffcbccbcfcccbbcfffcbbccccccccccff
            fcfcbbcccccbbcccccbccbcccfcbbcccccccccfcccfffccc
            ccccbbcfcfcbbcfffcbccbcccccbbcfffccccccccccccccc
            ccfcbcccccccccccccbccbcfcccccccccccccfccccfffccc
            ccccbccfcfccccfffccccccccfccccfffccccccccccccccc
            ccfcbcccccccccccccccccccccccccccccccccfcccfffccc
            cccccccccccccccccccccccfcccccccccccccccccccccccc
            cccccccccccccccccccccccccfcccccccccccfccccfffccc
            .cccccccccccccccccccccccccccccccccccccccccccccc.
            ..cccccccccccccccccccccccccccccccccccccccccccc..
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . e e e e e e e e f . . . . . 
            . e e b b b b b f f e . . . . . 
            e e e b b b b f f c e . . . . . 
            f e e b b b f f b c e . . . . . 
            e f e b f f b b b c e e e f f e 
            e f e f b b b b b c e e e f f e 
            e e f b b b b b b c e e e f f e 
            e f f b b b b b b c e . . . . . 
            f f f b b b b b b c e . . . . . 
            f e f b b b b b b c e . . . . . 
            f f f c c c c c c c e . . . . . 
            . f f f f f f f f f f . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("achivment: malfuction...", DialogLayout.Full)
        achivement_3 = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.missleDefense, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        otherSprite.destroy()
        statusbar.value += 50
    }
})
sprites.onOverlap(SpriteKind.superProjectile, SpriteKind.brokenShip, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 100)
    otherSprite.destroy(effects.disintegrate, 100)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile5`, function (sprite, location) {
    info.changeLifeBy(-1)
    scene.cameraShake(3, 2000)
    if (true) {
        sprite.x += 6
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursurPostion_row += 1
    if (cursurPostion_row <= 0) {
        cursurPostion_row = 6
    }
    tiles.placeOnTile(cursur, tiles.getTileLocation(cursurPostion_col, cursurPostion_row))
})
sprites.onOverlap(SpriteKind.missleDefense, SpriteKind.defense, function (sprite, otherSprite) {
    if (achivement_1 == false) {
        game.setDialogFrame(img`
            ..................................................................
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333113333333333333311333333333333331133333333333333113.
            .3333333333331111333333333333111133333333333311113333333333331111.
            .3333333333331111333333333333111133333333333311113333333333331111.
            .3113333333111111311333333311111131133333331111113113333333111111.
            .1111333311111111111133331111111111113333111111111111333311111111.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333113333333333333311333333333333331133333333333333113333333333.
            .3311111133333333331111113333333333111111333333333311111133333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333333333333333333333333333333333333333333333333333333333333.
            .3333333666333333333333366333333333333336633333333333336663333333.
            .3333336676633333333333666633333333333366663333333333366766333333.
            .3333336777666333333333677633333333333367763333333336667776333333.
            .3333336777676333333663677633333333366367763333333336767776333333.
            .3336636777676333333676677633333333367667763333333336767776366333.
            .3367636777676333333676677636633333367667763663333336767776367633.
            .3367666777776333333676677667633333367667766763333336777776667633.
            .3367666777663333333677777667633333367777766763333333667776667633.
            .3366777777633333333667777677633333366777767763333333367777776633.
            .3336666777633366663366777776336666336677777633666633367776666333.
            .3333336777636667766636777666666776663677766666677666367776333333.
            .3333336777666777777666777666677777766677766667777776667776333333.
            .3666666777667777777766777666777777776677766677777777667776666663.
            .6677766777677777777776777667777777777677766777777777767776677766.
            .6777776777677777777776777667777777777677766777777777767776777776.
            ..................................................................
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . e e e e e e e e e e e e f e 
            . e e d d d d d d b e e e e f e 
            e e e d d d d d d b e . . . . . 
            e e e d d d d d d b e . . . . . 
            e e e d d d d d d b e e e f f e 
            e e e d d d d d d b e e e f f e 
            e e e d d d d d d b e e e f f e 
            e e e d d d d d d b e . . . . . 
            e e e d d d d d d b e . . . . . 
            c e e d d d d d d b e e e e f e 
            c c e b b b b b b b e e e e f e 
            . c c c c c c c c c c c c c c c 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("achivment: super turret", DialogLayout.Full)
        achivement_1 = true
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.brokenShip, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 100)
    otherSprite.destroy(effects.disintegrate, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (statusbar.value != 0) {
        if (cursur.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
            if (Math.percentChance(50)) {
                missle_turret = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . e e e e e e e e e . . . . . 
                    . e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e e e f f e 
                    e e e d d d d d d b e e e f f e 
                    e e e d d d d d d b e e e f f e 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    c e e d d d d d d b e . . . . . 
                    c c e b b b b b b b e . . . . . 
                    . c c c c c c c c c c . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.missleDefense)
                tiles.placeOnTile(missle_turret, tiles.getTileLocation(cursurPostion_col, cursurPostion_row))
                statusbar.value += -50
            } else {
                turret = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . e e e e e e e e e e e e f e 
                    . e e d d d d d d b e e e e f e 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    e e e d d d d d d b e . . . . . 
                    c e e d d d d d d b e e e e f e 
                    c c e b b b b b b b e e e e f e 
                    . c c c c c c c c c c c c c c c 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.defense)
                tiles.placeOnTile(turret, tiles.getTileLocation(cursurPostion_col, cursurPostion_row))
                statusbar.value += -50
            }
        }
    }
})
sprites.onOverlap(SpriteKind.superProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
    broken_enemy = sprites.create(img`
        . . . . . . . . . . . . . . f e 
        . . . . . . . . . . . . . f e f 
        . . . . . . . . . . . . e f 2 f 
        . . . . . . . . . . . . e f 2 f 
        . . . . . . . . . . . e f 4 4 f 
        f f . . . . . . . f e e f 2 2 f 
        f f f . . f f f e f f 4 f 2 2 f 
        f f f f f f f 2 f f f f e 2 2 f 
        f f f c f f f e e f f f f 2 e f 
        f f f . . . f . e f c f c f e f 
        . . f f f . . . . . f f f f c f 
        . . . . . . . . . . . f f f c f 
        . . . . . . . . . . . . f f c f 
        . . . . . . . . . . . . c f c f 
        . . . . . . . . . . . . . c f c 
        . . . . . . . . . . . . . . c c 
        `, SpriteKind.brokenShip)
    broken_enemy.x = otherSprite.x
    broken_enemy.y = otherSprite.y
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.brokenDefense, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        otherSprite.destroy()
        statusbar.value += 50
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.defense, function (sprite, otherSprite) {
    broken_turret = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . e e e e e e e e e f e e f e 
        . f f b b b b b f f f f e e f e 
        f f f f b b b f f c e . . . . . 
        e e e f b b f f b c e . . . . . 
        e e e f f f f b b c e . . . . . 
        e e e f f b b b b c e . . . . . 
        e e f b b f b b b c e . . . . . 
        e f e b b b f f b c e . . . . . 
        f f e b b b b b f f e . . . . . 
        f e e b b b b b b c e e e e f e 
        f f e c c c c c c c e e e e f e 
        . f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.brokenDefense)
    broken_turret.y = otherSprite.y
    broken_turret.x = otherSprite.x
    otherSprite.destroy()
    sprite.destroy()
    if (achivement_3 == false) {
        game.setDialogFrame(img`
            ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffbbbbffffbbfffbbbbfffbbbbffffffffbbffffffffff
            fffbbbbbbbfbbbbfbbbbbbfbbbbbbffbbbfbbbbffbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            ffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffff
            fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff
            ffcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbff
            fcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbff
            fcccbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbccbbbbccbff
            fcfcbbbbbbbbbcccccbbbbbbbbbbbcccccbbbcccbbbcccff
            fcccbbbcccbbbcfffcbbbbcccccbbcfffcbbccccbbbcccff
            fcfcbbcccccbbcccccbbbbcccccbbcccccbbcfccbbbcccff
            fcccbbcfcfcbbcfffcbccbcfcccbbcfffcbbccccccccccff
            fcfcbbcccccbbcccccbccbcccfcbbcccccccccfcccfffccc
            ccccbbcfcfcbbcfffcbccbcccccbbcfffccccccccccccccc
            ccfcbcccccccccccccbccbcfcccccccccccccfccccfffccc
            ccccbccfcfccccfffccccccccfccccfffccccccccccccccc
            ccfcbcccccccccccccccccccccccccccccccccfcccfffccc
            cccccccccccccccccccccccfcccccccccccccccccccccccc
            cccccccccccccccccccccccccfcccccccccccfccccfffccc
            .cccccccccccccccccccccccccccccccccccccccccccccc.
            ..cccccccccccccccccccccccccccccccccccccccccccc..
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . e e e e e e e e e f e e f e 
            . f f b b b b b f f f f e e f e 
            f f f f b b b f f c e . . . . . 
            e e e f b b f f b c e . . . . . 
            e e e f f f f b b c e . . . . . 
            e e e f f b b b b c e . . . . . 
            e e f b b f b b b c e . . . . . 
            e f e b b b f f b c e . . . . . 
            f f e b b b b b f f e . . . . . 
            f e e b b b b b b c e e e e f e 
            f f e c c c c c c c e e e e f e 
            . f f f f f f f f f f f f f f f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("achivment: malfuction...", DialogLayout.Full)
        achivement_3 = true
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    broken_enemy = sprites.create(img`
        . . . . . . . . . . . . . . f e 
        . . . . . . . . . . . . . f e f 
        . . . . . . . . . . . . e f 2 f 
        . . . . . . . . . . . . e f 2 f 
        . . . . . . . . . . . e f 4 4 f 
        f f . . . . . . . f e e f 2 2 f 
        f f f . . f f f e f f 4 f 2 2 f 
        f f f f f f f 2 f f f f e 2 2 f 
        f f f c f f f e e f f f f 2 e f 
        f f f . . . f . e f c f c f e f 
        . . f f f . . . . . f f f f c f 
        . . . . . . . . . . . f f f c f 
        . . . . . . . . . . . . f f c f 
        . . . . . . . . . . . . c f c f 
        . . . . . . . . . . . . . c f c 
        . . . . . . . . . . . . . . c c 
        `, SpriteKind.brokenShip)
    broken_enemy.x = otherSprite.x
    broken_enemy.y = otherSprite.y
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursurPostion_col += 1
    if (cursurPostion_col <= 0) {
        cursurPostion_col = 10
    }
    tiles.placeOnTile(cursur, tiles.getTileLocation(cursurPostion_col, cursurPostion_row))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.defense, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        otherSprite.destroy()
        statusbar.value += 50
    }
})
let missle: Sprite = null
let enemies: Sprite = null
let laser: Sprite = null
let spritelist: Sprite[] = []
let broken_enemy: Sprite = null
let turret: Sprite = null
let missle_turret: Sprite = null
let broken_turret: Sprite = null
let achivement_3 = false
let achivement_1 = false
let cursurPostion_col = 0
let cursurPostion_row = 0
let statusbar: StatusBarSprite = null
let cursur: Sprite = null
game.setDialogFrame(img`
    999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999
    999911119999119991111999111199999999119999999999
    999111111191111911111191111119911191111991111999
    999111111111111111111111111111111111111911111199
    999111111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999991111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111119999
    999111111111111111111111111111111111111111111999
    999911111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111111999
    999111111111111111111111111111111111111111111199
    999911111111111111111111111111111111111111111199
    999111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111199
    991111111111111111111111111111111111111111111999
    991111111111111111111111111111111111111111119999
    991111111111111111111111111111111111111111119999
    999111111111111111111111111111111111111111111999
    99d1111111111111111111111111111111111dd111111199
    9ddd111111111111111111111111111111111dd111111199
    9ddd1111111111dd111111111111111111111dd1111dd199
    9d1d111111111ddddd11111111111ddddd111ddd111ddd99
    9ddd111ddd111d111d1111ddddd11d111d11dddd111ddd99
    9d1d11ddddd11ddddd1111ddddd11ddddd11d1dd111ddd99
    9ddd11d1d1d11d111d1dd1d1ddd11d111d11dddddddddd99
    9d1d11ddddd11ddddd1dd1ddd1d11ddddddddd1ddd111ddd
    dddd11d1d1d11d111d1dd1ddddd11d111ddddddddddddddd
    dd1d1ddddddddddddd1dd1d1ddddddddddddd1dddd111ddd
    dddd1dd1d1dddd111dddddddd1dddd111ddddddddddddddd
    dd1d1ddddddddddddddddddddddddddddddddd1ddd111ddd
    ddddddddddddddddddddddd1dddddddddddddddddddddddd
    ddddddddddddddddddddddddd1ddddddddddd1dddd111ddd
    .dddddddddddddddddddddddddddddddddddddddddddddd.
    ..dddddddddddddddddddddddddddddddddddddddddddd..
    `)
game.setDialogCursor(img`
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    9 . . . . . . . . . . . . . . 9 
    9 . 6 6 . . . 8 8 8 . . 6 6 . 9 
    9 . 6 . . . . 9 . . . . . 6 . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . 8 . . . . 9 . . . . . 8 . 9 
    9 . 8 9 9 9 9 9 9 9 9 9 9 8 . 9 
    9 . 8 . . . . 9 . . . . . 8 . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . 6 . . . . 9 . . . . . 6 . 9 
    9 . 6 6 . . 8 8 8 . . . 6 6 . 9 
    9 . . . . . . . . . . . . . . 9 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    `)
game.showLongText("controlls are: arow keys or w,s,a,d keys and spacebar to create turret and enter to dystroy a turret", DialogLayout.Full)
game.showLongText("and you can only put 2 turrets at a time", DialogLayout.Full)
game.showLongText("tip: by dystroying turrets and makeing them somewere else is how to play this game ", DialogLayout.Full)
tiles.setCurrentTilemap(tilemap`level1`)
info.setLife(500)
scene.centerCameraAt(96, 70)
cursur = sprites.create(img`
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    9 . . . . . . . . . . . . . . 9 
    9 . 6 6 . . . 8 8 8 . . 6 6 . 9 
    9 . 6 . . . . 9 . . . . . 6 . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . 8 . . . . 9 . . . . . 8 . 9 
    9 . 8 9 9 9 9 9 9 9 9 9 9 8 . 9 
    9 . 8 . . . . 9 . . . . . 8 . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . . . . . . 9 . . . . . . . 9 
    9 . 6 . . . . 9 . . . . . 6 . 9 
    9 . 6 6 . . 8 8 8 . . . 6 6 . 9 
    9 . . . . . . . . . . . . . . 9 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    `, SpriteKind.Player)
statusbar = statusbars.create(20, 2, StatusBarKind.turrets)
statusbar.setColor(7, 12)
statusbar.setPosition(70, 98)
statusbar.setLabel("Turrets", 2)
cursurPostion_row = 4
cursurPostion_col = 4
tiles.placeOnTile(cursur, tiles.getTileLocation(cursurPostion_col, cursurPostion_row))
achivement_1 = false
let achivment_2 = false
achivement_3 = false
forever(function () {
    if (info.score() >= 30 && achivment_2 == false) {
        game.setDialogFrame(img`
            8888.....88....888....88.88....888....888...8888
            867788..8768..86768..8678768..86768..8678.887768
            8767768.8777886767688777877788676768877788677678
            877677686767787767787767676778776778776786776778
            .8778766677678776778767767767877677876778678778.
            .8677866867668676768667686766867676866766687768.
            ..86668688676886868867688867688686886768686668..
            .888666888888888888888888888888888888888866688..
            87777688666666666666666666666666666666668886688.
            867677686666666666666666666666666666666688677778
            .87766786666666666666666666666666666666686776768
            ..877668666666666666666666666666666666668766778.
            ..88888866666666666666666666666666666666866778..
            .867768866666666666666666666666666666666888888..
            86777768666666666666666666666666666666668867768.
            876666886666666666666666666666666666666686777768
            867777686666666666666666666666666666666688666678
            .86776886666666666666666666666666666666686777768
            ..888888666666666666666666666666666666668867768.
            ..87768866666666666666666666666666666666888888..
            .877667866666666666666666666666666666666866778..
            86767768666666666666666666666666666666668766778.
            877776886666666666666666666666666666666686776768
            .88668886666666666666666666666666666666688677778
            87777688666666666666666666666666666666668886688.
            867677686666666666666666666666666666666688677778
            .87766786666666666666666666666666666666686776768
            ..877668666666666666666666666666666666668766778.
            ..88888866666666666666666666666666666666866778..
            .867768866666666666666666666666666666666888888..
            86777768666666666666666666666666666666668867768.
            876666886666666666666666666666666666666686777768
            867777686666666666666666666666666666666688666678
            .86776886666666666666666666666666666666686777768
            ..888888666666666666666666666666666666668867768.
            ..87766866666666666666666666666666666666888888..
            .877667866666666666666666666666666666666866778..
            86767768666666666666666666666666666666668766778.
            877776886666666666666666666666666666666686776768
            .88668886666666666666666666666666666666688677778
            ..886668888888888888888888888888888888888666888.
            ..86668686768868688676888676886868867688686668..
            .8677866676686767686676867668676768667686687768.
            .8778768776787767787677677678776778767766678778.
            877677687677877677877676767787767787767686776778
            8767768877788676768877787778867676887778.8677678
            867788.8768..86768..8678768..86768..8678..887768
            8888...888....888....88.88....888....88.....8888
            `)
        game.setDialogCursor(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f e e e f e e e f e e . 
            . . . . e f e e e f e e e f e e 
            . . . . e f e e e f e e e f e e 
            . . . . f e e e f e e e f e e . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        game.showLongText("achivment: the defenders", DialogLayout.Full)
        achivment_2 = true
    }
})
game.onUpdateInterval(500, function () {
    spritelist = sprites.allOfKind(SpriteKind.defense)
    for (let value of spritelist) {
        laser = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, 70, 0)
        laser.setKind(SpriteKind.Projectile)
    }
})
game.onUpdateInterval(2000, function () {
    enemies = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . e e 
        . . . . . . . . . . . . . e e e 
        . . . . . . . . . . . . e e 2 2 
        . . . . . . . . . . . . e 2 2 4 
        . . . . . . . . . . . e f 4 4 2 
        . . . . . . . . . . e e f 2 2 2 
        . . . . . . . . e e e 4 e 2 2 2 
        d d d b f 2 f 2 4 4 e 2 e 2 2 2 
        c c c c f c f e e 2 c 2 c 2 e e 
        . . . . . . . . e e c 2 c e e e 
        . . . . . . . . . . c e f e c c 
        . . . . . . . . . . . e f c c c 
        . . . . . . . . . . . . f c c c 
        . . . . . . . . . . . . c c c c 
        . . . . . . . . . . . . . c c c 
        . . . . . . . . . . . . . . c c 
        `, -20, 0)
    enemies.setKind(SpriteKind.Enemy)
    enemies.setFlag(SpriteFlag.DestroyOnWall, true)
    tiles.placeOnRandomTile(enemies, assets.tile`myTile8`)
})
game.onUpdateInterval(2000, function () {
    spritelist = sprites.allOfKind(SpriteKind.missleDefense)
    for (let value of spritelist) {
        missle = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f e e e f e e e f e e . 
            . . . . e f e e e f e e e f e e 
            . . . . e f e e e f e e e f e e 
            . . . . f e e e f e e e f e e . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, 20, 0)
        missle.setKind(SpriteKind.superProjectile)
    }
})
forever(function () {
    if (info.score() == 100) {
        game.over(true, effects.starField)
    }
})
