function buscarPrimos(valor_final) {
  var n = 1;
  primelist = "";
  search: while (n<valor_final) {
    if(n%20 == 0){
      postMessage(primelist);
    }
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
  }
  postMessage(primelist);
  postMessage("fin");
}
onmessage = function(event) {
    buscarPrimos(event.data);
}
