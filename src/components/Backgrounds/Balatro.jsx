// src/components/Backgrounds/Balatro.jsx
import { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Plane, Program, Mesh } from "ogl";

const Balatro = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);

    const camera = new Camera(gl);
    camera.position.z = 1;

    const scene = new Transform();
    const geometry = new Plane(gl, { width: 2, height: 2 });

    const vertex = `
      attribute vec3 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // Shader warna-warni (Mirip efek kartu Balatro)
    const fragment = `
      precision highp float;
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        vec2 uv = vUv;
        float color1 = 0.5 + 0.5 * sin(uTime + uv.x * 10.0);
        float color2 = 0.5 + 0.5 * cos(uTime + uv.y * 8.0 + 2.0);
        float color3 = 0.5 + 0.5 * sin(uTime * 0.5 + 4.0);
        gl_FragColor = vec4(color1, color2, color3, 1.0);
      }
    `;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: { uTime: { value: 0 } },
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let animationId;
    const update = (t) => {
      animationId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene, camera });
    };

    const resize = () => {
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    };
    window.addEventListener("resize", resize);
    resize();

    animationId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
      if (containerRef.current?.contains(gl.canvas)) {
        containerRef.current.removeChild(gl.canvas);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default Balatro;
