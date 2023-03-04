import Slider from './Slider';
import '../index.css';
function Body() {
  return (
    <>
    <div className="card">
        <div className="cards">
            <div className="text">
                <h1>Board-members</h1>
                <div className='sl1'>
                <Slider/>
                </div>

            </div>
        </div>
        <div className="cards">
            <div className="text">
                <h1>Web-development</h1>
                <Slider/>

            </div>
        </div>
        <div className="cards">
            <div className="text">
                <h1>Creative Department</h1>
                <Slider/>

            </div>
        </div>
        <div className="cards">
            <div className="text">
                <h1>HR and Management</h1>
                <Slider/>

            </div>
        </div>
        <div className="cards">
            <div className="text">
                <h1>Outreach and Sponsership</h1>
                <Slider/>

            </div>
        </div>
    </div>
    
    </>
  );
}

export default Body;
