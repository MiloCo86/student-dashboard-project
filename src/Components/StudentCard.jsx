import { useState } from "react";
import MoreInfo from "./MoreInfo";
import "../Styles/StudentCard.css";

function StudentCard({student, notes, saveNotes}){
    const [displayMore,setDisplayMore]= useState([]);
    const [showText, setShowText] = useState('Show More...');
    let onTrackText= ''

    function showMore(){
        const moreApp = (<MoreInfo key={0} student={student} notes={notes} saveNotes={saveNotes}/>);

        if(displayMore.length==0){
            setDisplayMore([moreApp]);
            setShowText('Show Less...');
        }else{
            setDisplayMore([])
            setShowText('Show More...');
        }
    }

    if(student.certifications.resume && student.certifications.linkedin && student.certifications.mockInterview && student.certifications.github && Number(student.codewars.current.total)>600){
        onTrackText = 'On Track to Graduate'
    }else{
        onTrackText = 'Off Track to Graduate'
    }

    let birthday = '';
    const birthdayArray = student.dob.split('/');
    if (birthdayArray[0]=='1') birthday ='Janaury';
    if (birthdayArray[0]=='2') birthday ='February';
    if (birthdayArray[0]=='3') birthday ='March';
    if (birthdayArray[0]=='4') birthday ='April';
    if (birthdayArray[0]=='5') birthday ='May';
    if (birthdayArray[0]=='6') birthday ='June';
    if (birthdayArray[0]=='7') birthday ='July';
    if (birthdayArray[0]=='8') birthday ='August';
    if (birthdayArray[0]=='9') birthday ='September';
    if (birthdayArray[0]=='10') birthday ='October';
    if (birthdayArray[0]=='11') birthday ='November';
    if (birthdayArray[0]=='12') birthday ='December';
    birthday += ' '+birthdayArray[1]+', '+birthdayArray[2];
    

    return(
        <div className="Student-card-container">
            <img src={student.profilePhoto}/>
            <div className="Studen-info">
                <h5>{student.names.preferredName} {student.names.surname}</h5>
                <p>{student.username}</p>
                <p><span>Birthday:</span> {birthday}</p>
                <p onClick={showMore} className="show-more"><span>{showText}</span></p>
            </div>
            <p className="on-track"><span>{onTrackText}</span></p>
            {displayMore}
        </div>
        
    )
}

export default StudentCard;