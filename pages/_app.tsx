import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import Particle from "../components/Particle";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex z-10">
      <div className=" fixed">
        <Particle />
      </div>
      <div className=" z-10 flex">
        <NavBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
