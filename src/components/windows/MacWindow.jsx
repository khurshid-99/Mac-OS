import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({ children }) => {
  return (
    <Rnd
      default={{
        width: "40vw",
        height: "45vh",
        x: 300,
        y: 100,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <p className="title">khurshid - zsh</p>
        </div>
        <div className="main_content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
