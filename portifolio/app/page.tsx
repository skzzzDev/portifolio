import Particles from "react-tsparticles";
import Sidebar from "./components/Sidebar";
import ParticlesComponent from "./components/Particles";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Sidebar />
      <Content />
      <ParticlesComponent />
    </div>
  );
}
