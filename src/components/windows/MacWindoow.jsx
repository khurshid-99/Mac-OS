import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindoow = ({ children }) => {
  return (
    <Rnd>
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

export default MacWindoow;
