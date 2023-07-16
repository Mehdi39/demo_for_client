import Link from 'next/link';
import Image from 'next/image';
import { BsSearch } from 'react-icons/bs';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className="flex justify-between py-4 ps-4 pe-8 bg-gray-50 items-center">
      <div className="flex justify-center items-center">
          {/* <p className="text-4xl italic border-2 rounded border-white px-5 py-2">Logo</p> */}
          <Image src={logo} alt="company logo" height={200} width={200}/>
      </div>
      <nav>
        <ul className="flex gap-8 font-light items-center">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/publications">Publications</Link>
          </li>
          <li>
            <Link href="/lectures">Lectures</Link>
          </li>
          <li>
            <Link href="/reply">Reply to critics</Link>
          </li>
          <li>
            <Link href="/non-muslims">Non-Muslims</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/search"><BsSearch/></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
