function prom(complete){
    return new Promise(function (resolve, reject){
        if(complete){
            resolve("Success");
    
        }else{
            reject("failure");
        }
    })
}

let onFullfilment=(result) => {
    console.log(result);
}

let onRejection = (error) => {
    console.log(error);
}

prom(true).then(onFullfilment).catch(onRejection)
