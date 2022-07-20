import Circles from "./Circles"
import Sphere from "./Sphere"

import config from './blackHoleConfig.json'

function BlackHole({ position = [2.5, 100, 0] }) {
    return (
        <mesh position={config.background && position ? position : [0, 0 ,0]}>
            <Sphere />
            <Circles />
        </mesh>
    );
}
  
export default BlackHole;