import { Grid2, Typography } from "@mui/material";
import Resume from "../components/Resume";



function Professional() {
    return (
        <Grid2 container spacing={4} alignItem={'center'}>
            <Grid2 size={6}>
                <Typography class='typography-base' variant='h1'>
                Professional Statement
                </Typography>
                <Typography class='typography-base' variant='h2'>
                Bits, Silicon, and Terminals
                </Typography>
                <Typography class='paragraph-base'>
                I still remember the day when math finally clicked for me, it was the 5th grade and around the time I started caring about my grades. I was working on a computer and I heard my teacher whisper to me from behind, it was my first perfect score on a math test. From then on, I started to pay more attention to math, and before I knew it, I've come to enjoy the process of problem solving that came with it. Later on, like most kids in high school, I didn’t put much thought into what I wanted to do. However, one thing I did know was that I enjoyed math. I enjoyed the problem-solving and the satisfaction of a problem coming together, but I had a hard time figuring out what I wanted to do with this passion. At the same time, I discovered my passion for baseball, and because I had concrete goals to strive for, I did everything to keep playing. I worked hard in school and spent hours after school practicing, all so I could play again. However, going into my junior year, I realized that I needed to find another passion outside of baseball. Because I hadn’t taken a computer class since middle school and I had already tried all the other technical classes in high school, I decided to take my first programming class.
                <br /><br />
                Until then, I never thought that something would give me as much joy as playing baseball did, but I was wrong. Whether it was creating a snake game, building a robot, or helping my peers debug their code, I loved all of it. From then on, it was easy to decide that I would pursue a Computer Science degree at Missouri State. Today, no matter how many hours I may spend coding, helping someone in my lab with their code, or spending with a group studying data structures, I enjoy everything that I learn, and I look forward to learning more. Whether I end up on the back-end or front-end, analyzing data, or building new software, I think that I have a place anywhere, and I look forward to continuing my new passion.
                </Typography>

            </Grid2>
            <Grid2 size={6}>
                <Resume />

            </Grid2>
        </Grid2>
    )

}
export default Professional;