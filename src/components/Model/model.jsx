import { useEffect } from 'react';
import "./model.scss"
import * as THREE from 'three';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { VOXLoader } from 'three/examples/jsm/loaders/VOXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import SceneInit from './SceneInit';

function App() {
  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();

    // const boxGeometry = new THREE.BoxGeometry(8, 8, 8);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // test.scene.add(boxMesh);

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load('src/assets/model/scene.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);
      
      gltfScene.scene.rotation.y = Math.PI / 9;
      gltfScene.scene.rotation.x = 0.3;
      gltfScene.scene.position.y = 5;

      gltfScene.scene.rotation.z = 0.;





      gltfScene.scene.scale.set(2, 2, 2);
      test.scene.add(gltfScene.scene);
    });

    const animate = () => {
      if (loadedModel) {
        // loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        // loadedModel.scene.rotation.z += 0.01;

      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className='dog'>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;