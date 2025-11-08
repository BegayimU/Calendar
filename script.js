let html_date = document.getElementById('date') //<p> пи  тегин htmlден JS ке чакырдвк
let objDate = new Date() // датанын жаны объектин ачуу
let date = objDate.getDate() // Числону ачуу
html_date.innerHTML = date //<p> тегине date ти жаздыруу

let html_day = document.getElementById('day')
let day = objDate.getDay()
day = day-1
let arrowDays = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday',
    'Friday', 
    'Saturday', 
    'Sunday'
]
html_day.innerHTML = arrowDays[day] 

let html_month = document.getElementById('month')
let month = objDate.getMonth()
month = month
let arrowMonths =[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jule',
    'August',
    'September',
    'October',
    'November',
    'December'
]
html_month.innerHTML = arrowMonths[month]

let html_year = document.getElementById('year')
let year = objDate.getFullYear()
html_year.innerHTML = year

