import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

function StudentComp(){

  let list = StudentsListComp();
  return(
    <>
      {


    


        list.map(e=> <p  style={e.grade <= 56 ? {color:"red"} : e.grade >=57 && e.grade <= 75 ? {color:"yellow"} : e.grade > 75  && e.grade <=85 ? {color:"orange"} : {color:"green"} }>
          
           {`${e.id} - ${e.name} - ${e.grade}  Teacher Words : ${e.grade <= 56 ? "poor" : e.grade >=57 && e.grade <=75 ? "ok " : e.grade > 75 && e.grade <= 85 ? "good": e.grade >= 86  && e.grade <= 100? "excelent":""}`} 
        
        
        </p>)
      }
    </>
  );
}
function StudentsListComp(){
  let studentList = [
  {id:1,name:"or shani",grade:100},
  {id:1,name:"or lo shani",grade:10},
  {id:1,name:"shmulik",grade:57},
  {id:1,name:"Mishu",grade:76},
  {id:1,name:"ze ah",grade:76},
  {id:1,name:"ze hamor",grade:100},

  ];
  return studentList;
}

 function GetYouTubeList(){
    let list = [ 
      {title:"how to cock ",url:"https://www.youtube.com/embed/4Le9u2gsiMk",width:250,heigth:400},
      {title:"how to create a website ",url:"https://www.youtube.com/embed/GMEpbWKnNq4",width:250,heigth:400},
      {title:"how to build muscle  ",url:"https://www.youtube.com/embed/Z-fHfKUTbRQ&t=1411s",width:250,heigth:400},
  
  
  ]
  return list;
 }

 function YouTubeVideoListComp(){
  let objects = GetYouTubeList();
  return(
      objects.map(o => 
        <YouTubeVideoComp width={o.width} height={o.heigth} url={o.url} title={o.title} ></YouTubeVideoComp>
        )    
  )

 }


 function YouTubeVideoComp(props){

  return(
    <>
    <h3>{props.title}</h3>
    <iframe width={props.width} height={props.heigth} src={props.url} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  )


 }





root.render(
  <React.StrictMode>
    <YouTubeVideoListComp></YouTubeVideoListComp>
  </React.StrictMode>
);


