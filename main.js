import * as THREE from 'three'
const sphereGeometry = new THREE.SphereGeometry(1.5,32,32)
/*
We need 4 elements to get started:

1) A scene that will contain objects
2) Some objects
3) A camera
4) A renderer

*/
// 1)
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1,1,1)
// To create the material, we use the MeshBasicMaterial class with one parameter: an object {} containing all the options.
const material = new THREE.MeshBasicMaterial({color:`red`})
// To create the final mesh, we use the Mesh class and send the geometry and the material as parameters.
const mesh = new THREE.Mesh(geometry,material)
// plug your mesh into the scene
scene.add(mesh)

// 2)
// field of view (fov)(degree) & height and width aspect ratios
const aRatio = {
    height:550,
    width:750
}
const fov = 75
const camera = new THREE.PerspectiveCamera(fov,aRatio.width/aRatio.height)
scene.add(camera)

