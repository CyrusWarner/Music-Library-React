import React, {useImperativeHandle, useState} from 'react';

function SearchBar(props){
    const [filteredMusic, setFilteredMusic] = useState([]);
    const handleChange = (event) => {
        const musicSearch = event.target.value;
        const filterMusic = props.allSongs.filter((song) => {
            return song.title.toLowerCase().includes(musicSearch.toLowerCase()); //if it included what the user is searchign it will search for it 
        })
        setFilteredMusic(filterMusic);
        props.filteredMusic(filteredMusic);
    }
    return(
        <div>
            <i class="search icon" />
            <input type="text" name="search" placeholder="Search" onChange={handleChange}></input>
            {filteredMusic.map((song) => {
                return(
                    <a className="song" ></a>
                )
            })}
        </div>
    )
}
export default SearchBar