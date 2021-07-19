import React from 'react';
import {Link} from 'react-router-dom';


function MusicTable(props) {
    return (
        <React.Fragment>
            <h1>Music Table</h1>
            <div>
                <table class="ui celled padded table">
                    <thead>
                    <tr>
                        
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Delete Song</th>
                        <th>Edit Song</th>
                    </tr>
                    </thead>
                        {props.music.map((song) => {
                            return (
                                <tr>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.title}</td>
                                    <td>{song.release_date}</td>
                                    <td><i className="trash alternate outline icon" style={{color:"red"}} onClick={() => props.deleteSong(song)}></i></td>
                                    <Link to='/editSong'>
                                    <td><i className="edit icon" onClick={() => props.editSong(song)}></i></td>
                                    </Link>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </React.Fragment>
    )
}

export default MusicTable;