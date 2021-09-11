input.onButtonPressed(Button.A, function () {
    temperaturas()
    if (Promedio >= 30) {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
    } else {
        music.playTone(523, music.beat(BeatFraction.Sixteenth))
        basic.showNumber(Promedio)
        basic.showString("T baja")
    }
    music.playTone(139, music.beat(BeatFraction.Sixteenth))
    basic.showNumber(Promedio)
    basic.showString("T alta")
})
function temperaturas () {
    T1 = input.temperature()
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
    basic.pause(500)
    T1 = input.temperature()
    music.playTone(880, music.beat(BeatFraction.Sixteenth))
    basic.pause(500)
    T1 = input.temperature()
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    basic.pause(500)
    Promedio = T1 + (T2 + T3 / 3)
    return Promedio
}
input.onButtonPressed(Button.B, function () {
    temperaturas()
    if (Promedio >= 30) {
        basic.showNumber(Promedio)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showNumber(Promedio)
        basic.showIcon(IconNames.Happy)
    }
})
let Promedio = 0
let T3 = 0
let T2 = 0
let T1 = 0
T1 = 0
T2 = 0
T3 = 0
Promedio = 0
