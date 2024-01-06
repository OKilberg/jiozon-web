import BackgroundImage from '@/components/BackgroundImage'
import ButtonCTA from '@/components/button/Button'
import { Grid, GridItem } from '@/components/layout/Layout'
import { TextBody, TextDisplay, TextHeading, TextSubheading } from '@/components/text/Text'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <section className='w-full min-h-screen'>
      <BackgroundImage className='min-h-screen' imageUrl='/HeroBG.png'>
        <Grid cols={12} className='min-h-screen'>
          <GridItem start={3} span={3} className='min-h-screen'>
              <div className='flex flex-col justify-center min-h-screen bg-red-900'>
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
          <div className='flex flex-col justify-center h-4/5 bg-red-900'>
            <article className=''>
              asdasd
            </article>
            </div>
          </GridItem>
        </Grid>
      </BackgroundImage>
    </section>
  )
}