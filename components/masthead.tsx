import React, { useRef, useContext, useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { ScrollContext } from '../utils/scroll-observer'
import { browserName } from "react-device-detect";
import Link from 'next/link';


const Masthead: React.FC = () => {

    const [imageLoaded, setImageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0;

    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, [])

    const [browser, setBrowser] = useState('Chrome')
    useEffect(() => setBrowser(browserName), [])

    return (
        <div ref={refContainer} className='min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10 relative'
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
        >
            {/* Video background incase a replacement is found for vanta.js 

            {browser == "Safari" ? <Image className='absolute w-full h-full object-cover' src="/assets/palm-tree-bg.mp4" alt="palm tree" layout='fill' />
                : <video autoPlay={true} loop muted playsInline className='absolute w-full h-full object-cover'>
                    <source src="/assets/palm-tree-bg.mp4" type="video/mp4; codecs=hvc1" />
                    <source src="/assets/palm-tree-bg.webm" type="video/webm; codecs=vp9" />
                </video>}
                */}
                {/*<div className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <Image src='' width={128 / 3} height={114 / 3} alt="logo" />
                    <Link href='/commerce/store'><a target="_blank" rel="noreferrer" className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow relative'>
                    Online Store
                    </a></Link>
            </div>*/}
                
            <div className='p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col'>
                <h1 className='mb-6 text-4xl xl:text-5xl'>The Downtown Los Angeles BookClub</h1>
                <h2 className='mb-2 text-2xl xl:text-3xl tracking-tight'>
                    <span>Creatives,</span> <span>sharpening the mind</span>
                </h2>
            </div>
            <div className={`flex-grow-0 pb-40 md:pb-28 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
                <Image src='/assets/scrollDown.png' width={188 / 3} height={105 / 3} alt='scroll down' onLoad={handleImageLoaded}></Image>
            </div>
        </div>
    
    )

}

export default Masthead