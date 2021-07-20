import React from 'react';
import {useState} from 'react'
import {Link} from 'react-router-dom';


function MusicTable(props) {
    const [search, setSearch] = useState("")
    const filteredMusic = props.music.filter(song =>
       song.title.toLowerCase().includes(search.toLowerCase()) ||
       song.album.toLowerCase().includes(search.toLowerCase()) ||
       song.artist.toLowerCase().includes(search.toLowerCase()) 
    )
    return (
        <React.Fragment>
            <h1 className="text-center">Music Table</h1>
            <div className="text-center">
                <div style={{marginBottom:"50px", marginTop:"25px"}}>
                <div className="ui huge icon input">
                    <input type="text" placeholder="Album, Artist, Title" onChange={event => setSearch(event.target.value)} />
                    <i className="ui blue search icon"></i>
                    </div>
                </div>
            </div>
            <div>
                <table className="ui celled padded table">
                    <thead>
                    <tr>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Title</th>
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