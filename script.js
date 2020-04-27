// const container = document.querySelector("#resultsList")

// document.querySelector("#equals-btn").addEventListener("click", function (){
//     const field1 = parseInt(document.querySelector("#num1").value)
//     const field2 = parseInt(document.querySelector("#num2").value)
//     const results = field1 * field2;

//     // Once you have collected all the values, update the DOM
//     // with some HTML
//     container.innerHTML += ` 
//             <div>${field1}*${field2}=${results}</div>
//     `
// })

// First part of the calulator course is outlined above/ second part of calulator function is outlined below. I 
// went through the freeCodeCamp tutorial for a step by step walk through of how to get the calculator to work. The calculator isn't finished just yet, but here is my pushed up product.
const calculator = document.querySelector(`.calculator`)
const keys = calculator.querySelector(`.calculator__keys`)
const display = document.querySelector('.calculator__display')
keys.addEventListener(`click`, event => {
 if (event.target.matches(`button`)) {
    const key = event.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
    if (!action) {
        console.log('number key!')
      }

      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
          key.classList.add(`is-depressed`)
        console.log('operator key!')
        calculator.dataset.previousKeyType = 'operator'
        calculator.dataset.firstValue = displayedNum
        calculator.dataset.operator = action
      }
      if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      if (action === 'clear') {
        console.log('clear key!')
      }
      
      const calculate = (n1, operator, n2) => {
        let result = ''
  
        if (operator === 'add') {
            result = parseFloat(n1) + parseFloat(n2)
          } else if (operator === 'subtract') {
            result = parseFloat(n1) - parseFloat(n2)
          } else if (operator === 'multiply') {
            result = parseFloat(n1) * parseFloat(n2)
          } else if (operator === 'divide') {
            result = parseFloat(n1) / parseFloat(n2)
          }
        
        return result
      }

      if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
        
        
        display.textContent = calculate(firstValue, operator, secondValue)
        console.log('equal key!')
      }
      if (!action) {
        if (displayedNum === '0') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
      }
      if (action === 'decimal') {
        display.textContent = displayedNum + '.'
      }
      const previousKeyType = calculator.dataset.previousKeyType

if (!action) {
  if (displayedNum === '0' || previousKeyType === 'operator') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}
 }
})