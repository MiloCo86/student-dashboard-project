import "../Styles/StudentPhoto.css";

function StudentPhoto({student}){

    return(
        <div className="photo">
            <img src={student.profilePhoto}/>
            
        </div>
    )
}

export default StudentPhoto;