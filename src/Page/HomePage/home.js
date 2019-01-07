import React, {Component} from 'react';
import './home.scss'
import './timeline.js'

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            helloYou:'Tom Lee',
            email:'tommy6300167@gmail.com',
            masterSchool:{
                          name:'SouthWest Minnesota State University',
                          major:'Business administration'
                        },
            University:{
                        name:'Shih Chien University',
                        major:'International Business Management',
                        }
        }
    }

    // componentDidMount(){

    // }
    render(){
        return(
            <React.Fragment>

                {/* This is  main cover including photo name and job*/}
                <section className="banner">
                    <div id="minephoto">
                        <img src="image/UNADJUSTEDNONRAW_thumb_84.jpg" />
                    </div>
                    <div className="banner_content">
                     
                        <h3>{this.state.helloYou}</h3>
                        <h5>Front end engineer</h5>
                        <p>Email:{this.state.email}</p>
                    </div>
                </section>

                {/* this is talking about my education and skill */}
                <section id="education">
                    <div id="education">
                        <h3><i class="fas fa-university"></i> Education</h3>
                        <hr/>
                        <div className="education_content">
                            <h5>{this.state.masterSchool.name}: <span>{this.state.masterSchool.major}(2015/12/1-2017/07/31)</span></h5>
                            <h5>{this.state.University.name}: <span>{this.state.University.major}(2010/09/01-2014/06/12)</span></h5>
                        </div>
                    </div>
                    
                    <div id="skill" >
                        <h3><i class="fas fa-globe"></i> Language</h3>
                    <hr/>
                    <div className="flex">
                         <ul className="language">
                            <li className="font-weight">Language</li>
                            <li>Chinese</li>
                            <li>English</li>
                        </ul>
                        <ul className="language">
                            <li className="font-weight">HTML</li>
                            <li>HTML5</li>
                            <li></li>
                        </ul>
                        <ul className="language">
                            <li className="font-weight">CSS</li>
                            <li>Bootstrap</li>
                            <li>SCSS</li>
                        </ul>
                        <ul className="language">
                            <li className="font-weight">JavaScript</li>
                            <li>jQuery</li>
                            <li>React</li>
                        </ul>
                        </div>
                    </div>
                 
                    <div id="experience">
                    <h3><i className="fas fa-award"></i> Experience</h3>
                    <hr/>
                    <div className="timeline">
                    <div class="timeline">
                        <div class="tlcontainer left">
                            <div class="content">
                            <h2>2018/07/12-2018/12/18</h2>
                            <p>
                            <span>Institute for Information Industry</span>
                            Position: Student
                            </p>
                            </div>
                        </div>
                        <div class="tlcontainer right">
                            <div class="content">
                            <h2>2017/09/23-2018/06/30</h2>
                            <p>
                            <span>Ozeol</span>
                            Position: Prospector
                            </p>
                            </div>
                        </div>
                        <div className="tlcontainer left">
                            <div class="content">
                            <h2>2015/12-2017/07</h2>
                            <p>
                            <span>{this.state.masterSchool.name}</span>
                            </p>
                            </div>
                        </div>
                        <div className="tlcontainer right">
                            <div class="content">
                            <h2>2014/10-2015/10</h2>
                            <p>
                            <span>Military Server</span>
                            
                            </p>
                            </div>
                        </div>
                        <div className="tlcontainer left">
                            <div class="content">
                            <h2>2010/09-2014/06</h2>
                            <span>{this.state.University.name}</span>
                            <p></p>
                            </div>
                        </div>
                        
                        </div>    
                    </div>
                    </div>
                </section>


            </React.Fragment>
        )
    }
}

export default Home