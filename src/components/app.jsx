import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar/navigationBar';
import MusicTable from './MusicTable/musicTable';
import AddSong from './AddSong/addSong';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            songs:[],
            search: '',
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
        const {songs, search} = this.state;
        const filterMusic = songs.filter(song =>
           song.title.toLowerCase().includes(search.toLowerCase()) ||
           song.album.toLowerCase().includes(search.toLowerCase()) ||
           song.artist.toLowerCase().includes(search.toLowerCase())


        )   
        if (this.state.loading) return null;
        else {
            return (
                <Router>
                    <div className="App">
                    <NavigationBar />
                    <label> Search
                    <input type="search" placeholder="Album, Artist, Title" onChange={event => this.setState({search: event.target.value})} />
                    </label>
                    <Switch>
                        <Route path="/" exact render={(props) => (<MusicTable {...props} music={filterMusic} deleteSong={this.removeSong}/>)}/>
                        <Route path="/addSong" render={(props) => (<AddSong {...props} allSongs={this.state.songs} renderTable={this.renderTable}/>)}/>
                    </Switch>
                    </div>
                </Router>
            );
        }
        }
}
export default App