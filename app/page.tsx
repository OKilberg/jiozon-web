import Hero from './(sections)/Hero'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <div className='h-screen bg-orange-doorhinge'>
        <h1 id='about'>About</h1>
      </div>
      <div className='h-screen bg-red-pomegranate'>
      <h1 id='contact'>About</h1>
      </div>
    </main>
  )
}
