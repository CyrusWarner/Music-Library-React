import React, { Component } from 'react';
import axios from 'axios';
import DisplayHeader from './Header/header';
import MusicTable from './MusicTable/musicTable';

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
            console.log(this.state.songs)
        });
        
    }




    render(){
        const loading = this.state.loading
        if (loading) return null;
        else {
            console.log(this.state.songs)
            return (
                <React.Fragment>
                    <DisplayHeader />
                    <MusicTable music={this.state.songs}/>
                </React.Fragment>
            );
        }
        }
}


export default App