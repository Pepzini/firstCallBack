function displayExternalFile(about) {
    document.getElementById('aboutMe').innerHTML = about;
  }
  //the above code snippet allows the file to be displayed on the webpage using DOM
  function getFile(aboutMePage) {
    let req = new XMLHttpRequest();
    req.open('GET', "aboutMe.html");
    req.onload = function() {
      if (req.status == 200) {
       aboutMePage(this.responseText);
      } else {
        aboutMePage("Error: " + req.status);
      }
    }
    req.send();
  }
  
getFile(displayExternalFile);
  