
import React, { Component } from 'react'


export class Button extends Component {
    render() {
        let {title,task} = this.props     //destructuring 
        return (
            <button onClick= {task}>{title}</button>
           
        )}
}



export default Button; 
