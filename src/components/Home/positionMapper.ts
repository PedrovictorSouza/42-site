export function pixelToGrid(pixel: number): number {
  return Math.floor(pixel / 10)
}

export function gridToPixel(grid: number): number {
  return grid * 10
}

export function getPosition(x: number, y: number): { gridX: number; gridY: number; pixelX: number; pixelY: number } {
  return {
    gridX: pixelToGrid(x),
    gridY: pixelToGrid(y),
    pixelX: x,
    pixelY: y
  }
}

export function getGridPosition(x: number, y: number): { x: number; y: number } {
  return {
    x: pixelToGrid(x),
    y: pixelToGrid(y)
  }
}

