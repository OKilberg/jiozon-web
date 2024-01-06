import BackgroundImage from '@/components/BackgroundImage'
import Hero from './(sections)/Hero'
import { Grid, GridItem } from '@/components/layout/Layout'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero/>
    </main>
  )
}
