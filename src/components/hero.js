export function Hero() {
  return (
    <>
      <section id="hero">
        <div className="left">
          <h1>Olá, eu sou <span className="purple">Italo Daniel</span></h1>
          <div className="buttons-hero">
            <button className="button-hero">
              <img src="https://cdn-icons-png.flaticon.com/512/220/220343.png" alt="Linkedin button" />
              Linkedin
            </button>
            <button className="button-hero">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github button" />
              Github
            </button>
            <a href="pdf/Currículo Italo Daniel.pdf" target="_blank">
              <button className="button-hero">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="CV button" />
                Meu CV
              </button>
            </a>

          </div>
        </div>
        <div className="right">
          <a href="https://www.linkedin.com/in/italo-daniel-sa/" target="_blank" rel="noreferrer"><img src="my_icon.png" alt="my icon" className="icon" /></a>
        </div>
      </section>
    </>
  )
}