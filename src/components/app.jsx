import React from 'react';
import axios from 'axios';
import DisplayHeader from './Header/header';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [],
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/music/`).then (res =>{
            let allMusic = res.data
            console.log(allMusic)
            this.setState = ({
                songs: allMusic,
            });
        });
        
    }




    render(){
            return (
                <React.Fragment>
                    <DisplayHeader />
                </React.Fragment>

            );
        }
}


export default App