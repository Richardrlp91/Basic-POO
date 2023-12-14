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
const richi = new FreeStudent({
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


class Student{
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
    publicarComentario(commentContent){
        const comment = new comment({
            content: commentContent,
            studentName: this.name,
            studentRole: 'profesor',
        });
        comment.publicar();
    }
}

//todo -- HERENCIA
class FreeStudent extends Student {
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourse.push(newCourse);
        }else{
            console.warn('Solo puedes tomar cursos abiertos.')
        }
    }
}
class BasicStudent extends Student {
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if(newCourse.lang !=='english'){
            this.approvedCourse.push(newCourse);
        }else{
            console.warn('Solo puedes tomar cursos en español.')
        }
    }
}
class ExpertStudent extends Student {
    constructor(props){
        super(props);
}
approveCourse(newCourse){
    this.approvedCourse.push(newCourse);
}
}

class teacherStudent extends Student {
    constructor(props){
        super(props);
}
approveCourse(newCourse){
    this.approvedCourse.push(newCourse);
}


}





const Ricardo = new FreeStudent({
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
        cursoProgBasica,
        "Curso Unreal",
    ]
})

//*todo --- ABSTRACCIÓN
class Course{
    constructor({
        name, 
        classes=[],
        isFree=false,
        lang='spanish',
    
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    //? CONCEPTOS DE GETTERS Y SETTERS PARA ENCAPSULAR LAS PROPIEDADES.
    get name(){return this._name}
    set name(nuevoNombre){
        //* USAMOS CONDICIONALES PARA PROTEGER LA REASIGNACIÓN DE LAS PROPIEDADES.
        if(nuevoNombre==='curso Malito de Programación básica')
        console.warn('No es un nombre válido.')
        else this._name = nuevoNombre;
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
    isFree:true,
})
const cursoDefinitivoHTML = new Course({
    name:"Curso definitivo de HTML y CSS",
    lang:'english',
})
const cursoPracticoHTML = new Course({
    name:"Curso Practico de HTML y CSS",
})


//todo -- ENCAPSULAMIENTO
//? * ESCONDER MÉTODOS Y ATRIBUTOS.(EN JS ES DIFÍCIL LOGRARLO.)
//? * NO PERMITIR LA ALTERACIÓN DE MÉTODOS Y ATRIBUTOS.

const miguelito = new FreeStudent({
    name:'Miguelito',
    username:'miguelitofeliz',
    email:'miguelito@gmail.com',
    instagram:'migelito_feliz',
    learningsPaths:[
        cursoProgBasica,
    ]
})
const andrea = new BasicStudent({
    name:'andrea',
    username:'andreafeliz',
    email:'andrea@gmail.com',
    instagram:'andrea_feliz',
    learningsPaths:[
        cursoPracticoHTML,
    ]
})
const freddy = new BasicStudent({
    name:'Freddy Vega',
    username:'freddier',
    email:'andrea@gmail.com',
    instagram:'freddiervega',
    learningsPaths:[
        cursoDefinitivoHTML,
    ]
})
//todo * Object.defineProperty
/*
? Con esta propiedad se pueden definir nuevas propiedades a nuestro objeto. Así mismo, se puede configurar ciertas características de la propiedad tales como:

? Configurable: Esta indica si la propiedad puede ser borrada o eliminada
? Enumerable: Indica si la propiedad puede ser mostrada en la enumeración de las mismas. Existen ciertos métodos que toman como referencia este valor para mostrar la propiedad
? Writable: Esta indica si la propiedad puede ser modificada con el operador de asignación (=)
*/
const person = {
    userName: 'zajithcorro',
    age: 26,
    approvedCourses: ['Curso Profesional de Git y Github'],
    addApprovedCourse (course) {
      console.log(this)
      this.approvedCourses.push(course);
    }
  }
  //* Si queremos modificar un propiedad que tienen writable: false no permitirá que su valor sea modificado ⬇️
  Object.defineProperty(person, "mail", {
    value: "zajith@outlook.com",
    writable: false,
    enumerable: true,
    configurable: true
})
person.mail // 'zajith@outlook.com'
person.mail = 'zajith@gmail.com' // 'zajith@gmail.com'
person.mail // // 'zajith@outlook.com'

//* Object.keys solo muestra las propiedades que tienen enumerable: true. A diferencia de Object.getOwnPropertyNames que muestra todas las propiedades⬇️

Object.defineProperty(person, "twitter", {
    value: "zajithcorro",
    writable: true,
    enumerable: false,
    configurable: true
})
Object.keys(person) // [ 'userName', 'age', 'approvedCourses', 'addApprovedCourse', 'mail', 'platziPoints' ]
Object.getOwnPropertyNames(person) // [ 'userName', 'age', 'approvedCourses', 'addApprovedCourse', 'mail', 'twitter', 'platziPoints', 'gender' ]

//* Si queremos eliminar propiedad que tienen configurable: false no permitirá que sea borrada del objeto.
Object.defineProperty(person, "platziPoints", {
    value: 7500,
    writable: true,
    enumerable: true,
    configurable: false
})
delete person.platziPoints // false
delete person.userName // true

Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,
    enumerable: false,
    configurable: false
})
/* 
todo -- Object.freeze()

? Este método congela un objeto que sea pasado. Es decir:

? Impide que se le agreguen nuevas propiedades
?Impide que sean eliminas propiedades ya existentes
?Impide que sus las propiedades internas (writable, enumerable y configurable) sean modificadas
*/
const person = {
    userName: 'zajithcorro',
    age: 26,
    approvedCourses: ['Curso Profesional de Git y Github'],
    addApprovedCourse (course) {
      console.log(this)
      this.approvedCourses.push(course);
    }
  }
  
  Object.freeze(person)
  
  person.mail = 'zajith@mail.com'
  Object.keys(person) // [ 'userName', 'age', 'approvedCourses', 'addApprovedCourse' ]
  
  person.age = 27
  person.age // 26
  
  delete person.userName // false

  /*
  todo -- Object.seal()

? Este método sella un objeto que sea pasada. Es decir:

? Impide que nuevas propiedades sean agregadas
? Cambia en todas las propiedades configurable: false, con lo que impide que sean borradas.
? Las propiedades aún puede ser modificadas, ya que writable esta true
  */
const person = {
    userName: 'zajithcorro',
    age: 26,
    approvedCourses: ['Curso Profesional de Git y Github'],
    addApprovedCourse (course) {
      console.log(this)
      this.approvedCourses.push(course);
    }
  }
  
  Object.seal(person)
  
  person.mail = 'zajith@mail.com'
  Object.keys(person) // [ 'userName', 'age', 'approvedCourses', 'addApprovedCourse' ]
  
  delete person.userName // false
  
  person.age = 27
  person.age // 27

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA(){
        this.a= 'AAAAA';
    }
}

function DeepCopy(subjet){
    let copySubjet;
    for(key in subjet){
        if (keyIsObject) { // Si es verdad que hay un objeto dentro...
            // Invocamos recursivamente la misma función:
            copySubject[key] = deepCopy(subject[key]); // 👀🔄
      } else { // Sino...
        if (subjectIsArray) { // Si el parámetro recibido por la función deepCopy es Array...
              // Agregamos el elemento a la variable a retornar al final de la función:
                      copySubject.push(subject[key]);
        } else { 
                  // sino, significa que es objeto el parámetro y además no hay objetos anidados
                  // en el elemento actual dentro del recorrido del bucle for, por tanto, asignamos
                  // dicho elemento como valor a la propiedad correspondiente:
          copySubject[key] = subject[key];
        }
    }
    
  }

    return copySubjet;
}
/*
const stringifiedComplexObj =JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);
*/

//todo -- POLIMORFISMO.
class Comment{
    constructor({
        content,
        studentName,
        studentRole = 'estudiante',
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes =0;
    }
publicar(){
    console.log(this.studentName+' ('+this.studentRole+')');
    console.log(this.likes+' likes');
    console.log(this.content);
}

}
