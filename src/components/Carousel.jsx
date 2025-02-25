import { React, useState, useEffect } from 'react';
import '../css/Carousel.css';
import { Button, Typography } from '@mui/material';
export default function Carousel({ children, title }) {
    // const { children } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    const renderDots = () => {
        return (
            <div className='dots-container'>
                <Button
                    onClick={prev}
                    // onMouseEnter={previewPrevImage}
                    sx={{
                        width: 'auto',
                        // borderRadius: '100% 0 0 100%',
                        padding: '0 20px 0 0'
                    }}>
                    &lt;
                </Button>
                {
                    Array.from({ length }).map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={(() => setCurrentIndex(index))}
                        />

                    ))
                }
                <Button onClick={next}
                sx={{
                    width: 'auto',
                    // borderRadius: '100% 0 0 100%',
                    padding: '0 0 0 20px'
                }}>
                &gt;
            </Button>
            </div>
        );
    }

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])



    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            setCurrentIndex(prevState => 0)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        else {
            setCurrentIndex(prevState => children.length - 1)
        }
    }

    return (
        <div className="carousel-container">
            {title && (
                <Typography class='typography-base'
                    variant='h1'>
                    {title}
                </Typography>
            )}
            <div className="carousel-wrapper">

                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            translate: 'width 10s',
                            transitionTimingFunction: 'ease-in'
                        }}
                    >
                        {children}
                    </div>
                </div>

            </div>

            {renderDots()}
            



        </div>

    )
}