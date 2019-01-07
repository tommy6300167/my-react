import React, {Component} from 'react';
import './about.scss'

class About extends Component{
    constructor(props){
        super(props)
        this.setState={
            Hello:''
        }
    }

    render(){
        return(
            <React.Fragment>

                <section id="introduce">
                    <div className="container">
                    <h4>About Me</h4>
                    <h5>Let me introduce myself</h5>
                    <p>
                        What I learn in school
                    </p>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default About