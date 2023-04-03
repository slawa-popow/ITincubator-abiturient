


const modAlgoritms =  (function armstrongNumber(){

    function Algorithm(){
        if(this.constructor === Algorithm){
            throw new Error('ERROR: Должен быть переопределен.');
        }
    }
    Algorithm.prototype.calculate = function(value){
        throw new Error("ERR: function of Abstract");
        }

    // ----------------------------------------------------------
    //                 SomeAlgorithm для проверки   

    function SomeAlgorithm(){
        this.calculate = function(value){
            let x = [];
            for (let i = 0; i < 10; i++){
                x.push(`[${i}]: value * ${i} = ${value * i}`);
            }
            return x.join('\n');
        }
    }
    // ----------------------------------------------------------

    function NarcissAlgorithm(){
        this.calculate = function(value){
            return `VALUE * 50 = ${value * 50}`;
        }
    }


    NarcissAlgorithm.prototype = Object.create(Algorithm.prototype); 
    SomeAlgorithm.prototype = Object.create(Algorithm.prototype);

    
    let Calculater = function(algorithm){
        this.algorithm = algorithm;
        this.calc = function(value){
            return this.algorithm.calculate(value);
        } 
            
    }
    Calculater.prototype.setAlgorithm = function(algorithm){
        this.algorithm = algorithm;
    }

    
    function getCalculator(){
        return new Calculater(new NarcissAlgorithm());
    }


    var publicApi = {getCalculator};

    return publicApi;

})();


function narcissistic(value) {
    let result = modAlgoritms.getCalculator();
   
    return result.calc(value); 
}






