import { useState } from "react";
import "../css/Wheel.css"
import { Button, Typography } from "@mui/material";


export default function Wheel({ children }) {
    const length = children.length;
    const [prevIndex, setPrevIndex] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const next = () => {
        console.log(length);
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % length);
    };

    const prev = () => {
        setPrevIndex(currentIndex);

        setCurrentIndex((prev) => (prev - 1 + length) % length);
    };
    return (

        <div class="wheel-container">
            <div class="wheel">
                {children.map((child, index) => {
                    let className = "hidden"; // Default state

                    if (index === currentIndex) {
                        className = "active"; // Current item
                    } else if (index === prevIndex) {
                        className = "fading"; // Previous item fading out
                    }

                    return (
                        <div key={index} className={`wheel-item ${className}`}>
                            {child}
                        </div>
                    );
                })}
            </div>
            <div class="button-container">
                <Button
                    onClick={next}
                    style={{
                        width: "100%",
                        color: "black",
                        background: "white"
                    }}>Next</Button>
            </div>

        </div>
    )


}