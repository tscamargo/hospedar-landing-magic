
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-playfair text-4xl mb-12">Entre em Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-4 text-cream" />
              <h3 className="font-inter text-xl mb-2">Telefone</h3>
              <p className="text-cream-light">(48) 99999-9999</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-4 text-cream" />
              <h3 className="font-inter text-xl mb-2">Email</h3>
              <p className="text-cream-light">contato@chalesdealfredo.com.br</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-4 text-cream" />
              <h3 className="font-inter text-xl mb-2">Endereço</h3>
              <p className="text-cream-light">Serra Catarinense, SC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
