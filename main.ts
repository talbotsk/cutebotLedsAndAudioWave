let counter = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    led.toggle(counter % 5, counter / 5)
    music.ringTone(131 + (988 - 131) * ((25 - counter) / 25))
    basic.pause(50)
    counter += 1
    counter = counter % 25
})
