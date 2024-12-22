import { Header, CornerInfo } from "./components";
import Pages from "./pages";

function App() {
  return (
    <div
      id="app"
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory *:text-[#FFE] bg-gradient-cosmic"
    >
      <Header />
      <Pages.Landing />
      <Pages.Skillset />
      <Pages.Showcase />
      <Pages.Contact />
    </div>
  );
}

export default App;
