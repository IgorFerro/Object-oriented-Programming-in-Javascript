//Objects

//Object Literals

/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function(){
        console.log('draw');
    }
};

circle.draw();
*/
/////////////////////////////////////////////////////////////
//Factory Function
/*
function createCircle(radius){
    return {
        radius,
        draw :function(){
            console.log('draw')
        }
    };
}

const circle = createCircle(1);
circle.draw();

//Constructor Function
function Circle(radius){
    this.radius =radius
    this.draw=function() {
    console.log(draw);
    }
}
const another = new Circle(1);
*/
////////////////////////////////////////////////////////////////
//Value vs Reference Types

/*Value Types        References Type
Number               Object 
String               Function
Boolean              Array
Symbol
undefined
null*/ 

// Primitives are copied by their value
//Objects are copied by their reference
/*
let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj);
*/
///////////////////////////////////////////////////////////
//Adding or Removing Properties
//Constructor Function
/*function Circle(radius){
    this.radius= radius;
    this.draw= function(){
        console.log('draw');
    }
}

//Object
const circle = new Circle(10);

//Create New Object
circle.location = {x:1};

//Add new object 
const propertyName = 'center location';
circle.propertyName = {x:1};

//Delete a property
delete circle['location'];
*/
/////////////////////////////////////////////////////////////
//Enumerating Properties
//Constructor Function
/*function Circle(radius){
    this.radius= radius;
    this.draw= function(){
        console.log('draw');
    }
}
//Object
const circle = new Circle(10);


//Enumerating all the members of the Object
for(let key in circle){
    if(typeof circle[key] !=='function')
    console.log(key, circle[key]);
}

//All the Keys from Object
const keys = Object.keys(circle);
console.log(keys);
//Check the existing property or a method
if('radius' in circle)
console.log('Circle  has a radius');*/

/////////////////////////////////////////////////////////
//Abstraction: Hide the details and Show the essentials

//Constructor Function
/*function Circle(radius){
     this.radius= radius;

     //Change for let(private)
    //this.defaultLocation = {x:0, y:0};

    let defaultLocation = {x:0, y:0};

    //Change for let(private)
    //this.computeOptimumLocation = function(factor){}
    let computeOptimumLocation = function(factor){}

    this.draw= function(){
   
     computeOptimumLocation(0.1);

        console.log('draw');
    }
}
//Object
const circle = new Circle(10);
circle.draw();*/
////////////////////////////////////////////////////////////////
//Getter and Setters
/*
function Circle(radius){
    this.radius= radius;

   let defaultLocation = {x:0, y:0};

   //1
   this.getDefaultLocation = function(){
       return defaultLocation;
   };

   this.draw= function(){
   console.log('draw');}
}

Object.defineProperty(this,'defaultLocation', {
   get: function(){
       return defaultLocation;
   },
   set: function(value){
       if(!value.x || !value.y)
       throw new Error('Invalid location.');
       defaultLocation = value;
   } 
})
//Object
const circle = new Circle(10);

//1
//circle.getDefaultLocation();
//circle.getDefaultLocation;
circle.defaultLocation = 1;
circle.draw();
*/
//////////////////////////////////////////////////////////////////////////////////////
//Solution Stopwacth

//Constructor
/*
function Stopwacth(){
let startTime, endTime, running, duration = 0;

this.start = function(){
   if(running)
   throw new Error('Stopwatch has already started.'); 

   running = true;

   startTime = new Date();
};

this.stop = function(){
  if(!running)
  throw new Error('Stopwatch is not started');

  running = false;
  endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  duration +=seconds;
};

this.reset = function(){
startTime = null;
endTime = null;
running = false;
duration = 0;
};

Object.defineProperty(this, 'duration', {
get: function() {return duration; }
});
}
*/
///////////////////////////////////////////////////////////////////////////////////
//Prototypical Inheritance= A prototype is a just regular object
//Objects created by a given constructor will have the same prototype
//Property Descriptors
/*
let person = {name: 'IGOR'};
Object.defineProperty(person, 'name',{
    writable:false,
    enumerable:true,
    configurable:false

});
delete person.name
console.log(person);
*/
//////////////////////////////////////
//Prototype vs instace
/*
function Circle(radius){
    //Instance Members
    this.radius=radius;

    this.move =function(){
        this.draw();
        console.log('move');
    }
}

//Prototype members
Circle.prototype.draw = function(){
    console.log('draw')
}

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function(){
    return 'Circle with radius' + this.radius;
}
*/
/*
//Iterating Instance and Prototype Members
function Circle(radius){
    //Instance Members
    this.radius=radius;

    this.move =function(){
        this.draw();
        console.log('move');
    }
}

const c1 = new Circle(1);

//Prototype members
Circle.prototype.draw = function(){
    console.log('draw')
}

//Returns instance members
    console.log(Object.keys(c1));
//Return All Members (Instance + Prototype)
for (let key in c1) console.log(key);*/

//////////////////////////////////////////////////////////////////////
//Avoid Extending the Built-in Objects
/*Array.prototype.shuffle = function(){

}

const array = [];
array.shuffle();
*/
//OBS don't modify objects you don't own!
////////////////////////////////////////////////////////////////////////////////
//Exercise

//Constructor
/*
function Stopwatch(){
let startTime, endTime, running, duration = 0;

Object.defineProperty(this, 'duration', {
get: function() {return duration; },
set: function(value){duration = value};
});


Object.defineProperty(this, 'startTime', {
get: function() {return startTime; }
});


Object.defineProperty(this, 'endTime', {
get: function() {return endTime; }
});

    
Object.defineProperty(this, 'running', {
get: function() {return running; }
});

Stopwatch.prototype.start = function(){
    if(this.running)
    throw new Error('Stopwatch has already started.'); 
 
    this.running = true;
 
    this.startTime = new Date();
 };
 
 Stopwacth.prototypes.stop = function(){
   if(!this.running)
   throw new Error('Stopwatch is not started');
 
   this.running = false;
   this.endTime = new Date();
 
   const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
   this.duration +=seconds;
 };
 
 Stopwacth.prototype.reset = function(){
 this.startTime = null;
 this.endTime = null;
 this.running = false;
 this.duration = 0;
 };
 const sw =new Stopwatch();
 sw.duration =10;

 //OBS:. Premature optimization is the root of all evils
}*/
//////////////////////////////////////////////////////////////////////////
//4- Prototypical Inheritance
//1.Creating Your Own Prototypical Inheritance
/*
function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius){
    this.radius= radius;
}

Circle.prototype =Object.create(Shape.prototype);

Circle.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape();
const c= new Circle(1);
*/
//////////////////////////////////////////////////////////////
//2.Resetting the Constructor
/*function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius){
    this.radius= radius;
}

Circle.prototype =Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape();
const c= new Circle(1);*/
///////////////////////////////////////////////////
//3.Calling the Super Constructor
/*function Shape(color){
this.color =color;
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}

function Circle(radius,color){
    this.radius= radius;
    Shape.call(this, color)
}

Circle.prototype =Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape();
const c= new Circle(1,'red');*/
///////////////////////////////////////////////////////////
//4. Intermediate Function Inheritance
/*function Shape(color){
    this.color =color;
    }
    
    Shape.prototype.duplicate = function(){
        console.log('duplicate');
    }
    
    function extend(Child,Parent){
        Child.prototype =Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
       }
    
    function Circle(radius,color){
        this.radius= radius;
        Shape.call(this, color)
    }
    
   extend(Circle, Shape);

    Circle.prototype.draw = function(){
        console.log('draw');
    }
    

   extend(Shape,Square);

    const s = new Shape();
    const c= new Circle(1,'red');

function Square(size){
    this.size = size;
}
*/
//////////////////////////////////////////////////////////
//5. Method Overriding
    /*function extend(Child,Parent){
        Child.prototype =Object.create(Parent.prototype);
        Child.prototype.constructor = Child;
       }

       function Shape(){
    }
    
    Shape.prototype.duplicate =function(){
        console.log('Duplicate')
    }

    function Circle(){

    }

    extend(Circle, Shape);

    Circle.prototype.duplicate =function(){
        Shape.prototype.duplicate.call(this);
        console.log('Duplicate circle')
    }

    const c = new Circle();*/
///////////////////////////////////////////////////////////////////
//6.Polymorphism
/*function extend(Child,Parent){
    Child.prototype =Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
   }

   function Shape(){
}

Shape.prototype.duplicate =function(){
    console.log('Duplicate')
}

function Circle(){

}

extend(Circle, Shape);

Circle.prototype.duplicate =function(){
    Shape.prototype.duplicate.call(this);
    console.log('Duplicate circle')
}

function Square(){
}

extend(Square, Shape);

Square.prototype.duplicate =function(){
    console.log('Duplicate square')
}
 const shapes = [
   new Circle(),
   new Square()
 ]

for (let shape of shapes){
    shape.duplicate();
}

//OBS:. Avoid creating inheritance hierarchies. Favor Composition over inheritance
*/
//////////////////////////////////////////////////////////////////////////////
//7. Mixins
/*function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

const canEat ={
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function(){
        console.log('walking');
    }
};

const canSwim ={
    swim: function(){
        console.log('swim');
    }
}

function Person(){
}

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish(){
    }

    mixin(Goldfish.prototype, canEat,canSwim);
const goldfish = new Goldfish();
console.log(goldfish);*/
//////////////////////////////////////////////////////////////////////////////
///11- Prototypical Exercise
/*function HtmlElement(){
this.click = function(){
    console.log('clicked')
}
}

HtmlElement.prototype.focus = function(){
    console.log('focued');
}

function HtmlSelectElement(items = []){
    this.items =items;

    this.addItem = function(item){
        this.items.push(item);
    }

    this.removeItem= function(item){
        this.items.splice(this.items.indexOf(item), 1);
    }
}

   HtmlSelectElement.prototype =new   HtmlElement();*/
///////////////////////////////////////////////////////////////////
///12- Exercise- Polymorphism
this.render = function(){
    return`<select>${this.Map(item=>`
    <option>${item}</opttion>`).join('')}
    </select>`;
}

function HtmlImageElement(src){
    this.src=src;

    this.render =function(){
        return`<img src="${this.src}"/>`
    }
}
HtmlImageElement.prototype=new HTMLElement();
HtmlImageElement.prototype.constructor= HtmlImageElement;































































    


































