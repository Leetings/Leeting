import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Join from "./routes/Join";
import Login from "./routes/Login";
import Find from "./routes/Find";
import Leeting from "./routes/Leeting";
import Mypage from "./routes/Mypage";

import ExcerciseMeeting from "./routes/meeting/js/exercise";
import MusicMeeting from "./routes/meeting/js/music";
import GameMeeting from "./routes/meeting/js/game";
import DIYMeeting from "./routes/meeting/js/diy";
import LansMeeting from "./routes/meeting/js/lans";
import StudyMeeting from "./routes/meeting/js/study";
import WriteMeeting from "./routes/meeting/js/write";
import ModifyMeeting from "./routes/meeting/js/Modify";
import Result from "./routes/meeting/js/Result";
import MeetingBoard from "./routes/meeting/js/Board";
import Detail from "./routes/meeting/js/Detail";

import ListNotice from "./routes/board/js/notice";

import Report from "./routes/report/js/report"
import ReportList from "./routes/report/js/list"
import ReportDetail from "./routes/report/js/detail"

import Faq from "./routes/seviceCenter/js/faq";
import OtO from "./routes/seviceCenter/js/otoList";
import OtOWrite from "./routes/seviceCenter/js/otoWrite";
import OtoDetail from "./routes/seviceCenter/js/otoDetail";
import OtoModify from "./routes/seviceCenter/js/otoModify"; 

import NotFound from "./routes/NotFound";
import "./App.css";
import "./routes/css/default.css"
import "./routes/css/responsive.css"

function App() {

  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Leeting" exact={true} component={Leeting} />
          <Route path="/join" exact={true} component={Join} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/find" exact={true} component={Find} />
          <Route path="/report" exact={true} component={Report} />
          <Route path="/report/list" exact={true} component={ReportList} />

          <Route path="/mypage" exact={true} component={Mypage} />    
          
          <Route path="/sc/faq" exact={true} component={Faq} />
          <Route path="/sc/onetoone" exact={true} component={OtO} />
          <Route path="/sc/otowrite" exact={true} component={OtOWrite}/>
          <Route path="/sc/otomodify/:id" exact={true} component={OtoModify} />
          <Route path="/sc/onetoone/:id" exact={true} component={OtoDetail}/>
          
          <Route path="/meeting/exercise" exact={true} component={ExcerciseMeeting} />
          <Route path="/meeting/music" exact={true} component={MusicMeeting} />
          <Route path="/meeting/game" exact={true} component={GameMeeting} />
          <Route path="/meeting/diy" exact={true} component={DIYMeeting} />
          <Route path="/meeting/lans" exact={true} component={LansMeeting} />
          <Route path="/meeting/study" exact={true} component={StudyMeeting} />
          <Route path="/meeting/write" exact={true} component={WriteMeeting} />
          
          <Route path="/notice" exact={true} component={ListNotice}/>

          <Route path="/result/:keyword" exact={true} component={Result} />
          <Route path="/meeting/:id" exact={true} component={Detail} />
          <Route path="/meeting/modify/:id" exact={true} component={ModifyMeeting} />
          <Route path="/meeting/board/:id" exact={true} component={MeetingBoard}/>
          <Route path="/report/detail/:id" exact={true} component={ReportDetail}/>

          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;