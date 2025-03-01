import { Container, Grid2, Typography, Button } from "@mui/material";
import Carousel from "../components/Carousel";
import Navbutton from "../components/Navbutton";


function Gallery() {

    return (
        <Container>
            <Grid2 container spacing={4} alignItems={'center'}>
                <Grid2 item size={{ xs:12, md:6}}>
                    <Typography>
                        Growing up, I learned a lot about content creation and got to see the production of many live TV news segments, as my mom was a long-time former TV news producer at KTVI-TV in St. Louis.
                        <br /> <br />
                        When I was in high school, I had the opportunity to work with her content creation company, helping businesses that ranged from fitness to food with their social media and even created a print ad for a client that was published in St. Louis Magazine.
                        In addition to that, I helped create and maintain her and some of her clients websites.
                        I believe that being able to code and being able to create content is an important skill in today's world.
                    </Typography>
                </Grid2>
                <Grid2 item size={{ xs:12, md:6}}>
                    <Container>
                        <img src="/gallery/camera.jpg"
                            class='img-responsive'
                        />
                    </Container>

                </Grid2>
            </Grid2>
            <Carousel title={"Professional Photos"}>
                <img src="/gallery/flower1.jpg"
                    class='img-responsive'
                />
                <img src="/gallery/flower2.jpg"
                    class='img-responsive'
                />
                <img src="/gallery/flower3.jpg"
                    class='img-responsive'
                />

            </Carousel>
            <Grid2 item size={12}>
                <Carousel title={'Project Gallery'}>
                    <Navbutton
                        header={'Portfolio'}
                        desc={'This site was created using the React.js framework, and uploaded using GitHub Pages.'}
                        link={'https://github.com/shanecvaldes/shanecvaldes.github.io'}
                    />

                    <Navbutton
                        header={'Baseball Webscraper'}
                        desc={'Created a baseball statistics scraper for Baseballreference.com, and created a database to store all the data for personal use.'}
                        link={'https://github.com/shanecvaldes/Baseball-Reference-Web-Scraper'}
                    />
                    <Navbutton
                        header={'Lemon Lang Software Engineering Project'}
                        desc={'A collaborative effort between me and other students in creating a web application that tracks meetings.'}
                        link={'https://github.com/shanecvaldes/Team-02---Software-Engineering-Project'}
                    />
                </Carousel>


            </Grid2>
        </Container>

    )

}
export default Gallery;