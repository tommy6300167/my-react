import React, {Component} from 'react';
import './navbar.scss'
import {Link} from 'react-router-dom'



class Footer extends Component{
    constructor(props){
        super(props)
        this.cookie = []
        this.state={
           
        }
    }

    onclick_button=(e)=> {
            if(e == 'facebook'){
                 window.location.href = 'https://www.facebook.com/profile.php?id=100002120343748&ref=bookmarks';
            }else if(e == 'linkin'){
                window.location = 'https://www.linkedin.com/in/lee-cheng-hao-2543b489/'
            }else if(e == 'google'){
                console.log('hellogoogle')
            }
    }

    scrollTOP=()=>{
        window.scrollTo(0,0);
    }

    
    render(){ 
        return(
            <React.Fragment>
               <div className="FootContainer">
                    <div className="container">
                        <ul className="flex">

                            <li><Link onClick={this.onclick_button.bind(this, 'facebook')} to=""><i className="fab fa-facebook-square fa-2x" ></i></Link></li>
                            <li><Link onClick={this.onclick_button.bind(this, 'linkin')} to=""><i className="fab fa-linkedin-in fa-2x"></i></Link></li>
                            <li><Link onClick={this.onclick_button.bind(this, 'google')} to=""><i className="fab fa-google-plus-g fa-2x"></i></Link></li>
                            <li><Link to="/"><i className="fas fa-envelope fa-2x"></i></Link></li>
                        </ul>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}


export default Footer