// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(number1, number2, number3) {
    let result;
    if (number1 >= number2 && number1 >= number3) {
    result = number1; 
    } else if (number2 >= number1 && number2 >= number3) {
    result = number2; 
    } else {
            result = number3;
        }  
        console.log(result);
        
    }    
    findLargest(1, 2, 3)
    


