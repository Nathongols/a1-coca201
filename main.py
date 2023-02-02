code = {"._": "A",
    "_...": "B",
    "_._.": "C",
    "_..": "D",
    ".": "E",
    ".._.": "F",
    "__.": "G",
    "....": "H",
    "..": "I",
    ".___": "J",
    "_._": "K",
    "._..": "L",
    "__": "M",
    "_.": "N",
    "___": "O",
    ".__.": "P",
    "__._": "Q",
    "._.": "R",
    "...": "S",
    "_": "T",
    ".._": "U",
    "..._": "V",
    ".__": "W",
    "_.._": "X",
    "_.__": "Y",
    "__..": "Z"
}
message = ""

def on_button_pressed_a():
    global message
    message = "" + message + "."
    music.play_tone(262, music.beat(BeatFraction.HALF))
input.on_button_pressed(Button.A, on_button_pressed_a)

def morse_to_string(morse: str):
    result = ""
    words = message.split(" ")
    for x in words:
        word: str = x
        result += code[".-"] + " "
    return result



def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global message
    message = "" + message + "_"
    music.play_tone(220, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global message
    message = ""
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    radio.send_string(message)
    basic.show_string(message)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)



def on_forever():
    pass
basic.forever(on_forever)
