const text = "Olá, eu sou "; 
const typingSpeed = 100; 
let index = 0; 

function type() {
    if (index < text.length) {
        document.getElementById("text").textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(typeName, typingSpeed);
    }
}

function typeName() {
    const nameElement = document.getElementById("name");
    const name = "Italo Daniel";
    let nameIndex = 0; 

    const typingName = setInterval(() => {
        if (nameIndex < name.length) {
            nameElement.innerHTML += name.charAt(nameIndex);
            nameIndex++;
        }
    }, typingSpeed);
}

setTimeout(type, 500);


export function Hero() {
  return (
    <>
      <section id="hero">
        <div className="left">
          <h1 id="typing-effect">
            <span id="text"></span><span className="box"><span className="purple" id="name"></span><span id="cursor" className="cursor"></span></span>
          </h1>
          <div className="buttons-hero">
            <a href="https://www.linkedin.com/in/italo-daniel-sa/" target="_blank" rel="noopener noreferrer">
              <button className="button-hero">
                <img src="https://cdn-icons-png.flaticon.com/512/220/220343.png" alt="Linkedin button" />
                Linkedin
              </button>
            </a>
            <a href="https://github.com/italoasd" target="_blank" rel="noopener noreferrer">
              <button className="button-hero">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github button" />
                Github
              </button>
            </a>
            <a href="pdf/Currículo Italo Daniel.pdf" target="_blank">
              <button className="button-hero">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="CV button" />
                Meu CV
              </button>
            </a>
          </div>
        </div>
        <div className="right">
          <a href="https://www.linkedin.com/in/italo-daniel-sa/" target="_blank" rel="noreferrer">
            <img src="my_icon.png" alt="my icon" className="icon" />
          </a>
        </div>
      </section>
    </>
  )
}
