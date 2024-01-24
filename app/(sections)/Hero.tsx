import BackgroundImage from '@/components/BackgroundImage'
import ButtonCTA from '@/components/button/Button'
import BentoGrid, { BentoItem } from '@/components/layout/BentoGrid'
import ImageBackground from '@/components/layout/ImageBackground'
import { Grid, GridItem } from '@/components/layout/Layout'
import { TextBody, TextDisplay, TextHeading, TextSubheading } from '@/components/text/Text'
import React from 'react'

type Props = {}

export default function Hero({ }: Props) {
  return (
    <section id='home' className='w-full min-h-screen h-fit text-white'>
      <ImageBackground imageUrl='/HeroBG.png' className='h-screen' containerClassName='w-screen'>
        <BentoGrid cols={4} mdCols={12} lgCols={12} className='w-screen gap-0' >

          <BentoItem colSpan={4} mdColSpan={3} lgColSpan={3} className='h-screen md:col-start-3 lg:col-start-3'>
            <div className='flex flex-col justify-center items-center h-full'>
              <TextDisplay text='Jiozon' />
              <i></i>
              <TextHeading text='How About This' />
              <ButtonCTA text={'Click Here Now!'} />

            </div>
          </BentoItem>

          <BentoItem colSpan={4} mdColSpan={3} lgColSpan={3} className='h-screen md:col-start-8 lg:col-start-8'>
            <div className='flex flex-col justify-center items-center h-full'>
              <article className='flex flex-col justify-center items-center bg-black backdrop-blur-lg bg-opacity-50 h-2/3 w-full rounded-3xl'>
                <TextSubheading text='Small Text' />
                <TextBody text='Small Text' />
                <p className='font-libre-baskerville'>Hello</p>
              </article>
            </div>
          </BentoItem>

        </BentoGrid>
      </ImageBackground>
    </section>
  )
}