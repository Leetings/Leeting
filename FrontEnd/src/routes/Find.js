import React from "react";
import "./Find.css";

class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '선택하세요' };
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value });
        if (event.target.value != '직접입력') {
            document.getElementById('writedomain').value = event.target.value;
            document.getElementById('writedomain').readOnly=true;
        }
        else {
            document.getElementById('writedomain').readOnly = false;
            document.getElementById('writedomain').value = "";
            document.getElementById('writedomain').placeholder = "입력하세요";
        }
    }
    render() {
        return (
            <div className="findcontainer">
                <div className="titles">
                    <h1 className="tit">아이디 / 비밀번호 찾기</h1>
                    <p className="subtit">아이디와 비밀번호는 가입시 입력하신 이메일을 통해 찾을 수 있습니다.</p>
                </div>
                <hr />
                <div className="formcenter">
                    <input id="tab1" type="radio" name="tabs" defaultChecked></input>
                    <label className="forradio" htmlFor="tab1">아이디 찾기</label>
                    <input id="tab2" type="radio" name="tabs"></input>
                    <label className="forradio" htmlFor="tab2">비밀번호 찾기</label>

                    <form id="findids">
                        <label className="forname" htmlFor="name">이름</label>
                        <input type="text" id="name" name="inputname" className="form-control col-9 margin-bottom-20" placeholder="이름을 입력해주세요"></input>
                        <label id="labelemail" className="foremail" htmlFor="email">이메일</label>
                        <input type="text" id="email" name="inputemail" className="form-control col-4 margin-bottom-20" placeholder="이메일을 입력해주세요"></input>
                        &nbsp;<label id="at">@</label>&nbsp;
                        <input id="writedomain" name="inputdomain" className="form-control col-3 margin-bottom-20 inputdomain" placeholder="선택하세요" readOnly></input>&nbsp;
                        <select id="domain" name="selectdomain" className="form-control col-3 margin-bottom-20" value={this.state.value} onChange={this.handleChange}>
                                <option value="kakao.com" defaultValue>kakao.com</option>
                                <option value="naver.com">naver.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="직접입력">직접입력</option>
                        </select>
                    
                        <div className="btndiv">
                            <button className="btn goback">돌아가기</button>
                            <button  className="btn find">아이디 찾기</button>
                        </div>
                    </form>
                    <form id="findpws">
                        <label className="forname" htmlFor="name">이름</label>
                        <input type="text" id="name" name="inputname" className="form-control col-9 margin-bottom-20" placeholder="이름을 입력해주세요"></input>
                        <label className="forid" htmlFor="id">아이디</label>
                        <input type="text" id="id" name="inputid" className="form-control col-9 margin-bottom-20" placeholder="아이디를 입력해주세요"></input>
                        <label id="labelemail" className="foremail" htmlFor="email">이메일</label>
                        <input type="text" id="email" name="inputemail" className="form-control col-4 margin-bottom-20" placeholder="이메일을 입력해주세요"></input>
                        &nbsp;<label id="at">@</label>&nbsp;
                        <input id="writedomain" name="inputdomain" className="form-control col-3 margin-bottom-20 inputdomain" placeholder="선택하세요" readOnly></input>&nbsp;
                        <select id="domain" name="selectdomain" className="form-control col-3 margin-bottom-20" value={this.state.value} onChange={this.handleChange}>
                                <option value="kakao.com" defaultValue>kakao.com</option>
                                <option value="naver.com">naver.com</option>
                                <option value="daum.net">daum.net</option>
                                <option value="직접입력">직접입력</option>
                        </select>
                    
                        <div className="btndiv">
                            <button className="btn goback">돌아가기</button>
                            <button  className="btn find">비밀번호 찾기</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Find;