input.onButtonPressed(Button.A, function () {
    if (state == "send") {
        basic.showString(".")
        basic.pause(100)
        basic.clearScreen()
        output += "."
    }
})
input.onButtonPressed(Button.B, function () {
    if (state == "send") {
        basic.showString("-")
        basic.pause(100)
        basic.clearScreen()
        output += "-"
    }
})
input.onButtonPressed(Button.AB, function () {
    if (state == "send") {
        radio.sendString(output)
        state = "receive"
    }
})
// basic.showString("" + (receivedString))
// LetterToSend = ""
radio.onReceivedString(function (receivedString) {
    if (state == "receive") {
        let currentMessage = translate(output)
        if (receivedString == currentMessage) {
            basic.showIcon(IconNames.Yes)
            output = ""
            state = "send"
        }
    } else {
        //radio.onReceivedString(function (receivedString: string) {
        basic.showString(receivedString)
        basic.pause(900)
        let message = translate(receivedString)
        basic.showString(message)
        radio.sendString(message)
        state = "send"
    }
})

  

/**
 * let english: string[] = []
 * 
 * let morse: string[] = []
 */
let currentMessage = ""
let output = ""
let x = 0
//let english: string[] = []
//let morse: string[] = []
//let state = ""
let state = "send"
// radio.setGroup(1)


/*radio.onReceivedString(function (receivedString: string) {
    basic.showString(receivedString)
    basic.pause(900)
    let message = translate(receivedString)
    basic.showString(message)
    radio.sendString(message)
})*/






let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", "------"]
let english = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "_"]

function translate (input: string) {
    x = morse.indexOf(input)
    return english[x]
}

