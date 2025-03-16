import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const ImageSlider = ({ slides }) => {
    const [currentIdx, setCurrentIdx] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIdx === 0;
        const newIdx = isFirstSlide ? slides.length - 1 : currentIdx - 1;
        setCurrentIdx(newIdx);
    }
    const goToNext = () => {
        const isLastSlide = currentIdx === slides.length - 1;
        const newIdx = isLastSlide ? 0 : currentIdx + 1;
        setCurrentIdx(newIdx);
    }

    return (
        <div>
            <div>
                <Image
                    className="rounded-xl ease-in-out duration-200"
                    src={slides[currentIdx]}
                    width="1300px"
                    height="900px"
                />
            </div>
            <div className='mt-4 flex justify-center items-center'>
                <AiOutlineArrowLeft onClick={goToPrevious}/>
                <p className='p-4'>{currentIdx+1} / {slides.length}</p>
                <AiOutlineArrowRight onClick={goToNext}/>
            </div>
        </div>
    )
}

export default ImageSlider
