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
    //% L1_.defl=AnalogPin.P13
    //% L2_.defl=AnalogPin.P14
    //% R1_.defl=AnalogPin.P15
    //% R2_.defl=AnalogPin.P16
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
    //% L1A.defl=90
    //% L2A.defl=90
    //% R1A.defl=90
    //% R2A.defl=90
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
    //% step_.defl=2
    //% time_.defl=10
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
            slide(step_, time_ * 40, 0)
        }
        else {
            slide(step_, time_ * 40, 1)
        }
    }

    //% weight=70
    //% blockId=otto_action
    //% block="otto action %choose_"
    export function otto_action(choose_: actChoose): void {
        action(choose_)
    }

    //% weight=60
    //% blockId=ultrasonic_sensor
    //% tx_.defl=DigitalPin.P1
    //% rx_.defl=DigitalPin.P2
    //% block="Ultrasonic Sensor TX %tx_ RX %rx_"
    export function ultrasonic_sensor(tx_: DigitalPin, rx_: DigitalPin): number {
        let distance = 0
        pins.setPull(tx_, PinPullMode.PullNone);

        pins.digitalWritePin(tx_, 0);
        //control.waitMicros(2);
        control.waitMicros(5);
        pins.digitalWritePin(tx_, 1);
        control.waitMicros(10)
        pins.digitalWritePin(tx_, 0);

        distance = pins.pulseIn(rx_, PulseValue.High)
        return distance = Math.round(distance / 2 / 29)
    }

    let _brightness = 25
    let neopixel_buf = pins.createBuffer(16 * 2);
    for (let i = 0; i < 16 * 2; i++) {
        neopixel_buf[i] = 0
    }
    for (let i = 0; i < 2; i++) {
        rgb_led_clear();
    }

    //% weight=50
    //% brightness.min=0 brightness.max=255
    //% blockId="RGB_LED_set_brightness"
    //% block="RGB LED set brightness to |%brightness |(0~255)"
    export function rgb_led_set_setBrightness(brightness: number) {
        if (brightness < 0) {
            brightness = 0;
        }
        if (brightness > 255) {
            brightness = 255;
        }
        _brightness = brightness;
    }

    //% weight=49
    //% rgb.shadow="colorNumberPicker"
    //% blockId="RGB_LED_show_all"
    //% block="All RGB LED show color|%rgb"
    export function rgb_led_show_all(rgb: number): void {
        let r = (rgb >> 16) * (_brightness / 255);
        let g = ((rgb >> 8) & 0xFF) * (_brightness / 255);
        let b = ((rgb) & 0xFF) * (_brightness / 255);
        for (let i = 0; i < 2; i++) {
            neopixel_buf[i * 3 + 0] = Math.round(g)
            neopixel_buf[i * 3 + 1] = Math.round(r)
            neopixel_buf[i * 3 + 2] = Math.round(b)
        }
        ws2812b.sendBuffer(neopixel_buf, DigitalPin.P12)
    }

    //% weight=48
    //% index.min=0 index.max=1
    //% rgb.shadow="colorNumberPicker"
    //% blockId="RGB_LED_show"
    //% block="RGB LED number|%index show color|%rgb"
    export function rgb_led_show(index: number, rgb: number): void {
        if (index < 0) {
            index = 0;
        }
        if (index > 1) {
            index = 1;
        }
        let f = index;
        let t = index;
        let r = (rgb >> 16) * (_brightness / 255);
        let g = ((rgb >> 8) & 0xFF) * (_brightness / 255);
        let b = ((rgb) & 0xFF) * (_brightness / 255);

        if (index > 15) {
            if (((index >> 8) & 0xFF) == 0x02) {
                f = index >> 16;
                t = index & 0xff;
            } else {
                f = 0;
                t = -1;
            }
        }
        for (let i = f; i <= t; i++) {
            neopixel_buf[i * 3 + 0] = Math.round(g)
            neopixel_buf[i * 3 + 1] = Math.round(r)
            neopixel_buf[i * 3 + 2] = Math.round(b)
        }
        ws2812b.sendBuffer(neopixel_buf, DigitalPin.P12)
    }



    //% weight=47
    //% r.min=0 r.max=255
    //% g.min=0 g.max=255
    //% b.min=0 b.max=255
    //% blockId="RGB_LED_set_RGB"
    //% block="Red|%r Green|%g Blue|%b"
    export function rgb_led_set_RGB(r: number, g: number, b: number): number {
        if (r < 0) {
            r = 0;
        }
        if (r > 255) {
            r = 255;
        }
        if (g < 0) {
            g = 0;
        }
        if (g > 255) {
            g = 255;
        }
        if (b < 0) {
            b = 0;
        }
        if (b > 255) {
            b = 255;
        }
        return (r << 16) + (g << 8) + (b);
    }

    //% weight=46
    //% blockId="RGB_LED_clear"
    //% block="RGB LED clear all"
    export function rgb_led_clear(): void {
        for (let i = 0; i < 16 * 2; i++) {
            neopixel_buf[i] = 0
        }
        ws2812b.sendBuffer(neopixel_buf, DigitalPin.P12)
    }
}
