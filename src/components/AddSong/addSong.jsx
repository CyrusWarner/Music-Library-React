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
        this.props.renderTable()
    }

    render() { 
        return (
            <React.Fragment>
                <div className="ui main">
                <h1>Add a Song</h1>
                <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Title</label>
                    <input name='title' type="text" onChange={this.handleChange} value={this.state.title}></input>
                    </div>
                    <div className="field">
                    <label>Artist</label>
                    <input name='artist' type="text" onChange={this.handleChange} value={this.state.artist}></input>
                    </div>
                    <div className="field">
                    <label>Album</label>
                    <input name='album' type="text" onChange={this.handleChange} value={this.state.album}></input>
                    </div>
                    <div className="field">
                    <label>Release Date</label>
                    <input name='release_date' type="datetime-local" onChange={this.handleChange} value={this.state.release_date}></input>
                    </div>
                    <button className="ui button blue" type='submit'>Add Song</button>
                </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default AddSong;