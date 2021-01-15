import React from "react";
import "./Join.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class Join extends React.Component {
  state ={
    id: "",
    pw: "",
    name: "",
    nickname: "",
    email: "",
    mobile:"",
  }
  idChange = (e) => {
    this.setState({
        id: e.target.value,
    });
  };
  pwChange = (e) => {
    this.setState({
        pw: e.target.value,
    });
  };
  nameChange = (e) => {
    this.setState({
        name: e.target.value,
    });
  };
  nicknameChange = (e) => {
    this.setState({
        nickname: e.target.value,
    });
  };
  emailChange = (e) => {
    this.setState({
        email: e.target.value,
    });
  };
  mobileChange = (e) => {
    this.setState({
        mobile: e.target.value,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    
    console.log(this.state);
    axios.post('http://127.0.0.1:8080/myapp/member/join', {
        id: this.state.id,
      pw: this.state.pw,
      nickname: this.state.nickname,
      name: this.state.name,
      email: this.state.email,
        mobile : this.state.mobile
    }).then(res => {
        console.log(res);
        console.log(res.data);
    })
  };
  render() {
    return (
      <div className="container">
        <h1 className="tit">회 원 가 입</h1>
        <hr />
        <div className="formcenter">
          <div>
            {/* <form action="submit" className="signupcustom" > */}
              
              <div className="form-group">
                <p className="font-weight-bold">아이디</p>
                <input type="text" className="form-control margin-bottom-20" onChange={this.idChange}></input>
              </div>
              <div className="row form-group">
                <div className="col-6">
                  <p className="font-weight-bold">비밀번호</p>
                  <input type="password" className="form-control margin-bottom-20" onChange={this.pwChange}></input>
                </div>
                <div className="col-6">
                  <p className="font-weight-bold">비밀번호 확인</p>
                  <input type="password" className="form-control margin-bottom-20" ></input>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-6">
                  <p className="font-weight-bold">성명</p>
                  <input type="text" className="form-control margin-bottom-20" onChange ={this.nameChange}></input>
                </div>
                <div className="col-6">
                  <p className="font-weight-bold">닉네임</p>
                  <input type="text" className="form-control margin-bottom-20" onChange = {this.nicknameChange}></input>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-6">
                  <p className="font-weight-bold">이메일</p>
                  <input type="email" className="form-control margin-bottom-20" onChange={this.emailChange}></input>
                </div>
                <div className="col-6">
                  <p className="font-weight-bold">휴대전화 번호</p>
                  <input type="tel" className="form-control margin-bottom-20" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" onChange={this.mobileChange}></input>
                </div>
              </div>
              <br />
              <div className="row form-group">
                <div className="col-12 text-center">
                  <input type="checkbox" id="checkjoin"></input>&nbsp;
                    <label htmlFor="checkjoin"><span></span> Leeting의 이용약관, 개인정보취급방침 및 개인정보3자제공에 동의합니다.</label>
                </div>
              </div>
              <br />
              <div className="row form-group">
                <div className="col-6 text-right">
                  <a href="" className="btn btn-light">돌아가기</a>
                </div>
                <div className="col-6">
                  <button type="submit" className="btn btn-primary"onClick={this.handleClick}>가입하기</button>
                </div>
              </div>
              
            {/* </form> */}
          </div>
        </div>
      </div>

    );
  }
}


export default Join;