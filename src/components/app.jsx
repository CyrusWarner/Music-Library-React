import React, { Component } from 'react';
import axios from 'axios';
import DisplayHeader from './Header/header';
import MusicTable from './MusicTable/musicTable';
import AddSong from './AddSong/addSong';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            songs: [],
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/music/`).then (res =>{
            let allMusic = res.data
            console.log(allMusic)
            this.setState ({
                loading: false,
                songs: allMusic,
            });
        });
        
    }

     removeSong = (song, allSongs) => {
        // let newSongList = [];
        console.log(song)
        console.log(allSongs)
        axios.delete(`http://127.0.0.1:8000/music/${song.id}/`)
        }
        // COME BACK TO AND FIGURE OUT WAY TO RERENDER TABLE
        // .then (res =>{
        //     let deletedSong = res.data
        //     allSongs.filter(song =>{
        //         debugger
        //         if (song.id !== deletedSong.id){
        //             newSongList.push(song)
        //         }
        //     })
        // console.log(newSongList)
        // this.setState({
        //     songs: newSongList
        // })
        // })

    
    addNewSong = (song) => {
        console.log(song)
        let tempSong = this.state.songs
        tempSong.push(song);
        this.setState({
            songs: tempSong
        })
    }

    render(){
        if (this.state.loading) return null;
        else {
            return (
                <React.Fragment>
                    <DisplayHeader />
                    <MusicTable music={this.state.songs} deleteSong={this.removeSong}/>
                    <AddSong addNewSong={this.addNewSong} allSongs={this.state.songs} />
                </React.Fragment>
            );
        }
        }
}


export default App