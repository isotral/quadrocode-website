'use client';

import {
    Box,
    Typography,
    TextField,
    Button,
} from '@mui/material';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import theme from '@/app/style/theme';

const ContactForm = () => {
    return (
        <Box sx={{ py: 8,  }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 6, md: 20 },
                    justifyContent: "space-between"
                }}
            >
                {/* Left - Contact Info */}
                <Box >
                    <Box display="flex" alignItems="flex-start" mb={4}>
                        <PhoneIphoneIcon sx={{ fontSize: 28, mr: 2, mt: 0.5 }} />
                        <Box>
                            <Typography variant="h6" fontWeight="bold">
                                Give us a call
                            </Typography>
                            <Typography>+1 (412) 567-4498</Typography>
                            <Typography>+880 2 883 6411</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="flex-start" mb={4}>
                        <EmailIcon sx={{ fontSize: 28, mr: 2, mt: 0.5 }} />
                        <Box>
                            <Typography variant="h6" fontWeight="bold">
                                Send us an email
                            </Typography>
                            <Typography>info@squadrosoft.com</Typography>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="flex-start">
                        <LocationOnIcon sx={{ fontSize: 28, mr: 2, mt: 0.5 }} />
                        <Box>
                            <Typography variant="h6" fontWeight="bold">
                                Location
                            </Typography>
                            <Typography>House 27, Road 8</Typography>
                            <Typography>Gulshan, Dhaka 1212</Typography>
                            <Typography>Bangladesh</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Right - Form */}
                <Box sx={{ flex: 1 }}>
                    <Box component="form" noValidate autoComplete="off" display="flex" flexDirection="column" gap={2}>
                        <TextField label="Name" variant="outlined" fullWidth />
                        <TextField label="Company" variant="outlined" fullWidth />
                        <TextField label="Email" variant="outlined" fullWidth />
                        <TextField label="Phone" variant="outlined" fullWidth />
                        <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
                        <Box textAlign="left" mt={1}>
                            <Button
                                variant="contained"
                                sx={{
                                    px: 6,
                                    py: 1.5,
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    borderRadius: 2,
                                    color: theme.palette.custom.fifth.white,
                                    backgroundColor: theme.palette.custom.button[100],
                                    width: {
                                        xs: '100%',  // Full width on mobile
                                        md: 'auto',  // Auto width on medium and larger screens
                                    },
                                    '&:hover': {
                                        backgroundColor: theme.palette.custom.button[200],
                                    },
                                }}
                            >
                                SEND
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactForm;
