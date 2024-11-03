
//Nav Bar Code
const mobile = document.getElementById('mobile');
const navLinks = document.querySelector('.nav_links');

mobile.addEventListener('click', ()=>{
    navLinks.classList.toggle('show');
});
//Form code
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx)=> `<span style="transition-delay:${idx * 45}ms">${letter}</span>`)
    .join('')
})

//FAQ Code
const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle =>{
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle ('active')
    })
})