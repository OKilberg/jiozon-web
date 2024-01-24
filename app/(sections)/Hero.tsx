import ButtonCTA from '@/components/button/Button'
import BentoGrid, { BentoItem } from '@/components/layout/BentoGrid'
import ImageBackground from '@/components/layout/ImageBackground2'
import { TextBody, TextDisplay, TextHeading, TextSubheading } from '@/components/text/Text'
import React from 'react'

type Props = {}

export default function Hero({ }: Props) {
  return (
    <section id='home' className='w-full text-white'>
      <ImageBackground priority imageUrl='/HeroBG.png' className='' containerClassName=''>
        <BentoGrid cols={4} mdCols={12} lgCols={12} className='w-screen z-20' >

          <BentoItem colSpan={4} mdColSpan={3} lgColSpan={3} className='z-0 h-screen-3/4 md:h-screen md:col-start-3 lg:col-start-3'>
            <div className='flex flex-col justify-center items-center h-full'>
              <TextDisplay text='Jiozon'/>
              <TextHeading text='How About This' />
              <ButtonCTA text={'Click Here Now!'} />
            </div>
          </BentoItem>

          <BentoItem colSpan={4} mdColSpan={3} lgColSpan={3} className='h-screen-3/4 md:h-screen md:col-start-8 lg:col-start-8'>
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