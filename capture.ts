//%color="#000090"
//%icon="\uf03d"
namespace capture{
    //%group="image"
    //% block="draw $src to $to at x $x y $y"
    //% src.shadow=screen_image_picker
    //% to.shadow=variables_get
    //% to.defl=myImage
    //% x.shadow="positionPicker"
    //% y.shadow="positionPicker"
    //% weight=65
    //% inlineInputMode=inline
    export function drawTransparentImage(src: Image, to: Image, x: number, y: number) {
        if (!src || !to) {
            return;
        }
        to.drawTransparentImage(src, x, y);
    }
    //%group="image"
    //%block="capture screen image capture modifiers width multiplier $width height multiplier $height"
    //% width.defl = 1
    //% height.defl = 1
    export function capture_screen_image(width: number, height: number) {
        let screencapture = image.create(scene.screenWidth(), scene.screenHeight())
        capture.drawTransparentImage(image.screenImage(), screencapture, 0, 0)
        let CaptureSprite = sprites.create(screencapture, SpriteKind.Player)
    }
}