// console.log("Hardik")
// // console.log("Rahul")
// setTimeout(()=>{
//     console.log("Rahul")
// },3000)
// console.log("Sherya")



function User(SharePrice){
    return new Promise((resolve,reject)=>{
        if(SharePrice>100){
            setTimeout(() => {
                resolve("ShareMarket UP")

                
            }, 3000);
        }
        else{
            reject("ShareMarket Down")
        }
    })

}
User(101).then(yye=>console.log(yye)).catch(e=>console.log(e))



const A=async()=>{
    try{
        let a= await fetch("https://dummyjson.com/products")

        let b=a.json();
        console.log(b)

    }
    catch(error){
        console.log("ERROR",error)
    }
}
A();


function B2(a){
    console.log(a)

}
B2(10);




