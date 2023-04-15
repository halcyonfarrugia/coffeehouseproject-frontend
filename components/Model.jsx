import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/coffeehouseproject.gltf");

    gltf.scene.position.y = -3;

    useFrame((state, delta) => {
        if (gltf) {
            gltf.scene.rotation.y += delta * 0.1;
        }
    });

    return (
            <primitive object={gltf.scene} />
    )
}

export default Model