
import './Random.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random(){

    // const [gif, setGif] = useState('');
    // const [loader, setLoader] = useState(false);

    // async function fetchData(){
    //     setLoader(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     console.log(data);
    //     const gifSrc = data.data.images.downsized_large.url;
    //     setGif(gifSrc);
    //     setLoader(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // }, []);

    const {gif, loader, fetchData } = UseGif();

    function clickHandler(event){
        event.preventDefault();
        fetchData()
    }

    return(
        <div className="random-gif">
        <div>A RANDOM GIF</div>

        {
            loader ? (<Spinner/>) : (<img src={gif} width="400px" height="300px"/>)
        }
        
        <button onClick={clickHandler}>GENERATE</button>
      </div>
    );
}

export default Random;