import { NavBar } from "./components/navBar";
import { TitlePage } from "./components/titlePage";
import { MainButtons } from "./components/mainButtons";
import { MainLogo } from "./components/mainLogo";
import { FooterCards } from "./components/footerCards";
import stackBlitzLogo from "./assets/StackBlitzLogo.PNG";
import labsLogo from "./assets/LabsLogo.PNG";
import astroLogo from "./assets/AstroLogo.PNG";
import storyBlokLogo from "./assets/StoryBlok.PNG";
import bitLogo from "./assets/BitLogo.PNG";
import tailwindLabss from "./assets/TailwindLabs.PNG";
import divRiotsLogo from "./assets/DivRiots.PNG";
import prefectLogo from "./assets/PerfectLogo.PNG";
import jetBrainsLogo from "./assets/JetBrainsLogo.PNG";
import muxLogo from "./assets/MuxLogo.PNG";
import remixLogo from "./assets/RemixLogo.PNG";
import nxLogo from "./assets/NxLogo.PNG";
import transloaditLogo from "./assets/TransloaitLogo.PNG";
import hulyLogo from "./assets/HulyLogo.PNG";
import handsontableLogo from "./assets/HandsontableLogo.PNG";
import latchBioLogo from "./assets/LatchBioLogo.PNG";

import heartLogo from "/heart.png";
import React from "react";

function App() {
  return (
    <div className="p-4">
      <div>
        <NavBar />
      </div>
      <main className="container mx-auto items-center flex justify-between">
        <TitlePage />
        {/* Logo de Vite en main */}
        <MainLogo />
      </main>
      {/* Lista de cards */}
      <MainButtons />
      {/* Lista de Sponsors */}
      <div className="container mx-auto flex justify-center">
        <div className="border-t-2 border-neutral-950">
          <div className="m-10 text-center text-zinc-600">
            <div className="flex justify-center mb-2">
              <img className="" src={heartLogo} alt="heart" />
            </div>
            <p>
              Vite is free and open source, made <br />
              possible by wonderful sponsors.
            </p>
          </div>
          <FooterCards />
        </div>
      </div>
    </div>
  );
}

export default App;
