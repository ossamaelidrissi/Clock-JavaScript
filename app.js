function UpdateDate(){
    var SetTime = document.querySelector('#SetTime');
    var date = new Date();
    SetTime.innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var SetDate = document.querySelector('#SetDate');
    SetDate.innerHTML = date.getDate()+"-"+parseInt(date.getMonth()+1)+"-"+date.getFullYear();
}
 a=setInterval(UpdateDate,500);
onload = UpdateDate();
var outSideBox = document.querySelector('#outSideBox');
function Clear() { 
    clearInterval(a);
 }


