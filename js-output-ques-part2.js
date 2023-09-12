//1
// const a =[];
// const b = [];
// console.warn(a==b);
// console.warn(a===b);

//2
// const a=[];
// const b=a;
// console.log(typeof(a))
// console.log(typeof b)
// console.warn(a==b);
// console.warn(a===b);

//3
// const a=[20];
// const b=[20];
// console.warn(a[0]==b[0])
// console.warn(a[0]===b[0])

//4
// const z = [1, 2, 3, 4, 5];
// const a = { name: 'Arpita'}
// console.warn(...z);

//5 
// console.warn(typeof NaN);

//6
// let data = 10- -10;
// console.warn(data);

//7
// const set = new Set([1, 2, 1, 5, 4, 2]);
// console.warn(set);

//8
// let data = {name:'Arpita'};
// // console.log(data);
// console.warn(delete data.name);
// // console.warn(data);

//8
// let data = {name:'Arpita prajapati'};
// console.warn(delete data);

//9
// const data = ['Arpita', 'B.Tech', 'CSE'] ;
// const [y] = data;
// console.warn(y);

//10
// const data = ['Arpita', 'B.Tech', 'CSE'] ;
// const [,y] = data;
// console.warn(y);

//11
// const data = {name:'Arpita', course:'B.Tech', branch:'Computer science'};
// const {name} = data;
// console.warn(name);

//12
// let data =  {name:'Arpita', course:'B.Tech', branch:'Computer science'};
// let info = {city:'Jhansi', mail:'ap@gmail.com', phn: 938493};

// data = {...data, ...info};
// console.warn(data);

//13
// let data =  {name:'Arpita', course:'B.Tech', branch:'Computer science'};
// let info = {city:'Jhansi', mail:'ap@gmail.com', phn: 938493};

// data = {data, ...info};
// console.warn(data);

//14
// let data =  {name:'Arpita', course:'B.Tech', branch:'Computer science'};
// let data2 = {name:'Appu', mail:'ap@gmail.com', course:'HM'};

// data = {...data, ...data2}
// console.warn(data);

//15
// const name= "Arpita Prajapati";
// console.warn(name());

//16
// const result = false || {} || null;
// console.warn(result);

//17
// const result = null || false || ' ';
// console.warn(result);

//18
// const result = [] || 0 || true;
// console.warn(result);

//19
// console.warn(Promise.resolve(5));

//20
// console.warn('😃' === '😃');

//21
// let name = "Arpita Prajapati";

// function getName(){
//     console.log(name);
//     let name = "Appu";
// }
// getName();

//22
// let name = "Arpita Prajapati";

// function getName(){
//     console.log(name);   
// }
// getName();

//23
// console.log(`${(x => x)('I love')}`);
// console.log(`${(x => x)(' I love')} to program`);

//24
// function sumValues(x, y, z){
//     return x+y+z;
// }
// const result = sumValues(...[1, 2, 3])
// console.warn(result)

//25
// const name = 'code step by step';
// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');

// console.log(!typeof name === false);

//26
// const name =  "Arpita Prajapati";
// const age = 21;

// console.warn(isNaN(name));
// console.warn(isNaN(age));

//27
// const person = {name :'Arpita'};
// Object.seal(person);
// person.name = "Appu";
// console.warn(person);

//28
// let data = [2, 9, 8, 10];
// data.shift();
// console.warn(data);

//29
// let data = {
//     name:'Arpita'
// }
// delete data.name;
// console.warn(data);

//30
// let data = "true";
// // console.log( typeof !"true");
// console.log(typeof !data);
// console.log(typeof !!data);

//31
// let data = ['zomato', 'swigy', 'brijvasi', 'bikaner'];
// delete data[1];
// console.warn(data);

//32
// let c = 3 ** 3;
// console.warn(c);

//33
// let a = 2;
// setTimeout(()=>{
//     console.warn(a);
// }, 0)
// a=100;

//34
// let a = 3;
// let A = 30;
// console.warn(A);

//35
// let a = `like`;
// let b = "like";
// console.warn(a===b);

//36
// let a = 1;
// let c = 2;
// console.warn(--c === a);

//37
// let a = 1;
// let b = 1;
// let c = 2;
// console.warn(a === b === --c);
// // console.warn(true === 1);

//38
// console.warn(3*3);
// console.warn(3**3);
// console.warn(3***3);

//39
// console.warn(a);
// var a;

//40
// console.warn([[[[]]]]);

//41
// let for=100;

//42
// let person = {name:'Arpita'};
// const members = [person];
// person = null;
// console.log(members);

//43
// const person = {
//     name:'Arpita',
//     course:'B.tech'
// }
// for (const item in person){
//     console.log(item);
// }

//44
const data = 3+4+'5';
console.warn(data);

//45
console.warn(typeof 3+4+'5');