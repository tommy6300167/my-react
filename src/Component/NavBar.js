import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss'


class Footer extends Component{
    constructor(props){
        super(props)
        
        this.state={
           
        }
    }

    scrollTOP=()=>{
        window.scrollTo(0,0);
    }

    
    render(){ 

        return(
            <React.Fragment>
                <div className="navBackground">
                    <div className="container">
                        <ul className="flex navBar">
                            <li id="logo">TomLee</li>
                            <li><Link to="/"><i className="fas fa-home"></i></Link></li>
                            {/* <li><Link to="/aboutTom">About me</Link></li> */}
                            <li className="margin-right"><Link to="/myProject">Project</Link></li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Footer