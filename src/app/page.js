import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/Link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}
