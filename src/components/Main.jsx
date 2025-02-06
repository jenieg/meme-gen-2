import { useState, useEffect } from 'react';

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    //stores meme urls in array 
    const [memeArray, setMemeArray] = useState([])
    
    //fetch meme url from api
    function getMemeArray() {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Response Not Ok')
                } return res.json()
            })
            .then(data => {
                const memeUrls = data.data.memes.map(meme => meme.url)
                setMemeArray(memeUrls)
            })
            .catch(error => {
                console.error('Error fetching memes:', error);
            })
    }

    //gets array of memes when component mounts
    useEffect(() => {
        getMemeArray();
    }, []);

    //handles form input on change
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    //gets random meme url on button click
    function handleClick() {
        if (memeArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * memeArray.length)
            const randomMemeUrl = memeArray[randomIndex]
            setMeme(prevMeme => ({
                ...prevMeme,
                imageUrl: randomMemeUrl
            }))
        }
    }


    return (
        <main className="mx-auto p-9 max-w-2xl">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <label>
                    Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        className="w-full mt-1 rounded border border-gray-300 indent-1.5 min-h-10 font-karla"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>
                    Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        className="w-full mt-1 rounded border border-gray-300 indent-1.5 min-h-10 font-karla"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button 
                    onClick={handleClick}
                    className="col-span-2 rounded bg-green-700 font-semibold text-white border-none cursor-pointer min-h-10 font-karla">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative flex flex-col justify-center items-center">
                    <img
                        src={meme.imageUrl}
                        className="w-full rounded-sm"
                    />
                    <span className="absolute top-0 text-center my-3.5 px-1.5 font-impact text-3xl font-bold uppercase text-white tracking-wide text-outline">
                        {meme.topText}
                    </span>
                    <span className="absolute bottom-0 text-center my-3.5 px-1.5 font-impact text-3xl font-bold uppercase text-white tracking-wide text-outline">
                        {meme.bottomText}
                    </span>
                </div>
            </div>
        </main>
    );
}