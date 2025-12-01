bluetooth.startUartService()

let clawOpen = false

basic.forever(function () {
    let cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)).trim()

    if (cmd == "F") {
        cuteBot.motors(80, 80)
    }
    else if (cmd == "B") {
        cuteBot.motors(-80, -80)
    }
    else if (cmd == "L") {
        cuteBot.motors(-60, 60)
    }
    else if (cmd == "R") {
        cuteBot.motors(60, -60)
    }
    else if (cmd == "S") {
        cuteBot.motors(0, 0)
    }
    else if (cmd == "O") {
        pins.servoWritePin(AnalogPin.P1, 160)  // open claw
        clawOpen = true
    }
    else if (cmd == "C") {
        pins.servoWritePin(AnalogPin.P1, 40)   // close claw
        clawOpen = false
    }
    else if (cmd == "G") {
        if (clawOpen) {
            pins.servoWritePin(AnalogPin.P1, 40)
            clawOpen = false
        } else {
            pins.servoWritePin(AnalogPin.P1, 160)
            clawOpen = true
        }
    }
})
