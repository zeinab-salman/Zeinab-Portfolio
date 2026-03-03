import { motion } from "framer-motion";
import "./TechRadar.css"
const TechRadar = () => {
  // ثلاث دوائر متتابعة ليعطي شكل الرادار الحقيقي
  const rings = [0, 1, 2];

  return (
    <div className="relative flex items-center justify-center w-10 h-10">
      {/* الدوائر النابضة الخلفية */}
      {rings.map((index) => (
        <motion.div
          key={index}
          className="  absolute rounded-full border border-pink-300 bg-pink-500/10"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            // يتوسع الحجم من الأصلي إلى ضعف ونصف
            scale: [1, 2.5],
            // يبدأ شفافاً، يظهر في المنتصف، ثم يتلاشى تماماً قبل النهاية
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.8, // توزيع متناسق يمنع الانقطاع
            ease: "linear",
          }}
          style={{
            width: "16px",
            height: "16px",
            position: "absolute",
          }}
        />
      ))}

      {/* النقطة المركزية الثابتة */}
      <div className=" circle-center relative z-10 w-2 h-2 rounded-full shadow-[0_0_8px_#725073]" />
    </div>
  );
};

export default TechRadar; 