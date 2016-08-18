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
    var a = 1000;
    var b = 900;
    var c = 500;
    var d = 400;

    for (check = 1000; number > 0; check = check/10) {
      if(Math.floor(number/check) >= 1) {
        var i = 1;
        do{
          result.push(a);
          ++i;
        }while(i<=(number/check));

        number = number%check;
      }
      if(Math.floor(number/(check/10)) === 9){
        result.push(b);
        number = number%(check-(check/10));
      }
      if(Math.floor(number/(check/2)) >= 1) {
        var i = 1;
        do{
          result.push(c);
          ++i;
        }while(i<(number/(check/2)));
        number = number%(check/2);
      }
      if(Math.floor(number/(check/10)) === 4){
        result.push(d);
        number = number%((check/2)-(check/10));
      }
      a = a/10;
      b = b/10;
      c = c/10;
      d = d/10;
    }
    return result;
  };

  function converter(input) {
    input = input.join("")

    input = input.replace(/1000/g, "M");
    input = input.replace(/900/g, "CM");
    input = input.replace(/500/g, "D");
    input = input.replace(/400/g, "CD");
    input = input.replace(/100/g, "C");
    input = input.replace(/90/g, "XC");
    input = input.replace(/50/g, "L");
    input = input.replace(/40/g, "XL");
    input = input.replace(/10/g, "X");
    input = input.replace(/9/g, "IX");
    input = input.replace(/5/g, "V");
    input = input.replace(/4/g, "IV");
    input = input.replace(/1/g, "I");

    return input;
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
    output = converter(output);

    alert(output);
    event.preventDefault();
  });
});
