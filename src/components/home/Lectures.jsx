
const Lectures = () => {
    return (
        <section className="pt-8 mt-8">
            <div className="text-center text-gray-600 mx-12 flex flex-col gap-4">
                <h3 className="text-2xl">Lecture Videos</h3>
                <h2 className="text-4xl font-bold">Fuel for your soul</h2>
                <p className="">Not a book person? No problem. We have a huge collection of videos by Dr.Bilal Philips that will help you get closer to Allah one video at a time. Here’s a great way to include some halal entertainment while spending quality time with your family and kids.</p>
            </div>
            <ul className="flex justify-center gap-2 flex-wrap p-5">
                <li className="w-1/4">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/NGY1ch9hA98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                <li className="w-1/4">
                    <iframe width="-100%" height="315" src="https://www.youtube.com/embed/x84QrnjIu8g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                <li className="w-1/4">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/6l9kVynB5YQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
            <div className="flex justify-center">
                <button className="border-2 py-2 px-4 border-blue-500 hover:bg-blue-500 hover:text-white ">
                    VIEW ALL
                </button>
            </div>
        </section>
    );
};

export default Lectures;