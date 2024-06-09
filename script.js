function love(){
    return Math.floor(Math.random()*100)+1;
}

document.getElementById('loveform').addEventListener('submit',function(event){
event.preventDefault();
var nameBoy = document.getElementById('nameBoy').value.trim();
var nameGirl = document.getElementById('nameGirl').value.trim();
var lovescore = love();
var check = document.getElementById('warning');
var res = document.getElementById('result');

if (nameBoy === '' || nameGirl === '') {
    check.textContent = 'Please enter both names.';
} else {
    var lovescore = love();
    res.textContent = "LOVE Score: " + lovescore + "%";
}
});