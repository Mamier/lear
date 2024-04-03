import { RectAreaLight } from "three";

function createLights() {
    const light = new RectAreaLight('white', 50, 10, 10)
    light.position.set(-10, 10, 10)
    light.lookAt(0,0,0)

    return light
}

export { createLights }