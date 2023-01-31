input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    led.plot(pointerX, pointerY)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pointerX = 0
    images.createBigImage(`
        # . . . # . . . . .
        . # . # . . . . . .
        . . # . . . . . . .
        . # . # . . . . . .
        # . . . # . . . . .
        `).scrollImage(1, 50)
})
let pointerY = 0
let pointerX = 0
pointerX = 0
pointerY = 0
radio.setGroup(1)
basic.showLeds(`
    # . . . .
    . # . . .
    . . # . .
    . . . . .
    . . . . .
    `)
loops.everyInterval(1000, function () {
    pointerX += 1
    if (pointerX >= 5) {
        pointerX = 0
        pointerY += 1
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        radio.sendString("")
    }
})
