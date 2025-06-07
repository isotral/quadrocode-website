'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Slider, { CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// Dummy logos (replace with real image imports)
import { default as client1, default as client2, default as client3 } from '../../assets/Quality Assurance &.png';
import theme from '@/app/style/theme';

// Custom Left Arrow
function ArrowLeft({ className, style, onClick }: CustomArrowProps) {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                left: -30,
                zIndex: 2,
                color: 'black',
                fontSize: '30px',
            }}
            onClick={onClick}
        />
    );
}

// Custom Right Arrow
function ArrowRight({ className, style, onClick }: CustomArrowProps) {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                right: -30,
                zIndex: 2,
                color: 'black',
                fontSize: '30px',
            }}
            onClick={onClick}
        />
    );
}

const ClientsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const clients = [
        { id: 1, src: client1, alt: 'Powerhouse Dynamics' },
        { id: 2, src: client2, alt: 'Treeno Software' },
        { id: 3, src: client3, alt: 'Infinitime' },
    ];

    return (
        <Box sx={{ backgroundColor: '#', py: 6 }}>
            <Typography
                align="center"
                fontWeight="bold"
                mb={4}
                sx={{
                    fontSize: '40px',
                    textTransform: 'uppercase',
                    color: theme.palette.custom.sixth[100],
                }}
            >
                Our Clients
            </Typography>

            <Box sx={{ maxWidth: '1200px', margin: '0 auto', px: 10, position: 'relative' }}>
                <Slider {...settings}>
                    {clients.map(client => (
                        <Box key={client.id} display="flex" justifyContent="center">
                            <Image
                                src={client.src}
                                alt={client.alt}
                                width={180}
                                height={80}
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default ClientsSlider;
