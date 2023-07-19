export default
    //you functions logic here
    /*Write a function called countAllPaarl that takes a parameter 
string with registration numbers separated with commas and 
returns the number of registration numbers in the string for 
Paarl. Remember Paarl registration numbers starts with CJ.*/

function countAllPaarl(regNo){
    var paarl = regNo.split(',');
    var count = 0;
    for (let i = 0; i < paarl.length; i++){
    
      if (paarl[i].includes('CJ')){
          count ++;
          }
    }
    return count;
  }
  
  console.log(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
