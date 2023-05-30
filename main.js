// document.getElementById("but1").onclick = function()
// {
//     username = document.getElementById("name").value;
//     console.log("hello",username);
// }


// ***************AREA OF TRIANGLE**************************************************


// let a,b,c;
// a=window.prompt("Enter side A");
// b=window.prompt("Enter side B");
// c= Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
// console.log("the area of triangel ",c);

// ***************AREA OF TRIANGLE**************************************************

// document.getElementById("but1").onclick = function()
// {
//     a = document.getElementById("a").value;
//     b = document.getElementById("b").value;
//     c= Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
//     console.log("the area of triangel ",c);
//     document.getElementById("labelc").innerHTML = "c: "+c;
// }

/* ************* COUNTER :::::: INCREASE ::::: DECREASE :: RESET**************************** */

// let countnum = 0;
// document.getElementById("decrease").onclick = function()
// {
//     c-=1;
//     document.getElemen9tById("count").innerHTML = c;
// }
// document.getElementById("increase").onclick = function()
// {
//     c+=1;
//     document.getElementById("count").innerHTML = c;
// }
// document.getElementById("reset").onclick = function()
// {
//     c=0;
//     document.getElementById("count").innerHTML = c;
// }

// **************************IF ** ELSE **ELSE IF*****************************************

// let age = window.prompt("Enter your age");
// if(age>=18)
// {
//     console.log("you are adult")
// }
// else if(age<0)
// {
//     console.log("age can't be negative");
// }
// else

//     console.log("you are child");

//**********************.checked using if else********************************************* */
// document.getElementById("button").onclick=function()
// {
//     if(document.getElementById("check").checked)
//     console.log("you are subscribed!!!!")
//     else
//     console.log("you are not subscribed!!!!")
//     const phonepay = document.getElementById("phonepay");
//     const googlepay = document.getElementById("googlepay");
//     if(phonepay.checked)
//     console.log("payment done through phonepay")
//     else if(googlepay.checked)
//     console.log("payment done through gpay")
//     else
//     console.log("payment not done!!")
// }

//***** && and || or ! ************ */

/**********************while******************************************************** */
// let username = "";
// while(username=="")
// {
//     username=window.prompt("enter your name !");
// }
// console.log("Hello",username);

/**********************do while******************************************************** */
// let username;
// do
// {
//     username=window.prompt("enter your name !");
// }while(username=="")
// console.log("Hello",username);

//******************************for *************************************************** */
// for(let i=1;i<10;i++)
// {
//     console.log(i);
// }

//**************continue ********* break************************************ */

//*****************************nested loop pattern*************************** */
// let rows = window.prompt("enter rows")
// let col = window.prompt("enter columns")
// sym = window.prompt("enter symbol")
// for(let i=1;i<=rows;i++)
// {
//     for(let j=1;j<=col;j++)
//     {
//         document.getElementById("rec").innerHTML+=sym;
//     }
//     document.getElementById("rec").innerHTML += "<br>";

// }

//******************8****function************************************************** */
// let names="sahi";
// function hello()
// {
//     console.log("hello world");
//     console.log("hello world",names);
//     console.log("hello world");

// }
// hello();
// hello();

//************************return************************** */
// let a,b,recarea;
// a=window.prompt("enter a:")
// b=window.prompt("enter b:")
// function area()
// {
//     return a*b;
// }
// recarea=area();
// console.log("area is",recarea);

//***********************ternary operator***************** */

// let adult = checkAge(window.prompt("enter your age:"))
// console.log(adult)
// function checkAge(age)
// {
//     if(age>=18)
//     return "eligible";
//     else
//     return "not eligible";
// }

//**************let = varaiable has  to block scope{}**good********** */
//**************var = varaiable has  to func scope(){}************ */

//***************************TEMPLATE LITERALS******************** */
// let user="bro";
// let items=3;
// let total=100;

// console.log("Hello",user);
// console.log("you have",items,"items");
// console.log("your total is",total);

// console.log(`Hello ${user}`);
// console.log(`you have ${items} items`);
// console.log(`your total is ${total}`);

// let text=`Hello ${user}<br>
// you have ${items} items<br>
// your total is ${total}<br>`
// // console.log(text);
// document.getElementById("lab").innerHTML = text;

//************toLocaleString()******************************* */

//***********Number Guessing Game ***************************************************************************/
// const guessnum = Math.floor(Math.random()*10+1);
// let guessess = 0;
// document.getElementById("sub").onclick = function()
// {
//     if(document.getElementById("num").value==guessnum)
//     {
//         alert(`you are correct and did it in ${guessess} trails`);

//     }
//     else if(document.getElementById("num").value<guessnum)
//     alert("too short!!!!!!!!!")
//     else
//     alert("too long!!!!!!!!!")
//     guessess++;

// }

//**************************************temperature changer ******************************************8888 */
// document.getElementById("sub").onclick = function()
// {
//     let tem = document.getElementById("temp").value;
//     if(document.getElementById("celcius").checked)
//     {
//         document.getElementById("new").innerHTML = toCelcius(tem)+"*C";
//     }
//     else if(document.getElementById("farenheit").checked)
//     {
//         document.getElementById("new").innerHTML = toFarenheit(tem)+"*F";
//     }
//     else
//     {
//         alert(`please select anyhting below`);
//     }
// }
// function toCelcius(t)
// {
//     return (t-32)*(5/9);
// }
// function toFarenheit(t)
// {
//     return t*9/5+32;
// }

//***********************************ARRAY****************************************************************** */

// let names=["sahi","chinni","prasad","madhuri"];
// console.log(names);
// console.log(names[2]);
// names.push("ram");
// console.log(names);
// names.pop();
// console.log(names);
// names.unshift("ram");
// console.log(names);
// names.shift();
// console.log(names);
// console.log(names.length);
// console.log(names.indexOf("ram"));
// console.log(names.indexOf("prasad"));

//**********************ITERATION OF ARRAY***************************8888888888888888888888********************** */

// let names=["sahi","chinni","prasad","madhuri"];
// // for(let i=0;i<names.length;i++)
// // console.log(names[i]);

// for(let name of names)
// console.log(name);

//*********************SORTING OF ARRAY****************************************** */
 
// let names=["sahi","chinni","prasad","madhuri"];
// names=names.sort();
// console.log(names);
// names=names.sort().reverse();
// console.log(names);

//********************2D ARRAY**************************************** */

// let fruits=["apple","banana"];
// let veg=["carrot","potatao"];
// let groceroy = [fruits,veg];
// for(let list of groceroy)
// {
//     for(let food of list)
//     {
//         console.log(food);
//     }
// }

/***********************SPREAD OPERATOR(...unpacks the element)******************************* */

// let names=["sahi","chinni","prasad","madhuri"];
// console.log(...names[0]);
// let fruits=["apple","banana"];
// names.push(...fruits);
// console.log(names);

// let numbers=[0,1,2,3,4,56,2,5,7];
// console.log(Math.max(...numbers))

/*************RESET PARAMETERS (packs arguments into array)************************** */

// console.log(sum(1,2));
// console.log(sum(1,2,5));
// console.log(sum(1,2,5,72,3));

// function sum(...numbers)
// {
//     total=0;
//     for(let i of numbers)
//     {
//         total+=i;
//     }
//     return total;
// }

/****************CALL BACK *(a function passed as an argument to another function)******************* */

// sum(2,4,displayDOM);
// function sum(x,y,callBack)
// {
//     let total = x + y;
//     callBack(total);
// }
// function displayConsole(output)
// {
//     console.log(output);
// }
// function displayDOM(output)
// {
//     document.getElementById("lab").innerHTML = output;
// }

/*********************array.forEach()*********************************** */

// let fruits = ["apple","orange","kiwi"];
// fruits.forEach(capitalize);
// fruits.forEach(print);

// function capitalize(fruit, index, fruits)
// {
//     fruits[index] = fruit[0].toUpperCase() + fruit.substring(1);
// }
// function print(fruit)
// {
//         console.log(fruit);
// }

/********************array.map() (access once for ele of array & create new array)*************************************** */

// let numbers=[1,2,3,4,5];
// let squares = numbers.map(add);
// squares.forEach(ele=>console.log(ele))
// numbers.forEach(ele=>console.log(ele))

// function add(ele)
// {
//     return ele+5;
// }

/***************array.filter() (passess new array which passed the condition)*******************888 */

// let numbers=[1,2,3,4,5];
// newarray=numbers.filter(passCon);
// // numbers.forEach(ele=>console.log(ele))
// newarray.forEach(ele=>console.log(ele))

// function passCon(ele)
// {
//     if(ele%2==0)
//     return ele;
// }

/***************array.reduce() (total)reduces an array into single value*************************************** */

// let numbers=[1,2,3,4,5];
// let total = numbers.reduce(sum);
// console.log(total);

// function sum(total,ele)
// {
//     return total+ele;
// }

/**********************sort an array ********************************* */

// let numbers = [8,42,6,2,1];
// numbers.sort(ascending);
// numbers.forEach(ele=>console.log(ele))

// function ascending(x,y)
// {
//     return x-y;
// }
// function descending(x,y)
// {
//     return y-x;
// }

/****************anonymous function / function expression-- function without name***************/

// let greet = function()
// {
//     console.log("Hello!!!!!");
// }
// greet();
// greet();

/*************************ARROW FUNCTION************************************************************************************************* */

// let greet =() =>console.log("Hello");
// greet();

// let greet = user =>console.log(`Hello ${user}!!!!!!!!`);
// greet("sahi");

// let greet = (ele,user) =>console.log(`${ele} you ${user}!!!!!!!!`);
// greet("Thank","sahi");
// greet("Love","sahi");

// let sum = (x,y) => x+y //no need of return
// console.log(sum(3,4));

// let numbers = [8,42,6,2,1];
// numbers.sort((x,y)=> x-y); //ascending
// numbers.sort((x,y)=> y-x);  //descending
// numbers.forEach(ele=>console.log(ele))

/* ************* COUNTER :::::: INCREASE ::::: DECREASE :: RESET**************************** */
// let c = 0;
// document.getElementById("increase").onclick = function()
// {
//     c++;
//     document.getElementById("num").innerHTML=c;
// }
// document.getElementById("decrease").onclick = function()
// {
//     c--;
//     document.getElementById("num").innerHTML=c;
// }
// document.getElementById("reset").onclick = function()
// {
//     c=0;
//     document.getElementById("num").innerHTML=c;
// }

/*******************Nested function() function inside another , the inner is hidden out side of outer**************************** */

// let user = "sahi";
// login();

// function login()
// {
//     displayUser();
//     function displayUser()
//     {
//         console.log(`Welcome ${user}`);
//     }
// }

/***********************Map (key-value pair)*******************************8 */

// const store = new Map([["jeans",20],["socks",40]]);

// console.log(store.get("jeans"));
// console.log(store.set("hat",10));
// store.delete("hat");
// console.log(store.has("hat"));
// console.log(store);
// store.forEach((value,key)=> console.log(`${key}-${value}`));

/*******************OBJECT*********************************************************** */

// const car = 
// {
//     model:"ferrari",
//     color:"red",
//     year:2020,
//     drive:function()
//     {
//         console.log("car is running");
//     }
// }
// console.log(car.model,car.year);
// car.drive();
// car.year = 2023;
// console.log(car.model,car.year);

/********************this************************************************************ */


// const car = 
// {
//     model:"ferrari",
//     color:"red",
//     year:2020,
//     drive:function()
//     {
//         console.log(`${this.model} car  is running`);
//     }
// }
// car.drive();

/*****************************class , constructor , static **************************************** */

// class Man{
//     static runCount=0;
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     run()
//     {
//         console.log(`${this.name} is running`);
//         Man.runCount++;
//     }
//     stop()
//     {
//         console.log(`${this.name} is stopped`);
//         Man.runCount--;
//     }
// }
// const player1 = new Man("ravi",20);
// const player2 = new Man("ramu",25);
// const player3 = new Man("suri",22);
// const player4 = new Man("apu",23);


// player1.run();
// player2.run();
// player3.run();

// console.log(Man.runCount);
// player1.stop();
// console.log(Man.runCount);

/********************Inheritance******************************************** */

// class Animal
// {

//     eat()
//     {
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep()
//     {
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal{
//    name="rabbit";
// }
// class Elephant extends Animal{
//    name = "ele";
// }
// const rabbit = new Rabbit();
// const elephant = new Elephant();
// rabbit.eat();
// elephant.sleep();

/**********************************super******************************************************** */

// class Animal{
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name,age,runSpeed)
//     {
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }s
// }
// class Fish extends Animal
// {
//     constructor(name,age,swimSpeed)
//     {
//         super(name,age);
//         this.swimSpeed=swimSpeed;
//     }
// }
// const rabbit = new Rabbit("rabbit",1,10);
// const fish = new Fish("fish",2,5);
// console.log(rabbit.name);
// console.log(fish.age);

/********************get        set***************************************************************88888 */

// class Car{
//     constructor(power)
//     {
//         this._power= power;
//     }
//     get power()
//     {
//         return this._power+"hp";
//     }
//     set power(power)
//     {
//         this._power = power;
//     }
// }
// let car = new Car(475);
// console.log(car.power);
// car.power = 20;
// console.log(car.power);

/********************************************passing objects***************************************************** */

// class Car{
//     constructor(name,_color,year)
//     {
//         this.name = name;
//         this.color = _color;
//         this.year = year;

//     }
// }
// const car1 = new Car("ferrari","red",2023);
// const car2 = new Car("benz","pink",7391);
// displaydetails(car1);

// changecolor(car2,"red")
// displaydetails(car2);


// function displaydetails(car)
// {
//     console.log(car.name);
//     console.log(car.color);
//     console.log(car.year);
// }
// function changecolor(car,color)
// {
//     car.color = color;
// }

/****************************Array of objects********************************************************** */

// class Car{
//     constructor(name,_color,year)
//     {
//         this.name = name;
//         this.color = _color;
//         this.year = year;

//     }
//     drive()
//     {
//         console.log(`${this.name} is driving`);
//     }
// }
// const car1 = new Car("ferrari","red",2023);
// const car2 = new Car("benz","pink",7391);

// const cars = [car1, car2];
// console.log(cars[0]);
// console.log(cars[0].name);
// startRace(cars);

// function startRace(cars)
// {
//     for(let car of cars)
//     {
//         car.drive();
//     }
// }

/*************************anonymous object (object without name)****************************************** */


// class Car{
//     constructor(name,_color,year)
//     {
//         this.name = name;
//         this.color = _color;
//         this.year = year;

//     }
//     drive()
//     {
//         console.log(`${this.name} is driving`);
//     }
// }

// const cars = [new Car("ferrari","red",2023), new Car("benz","pink",7391)];
// console.log(cars[0]);
// console.log(cars[0].name);
// cars.forEach(car=>console.log(`${car.name} ${car.color} ${car.year}`));

/**********************************error************************************************** */

// try{
//     let x = window.prompt("Enter a number");
//     x = Number(x);
//     if(isNaN(x))
//     {
//         throw "please enter a number only!";
//     }
//     else if(x=="")
//     {
//         throw "please enter a number";

//     }
//     console.log(`${x} is a number`);
// }
// catch(error)
// {
//     console.log(error);
// }
// finally
// {
//     console.log("this always executes!!!!")
// }

/********************setTimeout() milliseconds = doesn't pause execution****************************** */
/*******3000 ms = 3 sec */

// setTimeout(yurekha,3000);
// let timer2 = setTimeout(happy,6000);
// let timer3 = setTimeout(birthday,9000,"sahi");

// function yurekha()
// {
//     alert("Yuerekha!!1");
// }
// function happy()
// {
//     alert("Happy");
// }
// function birthday(name)
// {
//     alert(`birthday ${name}`);
// }
// document.getElementById("but").onclick = function()
// {
//     clearTimeout(timer2);
//     clearTimeout(timer3);
//     alert(`i am sorry`);

// }

/*************************setInterval() invokes a function repeatedly after a ms************************************************************************* */

// let count = 0;
// let max = window.prompt("Enter a number");
// max = Number(max);
// document.getElementById("lab").innerHTML = max;
// let timer = setInterval(countDown,1000);

// function countDown()
// {
// document.getElementById("lab").innerHTML = max;
    
//     max--;

//     if(max<=0)
//     {
//         clearInterval(timer);
//         console.log("Go");
//     }
// }


// let count = 0;
// let max = window.prompt("Enter a number");
// max = Number(max);

// let timer = setInterval(countDown,1000);

// function countDown()
// {
//     console.log(max);
//     max--;

//     if(max<=0)
//     {
//         clearInterval(timer);
//         console.log("Go");
//     }
// }
// document.getElementById("start").onclick = function()
// {

// }
// document.getElementById("reset").onclick = function()
// {

//     clearInterval(timer);
//     timemin = 0;
//     timesec = 0;
//     document.getElementById("labmin").innerHTML = timemin;
//     document.getElementById("labsec").innerHTML = timesec;

// }

/***************************Date()************************************************** */

// let date  = new Date();
// let date  = new Date();
// let day = date.getDate();
// let days = date.getDay();
// let month = date.getMonth();


// console.log(day);
// console.log(days);
// console.log(month);
// console.log(date);

// date = date.toLocaleString();
// console.log(date);

// date.setFullYear(2003);
// date.setMonth(8);
// date.setDate(11);
// date.setHours(5);
// date.setMinutes(30);
// date.setSeconds(0);

// date = date.toLocaleString();

// document.getElementById("lab").innerHTML = date;

// formatDate(date);

// function formatDate(date)
// {
//     let day = date.getDate();
//     let year = date.getYear();
//     let month = date.getMonth();
//     retrun `${day} \ ${month} \ ${year}`;
// }

/**************************clock program************************************************************** */


// setInterval(formatDate,1000);
//  function formatDate()
//  {
//     let date = new Date();
    
//         let hour = date.getHours();
//         let min = date.getMinutes();
//         let sec =  date.getSeconds();
//         let ampm = hour>=12 ? "pm":"am";

//         hour = (hour%12)||12;
    
//         hour = hour<=9 ? "0"+hour:hour;
//         min = min<=9 ? "0"+min: min;
//         sec = sec<=9 ? "0"+sec: sec;



//         document.getElementById("lab").innerHTML =`${hour} : ${min} : ${sec} ${ampm}`;
//     }

/************************************synchornous(step by step,start now,finish now) and asynchronous code(tasks take time , start now ,fnish later)******************** */

//  console.log("hello");
//  console.log("start");
//  console.log("end");

// console.log("hello");
//  setTimeout(()=>console.log("start"),2000);
//  console.log("end");

/********************************************console.time() applys for synchornous********************************* */

// console.time("Response Time");

// // alert("hello");
// setTimeout(()=> console.log("hello"),4000);

// console.timeEnd("Response Time");

/*************************************promise (promise for the asynchronous)*************************************************** */

// const promise = new Promise((resolve,reject)=>{
//     let workdone = true;
//     if(workdone)
//     {
//         resolve("work done!!!!!!!!")
//     }
//     else{
//         reject("work not done...sorry!!!!!!!")
//     }
// });

// promise.then((message)=> console.log(message)).catch((message)=> console.log(message));

// const promise = new Promise(resolve => {
//     setTimeout(resolve,5000);

// });
// promise.then(()=>console.log("Thanks for wating!!!"))

// const wait = time => new Promise(resolve => {
//     setTimeout(resolve,time);

// });
// wait(3000).then(()=>console.log("Thanks for wating!!!"));

/**********************************async**************************************************************** */

// async function isWorkDone(){
//     let workdone = false;
//     if(workdone)
//     {
//         return ("work done!!!!!!!!")
//     }
//     else{
//         throw ("work not done...sorry!!!!!!!")
//     }
// }

// isWorkDone().then((message)=> console.log(message)).catch((message)=> console.log(message));

/*******************await = makes an async function wait for a Promise */

// async function isWorkDone(){
//     let workdone = false;
//     if(workdone)
//     {
//         return ("work done!!!!!!!!")
//     }
//     else{
//         throw ("work not done...sorry!!!!!!!")
//     }
// }
// async function startProcess()
// {
//     try{
//         let message = await isWorkDone();
//         console.log(message);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }
// startProcess();

/*****************************import module*********************************************************************************** */

// import{PI,getCircumference, getArea} from "./math_util.js"

// console.log(PI)

// let c = getCircumference(10);


// import * as math from "./math_util.js"

// console.log(math.PI)

// let c = math.getCircumference(10);
// console.log(c)

/********************************DOM******************************************* */

// console.log(document);
// console.dir(document);
// console.log(document.title)
// console.log(document.URL)
// document.title = "New title";
// document.location = "http://www.google.com";

// document.body.style.backgroundColor = "red";
// document.getElementById("myDiv").innerHTML = "Hello";

/**************************restarunt search by id class tag ***************************************************************************** */

// let element = document.getElementById("mytitle");               ////finding html by id
// element.style.backgroundColor = "lightgreen"

// let fruits = document.getElementsByName("fruits");              ////finding html by name
// fruits.forEach((fruit)=> {
// if(fruit.checked)
// console.log(fruit.value);
// }
// )

// let veggies = document.getElementsByTagName("li");              ////finding html by tagname
// veggies[2].style.backgroundColor = "lightgreen"

// let desserts = document.getElementsByClassName("desserts");              ////finding html by calss name
// desserts[2].style.backgroundColor = "lightgreen"

// let element = document.querySelector("#mytitle");
// element.style.backgroundColor = "lightgreen"


// let element = document.querySelector(".desserts");
// element.style.backgroundColor = "lightgreen"


// let element = document.querySelector("li");
// element.style.backgroundColor = "lightgreen"


// let element = document.querySelector("[for]");
// element.style.backgroundColor = "lightgreen"
    
// let fruits = document.querySelectorAll("li");              ////finding html by name
// fruits.forEach((fruit)=> {
//     fruit.style.backgroundColor = "lightgreen"
// }
// )


/**************************family and children**************************************************************** */

// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)

// let element = document.body;
// element.style.backgroundColor = "yellow"

// let child = element.firstElementChild;
// child.style.backgroundColor =  "lightblue"

// let childl = element.lastElementChild;
// childl.style.backgroundColor =  "lightblue"         //it is chossing script


// let element = document.querySelector("#veggies");
// let parent = element.parentElement;
// parent.style.backgroundColor = "lightpink";

// let nextele = element.nextElementSibling;
// nextele.style.backgroundColor = "yellow"

// let preele = element.previousElementSibling;
// preele.style.backgroundColor = "white"

// let child = element.children[2];
// child.style.backgroundColor =  "lightblue"

// let children = Array.from(element.children);
// children.forEach((child)=>
// {
//     child.style.backgroundColor =  "red"
// }
// )


/**************************************add/ change html elements*************************************/

//.innerHTML (is vunerable to xss attacks)
//.textContent(more secure)

// const name = document.createElement("h1");
// name.textContent = window.prompt("enter ur name");
// document.body.append(name);

// const myList = document.querySelector("#fruits");
// let newitem = document.createElement("li");
// newitem.textContent = "kiwi";
// // myList.append(newitem)
// // myList.prepend(newitem)

/***********************************changes to css ************************************************************* */

// let title = document.getElementById("mytitle")

// title.style.backgroundColor = "yellow";
// title.style.border = "2px solid red";
// title.style.textAlign = "center";

/************************************event************************************************************88 */


// const ele = document.getElementById("but");
// const ele = document.body;
// const ele = document.getElementById("text");
// const ele = document.getElementById("mydiv");


// ele.onclick = clicked;
// ele.onload = clicked;
// ele.onchange = clicked;
// ele.onmouseover = changecolor;
// ele.onmouseout = orginalcolor;
// ele.onmousedown = changecolor;
// ele.onmouseup = orginalcolor;

// function clicked()
// {
//     window.alert("you clicked");
// }
// function changecolor()
// {
//     ele.style.background = "pink";
//     document.body.style.backgroundColor = "brown"
// }
// function orginalcolor()
// {
//     ele.style.background = "brown";
//     document.body.style.backgroundColor = "pink"

// }

/************************************.addEventListener(event,function,useCapture(true or false))***************************************** */

// const mydiv = document.getElementById("mydiv");
// mydiv.addEventListener("mouseover",changecolor);
// mydiv.addEventListener("mouseout",originalcolor);

// function changecolor()
// {
//     mydiv.style.background = "red";
// }
// function originalcolor()
// {
//     mydiv.style.background = "lightgreen";
// }

/******************************show and hide HTML elements****************************************************************************************** */

// const but = document.querySelector("#but");
// const im = document.querySelector("#im");

// but.addEventListener("click",()=>
// {
//     if(im.style.display=="none")
//     {
//         im.style.display="block";
//     }
//     else
//     {
//         im.style.display="none";
//     }
// })
// but.addEventListener("click",()=>          //place is reserved
// {
//     if(im.style.visibility=="hidden")
//     {
//         im.style.visibility="visible";
//     }
//     else
//     {
//         im.style.visibility="hidden";
//     }
// })

/*************************************************************************************************************************** */


// const mydiv = document.getElementById("mydiv");
// let x=0
// let y=0;
// window.addEventListener("keydown",move);
//  function move(event)
//  {
//     switch(event.key)
//     {
//         case "ArrowDown":
//             y+=5;
//             mydiv.style.top = y+"px";
//             break;
//         case "ArrowUp":
//             y-=5;
//             mydiv.style.top = y+"px";
//             break;
            
        
//         case "ArrowRight":
//             x+=5;
//             mydiv.style.left = x+"px";
//             break;
//             case "ArrowLeft":
//             x-=5;
//             mydiv.style.left = x+"px";
//             break;
//     }
//  }

/*********************************simple animations********************************************************88 */

// const mybutton = document.getElementById("mybutton");
// const mydiv = document.getElementById("mydiv");

// mybutton.addEventListener("click",begin);

// function begin()
// {
//     let timer = null;
//     let x=0,y=0;
    
//     timer = setInterval(start,2);

//     function start()
//     { 
//         if(x>=400 )
//         {
//             clearInterval(timer);
//         }
//         else{
            
//             x+=1;
//             mydiv.style.left = x+"px";
            
//         }
//     }
// }

/****************canvas API = a means for drawing graphics used for animations, graphics, data visuality************************************************************* */

// let canvas = document.getElementById("mycanvas");
// let context = canvas.getContext("2d");

// context.strokeStyle = "purple";
// context.lineWidth = 5
// context.beginPath();
// context.moveTo(0,0);
// // context.lineTo(500,500);
// context.lineTo(250,250);
// context.lineTo(250,500);
// context.moveTo(500,0);
// context.lineTo(250,250);

// context.stroke();


//DRAW TRIANGLE

// context.fillStyle = "yellow"
// context.lineWidth = 5
// context.strokeStyle = "red";

// context.beginPath();
// context.moveTqo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);
// context.lineTo(250,0);

// context.stroke();
// context.fill();

//DRAW RECTANGLE

// context.fillStyle = "yellow"
// context.fillRect(0,0,250,250)
// context.strokeStyle = "black"
// context.strokeRect(0,0,250,250);

// context.fillStyle = "red"
// context.fillRect(0,250,250,500)
// context.strokeStyle = "black"
// context.strokeRect(0,250,250,500);

// context.fillStyle = "blue"
// context.fillRect(250,250,250,500)
// context.strokeStyle = "black"
// context.strokeRect(250,250,250,500);

// context.fillStyle = "green"
// context.fillRect(250,0,500,250)
// context.strokeStyle = "black"
// context.strokeRect(250,0,500,250);

//DRAWW CIRCLE

// context.fillStyle = "pink"
// context.beginPath();
// context.arc(250,250,100,0,2*Math.PI)
// context.stroke();
// context.fill();

//DRAW TEXT
// context.font ="50px"

// context.fillText("sahi!!!!!",100,100)

/**********************window*********************************************************************** */

// console.dir(window)
// console.log(window.innerHeight)
// console.log(window.innerWidth)
// console.log(window.scrollX)
// console.log(window.scrollY)
// console.log(window.location.href)
// // window.location.href = "https://google.com"
// console.log(window.location.hostname)
// console.log(window.location.pathname)
// const mybutton = document.getElementById("mybutton");
// mybutton.addEventListener("click",()=>window.open())
// mybutton.addEventListener("click",()=>window.close())
// mybutton.addEventListener("click",()=>window.print())

// window.alert("hello")
// window.confirm("press ok!!!")
// let age = window.prompt("enter age")
// if(age<18)
// {
//     window.alert("you are not eligible")
//     window.close()
// }
// else
// {
//     window.confirm("you are eligible! do u want to continue")
// }

/**********************cookie - a small text file stored on your computer used to remember information about yhe user in name value pairs**************************** */

// console.log(navigator.cookieEnabled)
// document.cookie = "firstName=Deepika; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"
// document.cookie = "lastName=null; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"
// document.cookie="firstName = null"
// console.log(document.cookie)

/*********************8stopwatch****************************************************************************************************************************************************** */

// let timeDisplay = document.getElementById("timeDisplay");
// let start = document.getElementById("start");
// let stop =document.getElementById("stop");
// let reset = document.getElementById("reset");

// let timePaused = true;
// // let hours = 0;
// let seconds = 0;
// let minutes = 0;
// let interval ;
// let hoursStr,minutesStr,secondsStr;

// start.addEventListener("click",()=>
// {
//     if(timePaused)
//     {
//         timePaused = false;
//         updateTime();
//     }
// });
// stop.addEventListener("click",()=>
// {
//     timePaused = true;
//     clearTimeout(interval);
// });
// reset.addEventListener("click",()=>
// {
//     hours = 00; 
//     seconds = 00; 
//     minutes = 00;
//     timePaused = true;
//     timeDisplay.textContent = `0${hours}:0${minutes}:0${seconds}`;
//     clearTimeout(interval);

// });

// function updateTime()
// {
//     if(seconds<60)
//     {
//         seconds++;
//     }
//     if(seconds==60)
//     {
//         seconds = 0;
//         minutes ++;
//     }
//     if(minutes == 60)
//     {
//         seconds = 0;
//         minutes = 0;
//         hours ++;
//     }
    
//     secondsStr = seconds < 10 ? "0" + seconds : seconds;
//     minutesStr = minutes < 10 ? "0" + minutes : minutes;
//     hoursStr = hours < 10 ? "0" + hours : hours;
    

//     timeDisplay.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
//     interval = setTimeout(updateTime,1000);
// }


