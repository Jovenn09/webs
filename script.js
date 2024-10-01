
function redirectToPasscodePage() {
    window.location.href = "passcode.html"; // Redirect to passcode page for authentication
}
const funnyImages = [
    "images/1.jpg",  
    "images/2.jpg",  
    "images/3.jpg",  
    "images/4.jpg", 
    "images/5.jpg", 
    "images/6.jpg", 
    "images/7.jpg", 
    "images/8.jpg", 
];

// Keep track of how many times "No" is hovered over
let hoverCount = 0;

// Function to show a new funny image each time the "No" button is hovered over
function showFunnyImage() {
    if (hoverCount < funnyImages.length) {
        const randomImage = funnyImages[hoverCount];
        const pageContainer = document.getElementById("pageContainer");
        const imgElement = document.createElement('img');
        imgElement.src = randomImage;
        imgElement.alt = "Funny Image";
        pageContainer.appendChild(imgElement);

        imgElement.onload = function() {
            const maxX = window.innerWidth - imgElement.width - 20;
            const maxY = window.innerHeight - imgElement.height - 20;
            const randomX = Math.random() * maxX + 10;
            const randomY = Math.random() * maxY + 10;
            imgElement.style.left = `${randomX}px`;
            imgElement.style.top = `${randomY}px`;
        }

        hoverCount++;
    }
    moveButton();
}

// Function to move the "No" button when hovered
function moveButton() {
    const button = document.getElementById("noButton");
    const container = document.querySelector('.button-container');
    const randomX = Math.random() * (container.offsetWidth - button.offsetWidth);
    const randomY = Math.random() * (container.offsetHeight - button.offsetHeight);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Function to redirect to the love message page when "Yes" is clicked
function redirectToLovePage() {
    window.location.href = "love.html"; // Redirect to the love message page
}
