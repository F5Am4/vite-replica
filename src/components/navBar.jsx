import viteLogo from "/vite.svg";
import languageLogo from "/language.svg";
import mastodonLogo from "/mastodon.svg";
import XLogo from "/X.svg";
import discordLogo from "/discord.svg";
import githubLogo from "/github.svg";
import darkModeLogo from "/darkMode.svg";

const ListButtonMenu = ({ nameButton }) => {
  return (
    <a className="mx-3" href="">
      {nameButton}
    </a>
  );
};

const VerticalButtonMenu = ({ nameButton }) => {
  return (
    <div className="buttonMenuBar mx-1">
      <button className="transition duration-300 ease-in-out px-5 rounded bg-neutral-900 hover:bg-neutral-700 hover:bg-opacity-20 active:bg-zinc-700 focus:outline-none focus:text-white focus:ring-zinc-300 ...">
        {nameButton}
      </button>
    </div>
  );
};

const SocialButton = ({ src, alt }) => {
  return (
    <img
      className="mx-2 transition duration-300 ease-in-out hover:filter hover:brightness-0 hover:invert"
      src={src}
      alt={alt}
      width="28"
      height="28"
    />
  );
};

export { ListButtonMenu, SocialButton, VerticalButtonMenu };

export const NavBar = () => {
  return (
    <header className="container mx-auto flex justify-between items-center">
      <div className="space-x-11">
        <div className="container flex">
          <div className="titleVite mx-8">
            <div className="VPNavBarTittle mx-3">
              <a className="text-violet-600 flex">
                <img src={viteLogo} alt="Logo" width="25" height="25" />
                <span className="mx-3 text-slate-200">Vite</span>
              </a>
            </div>
          </div>
          <div className="contentBody flex">
            {/* Contenedor de la navBar */}
            <div className="Search input flex text-slate-200">
              <div className="docsearch mr-28">
                <button className="docSearch">
                  <span className="search-container">
                    <label className="vp-icon"></label>
                    <input
                      className="rounded bg-neutral-950 w-28 px-5"
                      placeholder="CtrlK"
                    />
                  </span>
                </button>
              </div>
              <nav className="button-nav flex">
                <div className="flex">
                  <span className="main-nav mx-3">
                    <ListButtonMenu nameButton="Guide" />
                    <ListButtonMenu nameButton="Config" />
                    <ListButtonMenu nameButton="Plugins" />
                  </span>
                </div>
                <div className="VerticalButtonsMenu flex">
                  <VerticalButtonMenu nameButton="Resources" />
                  <VerticalButtonMenu nameButton="Version" />
                </div>
                <div className="socialButtons flex justify-between mx-8">
                  <SocialButton src={languageLogo} alt={"languageLogo"} />
                  <SocialButton src={darkModeLogo} alt={"darkmodeLogo"} />
                  <SocialButton src={mastodonLogo} alt={"mastodonLogo"} />
                  <SocialButton src={XLogo} alt={"XLogo"} />
                  <SocialButton src={discordLogo} alt={"discordLogo"} />
                  <SocialButton src={githubLogo} alt={"githubLogo"} />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
