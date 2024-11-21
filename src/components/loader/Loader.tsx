import { motion } from "framer-motion";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <motion.div
        style={{
          display: "block",
          width: 200,
          height: 200,
          borderRadius: "50%",
          backgroundColor: "royalblue",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};
