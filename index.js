const range = document.getElementById("range");


range.addEventListener("input", (e)=>{
 const   target = e.target
const value = target.value;
const label = target.nextElementSibling   // or  const label = target.nextElementSibling


// width of the range
const range_width = getComputedStyle(target).getPropertyValue("width");
const label_width = getComputedStyle(label).getPropertyValue("width");
//The range_width comes with px e.g 300px, The px needs to be removed to get the exact value
const range_value = range_width.substring(0, range_width.length - 2);
const label_value = +label_width.substring(0, label_width.length - 2);
//max and min
const max= target.max
const min= target.min

// moving the label inrespect to the value
const left = value * (range_value / max) - label_value / 2 + scale(value, min, max, 10, -10)
label.style.left = `${left}px`;
console.log(left)

label.innerHTML = value
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }