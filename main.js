//Task 1
const removeBtn = document.querySelector('.remove')

removeBtn.addEventListener('click', () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.remove(0);
})


//Task 2 
const randomBtn = document.querySelector('.random')

randomBtn.addEventListener('click', () => {
    const images = [
        '1.png',
        '2.jpeg',
        '3.jpg'
    ];
    const randomImg = document.querySelector('.randomImg')

    randomImg.src = images[Math.floor(Math.random() * images.length)];
})


//Task 3

const hoverLink = document.querySelector('.hoverLink');
const boldWords = document.querySelectorAll('.paragraph b');

hoverLink.addEventListener('mouseover', () => {
    boldWords.forEach(word => {
        word.classList.add('highlight');
    });
});

hoverLink.addEventListener('mouseout', () => {
    boldWords.forEach(word => {
        word.classList.remove('highlight');
    });
});



//Task 4
const size = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    document.querySelector('.width').textContent = width;
    document.querySelector('.height').textContent = height;
}

size();

window.addEventListener('resize', size);