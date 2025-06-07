import theme from '@/app/style/theme'
import { Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <Typography
                sx={{
                    backgroundColor: theme.palette.custom.first[200],
                    color: theme.palette.custom.fifth.white,
                    padding: 2,
                    borderRadius: 2,

                    // Font size responsive
                    fontSize: '1rem',
                    [theme.breakpoints.up('md')]: {
                        fontSize: '1.25rem',
                    },
                    [theme.breakpoints.up('lg')]: {
                        fontSize: '1.5rem',
                    },
                }}
            >
                Welcome to Material UI with Next.js! ddsfdfsd
            </Typography>
        </div>
    )
}

export default AboutUs
