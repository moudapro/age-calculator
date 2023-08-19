let input = document.getElementById('date');
let btn = document.querySelector('.btn');
let result = document.querySelector('.res');
btn.addEventListener('click',function(){
    let newest = new Date().getTime()
    let birth = new Date(input.value).getTime()
    let ageByMsec = newest - birth
    let ageByYr = ageByMsec / (365*24*3600*1000)
    let month = (ageByMsec % (365*24*3600*(10*100))/(30*24*3600*1000)
    result.textContent=`your age is ${parseInt(ageByYr)} years old ${parseInt(month)} months`
})
