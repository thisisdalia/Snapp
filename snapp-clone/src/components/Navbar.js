import React from "react";

import { useStateContext } from "../context/ContextProvider";
import NavMenu from "./NavMenu";

import classes from "../styles/Navbar.module.css";

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const setNavMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <div className={classes.navbar}>
      <div className={classes["nav-logo"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="26"
          viewBox="0 0 90 26"
        >
          <g fill="none" fill-rule="evenodd">
            <g fill="#00D170">
              <g>
                <path
                  d="M12.948 3.06c-.621 1.212-2.016 1.803-3.32 1.416-.438-.13-.894-.2-1.356-.2-.938 0-2.188.547-2.188 1.643 0 1.146 1.38 1.59 2.265 1.877l1.303.39c2.734.81 4.844 2.19 4.844 5.372 0 1.955-.47 3.962-2.032 5.292-1.536 1.304-3.594 1.851-5.573 1.851-2.464 0-4.876-.828-6.877-2.225-.013-.01-.018-.028-.01-.043l2.173-4.093c1.277 1.121 2.787 2.033 4.532 2.033 1.198 0 2.473-.6 2.473-1.981 0-1.434-2.004-1.93-3.098-2.242C2.88 11.237.77 10.403.77 6.596.77 2.607 3.61 0 7.542 0c1.969 0 4.375.62 6.118 1.6.015.01.022.029.013.046l-.725 1.415zM20.18 8.526h.001c.011 0 .022-.006.028-.015 1.092-1.605 2.418-2.15 4.261-2.15 3.593 0 5.026 2.269 5.026 5.554v5.44c0 1.56-1.263 2.825-2.822 2.825H24.79c-.019 0-.034-.015-.034-.034v-6.484c0-1.278.209-3.52-2.135-3.52-1.928 0-2.474 1.434-2.474 3.103v4.11c0 1.56-1.263 2.825-2.822 2.825H15.44c-.018 0-.033-.015-.033-.034V6.838c0-.018.015-.033.033-.033h4.673c.019 0 .034.015.034.033v1.654c0 .019.015.034.034.034M35.291 13.505c0 1.695 1.12 2.999 3.047 2.999 1.928 0 3.048-1.304 3.048-2.999 0-1.642-1.12-3.024-3.048-3.024-1.927 0-3.047 1.382-3.047 3.024m7.856 6.675h-1.884c-.019 0-.033-.015-.033-.034v-1.418c0-.02-.016-.034-.034-.034-.012 0-.023.006-.029.015-.836 1.32-2.47 1.914-4.026 1.914-3.959 0-6.745-3.311-6.745-7.144 0-3.832 2.734-7.118 6.692-7.118 1.507 0 3.088.552 4.082 1.679.02.023.06.01.06-.022v-1.18c0-.018.014-.033.033-.033h4.673c.018 0 .033.015.033.033v10.517c0 1.56-1.263 2.825-2.822 2.825M52.002 13.505c0 1.695 1.12 2.999 3.047 2.999s3.047-1.304 3.047-2.999c0-1.642-1.12-3.024-3.047-3.024-1.928 0-3.047 1.382-3.047 3.024m.19-5.188c.01 0 .022-.006.028-.015.862-1.32 2.47-1.94 4.027-1.94 3.985 0 6.745 3.337 6.745 7.17 0 3.858-2.734 7.091-6.693 7.091-1.533 0-3.117-.545-4.133-1.712-.003-.003-.007-.001-.007.003v4.082c0 1.56-1.264 2.825-2.822 2.825h-1.918V6.805h4.74v1.478c0 .02.014.034.033.034M68.461 13.505c0 1.695 1.12 2.999 3.047 2.999s3.048-1.304 3.048-2.999c0-1.642-1.121-3.024-3.048-3.024-1.928 0-3.047 1.382-3.047 3.024m.19-5.188c.011 0 .022-.006.028-.015.862-1.32 2.47-1.94 4.027-1.94 3.984 0 6.744 3.337 6.744 7.17 0 3.858-2.734 7.091-6.692 7.091-1.507 0-3.065-.526-4.082-1.654-.02-.023-.06-.009-.06.022v4.005c0 1.56-1.262 2.825-2.82 2.825H63.91c-.018 0-.034-.016-.034-.034V6.838c0-.018.016-.033.034-.033h4.672c.02 0 .034.015.034.033v1.445c0 .02.015.034.033.034M84.997.522l-3.212 12.35h2.67c1.292 0 2.42-.876 2.744-2.129L89.862.522h-4.865zM83.387 14.618c1.655 0 2.999 1.345 2.999 3.002 0 1.657-1.344 3.002-3 3.002-1.654 0-2.998-1.345-2.998-3.002 0-1.657 1.344-3.002 2.999-3.002z"
                  transform="translate(-214 -43) translate(214 43)"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className={classes["nav-items"]}>
        <ul>
          <li>فرصت های شغلی</li>
          <li>بلاگ</li>
          <li>باشگاه رانندگان</li>
          <li>ثبت نام راننده اسنب</li>
          <li>بنل سازمانی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </div>
      <div className={classes["nav-menu"]} onClick={setNavMenu}>
        {activeMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        )}
      </div>
      <div className={`${classes.activeMenu}` ? "active-menu" : "hidden-menu"}>
        <div>{activeMenu && <NavMenu />}</div>
      </div>
    </div>
  );
};

export default Navbar;
