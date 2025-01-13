import { Outlet } from "react-router-dom";
import "./Layout.css";

export function Layout() {
  return (
    <div className="layout-container">
      <div className="top-side">
        <div className="left-side">
          <h3>
            “Stay away from those people who try to disparage your ambitions.
            Small minds will always do that, but great minds will give you a
            feeling that you can become great too.” —Chu quốc khánh
          </h3>
        </div>
        <div className="right-side">
          <Outlet />
        </div>
      </div>
      <div className="bottom-side">
        <ul>
          <li>Tiếng Việt</li>
          <li>English (UK)</li>
          <li>中文(台灣)</li>
          <li>한국어</li>
          <li>日本語</li>
          <li>Français (France)</li>
          <li>ภาษาไทย</li>
          <li>Español</li>
          <li>Português (Brasil)</li>
          <li>Deutsch</li>
        </ul>
      </div>
    </div>
  );
}

export default Layout;
