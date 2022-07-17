import Circles from "./Circles"
import Sphere from "./Sphere"

import config from './blackHoleConfig.json'

function BlackHole() {
    return (
        <mesh position={config.background ? [2.5, 100, 0] : [0, 0 ,0]}>
            <Sphere />
            <Circles />
        </mesh>
    );
}
  
export default BlackHole;