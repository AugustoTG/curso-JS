function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random()* (max - min) + min)
}
 function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== "string"){
                reject('Bad Value!')
                return
            }
            resolve(msg);
        }, tempo)
    }) 
 }

 // promise.all promise.race promise.resolve promise.reject
 const promises = [/*'primeiro valor',*/
    esperaAi('Promise 1', rand(1,3)),
    esperaAi('Promise 2', rand(1,3)),
    esperaAi('Promise 3', rand(1,3)),
    esperaAi(1000, rand(1,3)),
    /*'outro valor'*/
];

// Promise.all(promises).then(function(valor){
//     console.log(valor)
// }).catch(function(erro){
//     console.log(erro);
// });

// Promise.race(promises).then(function(valor){
//     console.log(valor)
// }).catch(function(erro){
//     console.log(erro);
// });
