const anchors = document.querySelectorAll('.anchors');
const aboutMe = document.querySelector('.aboutMe');
const abilities = document.querySelector('.abilities');
const projects = document.querySelector('.projects');

aboutMe.style.display = 'none';
abilities.style.display = 'none';
projects.style.display = 'none';

const showDescription = () => {
    aboutMe.style.display = 'flex';
    abilities.style.display = 'none';
    projects.style.display = 'none';
}

const showAbilities = () => {
    abilities.style.display = 'flex';
    aboutMe.style.display = 'none';
    projects.style.display = 'none';
}

const showProjects = () => {
    projects.style.display = 'flex';
    aboutMe.style.display = 'none';
    abilities.style.display = 'none';
}

anchors[0].addEventListener('click', showDescription);
anchors[1].addEventListener('click', showAbilities);
anchors[2].addEventListener('click', showProjects);