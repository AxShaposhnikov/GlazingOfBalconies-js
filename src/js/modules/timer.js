const timer = (timerId, deadline) => {

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)) % 24),
            days = Math.floor((t/(1000*60*60*24)));

            return {
                'total' : t,
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }
    
    const setClock = (selector, endTime) => {
        let timer = document.getElementById(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        
        function updateClock() {
            let t = getTimeRemaining(endTime);
            days.textContent = checkDigit(t.days);
            hours.textContent = checkDigit(t.hours);
            minutes.textContent = checkDigit(t.minutes);
            seconds.textContent = checkDigit(t.seconds);

            if (t.total < 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    function checkDigit(value) { 
        return (value / 10 < 1) ? '0' + value : value;
    }

    setClock(timerId, deadline);

}

export default timer;