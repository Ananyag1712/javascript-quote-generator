const quotes = [
    "Mistakes are proof that you are trying.",
    "Success is build one step at a time.",
    "Every expert was once a beginner.",
    "Small progress is still progress.",
    "Dream big, start small, act now.",
    "Your future is created by what you do today.",
    "Learning never exhausts the mind.",
    "Believe in yourself and keep moving forward.",
    "Consistency beats perfection.",
    "The best way to predict the future is to create it."
];

function generateQuote(){
    const randomNumber = 
    Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent = quotes[randomNumber];
}