// const A=document.getElementById("Hardik").innerText="Sethi";
// console.log(A)
// console.log(document.getElementById("Hardik").innerText="Sethi")


// function clickData(){
//     document.getElementById("Hardik").innerText="This is coming after clicking on button";
// }

const clickData=()=>{
    document.getElementById("Hardik").innerText="This is coming after clicking on button";

    
    


}

// const clickHereForData=()=>{
//     document.getElementsByClassName("a").innerText="Result"
// }

function clickHereForData() {
    let data =   document.getElementsByClassName("a")[0];
    data.innerText="Result";
}




// function clickHereForData() {
//     let data = document.getElementsByClassName("a");
    
//     // Loop through all elements with class "a"
//     for (let i = 0; i < data.length; i++) {
//         data[i].innerText = "Result"; // Change the text of each element
//     }
// }


function B(){
    document.getElementById("A").innerText="Bhoomika"

}