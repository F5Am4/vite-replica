import lightbulb from "/idea-bulb.png";
import lightning from "/lightning.png";
import hammer from "/hammer.png";
import box from "/box.png";
import dumbbell from "/dumbbell.png";
import keyLogo from "/key.png";

const LogoCardButton = ({ src, alt }) => {
  return (
    <img
      className="bg-neutral-700 rounded-sm m-5 p-1"
      src={src}
      alt={alt}
      width="45"
      height="45"
    />
  );
};

const CardSpec = ({ title, description, src, alt }) => {
  return (
    <div className="bg-neutral-800 rounded-lg ml-1">
      <LogoCardButton src={src} alt={alt} />
      <div className="m-5">
        <h4 className="text-white">{title}</h4>
        <p className="text-zinc-600">{description}</p>
      </div>
    </div>
  );
};

export { CardSpec, LogoCardButton };

export const MainButtons = () => {
  return (
    <div className="container mx-auto flex justify-center mt-6 mb-40">
      <div className="grid grid-cols-3 gap-3 text-start">
        <CardSpec
          title="Instant Server Start"
          description="On demand file serving over native ESM, no
          bunding required!"
          src={lightbulb}
          alt={"lightbulb"}
        />
        <CardSpec
          title="Lightning Fast HMR"
          description="Hot Module Replacement (HMR) that stays fast
          regardless of app size."
          src={lightning}
          alt={"lightning"}
        />
        <CardSpec
          title={"Rich Features"}
          description="Out-of-the-box support for Typescript, JSX,
          CSS and more."
          src={hammer}
          alt={"hammer"}
        />
        <CardSpec
          title={"Optimized Build"}
          description="Pre-configured Rollup build with multi-page and library mode support."
          src={box}
          alt={"box"}
        />
        <CardSpec
          title={"Universal Plugins"}
          description="Rollup-superset plugin interface shared between dev and build."
          src={dumbbell}
          alt={"dumbbell"}
        />
        <CardSpec
          title={"Fully Typed APIs"}
          description="Flexible programmatic APIs with full TypeScript typing."
          src={keyLogo}
          alt={"keyLogo"}
        />
      </div>
    </div>
  );
};
