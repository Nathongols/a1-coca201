def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))
    led.plot(pointerX, pointerY)
radio.on_received_string(on_received_string)

def on_logo_pressed():
    global pointerX
    pointerX = 0
    images.create_big_image("""
        # . . . # . . . . .
                . # . # . . . . . .
                . . # . . . . . . .
                . # . # . . . . . .
                # . . . # . . . . .
    """).scroll_image(1, 200)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

pointerY = 0
pointerX = 0
pointerX = 0
pointerY = 0
radio.set_group(1)
basic.show_leds("""
    . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
""")

def on_forever():
    while input.button_is_pressed(Button.A):
        music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))
        radio.send_string("")
basic.forever(on_forever)

def on_every_interval():
    global pointerX, pointerY
    if input.button_is_pressed(Button.A):
        pointerX += 1
        if pointerX >= 5:
            pointerX = 0
            pointerY += 1
loops.every_interval(30, on_every_interval)
