import axios from 'axios';
import React, { Component } from 'react';

class EditSong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.song.title,
            artist: this.props.song.artist,
            album: this.props.song.album,
        }
        if(this.state.title === undefined){
            this.props.history.push('/')
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();  
    }
    updateSong = async () => {
        const data = this.state
        const songId = this.props.song.id
        console.log(data)
        await axios.put(`http://127.0.0.1:8000/music/${songId}/`, data).then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
        this.props.renderTable()
        this.props.history.push('/')
        console.log(this.props)
    }
    render() { 
        return (
            <React.Fragment>
                <div className="ui main">
                    <h1>Edit Song</h1>
                        <form className="ui form" onSubmit={this.handleSubmit}>
                            <div className="field">
                                <label>Title</label>    
                                <input name='title'  defaultValue={this.props.song.title} type="text" onChange={this.handleChange}></input>
                            </div>
                            <div className="field">
                                <label>Artist</label>
                                <input name='artist' defaultValue={this.props.song.artist} type="text" onChange={this.handleChange}></input>
                            </div>
                            <div className="field">
                                <label>Album</label>
                                <input name='album' defaultValue={this.props.song.album} type="text" onChange={this.handleChange}></input>
                            </div>
                                <button className="ui button blue" type='submit' onClick={this.updateSong}>Update Song</button>
                        </form>
                            </div>
            </React.Fragment>
        );
    }
}
export default EditSong;