function Calculate()
 {
 let a = eval( document.forms.figure.a.value);
 let b = eval( document.forms.figure.b.value);
 let c = eval( document.forms.figure.c.value);
 let d = b * b - 4 * a * c;
 if( d < 0) 
 {
    alert("Дискриминант меньше нуля");
 }
 else if(a==0){
    alert("Введен неправильный коэффициент");
 }
 else
 {
    x1 = (-b+Math.sqrt(d))/(2*a);
    x2 = (-b-Math.sqrt(d))/(2*a);
    alert(`D = ${d},x1 = ${x1}, x2 = ${x2}`);
 }
 }

