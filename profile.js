const colorButton = document.getElementById('color')
const placeButton = document.getElementById('place')
const ritualButton = document.getElementById('ritual')


const favColor = () => { alert('My favorite color is Black.') }
const favPlace = () => { alert('My favorite place is the Beach.') }
const favRitual = () => { alert('My favorite ritual is yoga.') }


colorButton.addEventListener('click', favColor)
placeButton.addEventListener('click', favPlace)
ritualButton.addEventListener('click', favRitual)