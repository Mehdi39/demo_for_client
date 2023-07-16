import Image from 'next/image'
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import HeroImage from '../assets/mufti_menk.jpg'


const Hero = () => {
    return (
        <div className="flex gap-5 p-5 justify-evenly items-center">
            <div>
                <Image src={HeroImage} alt="image of mufti menk" height={2000} width={2000}/>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-5xl text-blue-500">Mufti Menk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nisi facere omnis, nulla repellat recusandae molestias. Qui beatae vel dolore corrupti excepturi ut, ipsum libero deleniti itaque sint impedit quasi aperiam quia, consequuntur earum placeat maxime laboriosam veritatis? Dignissimos dolorem neque voluptas quidem fugit voluptate voluptates minima? Odit quis, blanditiis quisquam commodi sapiente quaerat autem totam itaque in sunt quo molestias illo veniam, adipisci neque.</p>
                <ul className="flex gap-2 text-4xl text-blue-500">
                    <li><AiFillFacebook/></li>
                    <li><AiFillTwitterSquare/></li>
                    <li><AiFillInstagram/></li>
                    <li><AiFillYoutube/></li>
                    <li><AiFillLinkedin/></li>
                </ul>
                <button className="border-2 border-blue-500 py-2 px-4">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Hero;