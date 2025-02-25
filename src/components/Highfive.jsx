import { Box, Container, Typography } from "@mui/material";



export default function Highfive({ title, desc, color_b }) {

    return (
        <Box>
            <Typography class="typography-base" variant='h2' style={{ padding:'10px', background:color_b}}>{title}</Typography>
            <Typography class="paragraph-base">{desc}</Typography>
        </Box>


    );
}