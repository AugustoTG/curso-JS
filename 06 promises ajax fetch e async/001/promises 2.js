
 function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== "string"){
            reject('Bad Value!')
            return
        }
        setTimeout(() =>{
            resolve(msg);
        }, tempo)
    }) 
 }

 // promise.all promise.race promise.resolve promise.reject
 const promises = ['primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    esperaAi(1000, 1000),
    'outro valor'
];

Promise.all(promises).then(function(valor){
    console.log(valor)
}).catch(function(erro){
    console.log(erro);
});