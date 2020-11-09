import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

class Course {
    constructor(customerName, courseName, authorName, imgPath) {
        this.id = uuidv4();
        this.customerName = customerName;
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

const coursesListE = document.querySelector('.courses-list');

const createListItem = (item) => {
    return `
        <li class="courses-list-item">
            <div class="course-card">
                <img class="course-card-img" src="./img/${item.imgPath}" alt="Bild till kursen ${item.courseName}">
                <span>${item.customerName}</span><br><span>${item.courseName}</span><br><span>${item.authorName}</span>
            </div>
        </li>
    `;
}

const populateList = () => {
    coursesListE.innerHTML = '';
    courses.forEach((item) => {
        coursesListE.innerHTML += createListItem(item);
    });
}

const run = () => {
    populateList();
    console.log(courses);
}

run();

export {courses as courses};
export default run;