/* There are four operations and three inputs 
to the program. The first input is the first number,
the second input is the second no, and the last input
is the operation to be performed on the two former 
inputs. Note that addtion is entered as +, subtraction 
is entered as -, multiplication is entered as *, and 
division is entered as /   */

function calc(a, b, op){
  if (op == "+"){
    var res = (+a) + (+b);
    return res;
    }
  else if (op == "-"){
    var res = a - b;
    return res;
    }
  else if (op == "*"){
    var res = a * b;
    return res;
    }
  else{
    var res = a / b;
    return res;
    }
  }
a = prompt("Enter your first input");
b = prompt("Enter your second input");
op = prompt("Enter the operation you want to perform");
document.write(calc(a, b, op));

