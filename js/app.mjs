import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

class Course {
    constructor(customerName, courseName, authorName) {
        this.id = uuidv4();
        this.customerName = customerName;
        this.courseName = courseName;
        this.authorName = authorName;
    }
}

const testItem = new Course('Namn', 'Kursnamn', 'Författare');
let courses = [testItem];

const coursesListE = document.querySelector('.courses-list');

const populateList = () => {
    courses.forEach((item) => {
        let liHTML = `<li class="courses-list-item"><div><span>${item.customerName}</span><span>${item.courseName}</span><span>${item.authorName}</span></div></li>`;
        coursesListE.innerHTML = liHTML;
    });
}

const run = () => {
    populateList();
    console.log(courses);
}

run();

export {courses as courses};
export default run;