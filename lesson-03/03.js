// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let result;
function findLargest(number1, number2, number3) {
    
    if (number1 >= number2 && number1 >= number3) {
    result = number1; 
    } else if (number2 >= number1 && number2 >= number3) {
    result = number2; 
    } else {
            result = number3;
        }  
        console.log(result);
        
    }    
    findLargest(56, 87, 86)
    


