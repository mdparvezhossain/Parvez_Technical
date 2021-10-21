
const Add = (a,b) => {
    let Sum = a+b;
    return Sum;
}
export default Add;

const Minus = (a,b) => {
    let Sub = a-b;
    return Sub;
}
const Multiple = (a,b) => {
    let Mult = a*b;
    return Mult;
}
const Division = (a,b) => {
    let Divi = a/b;
    Divi = Divi.toFixed(3)
    return Divi;
}
export {Minus,Multiple,Division};