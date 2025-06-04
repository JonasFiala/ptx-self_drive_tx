radio.setGroup(23)

let trim = 0
let mode = 0

basic.forever(function () {
    let x = -input.acceleration(Dimension.Y); //left,right
    let y = -input.acceleration(Dimension.X); //forward,backwards
    radio.sendString(`${x},${y}`)
    basic.pause(50);
})

input.onPinPressed(TouchPin.P0, function() {
    mode = (mode + 1) % 3
    basic.showNumber(mode)
    radio.sendValue("drive", mode)
})
input.onButtonPressed(Button.A, function () {
    trim -= 5
    radio.sendValue("trim", trim)
    basic.showNumber(trim)
})

input.onButtonPressed(Button.B, function () {
    trim += 5
    radio.sendValue("trim", trim)
    basic.showNumber(trim)
})

input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    trim = 0
    radio.sendValue("trim", trim)
    basic.showNumber(trim)
})
