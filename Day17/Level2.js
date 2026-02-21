const students = {
    "Alex": {
        "email": "alex@alex.com",
        "skills": ["HTML", "CSS", "JavaScript"],
        "age": 20,
        "isLoggedIn": false,
        "points": 30,
        "grades": {
            "math": 85,
            "science": 90,
            "english": 78
        }
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
        "age": 25,
        "isLoggedIn": false,
        "points": 50,
        "grades": {
            "math": 92,
            "science": 88,
            "english": 85
        }
    },
    "Brook": {
        "email": "brook@brook.com",
        "skills": ["HTML", "CSS", "JavaScript", "React", "Redux"],
        "age": 30,
        "isLoggedIn": true,
        "points": 60,
        "grades": {
            "math": 75,
            "science": 82,
            "english": 88
        }
    },
    "Daniel": {
        "email": "daniel@daniel.com",
        "skills": ["HTML", "CSS", "Python", "Django"],
        "age": 22,
        "isLoggedIn": true,
        "points": 45,
        "grades": {
            "math": 95,
            "science": 91,
            "english": 80
        }
    },
    "John": {
        "email": "john@john.com",
        "skills": ["HTML", "Java", "C++"],
        "age": 28,
        "isLoggedIn": false,
        "points": 35,
        "grades": {
            "math": 70,
            "science": 75,
            "english": 82
        }
    }
};

// Stringifying the Object 
const studentJSON = JSON.stringify(students);
window.localStorage.setItem('students', studentJSON);

console.log(window.localStorage.getItem('students'));
