'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import homeBanner from '../../assets/home-banner.png';

const HeroSection = () => {
    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            gap={4}
        // bgcolor={theme => theme.palette.custom.first[100]}
        >
            {/* Left Side (Text) */}
            <Box flex={1} >
                <Typography variant="h3" fontWeight="bold" fontSize="40px" >
                    <Box component="span" color="error.main">ENOSIS</Box> - Your trusted Software Development Partner
                </Typography>
                <Typography variant="h4" sx={{ mt: 3 }}>
                    A top tier software development team assisting owners and decision makers to implement digital initiatives to achieve lasting financial success
                </Typography>
            </Box>

            {/* Right Side (Image) */}
            <Box
                flex={1}
                sx={{
                    position: 'relative',
                    width: { xs: '100%', md: '400px' },
                    height: { xs: 'auto', md: '380px' },
                    minHeight: { xs: '400px', md: 'auto' }, // Optional: Ensure height on mobile
                }}
            >
                <Image
                    src={homeBanner}
                    alt="Team working illustration"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </Box>

        </Box>

    )
}

export default HeroSection
