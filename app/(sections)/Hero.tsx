import ButtonCTA from '@/components/button/Button'
import SpotifyEmbedd from '@/components/integration/SpotifyEmbedd'
import BentoGrid, { BentoItem } from '@/components/layout/BentoGrid'
import ImageBackground from '@/components/layout/ImageBackground2'
import { TextDisplay, TextHeading } from '@/components/text/Text'
import React, { Suspense } from 'react'
import Image from 'next/image'

type Props = {}

export default function Hero({ }: Props) {
  return (
    <section id='home' className='w-full text-white'>
      <ImageBackground priority imageUrl='/HeroBG2.jpg' className='' containerClassName=''>
        <BentoGrid cols={4} mdCols={12} lgCols={12} className='w-screen z-20' >

          <BentoItem colSpan={4} mdColSpan={3} lgColSpan={3} className='select-none	z-0 pt-28 md:pt-0 md:h-screen md:col-start-3 lg:col-start-3'>
            <div className='flex flex-col justify-center items-center h-full gap-10'>
              <TextDisplay textStyle='drop-shadow-md' text='Jiozon' noMargin/>
              <div className='relative w-[400px] h-[50px]'>
                <Image fill className='drop-shadow-md absolute z-0 h-full w-full' style={{objectFit: 'cover'}} src='/DividerEye.png' alt='Divider Eye'></Image>
              </div>
              <div className='relative min-w-fit inline-block'>
                <TextHeading textStyle='min-w-max drop-shadow-sm' text='Music & Production' />
              </div>
              {
                /*<ButtonCTA text={'Click Here Now!'} />*/
              }

            </div>
          </BentoItem>

          <BentoItem colSpan={4} mdColSpan={3} lgColSpan={3} className='z-0 px-6 md:px-0 md:h-screen md:col-start-8 lg:col-start-8'>
            <div className='flex flex-col justify-center items-center h-full'>
              <article className='flex flex-col justify-center items-center h-2/3 w-full rounded-3xl'>
                <SpotifyEmbedd
                  className='w-full'
                  link='https://open.spotify.com/track/1HiEUaxL4kDCk2PoQCaKf1?si=05bbf9596da2434f'
                />
              </article>
            </div>
          </BentoItem>

        </BentoGrid>
      </ImageBackground>
    </section>
  )
}