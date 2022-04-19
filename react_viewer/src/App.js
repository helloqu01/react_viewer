import logo from './logo.svg';
import './App.css';

import {Canvas} from "@react-three/fiber";
import Box from './viewer/Viewer';
import {OrbitControls} from '@react-three/drei';
import Sphere from "./viewer/AnimatedSphere";


function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Box/>
      </Canvas>
      <Canvas>
        <OrbitControls/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Sphere/>
      </Canvas>
/
      
    </div>
  );
}


export default App;

