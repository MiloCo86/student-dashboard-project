import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import ClassMenu from "./Components/ClassMenu";
import StudenList from "./Components/StudentList";

import data from "./Data/data.json"

import "./Styles/App.css"


function App() {
  const [currentData, setCurrentData] = useState([...data]);
  const [studentListTitle, setStudentListTitle] = useState('All Students');

  function sortEstudents (startDay){
    if(startDay == 'AllStudents'){
      setCurrentData([...data]);
      setStudentListTitle('All Students');
    } else{
      let filterData = data.filter(student => student.cohort.cohortCode === startDay);
      setCurrentData([...filterData]);
      if (startDay == 'Winter2025') setStudentListTitle('Winter 2025');
      if (startDay == 'Fall2025') setStudentListTitle('Fall 2025');
      if (startDay == 'Summer2025') setStudentListTitle('Summer 2025');
      if (startDay == 'Spring2025') setStudentListTitle('Spring 2025');
      if (startDay == 'Winter2026') setStudentListTitle('Winter 2026');
      if (startDay == 'Fall2026') setStudentListTitle('Fall 2026');
      if (startDay == 'Summer2026') setStudentListTitle('Summer 2026');
      if (startDay == 'Spring2026') setStudentListTitle('Spring 2026');
    }
  }


  return (
    <div className="container">
      <Header/>
      <ClassMenu sortFunction={sortEstudents}/>
      <StudenList data={currentData} title={studentListTitle}/>
    </div>
  );
}

export default App;
