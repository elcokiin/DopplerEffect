import { useEffect, useRef } from 'react'
import { Slide, SlideshowRef } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import imageSlider from '../data/imageSlider'

import '../styles/slider.css'


function Slideshow() { 
    const slideRef = useRef<SlideshowRef>(null);

    useEffect(() => {
        const handleKeyDown = (event: { key: string; }) => {
            if(slideRef.current === null) return;
            if (event.key === 'ArrowRight') {
                slideRef.current.goNext();
            } else if (event.key === 'ArrowLeft') {
                slideRef.current.goBack();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    const settings = {
        duration: 5000,
        transitionDuration: 800,
        infinite: false,
        indicators: false,
        arrows: true,
        pauseOnHover: true,
        autoplay: false,
        ref: slideRef
    }

   

    return (
        <div className='container'>
            <div className='carousel'>
                <Slide {...settings}>
                    {
                        imageSlider.map((img) => (
                            <div key={img.id} className='wrap'>
                                <img src={img.image} alt={img.alt} />
                            </div>
                        ))
                    }
                </Slide>
            </div>
        </div>
    )
}

export default Slideshow
