import React, {Component} from 'react';
import './project.scss';
import './projectjson.js';

import ProjectCase from './projectCase'



class Project extends Component{
    constructor(props){
        super(props)
        this.state={
            projectCase:
            [
                {
                 sid:'1',
                 name:'Harry Potter',
                 img:'hr.png',
                 introduction:'特效練習以及樣式規劃',
                 github:'https://github.com/tommy6300167/project001'
                },

                {
                 sid:'2',
                 name:'Y04',
                 img:'yo4.png',
                 introduction:'大專題客戶以及伺服器端',
                 github:'https://github.com/Yamapi0103/you04/tree/master'
                },
                {
                sid:'3',
                name:'Y04Back ground',
                img:'y04bg.png',
                introduction:'大專題後台管理者介面',
                github:'https://github.com/tommy6300167/PHP_U04'
                },
                ]
        }
       
    }

    componentDidMount(){

    }


    render(){
    
        return(
            <React.Fragment>
                <section id="project">
                <div className="container">
                <ProjectCase projectCase={this.state.projectCase}/>
                </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Project