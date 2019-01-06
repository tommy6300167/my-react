import React, {Component} from 'react';


class ProjectCase extends Component{
    constructor(props){
        super(props)
        this.state={
            openModal:false,
        }
        this.n=0
    }

    openModal = (n) =>{
        this.setState({openModal:!this.state.openModal})
        console.log(n)
        if(this.state.openModal){
            document.getElementById('sid'+ n).style.display = "block"
        }
    }


    closeModal=(n)=>{
        this.setState({openModal:false})
        if(!this.state.openModal){
            document.getElementById('sid' + n).style.display = "none"
        }
    }

    linkto=(e)=> {
        console.log(e)
        if(e){
             window.location.href = e;
        }
}

    componentDidMount(){
        this.openModal()
    }


    render(){
        
        const style={
            display:'visible'
        }


        return(
            <React.Fragment>
            {
                this.props.projectCase.map((pc) =>
                (
                <div>       
                {/* image used to open light box */}
                    <div className="project_lightBox">
                        <div className="column">
                            <img src={`image/${pc.img}`} onClick={(event)=>{this.openModal(`${pc.sid}`)}} alt="picture" style={style}/>
                        </div>
                        <div className="project_content">
                            <h4>{pc.name}</h4>
                            <p>{pc.introduction}</p>
                            <p onClick={this.linkto.bind(this, `${pc.github}`)}>{pc.github}</p>
                        </div>
                    </div>
                    <div id={`sid${pc.sid}`} className="modal mySlide">
                    <div className="modal-content">
                    <span className="close cursor" onClick={(event)=>{this.closeModal(`${pc.sid}`)}}>&times;</span>
                        
                        <div>
                            <img src={`image/${pc.img}`} alt="picture"/>
                        </div>
                        <div className="caption-container">
                            <h5>{}</h5>
                            <p><span>Purpose:</span>{}</p>
                            <p><span>Github:</span>{}</p>
                        </div>
                    </div>
                </div>

                        </div>
                            )
                        )
                    }

                                    {/* this is light box part */}
                
                    
                
                
                
            </React.Fragment>
        )
    }
}



export default ProjectCase