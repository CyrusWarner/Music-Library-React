import React, { Component } from 'react';
import axios from 'axios';
import DisplayHeader from './Header/header';
import MusicTable from './MusicTable/musicTable';
import AddSong from './AddSong/addSong';
import SearchBar from './SearchBar/searchBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            songs: [],
        }
    }

    componentDidMount() {
        this.renderTable()
        
    }

    renderTable = async() => {
        await axios.get(`http://127.0.0.1:8000/music/`).then (res =>{
            let allMusic = res.data
            console.log(allMusic)
            this.setState ({
                loading: false,
                songs: allMusic,
            });
        });


    }

     removeSong = async (song) => {
        await axios.delete(`http://127.0.0.1:8000/music/${song.id}/`)
        this.renderTable()
        }
    
    render(){
        if (this.state.loading) return null;
        else {
            return (
                <React.Fragment>
                    <DisplayHeader />
                    <MusicTable music={this.state.songs} deleteSong={this.removeSong}/>
                    <AddSong allSongs={this.state.songs} renderTable={this.renderTable} />
                    <div>
                        <SearchBar allSOngs={this.state.songs} />
                    </div>
                    
                </React.Fragment>
            );
        }
        }
}


export default App