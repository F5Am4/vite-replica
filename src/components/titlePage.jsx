export const TitlePage = () => {
  return (
    <div className="mt-32 container mx-auto">
      <h1 className="text-violet-500 text-6xl">Vite</h1>
      <h2 className="text-slate-100 text-6xl">
        Next Generation <br />
        Frontend Tooling
      </h2>
      <h3 className="text-slate-300 text-2xl mt-5">
        Get ready for a development environment that can <br />
        finally catch up with you.
      </h3>
      <div className="flex mt-8">
        <button className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-full py-2 px-8 ml-2 ...">
          Get Started
        </button>
        <button className="bg-neutral-700 hover:bg-neutral-500 text-white rounded-full py-2 px-8 ml-2 ...">
          Why Vite?
        </button>
        <button className="bg-neutral-700 hover:bg-neutral-500 text-white rounded-full py-2 px-8 ml-2 ...">
          View on GitHub
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-full py-2 px-8 ml-2 ...">
          ViteConf 24!
        </button>
      </div>
    </div>
  );
};
