import Hero from './(sections)/Hero'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <div id='about' className='h-screen bg-orange-doorhinge'>
        <h1>About</h1>
      </div>
      <div id='contact' className='h-screen bg-red-pomegranate'>
        <h1>Contact</h1>
      </div>
    </main>
  )
}
