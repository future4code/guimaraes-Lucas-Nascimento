~~~javascript
function calculaNota(ex, p1, p2) {
  const media = (((ex*1) + (p1*2) + (p2*3)) / 6)

  if (media >= 9) {
    return console.log("A")
  } else if (media < 9 && media >= 7.5){
    return console.log("B")
  }else if (media < 7.5 && media > 6){
    return console.log("C")
  }else{
    return console.log("D")
  }
}
~~~