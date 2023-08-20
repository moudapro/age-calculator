

let input = document.getElementById('date');
let btn = document.querySelector('.btn');
let result = document.querySelector('.res');
btn.addEventListener('click',function(){
    /*get the time by milisecond from 1970 to now*/
    let newest = new Date().getTime()
     /*get the time by milisecond from input value to now*/
    let birth = new Date(input.value).getTime()
/*get the time by milisecond from input value to now*/

    let ageByMsec = newest - birth

/*we can change this operation*/
    let ageByYr = ageByMsec / (365*24*3600*1000)
    let month = (ageByMsec % (365*24*3600*(10*100))/(30*24*3600*1000)
    result.textContent=`your age is ${parseInt(ageByYr)} years old ${parseInt(month)} months`
})
