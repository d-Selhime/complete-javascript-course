
let marksMass = 78;
let marksHeight = 1.69;

let johnsMass = 95;
let johnsHeight = 1.88

let marksBmi = marksMass / marksHeight ** 2 ;
console.log('Marks BMI', marksBmi);

let johnsBmi = johnsMass / johnsHeight ** 2 ;
console.log('Johns BMI', johnsBmi);
if (marksBmi > johnsBmi) {
    console.log(`Mark has a higher BMI`)
} else {
    console.log(`John has a higher BMI`)
};