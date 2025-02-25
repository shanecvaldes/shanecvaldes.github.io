import { Button, Typography } from "@mui/material"
import "../css/Wheel.css"

export default function WheelItem({ text, image }) {

    return (
        <div class="item-container">
            <div class="item-wrapper">
                <img src={image}
                    class="img-responsive wheel-image" />
                <div class="text-container">
                    <Typography variant="h2" class="typography-base">
                        {text}
                    </Typography>
                </div>

            </div>

        </div>
    )
}