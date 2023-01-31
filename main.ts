

const code = {
    "._" : "A",
    "_..." : "B",
    "_._." : "C",
    "_.." : "D",
    "." : "E",
    ".._." : "F",
    "__." : "G",
    "...." : "H",
    ".." : "I",
    ".___" : "J",
    "_._" : "K",
    "._.." : "L",
    "__" : "M",
    "_." : "N",
    "___" : "O",
    ".__." : "P",
    "__._" : "Q",
    "._." : "R",
    "..." : "S",
    "_" : "T",
    ".._" : "U",
    "..._" : "V",
    ".__" : "W",
    "_.._" : "X",
    "_.__" : "Y",
    "__.." : "Z",
}

let message = ""
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    message = "" + message + "."
    music.playTone(262, music.beat(BeatFraction.Half))
})
function morse_to_string(code:{[key: string]:string, value: string},morse: string): string {
    let word: string;
    let result = ""
    let words = _py.py_string_split(morse, " ")
    for (let x of words) {
        word = x
        result += code[word] + " "
    }
    return result
}

radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    message = "" + message + "_"
    music.playTone(220, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    message = ""
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    radio.sendString(message)
    basic.showString(message)
})
basic.forever(function on_forever() {
    
})
