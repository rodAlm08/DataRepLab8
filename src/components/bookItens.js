import React from "react";
import { Books } from "./books";//import Books as it will be updated here
import { Card } from "react-bootstrap";//use Card from react bootstrap that will do all the hard work to us
import { Link } from "react-router-dom";

export class BookItens extends React.Component {

    render() {
        return (

/**
 * The BookItems component displays information about a single book
 * The information to displayed is passed down from the Read component via the 
 * Books component to individual BookItem components. 
 * 
 */
            <Card>
                <Card.Header>{this.props.book.title}</Card.Header>
                <Card.Body>
                    <blockquote>
                        <img src={this.props.book.cover} width="200" height="200"></img>
                        <footer>
                            {this.props.book.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                
                {/* Link will load the id of the book into the url whan edit is clicked */}
                <Link to={'/edit/' + this.props.book._id} className="btn btn-primary">Edit</Link>
            </Card>

        );
            /* <div>
                <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl} width="200" height="200"></img>
                <h4>{this.props.book.authors[0]}</h4>
            </div>
 */}


}