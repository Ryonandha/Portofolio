import { Canvas } from "@react-three/fiber";
import { useTexture, Float, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import Balatro from "../Backgrounds/Balatro";
import "./ProfileCard.css";

// 1. KARTU DIGITAL (Pengganti file .glb)
function KartuDigital() {
  // Memanggil foto dari folder PUBLIC
  // JIKA ERROR: Pastikan file 'depan.jpg' ada di folder 'public'
  const textureDepan = useTexture("/depan.png");
  const textureBelakang = useTexture("/belakang.png");

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      {/* Membuat MESH (Benda 3D) berbentuk Kotak */}
      <mesh rotation={[0, Math.PI, 0]}>
        {/* UKURAN KARTU: [Lebar, Tinggi, Tebal] */}
        <boxGeometry args={[3.2, 2.0, 0.03]} />

        {/* MATERIAL (Kulit Benda) */}
        {/* Sisi Samping Kanan, Kiri, Atas, Bawah (Warna Gelap) */}
        <meshStandardMaterial attach="material-0" color="#111" />
        <meshStandardMaterial attach="material-1" color="#111" />
        <meshStandardMaterial attach="material-2" color="#111" />
        <meshStandardMaterial attach="material-3" color="#111" />

        {/* Sisi DEPAN (Foto Kamu) */}
        <meshStandardMaterial attach="material-4" map={textureDepan} />

        {/* Sisi BELAKANG (Foto Belakang) */}
        <meshStandardMaterial attach="material-5" map={textureBelakang} />
      </mesh>
    </Float>
  );
}

// 2. TAMPILAN UTAMA
const ProfileCard = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="card-container"
      // Event saat mouse masuk/keluar
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* LAYER 1: Background Balatro (Hanya muncul saat hover) */}
      <div className={`balatro-layer ${isHovering ? "muncul" : ""}`}>
        {/* Kita render selalu, mainkan opacity saja agar performa mulus */}
        <Balatro />
      </div>

      {/* LAYER 2: Canvas 3D */}
      <div className="canvas-layer">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />

          <KartuDigital />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default ProfileCard;
