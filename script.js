console.log("Rico Clone Loaded");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Copy token address to clipboard
const copyText = document.querySelector('.copy-text');
if (copyText) {
    copyText.addEventListener('click', () => {
        const text = copyText.innerText;
        navigator.clipboard.writeText(text).then(() => {
            alert('Contract address copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });

        // Visual feedback
        const originalColor = copyText.style.color;
        copyText.style.color = '#e94b4b'; // Flash red
        setTimeout(() => {
            copyText.style.color = originalColor;
        }, 300);
    });
    copyText.style.cursor = 'pointer';
    copyText.title = "Click to copy";
}
