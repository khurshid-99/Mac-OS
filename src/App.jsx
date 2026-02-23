import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import GitHub from "./components/windows/GitHub";
import Note from "./components/windows/Note";

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <GitHub />
      <Note />
    </main>
  );
};

export default App;
