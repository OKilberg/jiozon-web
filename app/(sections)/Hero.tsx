import ButtonCTA from '@/components/button/Button'
import SpotifyEmbedd from '@/components/integration/SpotifyEmbedd'
import BentoGrid, { BentoItem } from '@/components/layout/BentoGrid'
import ImageBackground from '@/components/layout/ImageBackground2'
import { TextDisplay, TextHeading } from '@/components/text/Text'
import React, { Suspense } from 'react'

type Props = {}

export default function Hero({ }: Props) {
  return (
    <section id='home' className='w-full text-white'>
      <ImageBackground priority imageUrl='/HeroBG.png' className='' containerClassName=''>
        <BentoGrid cols={4} mdCols={12} lgCols={12} className='w-screen z-20' >

          <BentoItem colSpan={4} mdColSpan={3} lgColSpan={3} className='z-0 pt-28 md:pt-0 md:h-screen md:col-start-3 lg:col-start-3'>
            <div className='flex flex-col justify-center items-center h-full'>
              <TextDisplay text='Jiozon' />
              <TextHeading text='How About This' />
              <ButtonCTA text={'Click Here Now!'} />

            </div>
          </BentoItem>

          <BentoItem colSpan={4} mdColSpan={3} lgColSpan={3} className='z-0 px-6 md:px-0 md:h-screen md:col-start-8 lg:col-start-8'>
            <div className='flex flex-col justify-center items-center h-full'>
              <article className='flex flex-col justify-center items-center h-2/3 w-full rounded-3xl'>
                <SpotifyEmbedd
                  className='w-full'
                  link='https://open.spotify.com/track/2ZZjAZLVSnHJnSNFN5AUCd?si=80e3544b163740df'
                />
              </article>
            </div>
          </BentoItem>

        </BentoGrid>
      </ImageBackground>
    </section>
  )
}