import React from 'react'
import Image from 'next/image'
import H from '../ui/H'

type Props = {}

export default function About({ }: Props) {
    return (
        <section className='px-6 md:px-0 w-full h-[80vh] flex flex-col md:flex-row justify-start items-center'>
            <figure className=' md:w-4/6 aspect-video md:aspect-auto md:h-4/5 w-full relative'>
                <Image className='rounded-t-lg border-2 border-pink-border' src={'/space.jpg'} alt='space' fill style={{ objectFit: "cover" }} />
            </figure>
            <div className='md:relative h-full flex flex-col md:justify-center'>
                <article className='text-white border-pink-border border-2 rounded-b-lg md:rounded-lg text-center md:text-left py-6 md:py-12 px-10 md:absolute -left-[100px] h-fit flex flex-col gap-3 md:gap-6 bg-pink-background w-full md:w-[400px]'>
                    <H bold size={2} text='About Jiozon' gradient='bg-gradient-to-tl from-pink-border to-white'/>
                    <p className='opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem risus, ultricies vestibulum interdum in, ullamcorper et ex. In nec ante eget dolor accumsan finibus mattis quis ex.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae..
                    </p>
                    <p className='opacity-70'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem risus, ultricies vestibulum interdum in, ullamcorper et ex. In nec ante eget dolor accumsan finibus mattis quis ex.
                    </p>
                </article>
            </div>
        </section>
    )
}