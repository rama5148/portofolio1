


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	let count = sessionStorage.getItem("count");

	let tot =  new Number(count) + 1 + 99;
  	sessionStorage.setItem("count", tot);

  	let counts=setInterval(updated);
	let upto=1;
	function updated(){
	    var count= document.getElementById("counter");
	    count.innerHTML=++upto;
	    if(upto === tot) {
	        clearInterval(counts);
	    }
	}

  	// var el = document.getElementById("counter");
   //  el.innerHTML= count;
}



