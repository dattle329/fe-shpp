import { Outlet } from "react-router-dom";
import "./Layout.css";

export function Layout() {
  return <div className="layout-container">
    <div className="left-side">
    <h3>helooooooooooooooooooooooooooo</h3>
    </div>
    <div className="right-side">
    <Outlet />
    </div>
  </div>;
}

export default Layout;
