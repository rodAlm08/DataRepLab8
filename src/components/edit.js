import e from "cors";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function Edit() {
    let {id} = useParams();//this variable will hold the id of the book to be edited. Has to be done as a function component
    //as new version only allows functions
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

//will use axios to redirect http request
useEffect(()=>{
    axios.get('http://localhost:4000/api/book/' + id)
    //when the response comes back call our methods
    .then((res)=>{
        setTitle(res.data.title)
        setCover(res.data.cover)
        setAuthor(res.data.author)
    }   )
    .catch()
},[]);//we need to put an empty array because we want excuted only once


    const handleSubmit = (e) => {
        e.preventDefault();
        const editBook= {
            title:title,
            cover:cover,
            author:author
        }
        //will generate a HTTP request with the url + the id 
        axios.put('http://localhost:4000/api/book/' + id, editBook)
        .then((res)=>{
            console.log(res);
            //once the operation s susccesseful it will redirect to the read page
            navigate('/read')
        })
        .catch();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book cover: </label>
                    <input type="text"
                        className="form-control"

                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Book" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}