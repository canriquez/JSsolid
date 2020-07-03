const circle = (radius) => {
    const proto = {
        type: 'Circle',
        area() {
            return Math.PI * Math.pow(shape.radius, 2)
        }
    };
    return Object.assign(Object.create(proto), { radius })
}

const square = (length) => {
    const proto = {
        type: 'Square',
        area() {
            return Math.pow(this.length, 2)
        }
    }
    return Object.assign(Object.create(proto), { length })
}

const areaCalculator = (s) => {
    const proto = {
        sum() {
            const area = []

            for (shape of this.shapes) {
                //below code commented after we extend the shapes objects and move the area calculation
                // to the proto methods.
                /*                 if (shape.type === 'Square') {
                
                                    area.push(Math.pow(shape.length, 2))
                                } else if (shape.type === 'Circle') {
                
                                    area.push(Math.PI * Math.pow(shape.radius, 2))
                                } */

                //here below is the new simplified sum code
                area.push(shape.area());
            }

            // I leave the commented code below for explanation purposes on the reduce method

            /* let result = area.reduce((sum, current) => {
                console.log("loops :", sum, current);
                return current + sum;
            }, 0) */
            let result = area.reduce((sum, current) => current + sum, 0);
            return result
        }
    }
    return Object.assign(Object.create(proto), { shapes: s })
}

const sumCalculatorOputter = (areas) => {
    const proto = {
        HTML() {
            let htmlTag = '';
            for (let i = 0; i < areas.length; i += 1) {
                htmlTag += `
            <h1>
              Sum of the areas of provided shapes:
              ${area(i)} 
            </h1>`
            };
            return htmlTag;
        }
    }
}

const shapes = [
    circle(2),
    square(5),
    square(6)
];

const areas = areaCalculator(shapes)
console.log('shapes', areas.sum())

