import { AiFillClockCircle } from 'react-icons/ai';
import { BsPen } from 'react-icons/bs';
import Image from 'next/image';

import quran_1 from '../../assets/quran_1.jpeg';
import quran_2 from '../../assets/quran_2.jpeg';
import quran_3 from '../../assets/quran_3.jpeg';


const Blog = () => {
    return (
        <section className="pt-8 mt-8">
            <div className="text-center text-gray-600 mx-12 flex flex-col gap-4">
                <h3 className="text-2xl">The Blogosphere</h3>
                <h2 className="text-4xl font-bold">Refresh your imaan</h2>
                <p className="">Finding it difficult to keep up with all the videos and audios that are constantly streaming in? Searching for written content which you can look back to and fall back on at any given time for quick reference? Our blog covers a wide range of issues that will keep your mind occupied for days.</p>
            </div>
            <div className="flex gap-4 m-5">
                <div className="flex flex-col gap-3">
                    <div className="">
                        <Image src={quran_1}/>
                        <p className="text-2xl text-blue-500">Is there a true religion</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <AiFillClockCircle />
                            <p>December 13, 2017</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsPen />
                            <p>Mufti Menk</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="">
                        <Image src={quran_3}/>
                        <p className="text-2xl text-blue-500">Is there a true religion</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <AiFillClockCircle />
                            <p>December 13, 2017</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsPen />
                            <p>Mufti Menk</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="">
                        <Image src={quran_2}/>
                        <p className="text-2xl text-blue-500">Is there a true religion</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <AiFillClockCircle />
                            <p>December 13, 2017</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsPen />
                            <p>Mufti Menk</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="border-2 py-2 px-4 border-blue-500 hover:bg-blue-500 hover:text-white ">
                    VIEW ALL
                </button>
            </div>
        </section>
    );
}
export default Blog;