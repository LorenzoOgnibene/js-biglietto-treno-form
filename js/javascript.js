const userKm = document.getElementById('kilometres');
const userAge = document.getElementById('age');
const input = document.querySelector('a.btn');
const output = document.getElementById('price-output');


input.addEventListener('click', 
    function(){
        let ticketPrice = userKm.value * 0.2762;
        if (userAge.value < 18){
            ticketPrice = ticketPrice * 0.825; //17.5%
        }else if (userAge.value >= 65){
            ticketPrice = ticketPrice * 0.667; //33.3%
        } 
        output.innerHTML = ticketPrice.toFixed(2) + "&euro;";
})

