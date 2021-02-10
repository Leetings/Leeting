import React from "react";
import "../css/detailNotice.css"
import axios from "axios";

import { Link } from "react-router-dom";

class DetailNotice extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            writer: "",
            hit: "",
            file1: "",
            file2: "",
            file3: "",
            detail: "",
            date: "",
        }
    }

    componentDidMount() {
        const { location } = this.props;
        
        axios.get(`http://127.0.0.1:8080/myapp/notice/${location.state.no}`, {
            meetingno: location.state.no
          }).then(res => {
            // console.log(res.data);
            this.setState({
                title: res.data.title,
                writer: res.data.writer,
                hit: res.data.hit,
                file1: res.data.file1,
                file2: res.data.file2,
                file3: res.data.file3,
                detail: res.data.detail,
                date: res.data.date,
            })
          });

        // let sId = sessionStorage.getItem('id');
        // // console.log(location.state.enddate);
        
        // if (location.state === undefined) {
        //     history.push("/");
        // }
        // if (sId === null) {
        //     document.getElementById('likebtn').disabled = true;
        //     document.getElementById('joinBtn').disabled = true;
        //     // console.log('test');
        // }
        // else {
        //     document.getElementById('likebtn').disabled = false;
        //     document.getElementById('joinBtn').disabled = false;
        //     document.getElementById('jointab').setAttribute('style', 'display:none');
        //     this.checkLike();
        //     this.checkJoin();
        //     this.checkHost();
        //     // console.log(this.state.joinMember);
        // }
    }


  render() {
    const { location } = this.props;
    let codes = location.state.detail;

    var date = location.state.date;

    var sYear = date.substring(0,4);
    var sMonth = date.substring(5,7);
    var sDate = date.substring(8,10);

    var sday = sYear + '-' + sMonth + '-' + sDate;

    if (location.state) {
        return (
            <div id="notice_detail">
                <div className="titles text-center">
                    <h1>공 지 사 항</h1>
                    <hr/>
                </div>
                {/* <img src={location.state.file} alt={location.state.title}></img> */}
                <div className="container contents">
                    <div>
                        <h3 className="tit text-center">{location.state.title}</h3><br/>
                        <div className="d-flex justify-content-between">
                            <p className="col-6">{location.state.writer}</p>
                            <p className="col-6 date text-right">작성일 : {sday}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="detail_content" dangerouslySetInnerHTML={{ __html: codes} }></div>
                    <hr />
                    <div className="enclosed_files">
                        <p className="font-weight-bold">첨부파일</p>
                        {this.state.file1 ? (
                            <p>파일이 있다</p>
                        ) : (
                            <p>첨부파일이 존재하지 않습니다.</p>
                        )}
                    </div>
                    <hr />
                    <div className="text-right">
                        <button className="notice_button">
                            <Link to={{ pathname: `/board/write` }}>수정하기</Link></button>
                        <button className="notice_button">삭제하기</button>
                        <button className="notice_button">
                            <Link to={{ pathname: `/notice` }}>목록</Link>
                        </button>
                    </div>
                    <p className="test">안보여</p>
                </div>
            </div>
        );            
    } else {
      return null;
    }
  }
}

// function GoModify({ id, maintitle, subtitle, date, hostid, detail, categoryno, enddate, file }) {
//     return (
//         <div id="modifyBtn">
//             <Link
//                 to={{
//                     pathname: `/meeting/modify/${id}`,
//                     state: {
//                         id,
//                         maintitle,
//                         subtitle,
//                         date,
//                         hostid,
//                         detail,
//                         categoryno,
//                         file,
//                         enddate
//                     }
//                 }}
//             >미팅 관리하기
//                 {/* <button id="modifyBtn" ></button> */}
//             </Link>
//         </div>
//     )
// }

// GoModify.propTypes = {
//     id: propTypes.number.isRequired,
//     maintitle: propTypes.string.isRequired,
//     subtitle: propTypes.string.isRequired,
//     date: propTypes.string.isRequired,
//     hostid: propTypes.string.isRequired,
//     detail: propTypes.string.isRequired,
//     categoryno: propTypes.number.isRequired,
//     file: propTypes.string.isRequired,
//     enddate: propTypes.string
// };
    
export default DetailNotice;