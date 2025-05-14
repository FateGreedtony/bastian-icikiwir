input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(4)
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showIcon(IconNames.House)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Butterfly)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(5)
    basic.showIcon(IconNames.Square)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(5)
    basic.showIcon(IconNames.Confused)
})
radio.setGroup(1)
