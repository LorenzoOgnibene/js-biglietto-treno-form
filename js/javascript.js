const userKm = document.querySelector('input#kilometres');
const userAge = document.querySelector('input#age');
const input = document.querySelector('input#button');

input.addEventListener('click', 
    function(){
       console.log(userAge.value);
       console.log(userKm.value);
       let ticketPrice = userKm.value * 0.2762;
       console.log(ticketPrice);
       if (userAge.value < 18){
            ticketPrice = ticketPrice * 0.825;
            console.log(ticketPrice);
       }else if (userAge.value >= 65){
            ticketPrice = ticketPrice * 0.667;
            console.log(ticketPrice)
       }
})