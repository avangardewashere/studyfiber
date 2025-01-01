import { Canvas } from "@react-three/fiber";
import "./index.css"
function App() {
  return (
    <>
      <span>hello</span>
      <div id="canvas-container"  >
        <Canvas style={{ backgroundColor: "deepskyblue" }}>
          <span>Hello</span>
        </Canvas>
      </div>
    </>
  );
}

export default App;
