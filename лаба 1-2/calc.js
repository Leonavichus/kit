function Calculate() {
   let a = document.forms.figure.a.value;
   let b = document.forms.figure.b.value;
   let c = document.forms.figure.c.value;
   let d = b * b - 4 * a * c;
   if (a == 0) {
      alert("Введен неправильный коэффициент");
   }
   else if (d < 0) {
      alert("Дискриминант меньше нуля");
   } 
   else {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      alert(`D = ${d},x1 = ${x1}, x2 = ${x2}`);
   }
}

