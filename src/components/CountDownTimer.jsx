import React, { useEffect, useState } from 'react';
import Header from './Header';
import Confetti from 'react-confetti';
import Quotes from './Quotes';

const CountDownTimer = () => {
    const targetedTime = new Date("2025-01-14T00:00:00");

    // Calculate the time left for the event
    const calcTimeLeft = () => {
        const now = new Date();
        const remTime = targetedTime - now;

        // Checking whether time is reached
        if (remTime <= 0) {
            return { days: 0, hours: 0, min: 0, sec: 0 };
        }

        // Calculate total remaining time in seconds
        const totalSeconds = Math.floor(remTime / 1000);
        
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const min = Math.floor((totalSeconds % 3600) / 60);
        const sec = totalSeconds % 60;

        return { days, hours, min, sec };
    };

    // useState for holding the time left
    const [timeleft, setTimeleft] = useState(calcTimeLeft());
    const [showConfetti, setShowConfetti] = useState(false);
    const [isNewfest, setIsNewfest] = useState(false);

    // useEffect for handling the UI updates (side effects)
    useEffect(() => {
        // Check if the countdown has reached zero
        if (timeleft.days === 0 && timeleft.hours === 0 && timeleft.min === 0 && timeleft.sec === 0) {
            setShowConfetti(true);
            setIsNewfest(true);

            // Remove the confetti after 10 min
            const confettiRemoval = setTimeout(() => {
                setShowConfetti(false);
            }, 10 * 60 * 1000);

            return () => {
                clearTimeout(confettiRemoval);
            };
        }

        // Updating the timer every second
        const timer = setInterval(() => {
            setTimeleft(calcTimeLeft());
        }, 1000);

        // Cleanup
        return () => clearInterval(timer);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className='countdown-timer'>
            <Header isNewfest={isNewfest} timeleft={timeleft} />
            {showConfetti && <Confetti />} {/* Short-circuiting operator for conditional rendering */}
            <Quotes isNewFest={isNewfest} timeleft={timeleft} />
        </div>
    );
};

export default CountDownTimer;