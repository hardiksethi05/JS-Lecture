// let getData= new Promise((resolve,reject)=>{
//     let A1=false;
//     if(A1){
//         resolve("Success")
//     }
//     else{
//         reject("Something Wrong")
//     }
// })

// console.log(getData)


// let A= new Promise((resolve,reject)=>{
//     let B=95;
//     if(B>=95){
//         resolve("Success")
//     }
//     else{
//         reject("Something Wrong")
//     }
// })

// console.log(A)




function bankdetail(amt){
    return new Promise((resolve,reject)=>{
        if(amt>1000){
            console.log("Success")
        }
        else{
            console.log("Something Wrong")
        }

        
    })
}
bankdetail(500)




function bank(amt){
    return new Promise((resolve,reject)=>{
        if(amt>1000){
            console.log("Green")
        }
        else{
            console.log("Red")
        }

        
    })
}
bank(5000)



.then((res)=>console.log(res))
.catch((err)=>console.log(err))




function func(a){
    return new Promise((resolve,reject)=>{
        if(a>10){
            resolve("Success")
        }
        else{
            reject("Wrong")
        }
    })
}
func(3)

.then((a1)=>console.log(a1))
.catch((a2)=>console.log(a2))


function Deleivery(amount){
    return new Promise((resolve,reject)=>{
        if(amount>200){
            setTimeout(() => {
                resolve("Deleivery Will be Done")
                
            }, 3000);
        }
        else{
            reject("Delivery Cancel")
        }

    })
}
Deleivery(500).then(e => console.log(e)).catch(e => console.log(e))




const User = async()=>{
    try{
        let A= await fetch("https://dummyjson.com/products")
        let B= A.json()
        console.log(B)
    }
    catch(err){
        console.log("Error",err)
    }
}
User();


const User1=async()=>{
    try{
        let A1=await fetch("https://dummyjson.com/products")
        let B1=A1.json()
        console.log(B1)
    }
    catch(errr){
        console.log("ERROR",errr)

    }
}

User1()




function User2(A){
    return new Promise((resolve,reject)=>{
        
        if(A>10){

            setTimeout(() => {
                resolve("SUCCESS")

            }, 4000);
        }
        else{
            reject("DANGER")
        }
    })
}
User2(11).then(a=>console.log(a)).catch(e=>console.log(e))


const functio=async()=>{
    try{
       
        let A4=await fetch("https://dummyjson.com/products")
        let B4= A4.json()
        console.log(B4)
    }
    catch{
        console.log('ERROR')

    }

}
functio();
