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
    <section className='w-full min-h-screen text-white'>
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
      {
        /*
        <BackgroundImage className='min-h-screen' imageUrl='/HeroBG.png'>
        
        <Grid cols={12} className='min-h-screen'>
          <GridItem start={3} span={3} className='min-h-screen'>
              <div className='flex flex-col justify-center min-h-screen '>
                <TextDisplay text='Jiozon'/>
                <i></i>
                <TextHeading text='How About This'/>
                <ButtonCTA text={'Click Here Now!'}/>
                <TextSubheading text='Small Text'/>
                <TextBody text='Small Text'/>
                <p className='font-libre-baskerville'>Hello</p>
            </div>
          </GridItem>
          <GridItem start={8} span={3}>
          <div className='flex flex-col justify-center h-4/5 '>
            <article className=''>
              asdasd
            </article>
            </div>
          </GridItem>
        </Grid>
      </BackgroundImage>
        */
      }

    </section>
  )
}