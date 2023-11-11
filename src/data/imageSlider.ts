
// images for slider
import slide1 from '../assets/slideshow/1.png'
import slide2 from '../assets/slideshow/2.png'
import slide3 from '../assets/slideshow/3.png'
import slide4 from '../assets/slideshow/4.png'
import slide5 from '../assets/slideshow/5.png'
import slide6 from '../assets/slideshow/6.png'
import slide7 from '../assets/slideshow/7.png'
import slide8 from '../assets/slideshow/8.png'
import slide9 from '../assets/slideshow/9.png'
import slide10 from '../assets/slideshow/10.png'

type ImageSlider = {
    id: number,
    alt: string,
    image: string
}

const imageSlider: ImageSlider[] = [
    {
        id: 1,
        alt: 'image1',
        image: slide1
    },
    {
        id: 2,
        alt: 'image2',
        image: slide2
    },
    {
        id: 3,
        alt: 'image3',
        image: slide3
    },
    {
        id: 4,
        alt: 'image4',
        image: slide4
    },
    {
        id: 5,
        alt: 'image5',
        image: slide5
    },
    {
        id: 6,
        alt: 'image6',
        image: slide6
    },
    {
        id: 7,
        alt: 'image7',
        image: slide7
    },
    {
        id: 8,
        alt: 'image8',
        image: slide8
    },
    {
        id: 9,
        alt: 'image9',
        image: slide9
    },
    {
        id: 10,
        alt: 'image10',
        image: slide10
    },
]

export default imageSlider