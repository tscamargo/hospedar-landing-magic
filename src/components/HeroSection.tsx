
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img 
        src="/lovable-uploads/86c9ff60-d6c0-4058-9965-b318a803d02c.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="relative flex h-full items-center justify-center px-4">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-outfit text-4xl md:text-5xl lg:text-6xl text-white font-bold max-w-4xl mx-auto leading-tight"
          >
            Conheça o Modelo de Negócio de Hospedagem que dá{" "}
            <span className="text-cream-light">85% de ocupação</span> com diárias acima de{" "}
            <span className="text-cream-light">R$ 1000,00</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8"
          >
            <button className="bg-cream text-accent px-8 py-4 rounded-md font-jakarta font-medium text-lg hover:bg-cream-dark transition-colors duration-300">
              Saiba Mais
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
