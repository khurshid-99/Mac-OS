import "./app.scss";
import Dock from "./components/Dock";
import Nav from "./components/Nav";
import MacWindoow from "./components/windows/MacWindoow";

const App = () => {
  return (
    <main >
      <Nav />
      <Dock />

     <MacWindoow>
      <h1>Hello</h1>
     </MacWindoow>
    </main>
  );
};

export default App;
