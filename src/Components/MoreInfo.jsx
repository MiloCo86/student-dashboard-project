import { useState, useEffect } from "react";
import "../Styles/MoreInfo.css"



function MoreInfo({student, notes, saveNotes}){
    const cwCurrentTotal = Number(student.codewars.current.total);
    const cwGoal = Number(student.codewars.goal.total);
    const goalPercent = Math.floor((100*cwCurrentTotal)/cwGoal);

    const scAssignments = Math.floor(Number(student.cohort.scores.assignments)*100);
    const scProjects = Math.floor(Number(student.cohort.scores.projects)*100);
    const scAssessments = Math.floor(Number(student.cohort.scores.assessments)*100);

    const certResume = student.certifications.resume ? '✔️':'❌';
    const certlinkedin = student.certifications.linkedin ? '✔️':'❌';
    const certMockInterview = student.certifications.mockInterview ? '✔️':'❌';
    const certGitHub = student.certifications.github ? '✔️':'❌';


    const [Commenter, setCommenter] = useState('');
    const [comment, setComment] = useState('');

    const [studentNotes, SetStudentNotes] = useState([...notes]);

    useEffect(()=>{saveNotes(student.id, studentNotes)},[studentNotes])


    function addNote(event){

        event.preventDefault();
        SetStudentNotes([...studentNotes, `${Commenter}. says, "${comment}"`])
    }

    let displayNotes=[...studentNotes]

    function deleteNote(noteToDelete){
        console.log(studentNotes)
        let newNotes= studentNotes.filter(note=>{
            if(note!=noteToDelete){
                return note
            }
        })
        SetStudentNotes(newNotes)
    }

    
    displayNotes = studentNotes.map((note,idx)=>{
        return(
            <li key={idx}>{note} <span onClick={()=>{deleteNote(note)}}>❎</span></li>
        )
    })
    
    

    return(
        <div className="more-info">
            <div className="more-info-data">
                <div>
                    <h6>Codewards:</h6>
                    <p><span>Current Total:</span> {student.codewars.current.total}</p>
                    <p><span>Last Week:</span> {student.codewars.current.lastWeek}</p>
                    <p><span>Goal:</span> {student.codewars.goal.total}</p>
                    <p><span>Percent of Goal Achieved:</span> {goalPercent}%</p>
                </div>
                <div>
                    <h6>Scores:</h6>
                    <p><span>Assignments:</span> {scAssignments}%</p>
                    <p><span>Projects:</span> {scProjects}%</p>
                    <p><span>Assessments:</span> {scAssessments}%</p>
                </div>
                <div>
                    <h6>Certifications:</h6>
                    <p><span>Resume:</span> {certResume}</p>
                    <p><span>LinkedIn:</span> {certlinkedin}</p>
                    <p><span>Mock Interview:</span> {certMockInterview}</p>
                    <p><span>GitHub:</span> {certGitHub}</p>
                </div>
            </div>
            <div className="oneOnOne">
                <h6>1-on-1 Notes</h6>
                <div className="comment_area">
                    <form onSubmit={addNote}>
                        <label>Commenter Name</label>
                        <input onChange={(e)=>{setCommenter(e.target.value)}} name="comenter" type="text" />
                        <label>Comment</label>
                        <input onChange={(e)=>{setComment(e.target.value)}} name="comment" type="text" />
                        <button>Add Note</button>
                    </form>
                    <div className="notes">
                        <ul>
                            {displayNotes}
                        </ul>
                        
                    </div>
                </div>
                
            </div>
            
            </div>
            
    )
}

export default MoreInfo;