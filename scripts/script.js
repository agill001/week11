//  function greet (user,time="day"){
    
    
//    console.log("good " +time+user + " how are you?");
//  }


// instead of function u can use =>
// const greet = (user)=>{
    
//          console.log("hello " +user + " how are you?");
//      }

// let userName = prompt("who are you?")
// greet(userName);

// greet(" aarnav "," night ");



// function circlecalculate(radius){
//    let result = Math.PI*radius*radius
//     return result 
//  }

// let r = prompt("enter radius");
// let calcarea = circlecalculate(r).toFixed(2);
//  alert ("the area of a circle with radius "+r+" is "+calcarea)
 
//  let radiusParagraph = document.querySelector("#radius");
//  radiusParagraph.textContent +=r;
//  let areaParagraph = document.querySelector("#result");
//  areaParagraph.textContent += calculatedArea

let shoppingItems = ["cheese","bread","green pepper"];
// DOM mode for <ul>
const shoppingListElement = document.querySelector(".shopping");
function populateList(arr)
{
    for (let item of arr){
        let listItem = document.createElement("li");
        listItem.textContent = item;
        shoppingListElement.appendChild(listItem);
    } // for (let i = 0); i < arr.length; i++ ) // arr.forEach()
    
}

populateList(shoppingItems);

function changeListstyle(listItem){
    shoppingListElement.classList.remove("circleList");
    shoppingListElement.classList.add("squareList");
}

changeListstyle()

function makegreen()
{
    const allListItems = document.querySelectorAll(".shopping li");
    for ( let i =0; i<allListItems.length; i++){
        if (allListItems[i].textContent.includes("green"))
        {
            allListItems[i].classList.add(".green");
        }
    }
}

makegreen();