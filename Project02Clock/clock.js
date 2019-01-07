//const secondHand = document.querySelector('.clocksec')
 function setDate() {
  //running every sec
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;//arms position to the degress according to the second
    document.querySelector('.clocksec').style.transform = `rotate(${secondsDegree}deg)`;
    // secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    document.querySelector('.clockmin').style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    document.querySelector('.clockhr').style.transform = `rotate(${hoursDegree}deg)`;
    //console.log(minutes);

}
setInterval(setDate, 1000);
