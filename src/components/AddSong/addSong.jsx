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
            genre: '',
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
        })
    }
    postSong = async () => {
        await axios.post(`http://127.0.0.1:8000/music/`, this.state)
        this.props.renderTable()
        this.props.history.push("/")
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
                                <input name='release_date' type="date" onChange={this.handleChange} value={this.state.release_date}></input>
                            </div>
                            <div className="field">
                                <label>Genre</label>
                                <input name='genre' type="text" onChange={this.handleChange} value={this.state.genre}></input>
                            </div>
                                <button className="ui button blue" type='submit' onClick={this.postSong}>Add Song</button>
                        </form>
                            </div>
            </React.Fragment>
        );
    }
}
export default AddSong;