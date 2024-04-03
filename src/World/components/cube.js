import { BoxGeometry, Mesh, MeshStandardMaterial, MathUtils, TextureLoader } from "three";

const radiansPerSecond = MathUtils.degToRad(30)
import uvTestBw from '@/assets/textures/uv-test-bw.png'

function createMaterial() {
    const textureLoader = new TextureLoader()
    const texture = textureLoader.load(uvTestBw)
    const material = new MeshStandardMaterial({
        color:'red',
        map: texture
    })

    return material
}

function createCube() {
    const geometry = new BoxGeometry(2, 2, 2)
    const material = createMaterial()
    const cube = new Mesh(geometry, material)

    cube.rotation.set(-0.5, -0.1, 0.8)
    cube.position.set(0, 0, 0)

    cube.tick = (delta) => {
        let v = delta * radiansPerSecond
        cube.rotation.z += v;
        cube.rotation.y += v;
        cube.rotation.x += v;
        cube.position.x = (cube.position.x + v * 2) % 18
    }

    return cube
}

export { createCube }