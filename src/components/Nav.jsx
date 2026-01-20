import DateTime from "./DateTime";
import "./nave.scss";

const Nav = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple_icon">
          <img src="./navbar_icons/apple.svg" alt="" />
        </div>
        <div className="nav_item">
          <p>Khurshid Alam</p>
        </div>
        <div className="nav_item">
          <p>File</p>
        </div>
        <div className="nav_item">
          <p>Window</p>
        </div>
        <div className="nav_item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="nav_icon">
          <img src="/navbar_icons/wifi.svg" alt="" />
        </div>
        <div className="nav_item">
            <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
