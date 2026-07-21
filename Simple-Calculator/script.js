 function calculate() {
       
            let a = parseFloat(document.getElementById("num1").value);
            let b = parseFloat(document.getElementById("num2").value);
            let op = document.getElementById("operation").value;
            let res;

            switch (op) {
                case "sum":
                    res = a + b;
                    break;

                case "difference":
                    res = a - b;
                    break;

                case "product":
                    res = a * b;
                    break;

                case "quotient":
                    res = b===0? "Cannot be Divide by Zero" : a / b;
                    break;

                case "remainder":
                    res = b===0? "Cannot be Divided by Zero" : a % b;
                    break;

                case "power":
                    res = a ** b;
                    break;

                case "square":
                    res = a * a || b * b ;
                    break;

                case "sqrt":
                    res = Math.sqrt(a) || Math.sqrt(b);
                    break;
            }

            document.getElementById("result").innerHTML = "<b>Result</b>: " + res;
            document.getElementById("result").style.display="block"
        }