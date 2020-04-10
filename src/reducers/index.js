import { combineReducers } from "redux"; //named export
//gonna have a static list of songs

const songsReducers=()=>{
    return[
        {
            title:"i don't care",
            duration:"4:05 "
        },
        {
            title:"shape of you",
            duration:"6:05 "
        },
        {
            title:"lovers",
            duration:"2:05 "
        },
        {
            title:"lalaland",
            duration:"3:05 "
        }
    ]
}

const selectedSongReducer=(selectedSong=null,action)=>{

    if(action.type==="SONG_SELECTED"){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
})