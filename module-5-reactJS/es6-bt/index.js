let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
// task 1
let coursesRate = courses.filter(course => course.rating >= 4);
console.log(coursesRate);
//task 2
let filterCourse = courses.filter(lesson => lesson.rating < 4).map(course => {
    `${course.id} - ${course.title} - ${course.rating}`;
});
console.log(filterCourse);
//task 3
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];
let mergeCourse = (a, b) => [...a, ...b];
console.log(mergeCourse(courses, addedCourses));