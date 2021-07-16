import React from 'react';

function MusicTable(props) {
    console.log(props)
    return (
        <React.Fragment>
            <h1>Music Table</h1>
            <div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Release Date</th>
                        <th>Title</th>
                    </tr>
                        {props.music.map((song) => {
                            return (
                                <tr>
                                    <td>{song.id}</td>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.release_date}</td>
                                    <td>{song.title}</td>
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