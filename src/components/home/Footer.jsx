import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    return (
<footer className="flex justify-between px-5 py-3">
            <div>
                <p>Copyright @ Mridha || Grey Tech {currentYear}</p>
            </div>
            <div>
            <ul className="flex gap-10 text-4xl text-blue-500">
                    <li><AiFillFacebook/></li>
                    <li><AiFillTwitterSquare/></li>
                    <li><AiFillInstagram/></li>
                    <li><AiFillYoutube/></li>
                    <li><AiFillLinkedin/></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;