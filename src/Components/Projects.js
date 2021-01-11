import React, {Component} from 'react';
import '../css/Projects.css'

export default class Header extends Component{
    render(){
        return(
            <div className ="projects" id = "projects">
                <h1 className = "prj-header">check out some of my projects</h1>
                <div className ="prjs">
                    <img className = "prj-img" src ="https://res.cloudinary.com/kevin14/image/upload/v1571149507/mgooimewonmen57gm9yk.png"/>
                    <img className = "prj-img" src ="https://res.cloudinary.com/kevin14/image/upload/v1572367248/fdulxwg6alubfdgvajxu.png"/>
                    <img className = "prj-img" src ="https://res.cloudinary.com/kevin14/image/upload/v1572367346/fwnrjbyyghltjqrl6wpx.png"/>
                    <img className = "prj-img" src ="https://res.cloudinary.com/kevin14/image/upload/v1572366685/qj6tkkcnvvldpbjttyhf.png"/>
                </div>
            </div>
        )
    }
}