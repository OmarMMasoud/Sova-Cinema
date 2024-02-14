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

function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  
  const images = [
  
    { src: Img1, alt: 'Image 1' },
    { src: Img2, alt: 'Image 2' },
    { src: Img3, alt: 'Image 3' },
    { src: Img4, alt: 'Image 4' },
    { src: Img5, alt: 'Image 5' },
    { src: Img6, alt: 'Image 6' },
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
    <section className='section2' style={{ position: 'relative' }}>
      <div className="bigImg">
        <button onClick={handlePrevClick} className="prev-button">Previous</button>
        <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className='bigImg'/>
        <button onClick={handleNextClick} className="next-button">Next</button>
      </div>

      <div className="smallImg" style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
      {images.map((image, index) => (
  <img
    key={index}
    src={image.src}
    alt={image.alt}
    onClick={() => handleThumbnailClick(index)}
    className={index === currentImageIndex ? 'active' : ''}
    style={{ width: '20%', marginRight: '1%', marginBottom: '1%' }}
  />
))}
      </div>
    </section>
  )
}

export default Section2