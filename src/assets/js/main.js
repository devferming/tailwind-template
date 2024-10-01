
const button = document.querySelector('#darkmode')
let isDark = false

function switchTheme() {
  if (!isDark) {
    button.innerHTML = '🌞'
    isDark = true
    document.documentElement.classList.add('dark')
  } else {
   button.innerHTML = '🌚'
   isDark = false
   document.documentElement.classList.remove('dark')
 }
}

button.addEventListener('click', switchTheme)