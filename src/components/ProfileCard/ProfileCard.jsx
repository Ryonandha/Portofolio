import { Canvas } from "@react-three/fiber";
import { useTexture, OrbitControls, Float } from "@react-three/drei";
import { useState } from "react";
import Balatro from "../Backgrounds/Balatro.jsx";
import "./ProfileCard.css";

// 1. Ini komponen Kartu-nya
function MyCard() {
  // Load tekstur (pastikan nama file sesuai dengan yang di folder public)
  const textureDepan = useTexture("/depan.jpg");
  const textureBelakang = useTexture("/belakang.jpg");

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh rotation={[0, Math.PI, 0]}>
        {" "}
        {/* Rotasi awal agar bagian depan menghadap kamera */}
        {/* Membuat Kotak: [Lebar, Tinggi, Tebal] */}
        {/* Coba ubah angka 0.02 jika ingin kartu lebih tebal/tipis */}
        <boxGeometry args={[3.2, 2, 0.02]} />
        {/* Material untuk sisi-sisi kotak */}
        {/* Urutan: Kanan, Kiri, Atas, Bawah, Depan, Belakang */}
        <meshStandardMaterial attach="material-0" color="#1a1a1a" /> {/* Samping Kanan (Hitam) */}
        <meshStandardMaterial attach="material-1" color="#1a1a1a" /> {/* Samping Kiri */}
        <meshStandardMaterial attach="material-2" color="#1a1a1a" /> {/* Atas */}
        <meshStandardMaterial attach="material-3" color="#1a1a1a" /> {/* Bawah */}
        {/* Sisi DEPAN (Menggunakan foto depan.jpg) */}
        <meshStandardMaterial attach="material-4" map={textureDepan} />
        {/* Sisi BELAKANG (Menggunakan foto belakang.jpg) */}
        <meshStandardMaterial attach="material-5" map={textureBelakang} />
      </mesh>
    </Float>
  );
}

// 2. Ini komponen Utama ProfileCard
const ProfileCard = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="profile-card-wrapper"
      // Deteksi saat mouse masuk/keluar area
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 3. Background Balatro (Muncul hanya saat di-hover) */}
      <div className={`balatro-bg ${isHovering ? "active" : ""}`}>
        {/* Jika isHovering true, tampilkan Balatro */}
        {isHovering && <Balatro />}
      </div>

      {/* 4. Canvas 3D */}
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lampu agar kartu terlihat terang */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />

        {/* Panggil Kartu yang kita buat di atas */}
        <MyCard />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ProfileCard;
