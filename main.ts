radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        esquerda()
    }
    if (receivedNumber == 2) {
        direita()
    }
    if (receivedNumber == 3) {
        frente()
    }
    if (receivedNumber == 4) {
        tras()
    }
})
function tras () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
function esquerda () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
})
function direita () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
function frente () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
function parar () {
    motor.motorStop(motor.Motors.M1)
    motor.motorStop(motor.Motors.M4)
}
radio.setGroup(1)
basic.forever(function () {
	
})
