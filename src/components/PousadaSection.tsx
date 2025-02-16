
import { motion } from "framer-motion";

const PousadaSection = () => {
  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-inter text-sm uppercase tracking-wider">Bem-vindo aos</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-accent mt-2 mb-8">Chalés de Alfredo</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            Localizado no coração da Serra Catarinense, os Chalés de Alfredo oferecem uma experiência única de hospedagem, 
            combinando o charme rústico da região com o conforto e luxo que nossos hóspedes merecem.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-playfair text-2xl text-primary mb-4">Localização Privilegiada</h3>
              <p className="text-gray-600">
                Situado em meio à natureza exuberante da Serra Catarinense, proporcionando uma experiência única de tranquilidade e conexão com a natureza.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-playfair text-2xl text-primary mb-4">Conforto Premium</h3>
              <p className="text-gray-600">
                Chalés equipados com amenidades de alto padrão, garantindo uma estadia confortável e memorável para nossos hóspedes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PousadaSection;
