import React, { useState } from 'react'


//style
import "../../style/main.scss"
import "../../style/sectionsStyle/section2.scss"

//imgs

//imgs
import Img1 from '../../style/imgs/gallery/img1.png'
import Img2 from '../../style/imgs/gallery/img2.png'
import Img3 from '../../style/imgs/gallery/img3.png'
import Img4 from '../../style/imgs/gallery/img4.png'
import Img5 from '../../style/imgs/gallery/img5.png'
import Img6 from '../../style/imgs/gallery/img6.png'
import Img7 from '../../style/imgs/gallery/img7.png'
import Img8 from '../../style/imgs/gallery/img8.png'
import Img9 from '../../style/imgs/gallery/img9.png'
import Img10 from '../../style/imgs/gallery/img10.png'
import Img11 from '../../style/imgs/gallery/img11.png'
import Img12 from '../../style/imgs/gallery/img12.png'
import Img13 from '../../style/imgs/gallery/img13.png'
import Img14 from '../../style/imgs/gallery/img14.png'
import Img15 from '../../style/imgs/gallery/img15.png'
import Img16 from '../../style/imgs/gallery/img16.png'

//icon
import { BsFillTriangleFill } from "react-icons/bs";

function Section2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  
  const images = [
  
    { src: Img1, alt: 'изображения прошлых клиентов' },
    { src: Img2, alt: 'изображения прошлых клиентов' },
    { src: Img3, alt: 'изображения прошлых клиентов' },
    { src: Img4, alt: 'изображения прошлых клиентов' },
    { src: Img5, alt: 'изображения прошлых клиентов' },
    { src: Img6, alt: 'изображения прошлых клиентов' },
    { src: Img7, alt: 'изображения прошлых клиентов' },
    { src: Img8, alt: 'изображения прошлых клиентов' },
    { src: Img9, alt: 'изображения прошлых клиентов' },
    { src: Img10, alt: 'изображения прошлых клиентов' },
    { src: Img11, alt: 'изображения прошлых клиентов' },
    { src: Img12, alt: 'изображения прошлых клиентов' },
    { src: Img13, alt: 'изображения прошлых клиентов' },
    { src: Img14, alt: 'изображения прошлых клиентов' },
    { src: Img15, alt: 'изображения прошлых клиентов' },
    { src: Img16, alt: 'изображения прошлых клиентов' },
  ]
  
  const handlePrevClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  }
  
  const handleNextClick = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  }

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index)
    setIsFullscreen(!isFullscreen)
  }
 const handleBigImgClick = (event) => {
  if (event.target.classList.contains('bigImg') && !event.target.classList.contains('bigImgImg')) {
    setIsFullscreen(!isFullscreen);
  }
}

  const openFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    }
  }

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
    setIsFullscreen(false)
  }
  
  return (
    <section className='section2'>

<div
  className={`bigImg ${isFullscreen ? 'fullscreen' : ''}`}
  id='fullscreen-container'
  style={{ zIndex: 1000 }}
  onClick={handleBigImgClick}
>
  <button onClick={handlePrevClick} className="prev-button"><BsFillTriangleFill className='icon'/></button>
  <div className="bigImgImg">
    <img
      src={images[currentImageIndex].src}
      alt={images[currentImageIndex].alt}
      className={`bigImg ${isFullscreen ? 'big' : ''}`}
    />
  </div>
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