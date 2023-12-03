import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import News from './components/News'

export default function Home() {
  return (
    <main className="relative">
      <Navbar></Navbar>
      <Image className="w-full h-50 rounded-xl" src="/Banner.png" alt="Background Image" width={2500} height={2500} />
      <div className="flex">
        <Image className="rounded-3xl mt-2 mb-2 w-full sm:w-1/2" src="/Ad_Photo.png" alt="Background Image" width={1400} height={1700} />
        <div className="rounded mt-8 p-6 md:w-1/2 bg-grey">
            <News/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
