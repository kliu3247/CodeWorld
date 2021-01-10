import arrow from "../assets/images/htmlhub/Group 6792.png"
import React from 'react';
import Background from "../Components/Background";
import { Link } from 'react-router-dom';

import bb from "../assets/images/quiz/back-button.png"
import htmlatt from "../assets/images/quiz/htmlattributes.png"
import question1 from "../assets/images/quiz/question1.png"
import question2 from "../assets/images/quiz/question2.png"
import save from "../assets/images/quiz/save.png"
import submit from "../assets/images/quiz/submit.png"

import "../assets/css/quiz.css"


class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          width: null,
          height: null,
          link: '',
        };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        let width = this.state.width;
        let height = this.state.height;
        let link = this.state.link;
        if (Number(width) === 250 && Number(height) === 400 && link.includes('href')) {
            alert("Your age must be a number");
        } 
      }
      
      render() {
        return (
            <>
            <Background/>
            <Link to = "/">
                 <img src = {bb} id = 'bb'/>
             </Link>
             <img src = {htmlatt} id = 'htmlatt'/>
             <img src = {question1} id = 'question1'/>
             <img src = {question2} id = 'question2'/>
             <img src = {save} id = 'save'/>
             
             
           
          <form onSubmit={this.mySubmitHandler}>

          <input
            type='text'
            name='width'
            id = "width"
          />

          <input
            type='text'
            name='height'
            id ='height'
          />

          <input
            type='text'
            name='link'
            id  ='link'
          />
          <br/>
          <br/>
            <Link to = "/Explore">
                <img src = {submit} id = 'submit'/>
            </Link>
          </form>
          </>
        );
      }
}

export default Quiz;