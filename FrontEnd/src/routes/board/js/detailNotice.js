import React from "react";
import "../css/detailNotice.css"
import axios from "axios";

import { saveAs } from 'file-saver';
import { Link } from "react-router-dom";

class DetailNotice extends React.Component {
    constructor() {
        super();
        this.state = {
            no: 0,
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
            console.log(res.data);
            this.setState({
                no: location.state.no,
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
    }

    callFileDownload = () => {
        var FileSaver = require('file-saver');
        FileSaver.saveAs("https://leeting.s3.ap-northeast-2.amazonaws.com/notice/hahahahah-1-3.%20Hello%20World%28C%2B%2B%29.txt", "image.jpg");
    }

    noticedelete = () => {
        axios.delete(`http://127.0.0.1:8080/myapp/notice/${this.state.no}`, {
            noticeno: this.state.no
          }).then(res => {
              console.log(res)
          }).catch(err => {
              console.log(err)
          })
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
                            <p onClick={this.callFileDownload}>{this.state.file1}</p>
                        ) : (
                            <p>첨부파일이 존재하지 않습니다.</p>
                        )}
                        <br />
                        {this.state.file2 ? (
                            <a href={this.state.file2} download>{this.state.file2}</a>
                        ) : ( null )}
                        <br />
                        {this.state.file3 ? (
                            <a href={this.state.file3} download>{this.state.file3}</a>
                        ) : ( null )}
                        
                    </div>
                    <hr />
                    <div className="text-right">
                        <button className="notice_button">
                            <Link to={{ pathname: `/board/write` }}>수정하기</Link></button>
                        <button className="notice_button" onClick={this.noticedelete}>삭제하기</button>
                        <button className="notice_button">
                            <Link to={{ pathname: `/notice` }}>목록</Link>
                        </button>
                    </div>
                    <p className="test">마진으로 footer를 찍어눌렀습니다</p>
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