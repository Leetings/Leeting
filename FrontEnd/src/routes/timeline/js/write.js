import React from "react";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';


import axios from "axios";
import moment from 'moment';
import 'moment/locale/ko';

class write extends React.Component {
    editorRef = React.createRef();
    dateRef = React.createRef();

    componentDidMount() {
        if (document.getElementById('side_wrap').classList.contains('open')) {
            document.getElementById('side_wrap').classList.remove('open');
            document.getElementById('side_wrap').classList.add('close');
            document.getElementById('side_wrap').setAttribute('style', 'right:-400px');
            document.getElementById('bg').setAttribute('style', 'display:none');
        }
    }

    constructor() {
        super();
        this.state = {
            thumb: "https://leeting.s3.ap-northeast-2.amazonaws.com/static/noimage.png",
        };
    }    
    state = {
        thumb: "https://leeting.s3.ap-northeast-2.amazonaws.com/static/noimage.png",
        content: "",
        
        selectedFile: null, //썸네일 파일 첨부
    }

    editorChange = (e) => { 
        this.setState({
            content: this.editorRef.current.getInstance().getHtml(),
            checkcontent:true
        })
        // console.log(this.state.content);
    }


    handleFileInput(e) {
        this.setState({
            selectedFile : e.target.files[0],
        })
        var filename;
        if(window.FileReader){
            filename = e.target.files[0].name;
        } else {
            filename = e.target.val().split('/').pop().split('\\').pop();
        }
        // console.log(e.target.files[0]);
        // console.log(filename);

        document.getElementById('upload-name').value = filename;
        
        var file = e.target.files[0];
        // console.log(this.state.startDay);
        // console.log(file);
        var formData = new FormData();
        formData.append('data', file);
        formData.append('hostid', sessionStorage.getItem('id'));
        formData.append('dirNum', 0);
        axios.post('http://127.0.0.1:8080/myapp/gallery/upload', formData,{
            headers: {
                'content-type': 'multipart/form-data',
            },
        }).then(res => {
            this.setState({
                thumb: res.data
            })
            // console.log(this.state.thumb);
        }).catch(err => {
            // console.log(err);
        })
    }

    writeClick = (e) => {
        e.preventDefault();
        let sId = sessionStorage.getItem('id');

        let date = moment().format('YYYY-MM-DD HH:mm:ss');
        axios.post("http://127.0.0.1:8080/myapp/contents/", {
            writer: sId,
            date: date,
            detail: this.state.content,
            file: this.state.thumb,
            categoryno:1
        }).then(res => { 
            if (res.data === "SUCCESS") {
                console.log("성공");
                console.log(this.state.categoryno);
                alert("글 작성이 완료되었습니다.");
                window.location.replace('/timeline');
            }
            else {
                console.log("실패");
                alert("글 작성에 실패하셨습니다. 다시 작성해 주세요!");
                window.location.replace('/meeting/write');
            }
        })


    }

    
    render() {
        return (
            
      <div id="main_content">
            <div className="writeWrap">
                <div className="titleset">
                    <p className="mainTit">Timeline 등록</p>
                    <p className="subTit">일상을 공유해보세요!</p>
                </div>
                <div className="writeInputWrap">
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">썸네일</th>
                                <td colSpan="5">
                                <form className="filebox bs3-primary"  encType="multipart/form-data">
                                    <input className="upload-name" id="upload-name"placeholder="파일선택" disabled="disabled"/>
                                    <label htmlFor="ex_filename">업로드</label> 
                                    <input type="file" accept="image/*"id="ex_filename" className="upload-hidden" onChange={e => this.handleFileInput(e)}/> 
                                </form>
                                    {/* <input type="file" name="file" onChange={e => this.handleFileInput(e)}/>
                                    <button type="button" onClick={this.uploadImage}>업로드</button> */}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">내 용</th>
                                    <td colSpan="5">
                                    <Editor
                                        previewStyle="vertical"
                                        height="300px"
                                        placeholder="글쓰기"
                                        initialEditType="wysiwyg"
                                        ref={this.editorRef}
                                        onChange={this.editorChange}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btndiv">
                        <button id="join" onClick={this.writeClick}>등록하기</button>
                    </div>
                </div>
                
                </div>
                </div>
        );
    }
}

export default write;