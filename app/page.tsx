import Image from 'next/image'
import ImageContainer from './components/ImageContainer'
import VideoList from './components/sections/VideoList'
import About from './components/sections/About'

export default function Home() {
  return (
    <main className="h-screen md:px-12">
      <ImageContainer imageUrl='/forest.png' text='JIOZON' />
      <div className='flex flex-col gap-10'>
        <VideoList />
        <About />
      </div>

    </main>
  )
}
