import { useState } from "react";
import {useEffect} from 'react'
import axios from 'axios'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


function UseGif(tag){

    const [gif, setGif] = useState('');
    const [loader, setLoader] = useState(false);

    async function fetchData(tag){
        setLoader(true);
        // const url_tag = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        // const url_random = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get( tag ? `${url}&tag=${tag}` :  url);
        console.log(data);
        const gifSrc = data.data.images.downsized_large.url;
        setGif(gifSrc);
        setLoader(false);
    }

    useEffect( () => {
        fetchData();
    }, []);

    return { gif, loader, fetchData};

}

export default UseGif;