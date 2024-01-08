// async function test(){
//     console.log("2: Message");
//     console.log("3: Message");
//     await console.log("4: Message");
//     console.log("5: Message");
// }

// console.log("1: Message");
// test();
// console.log("6: Message");

async function data(){
    const dataFetch = await fetch("D:\Aptech\Advance Javascript\jsondata.json");
    const user = await dataFetch.json();
    return user;
};

data()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})