import theme from '@/app/style/theme';
import { Box, Typography } from '@mui/material'
import Image, { StaticImageData } from 'next/image';
import React from 'react'


interface OffersCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt?: string;
}


const OffersCard = ({
    title,
    description,
    image,
    imageAlt = 'Service illustration',

}: OffersCardProps) => {
    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Box
                display="flex"
                flexDirection={{ xs: 'column-reverse', md: 'column' }}
                alignItems="center"
                justifyContent="space-between"
                gap={4}
                mt={6}
            >
                {/* Left Side - Image */}
                <Box
                    flex={1}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: { md: '600px' },
                        height: { xs: 'auto', md: '400px' },
                        minHeight: { xs: '300px', md: '400px' },
                    }}
                    bgcolor={theme.palette.custom.fifth[100]}
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </Box>

                {/* Right Side - Text */}
                <Box flex={1}>
                    <Typography
                        fontWeight="bold"
                        mb={2}
                        sx={{
                            fontSize: '30px',
                            lineHeight: 1.0,
                            color: theme.palette.custom.first[100],
                        }}

                    >
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.7, color: theme.palette.custom.sixth[200], }}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default OffersCard
