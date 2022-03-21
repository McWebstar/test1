input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    music.playMelody("- - - A - B - - ", 120)
})
loops.everyInterval(500, function () {
    led.plot(0, 0)
})
basic.forever(function () {
	
})
