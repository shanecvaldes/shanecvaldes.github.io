import { Button, Typography, Container } from "@mui/material";


export default function Navbutton({ header, desc, link }) {
    const navLink = () => {
        window.open(link, '_blank').focus();

    }

    return (
        <Container sx={{justifyContent:'center', display:'flex', flexDirection:'column'}}>
            <Typography class='typography-base' variant="h2">
                {header}
            </Typography>
            <Typography class='typography-base'>
                {desc}
            </Typography>
            <Button onClick={navLink}>
                Click Here for the Repo
            </Button>
        </Container>

    )
}