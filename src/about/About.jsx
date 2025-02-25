import { Card, Container, Grid2, Typography } from "@mui/material";
import Carousel from "../components/Carousel";
import Highfive from "../components/Highfive";

function About() {

    return (
        <Grid2 container spacing={4} alignItems={'center'}>
            <Grid2 size={6}>
                <Card>
                    <Typography class='typography-base' variant='h1'>
                        Personality Test
                    </Typography>
                    <Typography class='paragraph-base'>
                        In high school, I discovered that I enjoyed teaching, helping, and working with others after I worked with the A+ program tutoring kids.
                        I enjoy helping people on their code and working with teammates in the field, I enjoy working with others towards a common goal.
                        Whether that goal may be to get better or to learn something new, I find it hard not to enjoy interacting with others and sharing new ideas.
                        I took a personality test on high5test.com, and think that my result as a coach reflects this side of me.
                    </Typography>
                </Card>

            </Grid2>
            <Grid2 size={6}>
                <Carousel>
                    <Highfive
                        title={"Coach"}
                        desc={"Coaches love discovering the potential in people and supporting others’ personal growth. It’s hard for them to accept when this potential is being wasted."}
                        color_b={"#f7ca17"}
                    />
                    <Highfive
                        title={"Problem Solver"}
                        desc={"Problem Solvers love uncovering flaws, diagnosing problems and coming up with solutions. It is difficult for them to simply sweep unresolved issues under the rug and keep going as if everything is fine."}
                        color_b={"#f9004b"}
                    />
                    <Highfive
                        title={"Philomath"}
                        desc={"Philomaths love learning. They explore many interests, follow new paths and acquire as much knowledge as possible. They don’t enjoy the company of so-called 'know-it-alls’, people with little curiosity and no desire to explore new ideas."}
                        color_b={"#42c0ea"}
                    />
                    <Highfive
                        title={"Strategist"}
                        desc={"Strategists look at the big picture, which enables them to easily find the best way out of the clutter. Because connecting the dots comes naturally to them, they may get impatient with people who make slower decisions."}
                        color_b={"#42c0ea"}
                    />
                    <Highfive
                        title={"Catalyst"}
                        desc={"Catalysts love to get things started and are great at creating momentum in stagnant environments. They have a hard time waiting and so-called ‘wasting time’ when they know they could be moving forward and getting things off the ground."}
                        color_b={"#2db67c"}
                    />

                </Carousel>
            </Grid2>
            <Grid2 size={6}>
                <Container>
                    <img
                        src="/personal photos/baseball.jpg"
                        class="img-responsive"
                        alt="placeholder" />
                </Container>

            </Grid2>
            <Grid2 size={6}>
                <Card>


                    <Typography class='typography-base' variant='h1'>
                        Work Ethic
                    </Typography>
                    <Typography class='paragraph-base'>
                        I still remember my first pitch in the 4th grade, the ball slamming against the trash can.
                        That weekend I got a call from coach that I would be pitching for the team.
                        From then on I knew I was in it, truly a part of something that would stick with me.
                        Everything from pitching, hitting, and fielding, being a competitor made me fall in love with baseball.
                        As the years went by, after spending late nights taking lessons and spending hours during the day pitching against net or hitting off coach, the foundation for the work ethic that I have now would be cemented.
                        When high school came around I knew that baseball was something that I had to work for, and it was something that I devoted myself to.
                        From the live hitting at 6 AM to the winter practices at 7 PM, I worked hard. I spent hours after school everyday in the weight room.
                        When I was done with that, no matter how bad the weather was, I spent even more hours in the cages.
                        When they took down the cages for the winter, I'd spend hours practicing on the tennis courts instead.
                        By playing baseball, for first time in my life, I was able to work towards something I loved.
                        I pride myself for sticking with it, through both the highs and the lows.
                    </Typography>
                </Card>
            </Grid2>
            <Grid2 size={6}>
                <Card>

                    <Typography class='typography-base' variant='h1'>
                        Computer Science & Me
                    </Typography>
                    <Typography class='paragraph-base'>
                        It's hard to single out what specifically I enjoy about computer science.
                        As someone who enjoys math and puzzles, analyzing data is both interesting and fun to me.
                        That said, this has applied to several classes like computer architecture and programming.
                        On another hand, because of my experience in the arts and creating content, I enjoy designing just as much.
                        Regardless, I enjoy working and collaborating with others.
                        Whether that be helping someone in a lab, or hopping on a zoom call to work on a project, I enjoy being able to help my peers while also being able to learn and share new ideas.
                    </Typography>
                </Card>

            </Grid2>
            <Grid2 size={6}>
                <Container>
                    <img
                        src="/personal photos/lab-photo.jpg"
                        class="img-responsive w-100"
                        alt="placeholder"
                        width={'100%'}
                    />
                </Container>

            </Grid2>

        </Grid2>
    );

}
export default About;