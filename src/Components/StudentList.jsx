import "../Styles/StudentList.css"
import StudentCard from "./StudentCard";
import StudentPhoto from "./StudentPhoto";
import StudentName from "./StudentName";
import {getNotesFromLS , saveNotesToLS} from './NotesHandler';
import { useState,useEffect } from "react";

function StudenList({data, title}){
    
    const totalStudents = data.length;
    const [currentData,setCurrentData] = useState(data)
    const [displayCards, setDisplayCards ] = useState('1')

    let NotesData= getNotesFromLS();

    useEffect(()=>{setCurrentData(data)},[data])
    

    function saveNotes(id, notes){
        NotesData[id] = notes;
        saveNotesToLS(NotesData);
    }   
    
    function changeDisplayStudents(display){
        if (display == 'cards'){
            setDisplayCards('1')
        }else if(display == 'photos'){
            setDisplayCards('2')
        }else if(display == 'names'){
            setDisplayCards('3')
        }
    }

    return (
        <div className="student-list-container">
            <div className="student-list-navbar">
                <div>
                    <h3>{title}</h3>
                    <p>Total Students: <span>{totalStudents}</span></p>
                </div>
                <div className="dropMenu">
                    <select onChange={(e)=>{changeDisplayStudents(e.target.value)}}>
                        <option value='cards'>Cards</option>
                        <option value='photos'>Photos</option>
                        <option value='names'>Names</option>
                    </select>
                </div>
                
            </div>
            <div className="student-display-container">
                <div className="full_card_container">
                    {displayCards=='1' && (
                        currentData.map((student, idx)=>{      
                        if(!NotesData[student.id]) NotesData[student.id] = []
                            return(
                                <StudentCard key={idx} student={student} notes={NotesData[student.id]} saveNotes={saveNotes}/>

                            )
                        })
                    )}
                </div>
                <div className="photo_display_container">
                    {displayCards =='2' && (
                        currentData.map((student, idx)=>{ 
                                return(
                                    <StudentPhoto key={idx} student={student}/>
                                )
                        })
                    )}
                </div>
                <div className="name_display_container">
                    {displayCards =='3' && (
                        currentData.map((student, idx)=>{ 
                                return(
                                    <StudentName key={idx} student={student}/>
                                )
                        })
                    )}
                </div>
                
                
            </div>     
        </div>
    )
}

export default StudenList;