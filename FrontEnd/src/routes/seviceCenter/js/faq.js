import React from 'react';

import '../css/sc.css';

import { Link } from "react-router-dom";

const Faq = () => {

    return (
        <div id="main_content">
            <div className="scWrap">
                <div id="sub_wrap">
                    <div id="subImg">
                        <Link to={{pathname: `/sc/onetoone`}}>
                            <button id="goList">1:1 문의 보기</button>
                        </Link>
                        <Link to={{pathname: `/sc/otowrite`}}>
                            <button id="goWrite">1:1 문의 하기</button>
                        </Link>
                    </div>
                </div>
                <div className="accordion">
                    <input type="checkbox" id="que01"></input>
                    <div className="faq_Q first">
                        <div className="Q">Q</div>
                        <div className="question"><label htmlFor="que01">질문입니다</label></div>
                        <em></em>
                    </div>
                    <div className="faq_A" >
                        <div className="A">A</div>
                        <div className="answer">대답대답<br/><br/><br/><br/></div>
                    </div>
                    <input type="checkbox" id="que02"></input>
                    <div className="faq_Q second">
                        <div className="Q">Q</div>
                        <div className="question"><label htmlFor="que02">질문입니다</label></div>
                        <em></em>
                    </div>
                    <div className="faq_A" id="second">
                        <div className="A">A</div>
                        <div className="answer">대답대답<br/><br/><br/><br/></div>
                    </div>
                    <input type="checkbox" id="que03"></input>
                    <div className="faq_Q third">
                        <div className="Q">Q</div>
                        <div className="question"><label htmlFor="que03">질문입니다</label></div>
                        <em></em>
                    </div>
                    <div className="faq_A" id="third">
                        <div className="A">A</div>
                        <div className="answer">대답대답<br/><br/><br/><br/></div>
                    </div>
                    <input type="checkbox" id="que04"></input>
                    <div className="faq_Q fourth">
                        <div className="Q">Q</div>
                        <div className="question" ><label htmlFor="que04">질문입니다</label></div>
                        <em></em>
                    </div>
                    <div className="faq_A" id="fourth">
                        <div className="A">A</div>
                        <div className="answer">대답대답<br/><br/><br/><br/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;