document.getElementById("popup").showpopup = function() {
    document.getElementById("popup").style.display = "block";
    document.getElementById('iframe').src = "http://example.com";
    document.getElementById('page').className = "darken";
    document.getElementById("page").style.display = "block";
  }
  
  document.getElementById("a").onclick = function(e) {
    e.preventDefault();
    document.getElementById("popup").showpopup();
  }
  
  document.getElementById('page').onclick = function() {
    if(document.getElementById("popup").style.display == "block") {
      document.getElementById("popup").style.display = "none";
      document.getElementById("page").style.display = "none";
      document.getElementById('page').className = "";
    }
  };