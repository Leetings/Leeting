import React from "react";
import "./Header.css";

function Header() {
  return (
    <div id="header">
        <div className="gtop">
            <div className="dvwrap">
            <a className="logo" href="/">
                Leeting입니다
            </a>
            <div className="topsearch">
                <form name="searchForm">
                          <input type="text" name="searchVal" placeholder="검색어를 입력하세요">
                              </input>
                    <a href="#">검색</a>
                </form>
            </div>
            <ul>
                <li><a href="/join">회원가입</a></li>
                <li><a href="/Login">로그인</a></li>
            </ul>
        </div>
        </div>
        <div className="headerWrap">
            <div className="gnb cB" id="gnb">
                <ul className="topmenu" id="head-menu">
                    <li className="lnb1">
                        <a href="#">모임 뷰</a>
                    </li>
                    <li className="lnb2">
                        <a href="#" >메뉴2</a>
                    </li>
                    <li className="lnb3">
                        <a href="#" >메뉴3</a>
                    </li>
                    <li className="lnb4">
                        <a href="#" >메뉴4</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Header;