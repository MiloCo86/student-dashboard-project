import React from "react";
import { useState } from "react";
import HeaderApp from "./Components/HeaderApp";
import ClassMenu from "./Components/ClassMenu";
import StudenList from "./Components/StudentList";

import data from "./Data/data.json";

import "./Styles/App.css";


function App() {
  const [currentData, setCurrentData] = useState([...data]);
  const [studentListTitle, setStudentListTitle] = useState('All Students');

  function sortEstudents (startDay){
    if(startDay == 'All Students'){
      setCurrentData([...data]);
      setStudentListTitle('All Students');
    } else{
      const cohortStartDate = startDay.replace(" ", "");
      const filterData = data.filter(student => student.cohort.cohortCode === cohortStartDate);

      setCurrentData([...filterData]);
      setStudentListTitle(startDay);
    }
  }


  return (
    <div className="container">
      <HeaderApp/>
      <ClassMenu sortFunction={sortEstudents}/>
      <StudenList data={currentData} title={studentListTitle}/>
    </div>
  );
}

export default App;
