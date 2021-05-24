import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="Topbar__Topbar__3Rg8U Topbar__Light__1gpMJ">
                <a className="Topbar__Logo__lSAmV " href="/">
                    <div>
                        <div className="Logo__Logo__2isxd Logo__Light__2EwPM">EDYODA</div>
                    </div>
                </a>
                <div className="NavigationLinks__NavigationLinks__1jolz NavigationLinks__Light__3h2pd">
                    <ul className="NavigationLinks__NonMobileOnly__1lJ7T NavigationLinks__NavigationLink__2hqo3">
                        <li>
                            <div className="NavigationLink__NavigationLink__1T2UX NavigationLink__Light__1Cx_-">
                                <div>
                                    <div className="NavigationLink__HorizontalAlign__s1BGI">
                                        Courses
                                        <span>
                                            <img className="NavigationLink__DropdownArrow__3bYcE" alt="Dropdown Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg==" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="NavigationLink__NavigationLink__1T2UX NavigationLink__Light__1Cx_-">
                                <a href="https://university.edyoda.com/" rel="noopener" target="_blank">University</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="NavigationLinks__RightEndMenus__m2UeA ">
                        <li>
                            <img className="NavigationLinks__SearchIcon__3Wzs9 NavigationLinks__SearchIconPreLogin__33hyY" src="https://www.edyoda.com/static/media/icon-search-black.659381fa.svg" alt="search-icon" />
                        </li>
                        <li className="NavigationLinks__LoginButton__vfcTS NavigationLinks__NonMobileOnly__1lJ7T">
                            <button id="login-navbar" className="Button__Button__QI7b2 Button__TextOnlyButtonDark__142qk ">Log In
                            </button>
                        </li>
                        <li className="NavigationLinks__SignupButton__3Avpf NavigationLinks__NonMobileOnly__1lJ7T">
                            <button id="signup-navbar" className="Button__Button__QI7b2 " >Sign Up For Free</button>
                        </li>
                        <li className="NavigationLinks__SidebarToggle__38YVc">
                            <img className="NavigationLinks__MenuIcon__Sbm7V" src="https://www.edyoda.com/static/media/hamburger-black.f96d1a42.svg" alt="Menu Icon" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;