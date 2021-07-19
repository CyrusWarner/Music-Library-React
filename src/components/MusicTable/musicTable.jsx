import React from 'react';
import {useState} from 'react'


function MusicTable(props) {
    const [search, setSearch] = useState("")
    const filteredMusic = props.music.filter(song =>
       song.title.toLowerCase().includes(search.toLowerCase()) ||
       song.album.toLowerCase().includes(search.toLowerCase()) ||
       song.artist.toLowerCase().includes(search.toLowerCase())
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
                        <th>Id</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Release Date</th>
                        <th>Title</th>
                        <th>Delete Song</th>
                    </tr>
                    </thead>
                        {filteredMusic.map((song) => {
                            return (
                                <tr>
                                    <td>{song.id}</td>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.release_date}</td>
                                    <td>{song.title}</td>
                                    <td><i className="trash alternate outline icon" style={{color:"red"}} onClick={() => props.deleteSong(song,)}></i></td>
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