import React, { Component } from "react";
import img1 from "./assets/Picture1.png";
import img2 from "./assets/Picture2.png";
import img3 from "./assets/Picture3.png";
import img4 from "./assets/Picture4.png";
import img5 from "./assets/Picture5.png";
import img6 from "./assets/Picture6.png";
import img7 from "./assets/Picture7.png";
import img8 from "./assets/Picture8.png";
import img9 from "./assets/Picture9.png";
import img10 from "./assets/Picture13.png";
import img11 from "./assets/Picture12.png";
import img12 from "./assets/Picture14.png";
import img13 from "./assets/Picture15.png";
import arrow1 from "./assets/arrow1.png";
import arrow2 from "./assets/arrow2.png";
import "./App.css";
import Tile from "./Components/Tiles/Tile";
// import Navbar from "./Components/Navbar/Navbar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App_heading">Your Journey from <strong >Home </strong>to <strong> Abroad</strong> starts from here</h1>
        <div className="App_Row">
          <div className="App_Sidetag">
            <h2>PROFILING</h2>
          </div>
          <div className="App_tiles">
            <Tile
              title="GET IN TOUCH"
              text="TALK TO OUR ACADEMIC ADVISOR AND BEGIN YOUR EDUCATIONAL QUEST"
              img={img1}
            />
            <img src={arrow1} alt="" className="right_arrow" />
            <Tile
              title="BUILD  PROFILE"
              text="REGISTER ON ERXA AND BUILD YOUR ACADEMIC PROFILE TO ACHIEVE YOUR STUDY ASPIRATIONS "
              img={img2}
            />
             <img src={arrow1} alt="" className="right_arrow" />
            <Tile
              title="BUILD PATHWAY PLAN"
              text="BUILD A PATHWAY PLAN, SELECT COURSES, COUNTRIES, COLLEGES, TESTS, 
              DOCUMENTATION, ADMISSION, LOAN, SCHOLARSHIP, VISA & PRE-DEPARTURE"
              img={img3}
            />
          </div>
         </div>
        <img src={arrow2} alt="" className="down_arrow_1" />
       
        <div className="App_Row">
          <div className="App_Sidetag">
            <h2>ADMISSION</h2>
          </div>
          <div className="App_tiles">
            <Tile
              title="ADMISSION"
              text="HANDLE ADMISSION QUERIES
              FEE REMITTANCE
              RECEIVE OFFER LETTER"
              img={img4}
            />
            <img src={arrow1} alt="" className="left_arrow" />
            <Tile
              title="DOCUMENTATION"
              text="APPLICATION & DOCUMENTATION
              ASSISTANCE
              LOAN ASSISTANCE
              APPLICATION SUBMISSION
              "
              img={img5}
            />
            <img src={arrow1} alt="" className="left_arrow" />
            <Tile
              title="TEST PREPARATION"
              text="PREPARE FOR TESTS
            TAKE STUDY ABROAD TESTS 
            SUBMIT TEST SCORES TO COLLEGES         
            "
              img={img6}
            />
          </div>
        </div>
        <img src={arrow2} alt="" className="down_arrow_2" />
        <div className="App_Row">
          <div className="App_Sidetag">
            <h2>ASSISTANCE<strong>&</strong>SERVICE</h2>
          </div>
          <div className="App_tiles">
            <Tile
              title="VISA ASSISTANCE"
              text="VISA APPLICATION
             DOCUMENTS CHECKLIST
             DOCUMENTATION ASSISTANCE
             VISA FILING                      
             "
              img={img7}
            />
             <img src={arrow1} alt="" className="right_arrow" />
            <Tile
              title="VALUE ADDED SERVICES"
              text="ACCOMODATION, INSURANCE, BANKING, TRAVEL AND FOREX ASSISTANCE                    
            "
              img={img8}
            />
             <img src={arrow1} alt="" className="right_arrow" />
            <Tile
              title="PRE-DEPARTURE"
              text="PRE-DEPARTURE CHECKLIST
            TRAVEL DOCUMENTS GUIDANCE
            TRAVEL, INSURANCE, BAGGAGE, FOREX DOCUMENTAL GUIDANCE.
            BON VOYAGE
                                
            "
              img={img9}
            />
          </div>
        </div>
        <div className="App_Special_elements_row">
          <div className="App_Special_elements">
            <img src={img10} alt="" />
            <div className="App_Special_elements_textbox">
            <p>
              Spot challenges and <strong>Gain an outside perspective </strong>
              of popular courses to study
            </p>
            </div>
          </div>
          <div className="App_Special_elements">
            <img src={img11} alt="" />
            <div className="App_Special_elements_textbox">
            <p><strong>Get Personalized Attention </strong>from our academic advisors</p>
            </div>
          </div>
          <div className="App_Special_elements">
            <img src={img13} alt="" />
            <div className="App_Special_elements_textbox">
            <p>Build a strong profile and <strong>Get enrolled into your dream college </strong></p>
            </div>
            
          </div>
        </div>
        <div className="App_Special_elements_row2"  style={{marginLeft: "30px"}}>
          <div className="App_Special_elements">
            <img src={img12} alt="" />
            <div className="App_Special_elements_textbox">
            <p>
              <strong>Save Time, Effort, Stress & Money  </strong>
              by using our Core and Value added services.
            </p>
            </div>
          </div>
          <div className="App_Special_elements"  style={{marginLeft: "80px"}}>
            <img src={img13} alt="" />
            <div className="App_Special_elements_textbox">
            <p><strong>Get the Best Coaching  </strong>to make your life from good to great</p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}