import * as Three from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new Three.Scene()
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new Three.WebGLRenderer()
const light = new Three.DirectionalLight(0xffffff, 1)
light.position.set(1, 1, 1).normalize()
scene.add(light)
const loader = new FBXLoader()
loader.load('/fbx/crystal.fbx', function(object) {
    scene.add(object)
    object.position.set(0, 0, 0)
    object.scale.set(1, 1, 1)
}, undefined, function(error) {
    console.error(error)
})
//const controls = new OrbitControls(camera, renderer.domElement)

export default renderer
