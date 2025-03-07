let frequency = 0
let y = 0
let counter = 0
let x = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    x = counter % 5
    y = counter / 5
    led.toggle(x, y)
    frequency = 131 + (988 - 131) * (counter / 25)
    music.ringTone(frequency)
    basic.pause(50)
    counter += 1
    counter = counter % 25
})
