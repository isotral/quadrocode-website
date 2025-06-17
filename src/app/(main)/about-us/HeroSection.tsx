import theme from '@/app/style/theme'
import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: { xs: '25vh', md: '50vh' },
                width: '100vw',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background Image with Blur */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage:
                        'url("https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(12px)',
                    zIndex: 1,
                }}
            />

            {/* Dark overlay for better contrast */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 2,
                }}
            />

            {/* Foreground Text */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 3,
                    color: theme.palette.custom.fifth.white,
                    px: 2,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '2rem',
                        [theme.breakpoints.up('md')]: {
                            fontSize: '3rem',
                        },
                        [theme.breakpoints.up('lg')]: {
                            fontSize: '4rem',
                        },
                        color: theme.palette.custom.fifth.white,
                    }}
                >
                    WE ARE ENOSIS
                </Typography>

                <Typography
                    sx={{
                        fontSize: '1rem',
                        [theme.breakpoints.up('md')]: {
                            fontSize: '1.5rem',
                        },
                        mt: 1,
                    }}
                >
                    A Software Solution Provider
                </Typography>
            </Box>
        </Box>
    )
}

export default HeroSection
