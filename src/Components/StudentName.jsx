import "../Styles/StudentName.css";

function StudentName({student}){

    return(
        <div className="student_name">
            <h4>{student.names.preferredName} {student.names.surname}</h4>
        </div>
    )
}

export default StudentName;