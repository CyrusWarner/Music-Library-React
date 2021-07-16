import axios from 'axios';
import React, { Component } from 'react';

class AddSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(axios.post(`http://127.0.0.1:8000/music/`, this.state)).then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })

        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: '',
        })
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Add a Song</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input name='title' type="text" onChange={this.handleChange} value={this.state.title}></input>
                    <br/>
                    <label>Artist</label>
                    <input name='artist' type="text" onChange={this.handleChange} value={this.state.artist}></input>
                    <br/>
                    <label>Album</label>
                    <input name='album' type="text" onChange={this.handleChange} value={this.state.album}></input>
                    <br/>
                    <label>Release Date</label>
                    <input name='release_date' type="datetime-local" onChange={this.handleChange} value={this.state.release_date}></input>
                    <button type='submit'>Add Song</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default AddSong;