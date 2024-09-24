import React, { useEffect, useRef } from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { Group } from 'three';

const Developer = ({ animationName = 'idle', ...props }) => {
    const group = useRef<Group>(null);
    const { scene } = useGLTF('/models/human/developer.glb');
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone);

    const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
    const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');

    if (idleAnimation.length > 0) idleAnimation[0].name = 'idle';
    if (saluteAnimation.length > 0) saluteAnimation[0].name = 'salute';

    const { actions } = useAnimations(
        [idleAnimation[0], saluteAnimation[0]],
        group
    );

    useEffect(() => {
        if (actions[animationName]) {
            actions[animationName].reset().fadeIn(0.5).play();
            actions[animationName].setEffectiveWeight(1);
        } else {
            console.error(`Animation "${animationName}" not found.`);
        }
        return () => {
            actions[animationName]?.fadeOut(0.5);
        };
    }, [animationName, actions]);

    useFrame((state, delta) => {
        if (actions[animationName]) {
            actions[animationName].getMixer().update(delta);
        }
    });

    return (
        <group {...props} ref={group} dispose={null}>
            <primitive object={clone} />
        </group>
    );
}

useGLTF.preload('/models/human/developer.glb');

export default Developer;