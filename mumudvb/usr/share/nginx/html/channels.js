var xhttp474 = new XMLHttpRequest();
xhttp474.onreadystatechange = function(channel) {
  if (this.readyState == 4 && this.status == 200) {
    getChannels(this);
  }
};

var xhttp482 = new XMLHttpRequest();
xhttp482.onreadystatechange = function(channel) {
  if (this.readyState == 4 && this.status == 200) {
    getChannels(this);
  }
};

var xhttp490 = new XMLHttpRequest();
xhttp490.onreadystatechange = function(channel) {
  if (this.readyState == 4 && this.status == 200) {
    getChannels(this);
  }
};

var xhttp498 = new XMLHttpRequest();
xhttp498.onreadystatechange = function(channel) {
  if (this.readyState == 4 && this.status == 200) {
    getChannels(this);
  }
};

function getChannels(xml) {
  var xmlDoc = xml.responseXML;
  multiplexID = xmlDoc.getElementsByTagName("frontend_frequency")[0].childNodes[0].nodeValue;
  for(var i = 0; i < xmlDoc.getElementsByTagName("name").length; i++) {
    var item = document.createElement('li')
    item.appendChild(document.createTextNode(xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue));
    document.getElementById(multiplexID).appendChild(item);
  }
}

xhttp474.open("GET", "/474/monitor/state.xml", true);
xhttp474.send();
xhttp482.open("GET", "/482/monitor/state.xml", true);
xhttp482.send();
xhttp490.open("GET", "/490/monitor/state.xml", true);
xhttp490.send();
xhttp498.open("GET", "/498/monitor/state.xml", true);
xhttp498.send();
