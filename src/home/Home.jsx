import { Box, Grid2, Container, Card, Typography } from '@mui/material';
import React from 'react';
import Carousel from '../components/Carousel';
function Home() {



    return (
        <Grid2 container spacing={4} alignItems={'center'}>
            <Grid2 item size={{ xs:12, md:6}}>
                <Carousel>

                    <img
                        src="/personal photos/missouri-state-sign.jpg"
                        class="img-responsive"
                        alt="placeholder" />
                    <img
                        src="/personal photos/winter-skyline.jpg"
                        class="img-responsive"
                        alt="placeholder" />
                    <img
                        src="/personal photos/summer-skyline.jpg"
                        class="img-responsive"
                        alt="placeholder" />
                    <img
                        src="/personal photos/bridge.jpg"
                        class="img-responsive"
                        alt="placeholder" />
                </Carousel>
            </Grid2>
            <Grid2 item size={{ xs:12, md:6}}>
                <Card>
                    <Typography class='typography-base' variant='h1'>
                        About Me
                    </Typography>
                    <Typography class='paragraph-base'>
                        Welcome to my EPortfolio! I am a recent computer science graduate from Missouri State University. I am from Saint Louis, Missouri,
                        and an only child of a single mother. I went to Fort Zumwalt East and graduated with the class of 2021 with Magna Cum Laude.
                        I graduated from Missouri State in December of 2024 with Summa Cum Laude.
                        At Missouri State, I have enjoyed learning about my field of study and working with others. Outside of computers and programming
                        I like to spend my time with some of my friends and watch movies with them, while also spending some time working out at the gym.
                        When I am not in school, I still love to code on my days off! I also enjoy traveling along the east coast and spending time with
                        my dog, George, and recently I have fallen in love with going to New York City, where my mom lives.
                        Because I am only a recent graduate right now,
                        I am looking forward to gaining both experience and knowledge in something that I am so passionate about.
                    </Typography>
                </Card>
            </Grid2>
            <Grid2 item size={12}>
                <Carousel title={'My Professional Philosophy'}>
                    <Typography class='typography-base'>
                        Be willing to teach and work with others
                    </Typography>
                    <Typography class='typography-base'>
                        Always be open minded
                    </Typography>
                    <Typography class='typography-base'>
                        Be humble and willing to learn something new
                    </Typography>
                </Carousel>
            </Grid2>

        </Grid2>

    );

}
export default Home; 