import React, { useState } from 'react'


//style
import "../../style/main.scss"
import "../../style/sectionsStyle/section2.scss"

//imgs
import Img1 from '../../style/imgs/gallery/img1.png'
import Img2 from '../../style/imgs/gallery/img2.png'
import Img3 from '../../style/imgs/gallery/img3.png'
import Img4 from '../../style/imgs/gallery/img4.png'
import Img5 from '../../style/imgs/gallery/img5.png'
import Img6 from '../../style/imgs/gallery/img6.png'

//icon
import { BsFillTriangleFill } from "react-icons/bs";

function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  
  const images = [
  
    { src: Img1, alt: 'изображения прошлых клиентов' },
    { src: Img2, alt: 'изображения прошлых клиентов' },
    { src: Img3, alt: 'изображения прошлых клиентов' },
    { src: Img4, alt: 'изображения прошлых клиентов' },
    { src: Img5, alt: 'изображения прошлых клиентов' },
    { src: Img6, alt: 'изображения прошлых клиентов' },
  ]

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)
  }

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <section className='section2'>
      <div className="bigImg">
        <button onClick={handlePrevClick} className="prev-button"><BsFillTriangleFill className='icon'/></button>
        <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className='bigImg'/>
        <button onClick={handleNextClick} className="next-button"><BsFillTriangleFill className='icon'/></button>
      </div>

      <div className="smallImg">
      {images.map((image, index) => (
  <img
    key={index}
    src={image.src}
    alt={image.alt}
    onClick={() => handleThumbnailClick(index)}
    className={index === currentImageIndex ? 'active' : ''}
    
  />
))}
      </div>
    </section>
  )
}

export default Section2