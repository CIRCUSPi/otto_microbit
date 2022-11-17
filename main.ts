//% weight=0 color="#ff0011" icon="\uf144" block="otto bit"
namespace ottomicrobit {
    let L1Pin = AnalogPin.P13
    let L2Pin = AnalogPin.P14
    let R1Pin = AnalogPin.P15
    let R2Pin = AnalogPin.P16
    let o_L1 = 90
    let o_L2 = 90
    let o_R1 = 90
    let o_R2 = 90

    let R2 = 0
    let R1 = 0
    let L2 = 0
    let L1 = 0

    export enum moveChoose {
        //% block="forward"
        move1 = 1,
        //% block="backward"
        move2 = 2,
        //% block="left"
        move3 = 3,
        //% block="right"
        move4 = 4,
        //% block="left slide"
        move5 = 5,
        //% block="right slide"
        move6 = 6
    }

    export enum actChoose {
        //% block="happy"
        act1 = 0,
        //% block="lost"
        act2 = 1,
        //% block="reject"
        act3 = 2,
        //% block="provocative"
        act4 = 3,
        //% block="greet"
        act5 = 4
    }

    function slide(step_: number, time_: number, LR_: number) {
        pins.servoWritePin(L1Pin, o_L1)
        pins.servoWritePin(L2Pin, o_L2)
        pins.servoWritePin(R1Pin, o_R1)
        pins.servoWritePin(R2Pin, o_R2)
        if (LR_ == 0) {
            for (let index = 0; index < step_; index++) {
                pins.servoWritePin(L2Pin, o_L2 + 40)
                basic.pause(time_)
                pins.servoWritePin(R2Pin, o_R2 - 20)
                basic.pause(time_)
                pins.servoWritePin(L2Pin, o_L2)
                basic.pause(time_)
                pins.servoWritePin(R2Pin, o_R2)
                basic.pause(time_)
            }
        } else {
            for (let index = 0; index < step_; index++) {
                pins.servoWritePin(R2Pin, o_R2 - 40)
                basic.pause(time_)
                pins.servoWritePin(L2Pin, o_L2 + 20)
                basic.pause(time_)
                pins.servoWritePin(R2Pin, o_R2)
                basic.pause(time_)
                pins.servoWritePin(L2Pin, o_L2)
                basic.pause(time_)
            }
        }
        pins.servoWritePin(L1Pin, o_L1)
        pins.servoWritePin(L2Pin, o_L2)
        pins.servoWritePin(R1Pin, o_R1)
        pins.servoWritePin(R2Pin, o_R2)
    }

    function back(step_: number, time_: number) {
        L1 = o_L1
        L2 = o_L2
        R1 = o_R1
        R2 = o_R2
        for (let count = 0; count <= step_ - 1; count++) {
            L1 = o_L1
            L2 = o_L2 - 14
            R1 = o_R1
            R2 = o_R2 - 28
            pins.servoWritePin(L2Pin, L2)
            pins.servoWritePin(R2Pin, R2)
            for (let move_ = 0; move_ <= 29; move_++) {
                pins.servoWritePin(L1Pin, L1)
                pins.servoWritePin(R1Pin, R1)
                L1 += -1
                R1 += -1
                basic.pause(time_)
            }
            pins.servoWritePin(L2Pin, o_L2 + 28)
            pins.servoWritePin(R2Pin, o_R2 + 14)
            for (let move_ = 0; move_ <= 59; move_++) {
                pins.servoWritePin(L1Pin, L1)
                pins.servoWritePin(R1Pin, R1)
                L1 += 1
                R1 += 1
                basic.pause(time_)
            }
            pins.servoWritePin(L2Pin, o_L2 - 14)
            pins.servoWritePin(R2Pin, o_R2 - 28)
            for (let move_ = 0; move_ <= 29; move_++) {
                pins.servoWritePin(L1Pin, L1)
                pins.servoWritePin(R1Pin, R1)
                L1 += -1
                R1 += -1
                basic.pause(time_)
            }
            pins.servoWritePin(L2Pin, o_L2)
            pins.servoWritePin(R2Pin, o_R2)
        }
    }

    function action(choose: number) {
        if (choose == 0) {
            for (let index = 0; index < 2; index++) {
                pins.servoWritePin(L2Pin, o_L2 + 30)
                pins.servoWritePin(R2Pin, o_R2 - 30)
                basic.pause(300)
                pins.servoWritePin(L2Pin, o_L2)
                pins.servoWritePin(R2Pin, o_R2)
                basic.pause(300)
            }
        } else if (choose == 1) {
            for (let index = 0; index < 2; index++) {
                pins.servoWritePin(L2Pin, o_L2 - 30)
                pins.servoWritePin(R2Pin, o_R2 + 30)
                basic.pause(300)
                pins.servoWritePin(L2Pin, o_L2)
                pins.servoWritePin(R2Pin, o_R2)
                basic.pause(300)
            }
        } else if (choose == 2) {
            for (let index = 0; index < 2; index++) {
                pins.servoWritePin(L1Pin, o_L1 - 30)
                pins.servoWritePin(R1Pin, o_R1 + 30)
                basic.pause(200)
                pins.servoWritePin(L1Pin, o_L1 + 15)
                pins.servoWritePin(R1Pin, o_R1 - 15)
                basic.pause(200)
            }
        } else if (choose == 3) {
            pins.servoWritePin(R1Pin, o_R1 + 45)
            basic.pause(500)
            for (let index = 0; index < 2; index++) {
                pins.servoWritePin(R2Pin, o_R2 + 30)
                basic.pause(300)
                pins.servoWritePin(R2Pin, o_R2)
                basic.pause(300)
            }
        } else {
            pins.servoWritePin(R2Pin, o_R2 + 15)
            basic.pause(500)
            pins.servoWritePin(L2Pin, o_L2 + 45)
            basic.pause(500)
            pins.servoWritePin(R2Pin, o_R2 + 25)
            basic.pause(500)
            for (let index = 0; index < 2; index++) {
                pins.servoWritePin(L2Pin, o_L2 + 30)
                basic.pause(300)
                pins.servoWritePin(L2Pin, o_L2 - 30)
                basic.pause(300)
            }
        }
        pins.servoWritePin(L1Pin, o_L1)
        pins.servoWritePin(L2Pin, o_L2)
        pins.servoWritePin(R1Pin, o_R1)
        pins.servoWritePin(R2Pin, o_R2)
    }

    function walk(step_: number, time_: number) {
        L1 = o_L1
        L2 = o_L2
        R1 = o_R1
        R2 = o_R2
        for (let count = 0; count <= step_ - 1; count++) {
            L1 = o_L1
            L2 = o_L2 - 14
            R1 = o_R1
            R2 = o_R2 - 28
            pins.servoWritePin(L2Pin, L2)
            pins.servoWritePin(R2Pin, R2)
            for (let move_ = 0; move_ <= 29; move_++) {
                pins.servoWritePin(L1Pin, L1)
                pins.servoWritePin(R1Pin, R1)
                L1 += 1
                R1 += 1
                basic.pause(time_)
            }
            pins.servoWritePin(L2Pin, o_L2 + 28)
            pins.servoWritePin(R2Pin, o_R2 + 14)
            for (let move_ = 0; move_ <= 59; move_++) {
                pins.servoWritePin(L1Pin, L1)
                pins.servoWritePin(R1Pin, R1)
                L1 += -1
                R1 += -1
                basic.pause(time_)
            }
            pins.servoWritePin(L2Pin, o_L2 - 14)
            pins.servoWritePin(R2Pin, o_R2 - 28)
            for (let move_ = 0; move_ <= 29; move_++) {
                pins.servoWritePin(L1Pin, L1)
                pins.servoWritePin(R1Pin, R1)
                L1 += 1
                R1 += 1
                basic.pause(time_)
            }
            pins.servoWritePin(L2Pin, o_L2)
            pins.servoWritePin(R2Pin, o_R2)
        }
    }

    function turn(step_: number, time_: number, LR_: number) {
        L1 = o_L1
        L2 = o_L2
        R1 = o_R1
        R2 = o_R2
        if (LR_ == 0) {
            for (let count = 0; count <= step_ - 1; count++) {
                L1 = o_L1 - 15
                L2 = o_L2 - 15
                R1 = o_R1 + 20
                R2 = o_R2 - 28
                pins.servoWritePin(L1Pin, L1)
                pins.servoWritePin(L2Pin, L2)
                pins.servoWritePin(R1Pin, R1)
                pins.servoWritePin(R2Pin, R2)
                basic.pause(100)
                for (let move_ = 0; move_ <= 44; move_++) {
                    pins.servoWritePin(L1Pin, L1)
                    L1 += 1
                    basic.pause(time_)
                }
                pins.servoWritePin(L2Pin, o_L2)
                pins.servoWritePin(R2Pin, o_R2)
                basic.pause(100)
                pins.servoWritePin(L1Pin, o_L1 - 15)
                basic.pause(100)
            }
        } else {
            for (let count = 0; count <= step_ - 1; count++) {
                L1 = o_L1 - 20
                L2 = o_L2 + 28
                R1 = o_R1 + 15
                R2 = o_R2 + 15
                pins.servoWritePin(L1Pin, L1)
                pins.servoWritePin(L2Pin, L2)
                pins.servoWritePin(R1Pin, R1)
                pins.servoWritePin(R2Pin, R2)
                basic.pause(100)
                for (let move_ = 0; move_ <= 44; move_++) {
                    pins.servoWritePin(R1Pin, R1)
                    R1 += -1
                    basic.pause(time_)
                }
                pins.servoWritePin(L2Pin, o_L2)
                pins.servoWritePin(R2Pin, o_R2)
                basic.pause(100)
                pins.servoWritePin(R1Pin, o_R1 + 15)
                basic.pause(100)
            }
        }
        pins.servoWritePin(L1Pin, o_L1)
        pins.servoWritePin(R1Pin, o_R1)
    }

    //% weight=100
    //% blockId=otto_init
    //% block="otto init L1 %L1_|L2 %L2_|R1 %R1_|R2 %R2_"
    export function otto_init(L1_: AnalogPin, L2_: AnalogPin, R1_: AnalogPin, R2_: AnalogPin): void {
        L1Pin = L1_
        L2Pin = L2_
        R1Pin = R1_
        R2Pin = R2_
    }

    //% weight=90
    //% blockId=otto_set_stand_up
    //% L1A.min=0 L1A.max=180
    //% L2A.min=0 L2A.max=180
    //% R1A.min=0 R1A.max=180
    //% R2A.min=0 R2A.max=180
    //% block="otto set stand up L1 angle %L1A|L2 angle %L2A|R1 angle %R1A|R2 angle %R2A"
    export function otto_set_stand_up(L1A: number, L2A: number, R1A: number, R2A: number): void {
        o_L1 = Math.constrain(L1A, 0, 180)
        o_L2 = Math.constrain(L2A, 0, 180)
        o_R1 = Math.constrain(R1A, 0, 180)
        o_R2 = Math.constrain(R2A, 0, 180)

        pins.servoWritePin(L1Pin, o_L1)
        pins.servoWritePin(L2Pin, o_L2)
        pins.servoWritePin(R1Pin, o_R1)
        pins.servoWritePin(R2Pin, o_R2)
    }

    //% weight=80
    //% blockId=otto_move
    //% block="otto move %choose_ step %step_|delay %time_"
    export function otto_walk(choose_: moveChoose, step_: number, time_: number): void {
        if (choose_ == 1) {
            walk(step_, time_)
        }
        else if (choose_ == 2) {
            back(step_, time_)
        }
        else if (choose_ == 3) {
            turn(step_, time_, 0)
        }
        else if (choose_ == 4) {
            turn(step_, time_, 1)
        }
        else if (choose_ == 5) {
            slide(step_, time_*40, 0)
        }
        else {
            slide(step_, time_*40, 1)
        }
    }

    //% weight=70
    //% blockId=otto_action
    //% block="otto action %choose_"
    export function otto_action(choose_: actChoose): void {
        action(choose_)
    }

}
