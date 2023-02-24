
import '../index.css';
import img1 from '../team.jpg';
function Head() {
  return (
    <>
    <div className="image-team">
        <img src={img1} alt="team" />
    </div>
    <div className="intro">
            <h1>EQUIP | ENGAGE | EXECUTE</h1>
            <h2>  A platform of the students, by the students and for the students.</h2>
            <h1>MEET THE MEMBERS</h1>

    </div>
    </>
  );
}

export default Head;
