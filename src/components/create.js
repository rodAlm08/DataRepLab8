// create.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


//this component will be exported to be imported in App.js
//React.component is class that has all the functionality to create components 

 
export class Create extends React.Component {
    
    //you should bind the events otherwise won't work
    constructor(){
        super();
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle=this.onChangeBookTitle.bind(this);
        this.onChangeBookCover=this.onChangeBookCover.bind(this);
        this.onChangeAuthorTitle=this.onChangeAuthorTitle.bind(this);

 /*
        state object contains a single property that is an array of books with 3 entries
    */
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }
    
    //will take an event wheni t get envoked
    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked,
                    ${this.state.title},  
                    ${this.state.cover}, 
                    ${this.state.author}`);
                    
        //create an object
        const book= {
            title: this.state.title,
            cover: this.state.cover,
            author: this.state.author

        }

        //use axios to generata a http request and we passe up book
        axios.post('http://localhost:4000/api/books', book)
        .then()
        .catch();


        this.setState({
            title:'',
            cover:'',
            author:''

        })
       
    }
    
     //method to update the state
    onChangeBookTitle(e){
        this.setState({
            title:e.target.value
        })
    }

    //method to update the state
    onChangeBookCover(e){
        this.setState({
            cover:e.target.value
        })
    }
    
    //method to update the state
    onChangeAuthorTitle(e){
        this.setState({
            author:e.target.value
        })
    }


    render() {
        return (

            <div>
                {/* insert the form with handlers that are going to handle the actions and update the server */}
                    <form onSubmit={this.handleSubmit}>
                        {/*part of class form-group that will have a label and an input box
                        that will change the state.title after calling the method
                         */}
                        <div className="form-group">
                            <label>Add Book Title: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeBookTitle}
                            />
                        </div>

                          {/*part of class form-group that will have a label and an input box
                        that will change the state.cover  after calling the method
                         */}
                        <div className="form-group">
                            <label>Add Book Cover: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.cover}
                                onChange={this.onChangeBookCover}
                            />
                        </div>

                          {/*part of class form-group that will have a label and an input box
                        that will change the state.author  after calling the method
                         */}
                        <div className="form-group">
                            <label>Add Book Author: </label>                            
                            <input type="text"
                                className="form-control"
                                value={this.state.author}
                                onChange={this.onChangeAuthorTitle}
                            />
                        </div>

                    {/*submit button in the form that will take all the changes and update 
                    our state after submting it
                         */}
                    <input type="submit" value="Submit" />
                </form>

            </div>


        );
    }
}