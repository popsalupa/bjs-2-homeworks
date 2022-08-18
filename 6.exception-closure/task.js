function parseCount(value) {
  let result = Number.parseInt(value);

  if (Number.isNaN(result)) {
    const err = new Error('Невалидное значение');
    throw err;
  }

  return result;
}

function validateCount(value) {
    try {
        let result = parseCount(value);
        return result;
    } catch(error) {
        return(error);
    }
}


// triangle

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if(a + b < c || b + c < a || c + a <b) {
            const err = new Error('Треугольник с такими сторонами не существует');
            throw err;
        }
    }
 
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = this.getPerimeter()*0.5;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}
    function  getTriangle (first, second, thirtd) {
        try {
            return new Triangle(first, second, thirtd);
        } catch (error) {
            return new Object ({
                getPerimeter() {
                    return 'Ошибка! Треугольник не существует';
                },
                getArea() {
                    return 'Ошибка! Треугольник не существует';
                }
            });
        }
    }