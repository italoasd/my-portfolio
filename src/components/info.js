import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Info() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const infoVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <>
      <section id="infos">
        <motion.div
          className="info"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={infoVariant}
        >
          <div className="info-top">
            <h1>Sobre mim</h1>
          </div>
          <div className="info-data">
            <p>
              Olá, sou Italo Daniel, Desenvolvedor de Software Júnior com
              especialização em Next.js, React.js e JavaScript, com foco no
              desenvolvimento Full Stack. Minha paixão por tecnologia começou na
              infância, quando eu desmontava brinquedos e ferramentas para
              entender como funcionavam. Esse espírito curioso e explorador me
              guiou ao mundo da programação.
            </p>
            <p>
              Minha formação no CEAP - Centro Educacional Assistencial
              Profissionalizante não só me deu uma base técnica sólida, mas
              também proporcionou um forte desenvolvimento de soft skills, como
              trabalho em equipe, liderança e inteligência emocional. Coloquei
              essas habilidades em prática em projetos como o Crescendo na Luta,
              um site desenvolvido com Next.js e TypeScript para apoiar uma
              iniciativa social, o que me deu a oportunidade de aplicar meus
              conhecimentos de forma prática e impactar positivamente a
              comunidade.
            </p>
            <p>
              Atualmente, estou me preparando para cursar Análise e
              Desenvolvimento de Sistemas (ADS) pela FIAP, com o objetivo de
              expandir meus conhecimentos e avançar na minha carreira. A longo
              prazo, pretendo me especializar em tecnologias emergentes, como
              Internet das Coisas (IoT) e Inteligência Artificial, sempre em
              busca de novos desafios e aprendizados.
            </p>
            <p>
              Minha trajetória na tecnologia foi fortemente influenciada pela
              minha família. Meu padrasto e tios, profissionais nas áreas de
              automação, eletrônica e programação, foram mentores desde o
              início. Um deles, que desenvolveu sistemas para a Fórmula 1, foi
              uma grande inspiração para eu seguir carreira na programação. Sob
              a orientação deles, mergulhei de cabeça no universo da tecnologia
              e venho constantemente aperfeiçoando minhas habilidades.
            </p>
            <p>
              Além da tecnologia, sou uma pessoa ativa e disciplinada, com
              hobbies que incluem artes marciais (como jiu-jitsu, muay-thai e
              wrestling), musculação e corrida, além do gosto por ler mangás.
              Acredito que esses interesses me ajudam a manter o equilíbrio e a
              determinação tanto na vida pessoal quanto na profissional.
            </p>
            <p>
              Sempre em busca de novos conhecimentos de forma autodidata, sou
              movido por desafios e pela vontade de criar soluções que impactem
              positivamente a vida das pessoas. Estou em constante evolução,
              pronto para contribuir em projetos desafiadores e colaborar com
              equipes focadas em inovação.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
