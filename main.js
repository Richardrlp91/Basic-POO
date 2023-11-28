//*todo -- Creando un Objeto literal
const laura ={
    name:"Natalia",
    age:"32",
    cursosAprobados:[
        "Curso definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],
    //**METODOS DE JS
    aprobarCurso: function(newCourse){ //** Es una manera de crear metodos
        this.cursosAprobados.push(newCourse);
    },
    aprobarCurso2(){//** Es otra manera de crear metodos

    }
};
laura.name = "Laura";
laura.aprobarCurso('Scope y Closures en JS');
console.log(laura);

//*todo -- Creando un Prototipo
function Student(name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

}
//*? Esto es nuevo en JS, creamos un metodo desde fuera de la función.
Student.prototype.aprobarCurso=function(course){
    this.cursosAprobados.push(course);
}

//*todo -- INSTANCIAMOS UN OBJETO DESDE STUDENT.
const elisa = new Student(
    "Elisa Salva",
    25,
    [
        "HTML Y CSS",
        "Git y GitHub",
    ]
);
//*? Podemos acceder a los metodos de Student, incluso si fueron creados por fuera.
elisa.aprobarCurso('Diseño Web');

//*todo-- CLASES EN JAVASCRIPT
//*? Realmente son prototipos con las instancias de Clases.
class Student2{
    //* Si encerramos los parametros en llaves, podemos nombrar parametros en desorden, asignar valores por defecto, entre otros beneficios.
    constructor({
        cursosAprobados=[],
        name,
        age,
    }){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(curso){
        this.cursosAprobados.push(curso);
    }
}
//* Nombramos los parametros como un objeto literal, sin importar el orden.
const richi = new Student2({
    name: "Ricardo",
    age: 32,
    cursosAprobados:[
        "HTML",
        "Git y GitHub",
        "JavaScript",
    ],
    }
);
console.log(richi);

class Estudiante{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        aprovedCourses = [],
        learningsPaths=[],
    }){
    this.name= name,
    this.email=email,
    this.username=username,
    this.socialMedia={
        twitter,
        instagram,
        facebook,
    };
    this.twitter=twitter;
    this.instagram=instagram;
    this.facebook=facebook;
    this.aprovedCourses=aprovedCourses;
    this.learningsPaths=learningsPaths;
    }
}
const Ricardo = new Estudiante({
    name:"Ricardo",
    username: "RichieLePi",
    email: "richardrlp91@gmail.com",
})
class LearningPath{
    constructor({name, courses=[]}){
        this.name = name;
        this.courses = courses;
    }
}

const esculaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses:[
        "Curso Definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS",
    ]
})
const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses:[
        cursoProgBasica,
        cursoDefinitivoHTML,
        "Curso DataBusiness",
        "Curso Dataviz"
    ]
})
const EscuelaVgs = new LearningPath({
    name: "Escuela de Videojuegos",
    courses:[
        cursoProgBasica
        "Curso Unreal",
    ]
})

//*todo --- ABSTRACCIÓN
class Course{
    constructor({name, classes=[]}){
        this.name = name;
        this.classes = classes;
    }
}
class Classes{
    constructor({name, classes=[]}){
        this.name = name;
        this.classes = classes;
    }
}


const cursoProgBasica = new Course({
    name:"Curso Grátis de programación Básica",
})
const cursoDefinitivoHTML = new Course({
    name:"Curso definitivo de HTML y CSS",
})

//todo -- ENCAPSULAMIENTO
//? * ESCONDER MÉTODOS Y ATRIBUTOS.(EN JS ES DIFÍCIL LOGRARLO.)
//? * NO PERMITIR LA ALTERACIÓN DE MÉTODOS Y ATRIBUTOS.

