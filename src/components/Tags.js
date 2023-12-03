
import './Tags.css'
import { useState} from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tags(){

    // const [gif, setGif] = useState('');
    // const [loader, setLoader] = useState(false);
    // const [tag, setTag] = useState('');

    // async function fetchData(){
    //     setLoader(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     console.log(data);
    //     const gifSrc = data.data.images.downsized_large.url;
    //     setGif(gifSrc);
    //     setLoader(false);
    // }

    // useEffect( () => {
    //     fetchData();
    // }, []);

    const [tag, setTag] = useState('');

    const { gif, loader, fetchData } = UseGif(tag);

    function clickHandler(event){
        event.preventDefault();
        
        fetchData(tag); //why compulsory??
    }


    return(
        <div className="tag-gif">
            <div>RANDOM {tag}  GIF</div>

            {
                loader ? (<Spinner/>) : (<img src={gif} width="380px" height="250px"/>)
            }
            <input
                placeholder='Enter your choice'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />
            <button onClick={clickHandler}>GENERATE</button>
      </div>
    );
}

export default Tags;