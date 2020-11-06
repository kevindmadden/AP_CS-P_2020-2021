//Canvas API: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
const myCanvas = document.getElementById("drawingPad")
const ctx = myCanvas.getContext('2d')

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Mouse/Cursor Input
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

let xCursorPos = 0
let yCursorPos = 0

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    xCursorPos = event.clientX - rect.left
    yCursorPos = event.clientY - rect.top
    document.getElementById("coordinateValues").innerHTML = "Coordinates - x: "+xCursorPos+", y: "+yCursorPos
}

myCanvas.addEventListener('mousemove', function(e) {
    getCursorPosition(myCanvas, e)
})