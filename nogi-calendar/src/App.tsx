import React, { useEffect, useState } from 'react';
import './App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import allLocales from '@fullcalendar/core/locales-all';
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';

export interface infoList {
  title: string;
  start: string;
  end: string;
}

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/hinatainfo')
        .then(res => {
          setPosts(res.data)
        })
  }, [])
  let infoList: infoList[]= [];
  infoList = makeList(posts)
  return (
    <div className="App">
      <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    locales={allLocales}
                    locale='ja'
                    events={infoList}
                    eventClick={function(item){
                      alert(item.event.title)
                    }}
                    navLinks={true}
                    editable={true}
                    businessHours={true}
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay'
                  }}
                    /> 
      {/* <Modals /> */}
    </div>
  );
}

function makeList(posts: any): infoList[] {
  var now = new Date();
  // 現在の年月を取得する
  var year = now.getFullYear();
  var month = ("0" + (now.getMonth()+1)).slice(-2);
  let infoList: infoList[]= [];
  Object.keys(posts).map(post => {
    posts[post].map((p: any) => {
      let splitTime = ("0" + p.split(':')[0]).slice(-2)
      if(p.split('***')[0].length==0){
        infoList.push({
          title: p.split('***').slice(1),
          start: String(year) + '-' + String(month) + '-' + String("0"+post).slice(-2),
          end: ''
        })
      }else{
        infoList.push({
          title: p.split('***').slice(1),
          start: String(year) + '-' + String(month) + '-' + String("0"+post).slice(-2) + 'T' + splitTime + ':00:00',
          end: ''
        })
      }
    })
  })
  return infoList
}


export default App;
