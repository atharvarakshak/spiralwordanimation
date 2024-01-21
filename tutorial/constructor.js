class object{
    constructor(){
        console.log("hello constructor");
        this.name='atharva'
    }
    show(){
        console.log("called method success");
        console.log( `this is a sample ${constructor.name}`);
    }
}

const p1 = new object();
const p2 = new object();

p1.show()
p2.show()


//method can also be stored into a variable in js
// can only stores isolated method in a variable

const s1 = p1.show;
// s1();
const myObj ={name:'abba'}
s1.call(name)

let name ='Unique';
const s3=p1.show;
s3.call()

