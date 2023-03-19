//create arrow function and assign to variable
const calculateGrade = () => {
//prompt user for input and assign to variable
    const response = prompt("Type grade: ");
//use if else statements to check conditionals
    if(response >= 79){
        alert("A");
    }else if(response >= 60 && response < 79){
        alert("B");
    }else if(response > 49 && response <= 59){
        alert("C");
    }else if(response > 40 && response <= 49){
        alert("D");
    }else{
        alert("E");
    }
      
}
calculateGrade()
//call function