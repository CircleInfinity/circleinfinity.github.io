function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)
  return copy
}

// Set the date we're counting down to
var countDownDate = new Date("Apr 3, 2022 15:37:25");

$('.end-date').text(`"${addDays(countDownDate, 1).toDateString()}"`)

countDownDate = countDownDate.getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo1").innerHTML = "EXPIRED";
    }
}, 1000);

function CopyToClipboard(containerid) {
	navigator.clipboard.writeText('0x2317f8c321954070b57019bfbd9a1fae1f3c04d9')
																							 .then(() => { alert('Contract address copied successfully!'); })
																							 .catch((error) => { alert(`Copy failed! ${error}`); });
}