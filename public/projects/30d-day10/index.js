const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked

function handleCheck(e) {
  //check if they had the shift keydown
  //&& check if they are checking it
  let inBetween = false
  if (e.shiftKey && this.checked) {
    //loop over every single box
    checkBoxes.forEach((box) => {
      console.log(box)
      if (box === this || box === lastChecked) {
        inBetween = !inBetween
        console.log('hi hi hi ')
      }
      if (inBetween) {
        box.checked = true
      }
    })
  }

  lastChecked = this
}

checkBoxes.forEach((box) => box.addEventListener('click', handleCheck))
