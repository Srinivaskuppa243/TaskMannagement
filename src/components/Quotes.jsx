import React from 'react';

const PongalQuote = () => {
    const quotes = [
        "May this harvest festival fill your hearts and home with happiness.",
        "Wishing you a Pongal that is bright and cheerful, spreading joy in your family.",
        "May the Sun God bless you with prosperity and success.",
        "As the autumn hues paint the world, let gratitude color your heart. Happy Harvest Season!",
        "In the embrace of autumn’s warmth, may your life ripen with abundance and fulfillment. Happy Harvest! ",
        "With every deed, we plant a seed of change, nourishing tomorrow’s bountiful harvest.",
        "The measure of our days isn’t solely in the harvest gathered, but in the seeds of kindness sown along the way.",
        "Love, akin to the summer’s warmth, yields the richest harvest of joy in the garden of our hearts.",
        "May the vibrant colors of Pongal brighten your life with joy, and the sweet aroma of jaggery fill your days with sweetness.",
        "Wishing you a harvest of happiness, a pot full of prosperity, and a dash of laughter. Happy Pongal to you and your family!"
    ];

    // Get a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Pongal Festival Quote</h1>
            <p style={{ fontSize: '24px', fontStyle: 'italic' }}>{randomQuote}</p>
        </div>
    );
};

export default PongalQuote;