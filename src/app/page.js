import Hero from '@/components/home/Hero';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import TheBookWorld from '@/components/home/TheBookWorld';
import "react-multi-carousel/lib/styles.css";
import Lectures from '@/components/home/Lectures';
import Blog from '@/components/home/Blog';
export default function Home() {
  return (
    <main className="flex flex-col gap-8 container mx-auto">
      <Navbar />
      <Hero />
      <TheBookWorld />
      <Lectures />
      <Blog />
      <Footer />
    </main>
  )
}
