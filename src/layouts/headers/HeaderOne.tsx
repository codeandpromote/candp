"use client";
import OffCanvas from "@/common/OffCanvas";
import SearchArea from "@/common/SearchArea";
import menu_data from "@/data/menu-data";
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeaderOne = ({ style_2 }: any) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light-mode";
    }
    return "light-mode";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-mode" ? "dark-mode" : "light-mode"
    );
  };

  const { sticky } = useSticky();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCanvas, setOpenCavas] = useState(false);

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [navTitle2, setNavTitle2] = useState("");
  //openMobileMenu
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };

  return (
    <>
      <header
        className={`header-area ${sticky && "sticky-on"} ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img
                className="dark-logo"
                src="/assets/img/core-img/logo.png"
                alt=""
              />
              <img
                className="light-logo"
                src="/assets/img/core-img/logo-light.png"
                alt=""
              />
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#vorixNav"
              aria-controls="vorixNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="material-symbols-outlined">view_cozy</span>
            </button>

            <div
              className={`collapse navbar-collapse justify-content-end ${
                menuOpen ? "show" : ""
              }`}
              id="vorixNav"
            >
              <ul className="navbar-nav navbar-nav-scroll">
                {menu_data.map((item, i) => (
                  <li key={i} className="vorix-dd">
                    <Link
                      href={item.link}
                      onMouseEnter={() => setNavTitle(item.title)}
                      onClick={() => openMobileMenu(item.title)}
                    >
                      {item.title}
                    </Link>
                    {item.has_dropdown && (
                      <ul
                        className="vorix-dd-menu"
                        style={{
                          display: navTitle === item.title ? "block" : "none",
                        }}
                      >
                        {item.sub_menus.map((sub_menu, index) => (
                          <li key={index} className="vorix-dd">
                            <Link
                              href={sub_menu.link}
                              onClick={() => openMobileMenu2(sub_menu.title)}
                              onMouseEnter={() => setNavTitle2(sub_menu.title)}
                            >
                              {sub_menu.title}
                            </Link>

                            {"has_inner_dropdown" in sub_menu &&
                              sub_menu.has_inner_dropdown && (
                                <ul
                                  className="vorix-dd-menu"
                                  style={{
                                    display:
                                      navTitle2 === sub_menu.title
                                        ? "block"
                                        : "none",
                                  }}
                                >
                                  {sub_menu?.inner_submenu?.map(
                                    (inner_menu, inner_index) => (
                                      <li key={inner_index}>
                                        <Link href={inner_menu.link}>
                                          {inner_menu.title}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="d-flex align-items-center">
                <div className="header-search-btn" id="searchButton">
                  <button className="btn"></button>
                </div>

                <button
                  id="theme-toggle"
                  onClick={toggleTheme}
                  className={`theme-btn ${
                    theme === "light-mode" ? "" : "light-mode-active"
                  }`}
                >
                  <span className="material-symbols-outlined moon">
                    clear_day
                  </span>
                  <span className="material-symbols-outlined sun">bedtime</span>
                </button>
                {style_2 ? (
                  <div className="mb-3 mb-lg-0" id="sideMenuButton">
                    <a
                      onClick={() => setOpenCavas(!openCanvas)}
                      className="btn btn-primary sideMenuButton"
                      data-bs-toggle="offcanvas"
                      href="#sideMenuOffcanvas"
                      role="button"
                      aria-controls="sideMenuOffcanvas"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 12H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 6H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 18H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 12H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 6H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 18H21"
                            stroke="#0E0E0E"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                ) : (
                  <Link className="btn btn-primary" href="/contact">
                    <span>GET IN TOUCH</span>
                    <span>GET IN TOUCH</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <SearchArea setSearchOpen={setSearchOpen} isSearchOpen={isSearchOpen} />
      <OffCanvas setOpenCavas={setOpenCavas} openCanvas={openCanvas} />
    </>
  );
};

export default HeaderOne;
