"use client"
import { Box, Container, Typography } from '@mui/material';
import theme from '@/app/style/theme';
import ServicesCard from './ServicesCard';

import softwareDevelopment from '../../assets/service1.png';
import WebApplicationDevelopment from '../../assets/WebApplicationDevelopment.png';
import mobileApplicationDevelopment from '../../assets/Mobile Application Development.png';
import qualityAssurance from '../../assets/Quality Assurance &.png';

const Services = () => {

    return (
        <>
            <Box sx={{
                py: 8,
                textAlign: 'center',
                mt: { xs: 10, md: 20 },
            }}>
                <Container maxWidth="md">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            fontSize: '40px',
                            textTransform: 'uppercase',
                            color: theme.palette.custom.sixth[100],
                        }}
                    >
                        Our Services
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '16px',
                            lineHeight: 1.65,
                            color: theme.palette.custom.sixth[200]
                        }}
                    >
                        We build software development teams that grow with our clients, from the early stages to whatever they aspire to be. Our expertise includes front-end, backend, database, and server solutions for mobile, web, and desktop applications. Our purpose is to provide our clients with expert guidance and to build software vital to their organizations.
                    </Typography>
                </Container>
            </Box>

            <ServicesCard
                title="Custom Software Development"
                description="Enosis helps you create diverse and complex software solutions for your business needs. Listening to your ideas, we implement and create custom software solutions from scratch, designed especially for your business. With Enosis, you get quality software and perfect service every time."
                image={softwareDevelopment}
                direction="row"
            />

            <ServicesCard
                title="Web Application Development"
                description="Enosis looks beyond conventional solutions to develop disruptive web products. Our skilled and dedicated web development team understands your needs and leverage the dynamism of modern web frameworks to create business valued web applications."
                image={WebApplicationDevelopment}
                direction="row-reverse"
            />

            <ServicesCard
                title="Mobile Application Development"
                description="Our expertise in custom mobile app development gives our clients the opportunity to pack incredible functionality into their customer’s hands. We develop apps that perform across different mobile devices and operating systems. We are experts at Swift/Objective-C to build native iOS apps and Java/Kotlin for native Android app development. For cross-platform and hybrid development our expertise include, but are not limited to, Ionic, Xamarin, and React Native."
                image={mobileApplicationDevelopment}
                direction="row"
            />

            <ServicesCard
                title="Quality Assurance & Testing"
                description="Treading on Agile development methodologies and Rational Unified Process practices in testing, Enosis ensures highest quality of software solutions to you. Our software testing strategy ensures every component of your software are free of bugs and issue."
                image={qualityAssurance}
                direction="row-reverse"
            />




        </>
    );
};

export default Services;
