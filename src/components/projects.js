import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Projects() {
  // Hook para controlar a animação
  const controls = useAnimation();

  // Hook para detectar quando o elemento está na viewport
  const [ref, inView] = useInView({ triggerOnce: true });

  // Iniciar a animação quando o elemento estiver na viewport
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const projectVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.2, // Espaçamento entre animações de filhos
        delayChildren: 0.2,   // Delay para o início da animação dos filhos
      },
    },
  };

  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="project-top">
            <h1>Projetos</h1>
          </div>
          <div className="projects-data">
            {/* Animação do primeiro projeto */}
            <motion.div
              className="info-projeto"
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={projectVariant}
              whileInView="visible" // Ativa animação enquanto na viewport
            >
              <a
                href="https://projeto-crescendo-na-luta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="projeto" id="crescendo-na-luta">
                  <img
                    src="projects/crescendo-na-luta.png"
                    alt="imagem do site crescendo na luta"
                  />
                </div>
                <div className="descricao-projeto cnl">
                  <h3>Projeto Crescendo na Luta</h3>
                  <p>
                    Projeto desenvolvido para uma iniciativa social, com a
                    intenção de apoiar o projeto e aplicar minhas habilidades na
                    prática.
                  </p>
                  <p className="purple">
                    Tecnologias usadas no projeto: Next.js, TypeScript, HTML,
                    CSS
                  </p>
                </div>
              </a>
            </motion.div>

           
            {[...Array(5)].map((_, i) => (
              <motion.div
                className="info-projeto"
                key={i}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={projectVariant}
                whileInView="visible"
                transition={{
                  delay: 0.1 * (i + 1), // Aumenta o delay para cada projeto para uma animação sequencial
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                }}
              >
                <div className="projeto">
                  <div>
                    <h3>em andamento</h3>
                  </div>
                </div>
                <div className="descricao-projeto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
