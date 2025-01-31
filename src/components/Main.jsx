export default function Main() {
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
                    />
                </label>

                <label>
                    Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        className="w-full mt-1 rounded border border-gray-300 indent-1.5 min-h-10 font-karla"
                    />
                </label>
                <button className="col-span-2 rounded bg-green-700 font-semibold text-white border-none cursor-pointer min-h-10 font-karla">
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="relative flex flex-col justify-center items-center">
                <img
                    src="http://i.imgflip.com/1bij.jpg"
                    className="max-w-full h-auto rounded-sm"
                />
                <span className="absolute top-0 text-center my-3.5 px-1.5 font-impact text-3xl uppercase text-white tracking-wide text-outline">
                    One does not simply
                </span>
                <span className="absolute bottom-0 text-center my-3.5 px-1.5 font-impact text-3xl uppercase text-white tracking-wide text-outline">
                    Walk into Mordor
                </span>
            </div>
        </main>
    );
}
