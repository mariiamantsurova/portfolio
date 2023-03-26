/*
 */
import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
export default function Cat(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('model/cat.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions.catAction.play()
    actions.backpackAction.play()
    actions.helmetHolderAction.play()
    actions.helmetAction.play()
  }, [])

  useEffect(() => {
    const {
      catAction,
      backpackAction,
      helmetHolderAction,
      helmetAction,
    } = actions
    if (props.paused) {
      catAction.paused = true
      backpackAction.paused = true
      helmetHolderAction.paused = true
      helmetAction.paused = true
    } else {
      catAction.paused = false
      backpackAction.paused = false
      helmetHolderAction.paused = false
      helmetAction.paused = false
    }
  }, [props.paused])

  const hdrEquirect = new RGBELoader().load(
    'textures/satara_night_4k.hdr',
    (texture, textureData) => {
      hdrEquirect.mapping = THREE.EquirectangularReflectionMapping
      texture.encoding = THREE.RGBEEncoding
      texture.minFilter = THREE.NearestFilter
      texture.magFilter = THREE.NearestFilter
      texture.flipY = true

      textureData.height = 1000
      textureData.width = 1000
      textureData.exposure = 10
    },
  )

  return (
    <group ref={group} {...props} dispose={null} scale={120}>
      <group name="Scene">
        <group
          name="cat"
          position={[0, 3.36, 0]}
          rotation={[0.06, 0.44, -0.16]}
          scale={[1.11, 0.98, 0.98]}
        >
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials.head}
          />
          <mesh
            name="Cube001_1"
            geometry={nodes.Cube001_1.geometry}
            material={materials.body}
          />
          <mesh
            name="Cube001_2"
            geometry={nodes.Cube001_2.geometry}
            material={materials.hair}
          />
          <mesh
            name="Cube001_3"
            geometry={nodes.Cube001_3.geometry}
            material={materials['hair.002']}
          />
          <mesh
            name="Cube001_4"
            geometry={nodes.Cube001_4.geometry}
            material={materials.eyes}
          />
          <mesh
            name="Cube001_5"
            geometry={nodes.Cube001_5.geometry}
            material={materials['nose.001']}
          />
          <mesh
            name="Cube001_6"
            geometry={nodes.Cube001_6.geometry}
            material={materials['body.001']}
          />
          <group name="backpack">
            <mesh
              name="Cube015"
              geometry={nodes.Cube015.geometry}
              material={materials.metal}
            />
            <mesh
              name="Cube015_1"
              geometry={nodes.Cube015_1.geometry}
              material={materials['Material.003']}
            />
          </group>
        </group>
        <group
          name="helmet"
          position={[0, 3.36, 0]}
          rotation={[0.06, 0.44, -0.16]}
          scale={[1.11, 0.98, 0.98]}
        >
          <mesh
            name="Cube016"
            geometry={nodes.Cube016.geometry}
            material={
              new THREE.MeshStandardMaterial({
                color: 0xffffff,

                roughness: 0,
                metalness: 1,
              })
            }
          />
          <mesh
            name="Cube016_1"
            geometry={nodes.Cube016_1.geometry}
            material={
              new THREE.MeshPhysicalMaterial({
                roughness: 0,
                transmission: 1,
                ior: 1,
                opacity: 1,
                envMap: hdrEquirect,
                envMapIntensity: 2,
              })
            }
          />
        </group>
        <mesh
          name="helmetHolder"
          geometry={nodes.helmetHolder.geometry}
          material={
            new THREE.MeshPhysicalMaterial({
              color: 0x414141,
              roughness: 0,
              metalness: 0.5,
              envMap: hdrEquirect,
            })
          }
          position={[0, 3.36, 0]}
          rotation={[0.06, 0.44, -0.16]}
          scale={[1.11, 0.98, 0.98]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('model/cat.glb')
