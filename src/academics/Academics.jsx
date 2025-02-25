import { Button, Card, Grid2, List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Wheel from "../components/Wheel";
import WheelItem from "../components/WheelItem";


export default function Academics() {

    const navigate = useNavigate();

    const navGallery = () => {
        navigate('/gallery');
    }

    return (
        <Grid2 container spacing={4}>
            <Grid2 size={6}>
                <Card >
                    <Typography class='typography-base' variant="h1">
                        Enrollment Details:
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography class="paragraph-base">
                                Bachelor of Science, Computer Science
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography class="paragraph-base">
                                Minor in Mathematics
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography class="paragraph-base">
                                Certificate in Web Programming
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography class="paragraph-base">
                                3.97 GPA: Summa Cum Laude
                            </Typography>
                        </ListItem>
                    </List>
                    <div style={{
                        width: 'auto',
                        height: '300px',
                        overflow: 'hidden',
                    }}>
                        <img src="/personal photos/graduation.jpg"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center -100px'
                            }} />
                    </div>

                </Card>
            </Grid2>
            <Grid2 size={6}>
                <Wheel title={"Programming Skills"}>
                    <WheelItem text={"Python - Intermediate"} image={"/language logos/python_logo.png"} />
                    <WheelItem text={"SQL - Intermediate"} image={"/language logos/SQL_logo.png"} />
                    <WheelItem text={"HTML/CSS - Intermediate"} image={"/language logos/HTML_logo.png"} />
                    <WheelItem text={"C++ - Beginner"} image={"/language logos/C++_logo.png"} />

                    <WheelItem text={"Javascript - Beginner"} image={"/language logos/JS_logo.png"} />



                </Wheel>
                {/*
                <Card>
                    <Typography class='typography-base'>
                        Programming Skills:
                    </Typography>
                    <List>
                        <ListItem>
                            <Typography class='paragraph-base'>
                                Python - Intermediate

                            </Typography>
                        </ListItem>
                        <ListItem>
                            HTML/CSS - Intermediate
                        </ListItem>
                        <ListItem>
                            SQL - Intermediate
                        </ListItem>
                        <ListItem>
                            C++ - Beginner
                        </ListItem>
                        <ListItem>
                            C# - Beginner
                        </ListItem>
                    </List>
                </Card>
                */}
            </Grid2>

            <Grid2 size={5}>
                <Card>
                    <Typography class='typography-base' variant='h2'>Relevent Experience:</Typography>
                    <Typography class='paragraph-base'>
                        At Missouri State, the major computer science classes focused on Python and C++.
                        From those classes, I have gained experience in object-oriented programming, and using programming to perform data analytics/machine learning algorithms.
                        I have also gained experience in front-end and back-end web development both in class and practice, with experience using the Bootstrap framework and React.js.
                        Through collaboration with a small business based in North Carolina, I have gained experience by designing a website, and keeping track of hundreds of products.
                        In my academics, I have created several data science related projects, and created a web application that has its own database and machine learning software to use.
                        In my personal practice, I have created several web scrapers and ran machine learning algorithms on datasets with thousands of statistics. 
                    </Typography>
                    <Button onClick={navGallery}>
                        Click Here to View My Gallery
                    </Button>

                </Card>
            </Grid2>
            <Grid2 size={7}>
                <Carousel>
                    <img
                        src="/certificates/career-essentials.jpg"
                        class="img-responsive"
                        alt="placeholder" />
                    <img
                        src="/certificates/frontend_developer_react certificate.png"
                        class="img-responsive"
                        alt="placeholder" />
                    <img
                        src="/certificates/problem_solving_intermediate certificate.png"
                        class="img-responsive"
                        alt="placeholder" />
                    <img
                        src="/certificates/software_engineer certificate.png"
                        class="img-responsive"
                        alt="placeholder" />
                    <img
                        src="/certificates/sql_advanced certificate.png"
                        class="img-responsive"
                        alt="placeholder" />

                </Carousel>
            </Grid2>
        </Grid2>)

}