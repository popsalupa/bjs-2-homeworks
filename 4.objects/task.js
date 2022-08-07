function Student(name, gender, age) {
// Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}
  let student3 = new Student ("Vasy", "flame", "20");
  let student4 = new Student ("vasiliya", "male", "21");

Student.prototype.setSubject = function (subjectName) {
  //ваш код
    this.subject = subjectName;
  }
// ваш код для остальных методов
  let marks;
  Student.prototype.addmark = function (mark) {
    this.mark = marks;
    if(this.marks === undefined){ 
      marks = 1; 
      } else  {
      marks = 2;
      } else {
      marks = 3;
      }  else {
      marks = 4;
      }  else {
      marks = 5;
      } 
  }

console.log (student3);
console.log (student4);