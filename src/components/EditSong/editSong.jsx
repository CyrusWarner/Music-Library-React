import axios from 'axios';
import React, { Component } from 'react';

class EditSong extends Component {
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
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: '',
        })
        console.log(this.props)
        this.props.history.push('/')
    }

    updateSong = (song) => {
        console.log(song)
    }

    postSong = async () => {
        await axios.put(`http://127.0.0.1:8000/music/${this.props.editSong.id}`, this.state).then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
        this.props.renderTable()
    }

    render() { 
        return (
            <React.Fragment>
                <div className="ui main">
                    <h1>Edit Song</h1>
                        <form className="ui form" onSubmit={this.handleSubmit}>
                            <div className="field">
                                <label>Title</label>    
                                <input name='title'  placeholder={this.props.editSong.title} type="text" onChange={this.handleChange} value={this.state.title}></input>
                            </div>
                            <div className="field">
                                <label>Artist</label>
                                <input name='artist' placeholder={this.props.editSong.artist} type="text" onChange={this.handleChange} value={this.state.artist}></input>
                            </div>
                            <div className="field">
                                <label>Album</label>
                                <input name='album' placeholder={this.props.editSong.album} type="text" onChange={this.handleChange} value={this.state.album}></input>
                            </div>
                                <button className="ui button blue" type='submit' onClick={this.postSong}>Update Song</button>
                                
                        </form>
                            </div>
            </React.Fragment>
        );
    }
}
export default EditSong;