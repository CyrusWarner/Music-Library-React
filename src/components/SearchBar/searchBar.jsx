import React from 'react';

function SearchBar(props){
    const handleChange = (event) => {
        const musicSearch = event.target.value;
        const filterMusic = props.allSongs.filter((song) => {
            let filteredSong = song.title.toLowerCase().includes(musicSearch.toLowerCase()); //if it included what the user is searchign it will search for it 
            return filteredSong
        })
        console.log(filterMusic)
        props.filteredMusic(filterMusic);
    }
    return(
        <div>
           <input type="text" name="search" placeholder="Search" onChange={handleChange}></input> 
        </div>
    )
}
export default SearchBar