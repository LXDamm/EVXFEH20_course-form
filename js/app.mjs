import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

class Course {
    constructor(studentName, courseName, authorName, imgPath) {
        this.id = uuidv4();
        this.studentName = studentName;
        this.courseName = courseName;
        this.authorName = authorName;
        this.imgPath = imgPath;
    }
}

let courses = [
    new Course('Lexx Damm', 'Javascript 101', 'Some Guy', '1.jpg'),
    new Course('Lexx Damm', 'Machine Learning Basics', 'Prof ML', '2.jpg'),
    new Course('Lexx Damm', 'React.js', 'Mirwais', '3.jpg'),
    new Course('Lexx Damm', 'Master Elixir', 'Prof Smart Guy', '4.jpg'),
    new Course('Lexx Damm', 'Take HTML Further', 'Some Guy', '5.jpg'),
    new Course('Lexx Damm', 'Styling CSS', 'Hipster Guy', '6.jpg'),
    new Course('Lexx Damm', 'Vue.js', 'Dr Who', '7.jpg'),
    new Course('Lexx Damm', 'A Crocodilians take on Software Development', 'Miss Croc', '8.jpg')
];

const studentInputE = document.querySelector('.post-input-student');
const courseInputE = document.querySelector('.post-input-course');
const authorInputE = document.querySelector('.post-input-author');
const postButtonE = document.querySelector('.post-input-button');
const loadingAnimationContainerE = document.querySelector('.app-loading-container');
const coursesListE = document.querySelector('.courses-list');

const checkValid = () => {
    if (studentInputE.value != '' && courseInputE.value != '' && authorInputE.value != '') {
        postButtonE.removeAttribute('disabled');
    } else {
        postButtonE.toggleAttribute('disabled', true);
    }
    if (studentInputE.value != '') studentInputE.style.borderColor = 'green';
    else studentInputE.style.borderColor = 'red';
    if (courseInputE.value != '') courseInputE.style.borderColor = 'green';
    else courseInputE.style.borderColor = 'red';
    if (authorInputE.value != '') authorInputE.style.borderColor = 'green';
    else authorInputE.style.borderColor = 'red';
};

const generateRandomImgPath = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    return `${randomNumber}.jpg`;
};

const postCourse = () => {
    loadingAnimationContainerE.style.display = 'flex';
    const studentName = studentInputE.value;
    const courseName = courseInputE.value;
    const authorName = authorInputE.value;
    courses.push(new Course(studentName, courseName, authorName, generateRandomImgPath()));
    populateList();
    setTimeout(() => {
        loadingAnimationContainerE.style.display = 'none';
    }, 1000);
};

const createListItem = (item) => {
    return `
        <li class="courses-list-item">
            <div class="course-card">
                <img class="course-card-img" src="./img/courses/${item.imgPath}" alt="Bild till kursen ${item.courseName}">
                <div class="course-card-text-container">
                    <div class="course-card-text-item">
                        <span class="course-card-text-item-icon"><i class="fas fa-user-graduate"></i></span>
                        <span class="course-card-text-item-student-text">${item.studentName}</span>
                    </div>
                    <div class="course-card-text-item">
                        <span class="course-card-text-item-icon"><i class="fas fa-book-reader"></i></span>
                        <span class="course-card-text-item-course-text">${item.courseName}</span>
                    </div>
                    <div class="course-card-text-item">
                        <span class="course-card-text-item-icon"><i class="fas fa-chalkboard-teacher"></i></span>
                        <span class="course-card-text-item-author-text">${item.authorName}</span>
                    </div>
                </div>
            </div>
        </li>
    `;
};

const populateList = () => {
    coursesListE.innerHTML = '';
    courses.forEach((item) => {
        coursesListE.innerHTML += createListItem(item);
    });
};

const loadEventListeners = () => {
    studentInputE.addEventListener('keyup', checkValid);
    courseInputE.addEventListener('keyup', checkValid);
    authorInputE.addEventListener('keyup', checkValid);
    postButtonE.addEventListener('click', postCourse);
};

const run = () => {
    populateList();
    loadEventListeners();
}

run();

export {courses as courses};
export default run;

// Because its a own javascript module, you need to import the module in Firefox and Chromes WebbDeveloper console, to access the object:
// import('./js/app.mjs').then(m => app = m);
// Then you can do app.courses; for example