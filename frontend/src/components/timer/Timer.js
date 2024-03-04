import React from "react";

function formatTime(seconds) {
    const result = new Date(seconds * 1000).toISOString().slice(14, 19);
    return result;
}

export default function Timer({timeoutSec, onTimeout}) {
    const [timePassed, setTimePassed] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => setTimePassed((prev) => {
            if (prev + 1 === timeoutSec) {
                clearInterval(interval);
                setTimeout(() => onTimeout(), 1);
            }
            return Math.min(prev + 1, timeoutSec);
        }), 1000);
        return () => {
            clearInterval(interval); 
            setTimeout(() => onTimeout(), 1);
        }
    // eslint-disable-next-line
    }, [])

    return (
        <span className="display-5">{formatTime(timeoutSec - timePassed)}</span>
    )
}