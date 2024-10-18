import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }
    
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, [init]);

    return (
        <div className="App">
            <Hero />
            <Projects />

            {init && <Particles options={particlesOptions} />}
        </div>
    );
}

export default App;
