import React from 'react';
import {useState} from 'react'
import {Link} from 'react-router-dom';


function MusicTable(props) {
    const [search, setSearch] = useState("")
    const filteredMusic = props.music.filter(song =>
       song.title.toLowerCase().includes(search.toLowerCase()) ||
       song.album.toLowerCase().includes(search.toLowerCase()) ||
       song.artist.toLowerCase().includes(search.toLowerCase()) ||
       song.genre.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <React.Fragment>
            <h1>Music Table</h1>
            <label> Search
                    <input type="search" placeholder="Album, Artist, Title" onChange={event => setSearch(event.target.value)} />
            </label>
            <div>
                <table class="ui celled padded table">
                    <thead>
                    <tr>
                        
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                        {filteredMusic.map((song) => {
                            return (
                                <tr>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.title}</td>
                                    <td>{song.genre}</td>
                                    <td>{song.release_date}</td>
                                    <td><i className="trash alternate outline icon" style={{color:"red"}} onClick={() => props.deleteSong(song)}></i>
                                    <Link to='/editSong'>
                                    <i className="edit icon" onClick={() => props.editSong(song)}></i>
                                    </Link>
                                    </td>
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