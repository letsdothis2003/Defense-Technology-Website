//search button
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

//nav buttons
const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

console.log(img);

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
});

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

//expanding cards
const panels = document.querySelectorAll('.panel');
const container = document.querySelector('.container');

panels.forEach(panel => {
    const closeButton = panel.querySelector('.close-btn');

    // Expand panel on click
    panel.addEventListener('click', (e) => {
        // Check if click is on the panel, not the close button
        if (e.target !== closeButton) {
            removeActiveClasses();
            panel.classList.add('active');
            container.classList.add('active');
        }
    });

    // Close panel on close button click
    closeButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering panel click event
        panel.classList.remove('active');
        container.classList.remove('active');
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    container.classList.remove('active');
}
//Nav Bar Code
const mobile = document.getElementById('mobile');
const navLinks = document.querySelector('.nav_links');

mobile.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
