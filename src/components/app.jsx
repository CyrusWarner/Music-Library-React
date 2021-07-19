import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar/navigationBar';
import MusicTable from './MusicTable/musicTable';
import AddSong from './AddSong/addSong';
import SearchBar from './SearchBar/searchBar';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            songs: [],
            filteredSongs: []
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

    filteredTable = (filteredMusic) => {
        this.setState ({
            songs: filteredMusic,
        },() => console.log(this.state.songs));
    }
     removeSong = async (song) => {
        await axios.delete(`http://127.0.0.1:8000/music/${song.id}/`)
        this.renderTable()

    }
    render(){
        if (this.state.loading) return null;
        else {
            return (
                <Router>
                    <div className="App">
                    <NavigationBar />
                    <SearchBar allSongs={this.state.songs} filteredMusic={this.filteredTable}/>
                    <Switch>
                        <Route path="/" exact render={(props) => (<MusicTable {...props} music={this.state.songs} deleteSong={this.removeSong}/>)}/>
                        <Route path="/addSong" render={(props) => (<AddSong {...props} allSongs={this.state.songs} renderTable={this.renderTable}/>)}/>
                        {/*<Route path="/search" render={(props) => (<SearchBar allSongs={this.state.songs} filteredMusic={this.filteredTable}/>)}/> */} 
                    </Switch>
                    </div>
                </Router>
            );
        }
        }
}
export default App