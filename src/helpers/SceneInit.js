import * as THREE from 'three';

// Modified from https://github.com/SuboptimalEng/three-js-tutorials/blob/main/02-setup-guide/src/lib/SceneInit.js
export default class SceneInit {
  constructor(canvasId) {
    this.canvasId = canvasId

    // Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // Camera params;
    this.fov = 60;

    // Stars;
    this.texturePoints = undefined;
    this.textureGeometry = undefined;
    this.stars = undefined;
    this.velocity = 0.2;
    this.windowVelocity = 0;

  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 1;
    this.camera.rotation.x = Math.PI/2;

    const canvas = document.getElementById(this.canvasId);

    this.renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
      });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(this.renderer.domElement);

    this.texturePoints = [];

    for (let i = 0; i < 6000; i++) {
        const star = new THREE.Vector3(
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
        )
        this.texturePoints.push(star)
    }

    this.textureGeometry = new THREE.BufferGeometry().setFromPoints( this.texturePoints );

    const sprite = new THREE.TextureLoader().load('../star.png')
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffb3fb,
        size: 0.7,
        map: sprite,
    });

    this.stars = new THREE.Points(this.textureGeometry, starMaterial);
    this.scene.add(this.stars);

    this.scene.fog = new THREE.FogExp2(0xc2c2c2, 0.001);

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);
    window.addEventListener('scroll', () => this.onWindowScroll(), false);
  }

  animate() {
    // NOTE: Window is implied.
    window.requestAnimationFrame(this.animate.bind(this));

    // Animate stars with new Buffer Geometry
    // Adapted from https://sbcode.net/threejs/geometry-to-buffergeometry/
    const positions = this.textureGeometry.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
        const adjustedVelocity = Math.max(-0.1, this.windowVelocity + this.velocity)
        positions[i + 1] = positions[i + 1] - adjustedVelocity;
        if (positions[i + 1] < -200) {
            positions[i + 1] = 200;
        }
    }
    this.textureGeometry.attributes.position.needsUpdate = true

    this.render();
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onWindowScroll() {
    const scrollY = window.scrollY
    const dt = 50
    setTimeout(() => {
        const dy = window.scrollY - scrollY
        const vel = dy / dt 
        this.windowVelocity = vel
    }, dt)
  }
}