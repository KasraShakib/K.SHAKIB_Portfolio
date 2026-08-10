import { useState, useRef, memo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = memo((props) => {
  const ref = useRef();

  // تشخیص پیش‌فرض موبایل برای کاهش بار پردازش ذرات
  const [sphere] = useState(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    // در موبایل ۵۰۰۰ آیتم (۱۶۶۶ ذره) و در دسکتاپ ۱۰۵۰۰ آیتم (۳۵۰۰ ذره)
    const count = isMobile ? 5000 : 10500;
    
    const data = random.inSphere(new Float32Array(count), { radius: 1.2 });
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) {
        data[i] = 0;
      }
    }
    return data;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // استفاده از سرعت ثابت چرخش برای جلوگیری از پرش
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f43f5e"
          size={0.0025}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
});

Stars.displayName = 'Stars';

const StarsCanvas = memo(() => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1] pointer-events-none overflow-hidden transform-gpu">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        // محدود کردن Pixel Ratio جهت جلوگیری از سفید شدن صفحه در آیفون و گوشی‌های پرچمدار
        dpr={[1, 1.5]}
        gl={{ powerPreference: 'low-power', antialias: false, alpha: true }}
      >
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
});

StarsCanvas.displayName = 'StarsCanvas';

export default StarsCanvas;