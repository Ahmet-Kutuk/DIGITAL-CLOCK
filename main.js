const timeData = () => {
   // data operations 
    const getDate = new Date();
    let hour = getDate.getHours();
    let seconds = getDate.getSeconds();
    let minutes = getDate.getMinutes();
    let day = getDate.getDate();
    let month = getDate.getMonth()+1;
    let year = getDate.getFullYear();

    //transfer data to the page
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#second").innerHTML = seconds;
    document.querySelector("#minute").innerHTML = minutes;
    document.querySelector("#date").innerHTML=day+"/"+month+"/"+year;

}
//call the function in 1 second intervals
setInterval(function(){timeData();},1000);
