import { Canvas } from "@react-three/fiber";
import "./index.css";
function App() {
  return (
    <>
      {/* <span>hello</span> */}
      <div id="canvas-container">
        <Canvas 
      camera={{position:[2,4,4]}}
         >
          <mesh>
          {/* <sphereGeometry   args={[3,10,8]}/> */}
          <torusKnotGeometry  args={[1.7,0.3,256,256]}/>
          {/* <boxGeometry args={[10,10 ,11]}/> */}
          <meshToonMaterial    />
          <directionalLight position={[2,5,3]} />

        </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
