$(document).ready(function() {

  function numberCheck(number) {
      if (number >= 4000) {
        return false;
      } else{
        return true;
      }
  };

  function translate(number) {
    var result = [];

    if(Math.floor(number/1000) >= 1) {

      var i = 1;

      do{
        result.push("M");
        ++i;
      }while(i<(number/1000));
      number = number%1000;
    }

    if(Math.floor(number/100) === 9){
      result.push("CM");
      number = number%900;
    }

    if(Math.floor(number/500) >= 1) {

      var i = 1;

      do{
        result.push("D");
        ++i;
      }while(i<(number/500));
      number = number%500;
    }

    if(Math.floor(number/100) === 4){
      result.push("CD");
      number = number%400;
    }

    if(Math.floor(number/100) >= 1) {
        var i = 1;
      do{
        result.push("C");
        ++i;
      }while(i<(number/100));
      number = number%100;
    }

    if(Math.floor(number/10) === 9){
      result.push("XC");
      number = number%90;
    }

    if(Math.floor(number/50) >= 1) {

      var i = 1;

      do{
        result.push("L");
        ++i;
      }while(i<(number/50));
      number = number%50;
    }

    if(Math.floor(number/10)>=4) {
      result.push("XL");
      number = number%40;
    }

    if(Math.floor(number/10) >= 1) {

      var i = 1;

      do{
        result.push("X");
        ++i;
      }while(i<(number/10));
      number = number%10;
    }

    if(Math.floor(number/1)>=9) {
      result.push("IX")
      number = number%9;
    }

    if(Math.floor(number/5) >= 1) {

      var i = 1;

      do{
        result.push("V");
        ++i;
      }while(i<(number/5));
      number = number%5;
    }

    if(Math.floor(number/1)>=4) {
      result.push("IV");
      number = number%4;
    }

    if(Math.floor(number/1) >= 1) {
      var i = 1;

      do{
        result.push("I");
        ++i;
      }while(i<(number/1));
      number = number%1;
    }

    
    return result;
  };

  $("#roman_translator").submit(function(event){
    var input = $("#number").val();
    var check = true;
    var output = [];

    check = numberCheck(input);

    if(check === false){
      alert("Sorry, that number's too high for Romans");
      document.getElementById("#roman_translator").reset();
    }

    output = translate(input);

    alert(output.join(""));

    event.preventDefault();
  });
});
