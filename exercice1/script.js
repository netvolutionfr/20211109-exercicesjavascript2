const today = new Date();

const ladate = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();

document.getElementById('date').innerText = ladate;

const lheure = today.getHours() + ':' + (today.getMinutes()<10?'0':'') + today.getMinutes();

document.getElementById('heure').innerText = lheure;