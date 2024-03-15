import profilePic from "./assets/PP.jpg"

function Student(){
    return(
        <div className="card">
        <img className="card-image" src={profilePic} alt= "profile Pic"></img>
            <h2>Remard Quimque</h2>
            <p>remardq.1@gmail.com</p>
        </div>
    );
}
export default Student