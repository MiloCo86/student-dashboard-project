import "../Styles/ClassMenu.css";

function ClassMenu({sortFunction}){
    return(
        <div className="class-menu-container">
            <h3>Choose a Class by Start Date</h3>
            <ul>
                <li><p onClick={()=>sortFunction('AllStudents')}>All Students</p></li>
                <li><p onClick={()=>sortFunction('Winter2026')}>Winter 2026</p></li>
                <li><p onClick={()=>sortFunction('Fall2026')}>Fall 2026</p></li>
                <li><p onClick={()=>sortFunction('Summer2026')}>Summer 2026</p></li>
                <li><p onClick={()=>sortFunction('Spring2026')}>Spring 2026</p></li>
                <li><p onClick={()=>sortFunction('Winter2025')}>Winter 2025</p></li>
                <li><p onClick={()=>sortFunction('Fall2025')}>Fall 2025</p></li>
                <li><p onClick={()=>sortFunction('Summer2025')}>Summer 2025</p></li>
                <li><p onClick={()=>sortFunction('Spring2025')}>Spring 2025</p></li>
            </ul>
        </div>
    )
}

export default ClassMenu;