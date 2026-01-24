/* eslint-disable react/no-unknown-property */
"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { useTexture, Environment, Lightformer } from "@react-three/drei";
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";
import "./Lanyard.css";

// ASSETS
import imgDepan from "../../assets/depan.png";
import imgBelakang from "../../assets/belakang.png";
import imgLanyard from "../../assets/lanyard.png";

extend({ MeshLineGeometry, MeshLineMaterial });

/* ======================================================
   MAIN COMPONENT
====================================================== */
export default function Lanyard({ position = [0, 0, 30], gravity = [0, -40, 0], fov = 20, transparent = true }) {
  return (
    <div className="lanyard-wrapper">
      <Canvas camera={{ position, fov }} gl={{ alpha: transparent }} onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}>
        {/* LIGHT */}
        <ambientLight intensity={4} />

        <Suspense fallback={null}>
          <Physics gravity={gravity} timeStep={1 / 60}>
            <Band />
          </Physics>
        </Suspense>

        {/* ENVIRONMENT */}
        <Environment blur={0.75}>
          <Lightformer intensity={5} position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={5} position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={5} position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={5} position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

/* ======================================================
   BAND / LANYARD
====================================================== */
function Band({ maxSpeed = 30, minSpeed = 5 }) {
  const band = useRef();
  const fixed = useRef();
  const j1 = useRef();
  const j2 = useRef();
  const j3 = useRef();
  const card = useRef();

  const vec = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();

  const [dragged, setDragged] = useState(false);
  const [hovered, setHovered] = useState(false);

  /* =============================
      FISIKA STABIL
  ============================== */
  const segmentProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  /* =============================
      TEXTURES
  ============================== */
  const texDepan = useTexture(imgDepan);
  const texBelakang = useTexture(imgBelakang);
  const texTali = useTexture(imgLanyard);

  texTali.wrapS = texTali.wrapT = THREE.RepeatWrapping;
  texTali.repeat.set(1, 1);

  /* =============================
      CURVE TALINYA
  ============================== */
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  curve.curveType = "chordal";

  /* =============================
      CURSOR
  ============================== */
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => (document.body.style.cursor = "auto");
    }
  }, [hovered, dragged]);

  /* =============================
      JOINTS
  ============================== */
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);

  // UPDATE: TITIK SAMBUNG LEBIH TINGGI (1.15)
  // Karena kartu makin besar (4.5x), titik gantungnya harus naik agar pas di ujung.
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.15, 0],
  ]);

  /* =============================
      FRAME LOOP
  ============================== */
  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      const maxDistance = 6;
      if (vec.length() > maxDistance) vec.setLength(maxDistance);

      card.current?.wakeUp();
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (!fixed.current) return;

    // Offset sedikit ke atas agar tali tidak nembus jepitan
    curve.points[0].copy(j3.current.translation()).add(new THREE.Vector3(0, 0.05, 0));
    curve.points[1].copy(j2.current.translation());
    curve.points[2].copy(j1.current.translation());
    curve.points[3].copy(fixed.current.translation());

    band.current.geometry.setPoints(curve.getPoints(32));

    ang.copy(card.current.angvel());
    rot.copy(card.current.rotation());
    card.current.setAngvel({
      x: ang.x,
      y: ang.y - rot.y * 0.25,
      z: ang.z,
    });
  });

  /* =============================
      RENDER
  ============================== */
  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" />

        <RigidBody ref={j1} position={[0.5, 0, 0]} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody ref={j2} position={[1.0, 0, 0]} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody ref={j3} position={[1.5, 0, 0]} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        {/* --- KARTU UTAMA --- */}
        <RigidBody ref={card} position={[2.0, 0, 0]} {...segmentProps} type={dragged ? "kinematicPosition" : "dynamic"}>
          {/* UPDATE: COLLIDER LEBIH BESAR */}
          {/* Disesuaikan dengan scale 4.5 agar area tariknya pas */}
          <CuboidCollider args={[0.8, 1.1, 0.01]} />

          {/* VISUAL KARTU */}
          <group
            scale={4.5} // <--- UKURAN JUMBO (Tadi 3.5)
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onPointerDown={(e) => {
              e.target.setPointerCapture(e.pointerId);
              setDragged(new THREE.Vector3().copy(e.point).sub(card.current.translation()));
            }}
            onPointerUp={(e) => {
              e.target.releasePointerCapture(e.pointerId);
              setDragged(false);
            }}
          >
            {/* BADAN KARTU */}
            <mesh>
              <boxGeometry args={[0.31, 0.44, 0.01]} />
              <meshStandardMaterial attach="material-0" color="#000" />
              <meshStandardMaterial attach="material-1" color="#000" />
              <meshStandardMaterial attach="material-2" color="#000" />
              <meshStandardMaterial attach="material-3" color="#000" />
              <meshStandardMaterial attach="material-4" map={texDepan} />
              <meshStandardMaterial attach="material-5" map={texBelakang} />
            </mesh>

            {/* JEPITAN/CLIP */}
            <mesh position={[0, 0.24, 0]}>
              <boxGeometry args={[0.05, 0.06, 0.02]} />
              <meshStandardMaterial color="black" roughness={0.5} />
            </mesh>
          </group>
        </RigidBody>
      </group>

      {/* --- TALI LANYARD --- */}
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          map={texTali}
          repeat={[-4, 1]}
          lineWidth={1} // <--- TALI LEBIH KECIL/TIPIS (Tadi 2)
          depthTest={false}
          transparent={true}
        />
      </mesh>
    </>
  );
}
