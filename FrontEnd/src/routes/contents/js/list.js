import React from "react";
//import "../css/meeting.css"
import ContentsList from "../../../components/contents/js/list";

class contentsList extends React.Component {
  state = {
    isLoading: true,
    data:[]
  }
  /*
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    }
    */

    profileClick = (e) => {

  }
  
  allPage = (e) => {

  }

  imgPage = (e) => {

  }

  vidPage = (e) => {

  }

  cat1Page = (e) => {

  }

  cat2Page = (e) => {

  }

  cat3Page = (e) => {

  }

  render() {
    return (
      <div id="meeting_list">
        <div id="sub_wrap">
          <div id="sub_menu">
            <ul>
              <li id="allPage" className="onPage" onClick={this.allPage}>전체 보기</li>
              <li id="game" onClick={this.imgPage}><a>이미지</a></li>
              <li id="diy" onClick={this.vidPage}><a>영상</a></li>
              <li id="lans" onClick={this.cat1Page}><a>기타1</a></li>
              <li id="study" onClick={this.cat2Page}><a>기타2</a></li>
              <li id="study" onClick={this.cat3Page}><a>기타3</a></li>
            </ul>
          </div>
        </div>
        <div className="titles">
          <h1 className="tit">전체보기</h1>
        </div>
        <div className="list_view">
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
        </div>
        <div className="list_view">
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
        </div>
        <div className="list_view">
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
          <div className="itemListView">
            <img src="https://img2.tmon.kr/cdn3/deals/2019/05/20/2089237714//2089237714_front_G8aAkU1P4i.jpg" alt="핫도그"></img>
            <p className="subtit">subtitle</p>
            <p className="tit">maintitle</p>
          </div>
        </div>
      </div>
    );            
  }
}
export default contentsList;