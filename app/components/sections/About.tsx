import React from 'react'
import Image from 'next/image'
import Header from '../ui/Header'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='px-6 md:px-0 w-full h-screen flex flex-col md:flex-row justify-start items-center'>
            <div className=' md:w-4/6 aspect-video md:aspect-auto md:h-4/5 w-full relative'>
                <Image className='rounded-t-lg md:rounded-none' src={'/space.jpg'} alt='space' fill style={{ objectFit: "cover" }} />
            </div>
            <div className='md:relative h-full flex flex-col md:justify-center'>
                <div className='text-white rounded-b-lg md:rounded-lg text-center md:text-left py-6 md:py-12 px-10 md:absolute -left-[100px] h-fit flex flex-col gap-3 md:gap-6 bg-green-text w-full md:w-[400px]'>
                    <Header bold size={2} text='About Jiozon'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem risus, ultricies vestibulum interdum in, ullamcorper et ex. In nec ante eget dolor accumsan finibus mattis quis ex.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae..
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem risus, ultricies vestibulum interdum in, ullamcorper et ex. In nec ante eget dolor accumsan finibus mattis quis ex.
                    </p>
                </div>
            </div>
        </div>
    )
}