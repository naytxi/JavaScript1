/*function mayus(name){
    let result ='';
    for( let i = 0; i < name.length; i++){
         result += name[i].toUpperCase();
    }
    return result.split('');
}
console.log(mayus('ana'));*/

function mayus(name){
    let result = name.toUpperCase();
    return result.split('');
}
console.log(mayus('ana'));

function number(word){
    let result = word.split(" ");
    return result.length;
}
console.log(number('Antonio Alberto Jesus'));

