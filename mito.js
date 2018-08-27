
/*function saludar (){
    console.log('estoy saludando');
};
module.exports.saludar= saludar();*/
/*module.exports.saludar=function() {
    console.log('Hola estoy saludando');    
}*/
let subscriptores=100000;
module.exports = {
    sub:subscriptores,
    saludar:function()
    {
        console.log("hola estoy saludando");
    },
    sumar:(a,b)=>
    {
        return a+b;
    }


}