let a = Math.floor(Math.random()*100)+1
function guess(){
    const b=document.getElementById('guesser')
    let d=b.value
    c=document.getElementById('feed')
    if (a>d) {
        c.textContent="too low try again"
    }
    if (a<d) {
        c.textContent="too high try again"
    }
    if(a==d)
        c.textContent="you guessed correctly"
    document.getElementById('guesser').value = '';
}