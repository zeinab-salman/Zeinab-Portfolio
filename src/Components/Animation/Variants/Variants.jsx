import { motion } from "framer-motion";
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.2,
    },
  },
};
export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: 10,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.2, //0.8
      ease: [0.2, 1, 0.4, 1],
    },
  },
};
{
  /*
const ProjectsGrid = () => {
  const projects = [1, 2, 3, 4]; // مثال لبياناتك

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-6" // تنسيق الشبكة
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: "1000px" }}
    >
      {projects.map((project) => (
        <motion.div 
          key={project} 
          variants={cardVariants}
          className="bg-white p-6 rounded-2xl shadow-sm" // ستايل الكارد
        >
      
          <h3>مشروع رقم {project}</h3>
          <p>وصف مختصر وجذاب...</p>
        </motion.div>
      ))}
    </motion.div>
  );
};
*/
}
