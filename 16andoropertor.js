//and or operator
let firstName="Deepak";
let age= 18;
if(firstName[0]==="D" && age>=18)
{
  console.log("if part exceuting")
}
else
{
  console.log("else part excuating")
}

let name2="rupak";
let age2 = 28;
if(name2 ==="r" || age2>=2)
{
  console.log("if part working");
}
else
{
  console.log("your are in else part");

}
 //and opertor return true when both expresion is true 
 //where as or opertor return true when only one expresion is true
 //t and t ->t, t and f-->f, f and t-> f, f and f->f
 //t or t-> t, t or f-> t, f or t -> t , f or f->f