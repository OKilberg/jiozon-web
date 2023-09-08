import Image from 'next/image'
import ImageContainer from './components/ImageHeader'
import VideoList from './components/sections/VideoList'
import About from './components/sections/About'
import Tour from './components/sections/Tour'

export default function Home() {
  return (
    <main className="md:px-12 mb-12">
      <div className='h-[75vh]'>
        <ImageContainer imageUrl='/forest.png' text='JIOZON' />
      </div>
      <div className='flex flex-col gap-10'>
        <VideoList />
        <About />
        <Tour/>
      </div>
    </main>
  )
}
