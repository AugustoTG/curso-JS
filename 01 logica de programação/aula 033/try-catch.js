try{
    console.log(ice); // é executada quando não há erros
}catch(err){
    console.log("Manutenção!"); // é executada quando há erros
}

function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number' ){
        throw new ReferenceError('x e y devem ser numeros');
    }
    return x+y;
}
try{
    console.log(soma(1,2));
    console.log(soma("1",2));
}catch(err){
    console.log("Alguma coisa mais amigável para o usuário.");
}

try{
    console.log("abrir arquivo");
    console.log("manipulei o arquivo"); 
    console.log(a); 
    console.log("fechei o arquivo"); 
}catch(err){
    console.log("Manutenção!"); // é executada quando há erros
}finally{
    console.log("Finally: sempre sera executado independente se tem erro ou não"); // caso vc erre em algo vc pode fechar o arquivo pelo finally, em outras palavras ele pode ser executado para não derrubar a aplicação.
}

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }
    if(!data){
        data = new Date ();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour : '2-digit',
        minute : '2-digit',
        second : '2-digit',
        hour12 : false
        });
}
try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data);
    console.log(hora);
} catch(err){ 
    //tratar erro
    //console.log(err);
} finally {
    console.log("tenha um bom dia")
}
