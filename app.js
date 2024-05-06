

//Q2
function date() {
    let now = new Date()
    let monthsName = ['January','Feburary','March','April','May','June','July','August','September','October','November','Decembet']
    alert(monthsName[now.getMonth()]+'/'+now.getDate()+'/'+now.getFullYear())
    alert(now.getDate()+'/'+monthsName[now.getMonth()]+'/'+now.getFullYear())   
}
// date()

