const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};

const [e , pi , gravity , hummanBodyTemp , waterBoilingTemp] = constants;
console.log(e , pi , gravity , hummanBodyTemp , waterBoilingTemp);

const [fin , est , sw , den , nor] = countries;
console.log(fin , est , sw , den , nor);

let {width , height , area , perimeter} = rectangle;
console.log(width , height , area , perimeter);