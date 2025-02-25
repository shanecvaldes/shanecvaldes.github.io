import { Container, Button } from "@mui/material";


export default function Resume() {
    const resume_path = '/resume/Shane Valdes.png'

    return (
        <Container sx={{ width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <img src={resume_path}
                class="img-responsive"
            />

            <Button
                href={resume_path}
                download>
                Download
            </Button>
        </Container>
    )
}