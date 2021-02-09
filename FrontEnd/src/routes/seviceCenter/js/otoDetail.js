import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Editor } from '@toast-ui/react-editor';

import moment from 'moment';
import 'moment/locale/ko';

const OtoDetail = (props) => {
    const [no, setNo] = useState();
    const [type, setType] = useState();
    const [title, setTitle] = useState();
    const [detail, setDetail] = useState();
    const [qwriter, setQwriter] = useState();
    const [date, setDate] = useState();
    const [answer, setAnswer] = useState();
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState();
    const [content, setContent] = useState();
    const [editorRef, setEditorRef] = useState(React.createRef());
    const { location } = props;
    const sId = sessionStorage.getItem('id');

    useEffect(() => {
        const showDetail = async () => {
            setLoading(true);
            const res = await axios.get('http://127.0.0.1:8080/myapp/question/' + location.state.no);
            
            setNo(res.data.no);
            setType(res.data.type);
            setTitle(res.data.title);
            setDetail(res.data.detail);
            setQwriter(res.data.qwriter);
            setDate(res.data.date);
        }
        
        const showAnswer = async () => {
            const res = await axios.get('http://127.0.0.1:8080/myapp/answer/' + location.state.no);
            
            console.log(res);

            setLoading(false);
            
            if (res.data.conclusion === "FAIL") {
                document.getElementById('otoAnswer').setAttribute('style', 'display:none');
                if (sId === 'leetingadmin') {
                    document.getElementById('adminWrite').setAttribute('style', 'display:inline-block');
                    document.getElementById('adminModify').setAttribute('style', 'display:none');
                } else {
                    document.getElementById('adminWrite').setAttribute('style', 'display:none');
                    document.getElementById('adminModify').setAttribute('style', 'display:none');
                }
            } else {
                setAnswer(res.data.answer.detail);
                if (sId === 'leetingadmin') {
                    document.getElementById('adminWrite').setAttribute('style', 'display:none');
                    document.getElementById('adminModify').setAttribute('style', 'display:inline-block');
                    // console.log(answer);
                    editorRef.current.getInstance().setHtml(answer);
                } else {
                    document.getElementById('adminWrite').setAttribute('style', 'display:none');
                    document.getElementById('adminModify').setAttribute('style', 'display:none');
                }
            }
        }
        
        showDetail();
        showAnswer();
    }, [update])
    
    var typeString;
    if (type === 1) {
        typeString = "미팅"
    } else if (type === 2) {
        typeString = "회원"
    } else if (type === 3) {
        typeString = "페이지"
    } else {
        typeString = "기타"
    }

    const adminWrite = (e) => {
        e.preventDefault();
        
        document.getElementById('adminAnswer').setAttribute('style', 'display:table');
        document.getElementById('writeCancle').setAttribute('style', 'display:inline-block');
        document.getElementById('adminWrited').setAttribute('style', 'display:inline-block');
    }

    const adminWrited = (e) => {
        e.preventDefault();
        
        axios.post('http://127.0.0.1:8080/myapp/answer/writeanswer', {
            questionno: no,
            detail: content,
            date:moment()
        }).then(res => {
            if (res.data === "SUCCESS") {
                alert('답글 등록에 성공하셨습니다!');
                setUpdate(!update);
                editorRef.current.getInstance().setHtml(content);
            } else {
                alert('답글 등록에 실패하셨습니다. 다시 시도해주세요!');
                editorRef.current.getInstance().setHtml("");
            }
        });
    }

    const writeCancle = (e) => {
        e.preventDefault();

        document.getElementById('adminAnswer').setAttribute('style', 'display:none');
        document.getElementById('writeCancle').setAttribute('style', 'display:none');
        document.getElementById('adminWrited').setAttribute('style', 'display:none');
    }

    const adminModify = (e) => {
        e.preventDefault();

        document.getElementById('otoAnswer').setAttribute('style', 'display:none');
        document.getElementById('adminAnswer').setAttribute('style', 'display:table');
        document.getElementById('adminModified').setAttribute('style', 'display:inline-block');
        document.getElementById('modifyCancle').setAttribute('style', 'display:inline-block');
    }

    const adminModified = (e) => {
        e.preventDefault();
        
        axios.put('http://127.0.0.1:8080/myapp/answer/modify/'+no, {
            questionno: no,
            detail: content,
            date:moment()
        }).then(res => {
            console.log(res);
            if (res.data === "SUCCESS") {
                alert('답글 수정에 성공하셨습니다!');
                setUpdate(!update);
            } else {
                alert('답글 수정에 실패하셨습니다. 다시 시도해주세요!');
                editorRef.current.getInstance().setHtml("");
            }
        });
    }

    const modifyCancle = (e) => {
        e.preventDefault();
        
        document.getElementById('otoAnswer').setAttribute('style', 'display:table');
        document.getElementById('adminAnswer').setAttribute('style', 'display:none');
        document.getElementById('adminModified').setAttribute('style', 'display:none');
        document.getElementById('modifyCancle').setAttribute('style', 'display:none');
    }

    const deleteQ = (e) => {
        e.preventDefault();
        
        axios.delete('http://127.0.0.1:8080/myapp/question/delete/'+no, {
            questionno: no,
            no: no
        }).then(res => {
            console.log(res);
            if (res.data === "SUCCESS") {
                alert('문의사항 삭제에 성공하셨습니다!');
                window.location.replace('/sc/onetoone');
            } else {
                alert('문의사항 삭제에 실패하셨습니다. 다시 시도해주세요!');
            }
        });
    }

    const editorChange = (e) => { 
        setContent(editorRef.current.getInstance().getHtml());
    }

    if (loading) {
        return (
            <div id="main_content">
                <div className="loading_view">
                    <div className="loader loader-7">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                        <span className="loader_text">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            
            <div id="main_content">
                <div className="otoInput otoWrap">
                    <div className="otoTitle">
                        <h1>{qwriter}님의 문의사항입니다.</h1>
                    </div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">문의 제목</th>
                                <td colSpan="2">
                                    <div>{title}</div>
                                </td>
                                <th scope="row">문의 카테고리</th>
                                <td colSpan="2">
                                    <div>{typeString}</div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">문의 내용</th>
                                    <td colSpan="5">
                                    <div className="otoDetail" dangerouslySetInnerHTML={{ __html: detail} }></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="otoAnswer">
                        <thead>
                        </thead>
                        <tbody>
                            <tr className="Answer">
                                <th scope="row">답  글</th>
                                    <td colSpan="5">
                                    <div className="otoDetail" dangerouslySetInnerHTML={{ __html: answer} }></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table id="adminAnswer">
                        <thead>
                        </thead>
                        <tbody>
                            <tr className="Answer">
                                <th scope="row">답  글</th>
                                    <td colSpan="5">
                                    <div className="inputAnswer">                                        
                                        <Editor
                                            className="editorr"
                                            previewStyle="vertical"
                                            height="300px"
                                            placeholder="답글 입력창입니다."
                                            initialEditType="wysiwyg"
                                            ref={editorRef}
                                            onChange={editorChange}
                                            initialValue={content}
                                        /> 
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="otoBtns">
                        <button className="Answer" id="adminWrite" onClick={adminWrite}>답글 달기</button>
                        <button className="Answer" id="adminWrited" onClick={adminWrited}>답글 등록</button>
                        <button className="Answer" id="writeCancle" onClick={writeCancle}>등록 취소</button>
                        <button className="Answer" id="adminModify" onClick={adminModify}>답글 수정</button>
                        <button className="Answer" id="adminModified" onClick={adminModified}>답글 수정</button>
                        <button className="Answer" id="modifyCancle" onClick={modifyCancle}>수정 취소</button>
                        <button className="Delete" onClick={deleteQ}>삭제하기</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default OtoDetail;