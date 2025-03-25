// setTimeout(() => {
//   console.log("Data1");
//   setTimeout(() => {
//     console.log("Data-2");
//     setTimeout(() => {
//         console.log("Data-3");
//       setTimeout(() => {
//         console.log("Data-4");
//         setTimeout(() => {
//             console.log("Data-5");
//           setTimeout(() => {
//             console.log("Data-6");
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);



setTimeout(()=>{
     console.log("---1")
     setTimeout(() => {
        console.log("---2")
        setTimeout(() => {
            console.log("---3")
            setTimeout(()=>{
                console.log("---4")
            },1000)
        }, 1000);
     }, 1000);
},1000)

