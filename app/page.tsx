import About from './(sections)/About'
import Hero from './(sections)/Hero'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <About/>
      <div id='contact' className='h-screen bg-red-pomegranate'>
        <h1>Contact</h1>
      </div>
    </main>
  )
}
