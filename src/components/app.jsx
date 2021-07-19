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
        if (this.state.loading) return null;
        else {
            return (
                <Router>
                    <div className="App">
                    <NavigationBar />
                    <Switch>
                        {/*<Route path="/"  exact render={(props) => (<MusicTable {...props} music={filterMusic} deleteSong={this.removeSong}/>)} />*/}
                        <Route path="/"  exact render={(props) => (<MusicTable {...props} music={this.state.songs} deleteSong={this.removeSong}/>)} />
                        <Route path="/addSong" render={(props) => (<AddSong {...props} allSongs={this.state.songs} renderTable={this.renderTable}/>)}/>
                    </Switch>
                    </div>
                </Router>
            );
        }
        }
}
export default App