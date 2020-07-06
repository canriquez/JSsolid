
const shapeInterface = (state) => ({
    type: 'shapeInterface',
    geom: state.type,
    area: () => state.area(state)
})
const circle = (radius) => {
    const proto = {
        radius,
        type: 'Circle',
        area: (args) => Math.PI * Math.pow(args.radius, 2)
    }
    const basics = shapeInterface(proto)
    const composite = Object.assign({}, basics)
    return Object.assign(Object.create(composite), { radius })
}

const square = (length) => {
    const proto = {
        length,
        type: 'Square',
        area: (args) => Math.pow(args.length, 2)
    }
    const basics = shapeInterface(proto)
    const composite = Object.assign({}, basics)
    return Object.assign(Object.create(composite), { length })
}

const areaCalculator = (s) => {
    const proto = {
        sum() {
            const area = []

            for (shape of this.shapes) {
                //using now the shapeInterFace to check all object are with the area method.

                if (Object.getPrototypeOf(shape).type === 'shapeInterface') {
                    area.push(shape.area());
                } else {
                    throw new Error(shape.type + ': This is not a shapeInterface oject')
                }

            }

            // After interface optimizartion

            return area.reduce((sum, current) => current + sum, 0);
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


const s = square(5)
console.log('OBJ\n', s)
console.log('PROTO\n', Object.getPrototypeOf(s))
s.area(5)
s

console.log('shapes', areas.sum())
