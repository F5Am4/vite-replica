import stackBlitzLogo from "../assets/StackBlitzLogo.PNG";
import labsLogo from "../assets/LabsLogo.PNG";
import astroLogo from "../assets/AstroLogo.PNG";
import storyBlokLogo from "../assets/StoryBlok.PNG";
import bitLogo from "../assets/BitLogo.PNG";
import tailwindLabss from "../assets/TailwindLabs.PNG";
import divRiotsLogo from "../assets/DivRiots.PNG";
import prefectLogo from "../assets/PerfectLogo.PNG";
import jetBrainsLogo from "../assets/JetBrainsLogo.PNG";
import muxLogo from "../assets/MuxLogo.PNG";
import remixLogo from "../assets/RemixLogo.PNG";
import nxLogo from "../assets/NxLogo.PNG";
import transloaditLogo from "../assets/TransloaitLogo.PNG";
import hulyLogo from "../assets/HulyLogo.PNG";
import handsontableLogo from "../assets/HandsontableLogo.PNG";
import latchBioLogo from "../assets/LatchBioLogo.PNG";

export const FooterCards = () => {
  return (
    <div className=" text-zinc-600 grid grid-cols-10 gap-10">
      <div className="bg-neutral-800 col-span-10 text-center rounded-tl-lg rounded-tr-lg p-4">
        <h3>Special Sponsors</h3>
      </div>
      <div className="bg-neutral-800 col-span-3">
        <img src={stackBlitzLogo} alt="SatckBlitz" />
      </div>
      <div className="bg-neutral-800 col-span-4">
        <img src={labsLogo} alt="Labs" />
      </div>
      <div className="bg-neutral-800 col-span-3">
        <img src={astroLogo} alt="Astro" />
      </div>
      <div className="bg-neutral-800 col-span-10 text-center px-10 p-4">
        <h3>Platinum Sponsors</h3>
      </div>
      <div className="bg-neutral-800 col-span-5 p-8">
        <img src={storyBlokLogo} alt="Storyblok" />
      </div>
      <div className="bg-neutral-800 col-span-5 p-8">
        <img src={bitLogo} alt="Bit" />
      </div>
      <div className="bg-neutral-800 col-span-10 text-center px-10 p-4">
        <h3>Gold Sponsors</h3>
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={tailwindLabss} alt="TailwindLabss" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={divRiotsLogo} alt="DivRiots" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={prefectLogo} alt="Prefect" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={jetBrainsLogo} alt="Jetbrains" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={muxLogo} alt="MUX" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={remixLogo} alt="Remix" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={nxLogo} alt="Nx" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={transloaditLogo} alt="Transloadit" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={hulyLogo} alt="Huly" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src={handsontableLogo} alt="Handsontable" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8 rounded-bl-lg">
        <img src={latchBioLogo} alt="LatchBio" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src="" alt="" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src="" alt="" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8">
        <img src="" alt="" />
      </div>
      <div className="bg-neutral-800 col-span-2 p-8 rounded-br-lg">
        <img src="" alt="" />
      </div>
    </div>
  );
};
