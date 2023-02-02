input.onGesture(Gesture.LogoUp, function () {
    message = "" + message + " "
    music.playTone(330, music.beat(BeatFraction.Half))
})
input.onGesture(Gesture.TiltLeft, function () {
    message = "" + message + "."
    music.playTone(262, music.beat(BeatFraction.Half))
})
radio.onReceivedString(function (receivedString) {
    music.playMelody("A A G F - - - - ", 225)
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playMelody("F F G A - - - - ", 225)
    message = ""
})
input.onGesture(Gesture.TiltRight, function () {
    message = "" + message + "_"
    music.playTone(220, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.LogoDown, function () {
    let finalmessage = morse_to_string(code,message)
if (finalmessage.length != 0) {
        music.playMelody("G A G F G - - - ", 225)
        radio.sendString(finalmessage)
        basic.showString(message)
    } else {
        music.playMelody("D C - - - - - - ", 225)
        basic.showString("error")
    }
})
let message = ""
let code = {
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
function morse_to_string(code:{[key: string]: string},morse: string): string {
    let word: string;
    let result = ""
    let words = _py.py_string_split(morse, " ")
    for (let word2 of words) {
        if (code[word2] != null){
            result += code[word2] + " "
        }
    }
    if (result.length != 0){
        return result
    }
    else return ""
}
