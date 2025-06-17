import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import theme from '@/app/style/theme';

interface ServicesCardProps {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt?: string;
    direction: 'row' | 'row-reverse';
}

const ServicesCard = ({
    title,
    description,
    image,
    imageAlt = 'Service illustration',
    direction,
}: ServicesCardProps) => {
    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Box
                display="flex"
                flexDirection={{ xs: 'column-reverse', md: direction }}
                alignItems="center"
                justifyContent="space-between"
                gap={4}
                mt={6}
                mb={16}
            >
                {/* Left Side - Image */}
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: { md: '600px' },
                        height: { xs: 'auto', md: '400px' },
                        minHeight: { xs: '300px', md: 'auto' },
                    }}
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </Box>

                {/* Right Side - Text */}
                <Box
                    px={{ xs: 2, md: 4 }}>
                    <Typography
                        fontWeight="bold"
                        mb={2}
                        sx={{
                            fontSize: '30px',
                            lineHeight: 1.0,
                            color: theme.palette.secondary.main,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: 1.7 }}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ServicesCard;
