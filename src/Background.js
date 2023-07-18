import { useEffect } from 'react';
import * as THREE from 'three'

import SceneInit from './helpers/SceneInit';

export default function Background() {
    useEffect(() => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initialize();
        test.animate();
    }, []);

      return (
        <div>
          <canvas
            id="myThreeJsCanvas"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -999 }}
            />
        </div>
      );
      // const myStyle={
      //       backgroundImage:'/background_pic.png'
      //       }
      //   return (
      //     <div  >
      //       <canvas
      //         id="myStyle"
      //       />
      //     </div>
      //   );
  }