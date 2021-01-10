import arrow from "../assets/images/htmlhub/Group 6792.png"
import React from 'react';
import QuizComponent from '../Components/QuizComponent';
import Background from "../Components/Background";
import { Link } from 'react-router-dom';


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
        } else {
            
            <Link to = "/Explore">
            <input type='submit' />
            </Link>
        }
      }
      
      render() {
        return (
          <form onSubmit={this.mySubmitHandler}>
          <h1>Hello</h1>
          <p> enter width here </p>
          <input
            type='text'
            name='width'
          />
          <p> enter height here </p>
          <input
            type='text'
            name='height'
          />
          <p>Enter answer</p>
          <input
            type='text'
            name='link'
          />
          <br/>
          <br/>
            <input type='submit' />
          </form>
        );
      }
}

export default Quiz;