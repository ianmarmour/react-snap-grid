import React, {useRef, useState , useEffect} from "react";

interface CanvasLocation {
  x: number;
  y: number;
}

const HOOK_SVG = 
'M 5,0 A 5,5 0 0 0 0,5 5,5 0 0 0 5,10 5,5 0 0 0 10,5 5,5 0 0 0 5,0 Z'

const HOOK_PATH = new Path2D(HOOK_SVG)
const SCALE = 0.8
const OFFSET = 80

function drawGrid(ctx: CanvasRenderingContext2D, location: any ) {
  console.log('foo')
  ctx.fillStyle = 'c6c6c6c8'
  ctx.save()
  ctx.scale(SCALE, SCALE)
  ctx.translate(location.x, location.y)
  ctx.fill(HOOK_PATH)
  ctx.restore()
}


function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [locations, setLocations]: [any, any] = useState([])
  const canvasRef = useRef(null) as React.RefObject<HTMLCanvasElement>

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  useEffect(() => {
    const canvas = canvasRef.current

    if(canvas && canvasRef) {
      const ctx = canvas.getContext('2d')
      if(ctx) {
        console.log(locations)
        locations.forEach((location: any) => drawGrid(ctx, location))
      }
    }
  })
  

  function handleClear() {
      const locals: any = []
      const widthIncrement = (width / 20)
      const heightIncrement = (height /20)

      for(let w: number = 0; w < (width / 20); w++) {
        for(let h: number = 0; h < (height /20); h++) {
          locals.push( { x: (w * widthIncrement), y: (h * heightIncrement) } )
        }
      }

      setLocations([...locations, ...locals])
  }

  return (
    <>
      <button onClick={handleClear}>Clear</button>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
      />
    </>
  )
}

export default App