const userKm = document.getElementById('kilometres');
const userAge = document.getElementById('age');
const input = document.getElementById('button');

input.addEventListener('click', 
    function(){
        console.log(userKm.value);
        console.log(userAge.value);
        let ticketPrice = userKm.value * 0.2762;
        console.log(ticketPrice.toFixed(2));
        if (userAge.value < 18){
            ticketPrice = ticketPrice * 0.825;
            console.log(ticketPrice.toFixed(2));
        }else if (userAge.value >= 65){
            ticketPrice = ticketPrice * 0.667;
            console.log(ticketPrice.toFixed(2))
        }
})