import React from 'react';

function MusicTable(props) {
    console.log(props)
    return (
        <React.Fragment>
            <h1>Music Table</h1>
            <div>
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Release Date</th>
                        <th>Title</th>
                    </thead>
                    <tbody>
                        {props.music.map((song) => {
                            return (
                                <tr>
                                    <td>{song.album}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.release_date}</td>
                                    <td>{song.title}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default MusicTable;