var options = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
  keys: [{
    name: 'iata',
    weight: 0.5
  }, {
    name: 'name',
    weight: 0.3
  }, {
    name: 'city',
    weight: 0.2
  }]
};

var fuse = new Fuse(airports, options)


var ac = $('#autocomplete')
  .on('click', function(e) {
    e.stopPropagation();
  })
  .on('focus keyup', search)
  .on('keydown', onKeyDown);

var wrap = $('<div>')
  .addClass('autocomplete-wrapper')
  .addClass('flex-form')
  .insertBefore(ac)
  .append(ac);

var list = $('<div>')
  .addClass('autocomplete-results')
  .on('click', '.autocomplete-result', function(e) {
    e.preventDefault();
    e.stopPropagation();
    selectIndex($(this).data('index'));
  })
  .appendTo(wrap);

$(document)
  .on('mouseover', '.autocomplete-result', function(e) {
    var index = parseInt($(this).data('index'), 10);
    if (!isNaN(index)) {
      list.attr('data-highlight', index);
    }
  })
  .on('click', clearResults);

function clearResults() {
  results = [];
  numResults = 0;
  list.empty();
}

function selectIndex(index) {
  if (results.length >= index + 1) {
    ac.val(results[index].iata);
    clearResults();
  }  
}

var results = [];
var numResults = 0;
var selectedIndex = -1;

function search(e) {
  if (e.which === 38 || e.which === 13 || e.which === 40) {
    return;
  }
  
  if (ac.val().length > 0) {
    results = _.take(fuse.search(ac.val()), 7);
    numResults = results.length;
    
    var divs = results.map(function(r, i) {
        return '<div class="autocomplete-result" data-index="'+ i +'">'
             + '<div><b>'+ r.iata +'</b> - '+ r.name +'</div>'
             + '<div class="autocomplete-location">'+ r.city +', '+ r.country +'</div>'
             + '</div>';
     });
    
    selectedIndex = -1;
    list.html(divs.join(''))
      .attr('data-highlight', selectedIndex);

  } else {
    numResults = 0;
    list.empty();
  }
}

function onKeyDown(e) {
  switch(e.which) {
    case 38: // up
      selectedIndex--;
      if (selectedIndex <= -1) {
        selectedIndex = -1;
      }
      list.attr('data-highlight', selectedIndex);
      break;
    case 13: // enter
      selectIndex(selectedIndex);
      break;
    case 9: // enter
      selectIndex(selectedIndex);
      e.stopPropagation();
      return;
    case 40: // down
      selectedIndex++;
      if (selectedIndex >= numResults) {
        selectedIndex = numResults-1;
      }
      list.attr('data-highlight', selectedIndex);
      break;

    default: return; // exit this handler for other keys
  }
  e.stopPropagation();
  e.preventDefault(); // prevent the default action (scroll / move caret)
}

function checkConnection() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://avwx.rest/api/taf/ksfo?options=');

  request.setRequestHeader('Authorization', 'Token nA69iEdTQP6qhKB5oPSxzocbdlywiuctJ4wxO4-6-uI');
  request.setRequestHeader('Content-Type','application/json')

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      // console.log('Body:', this.responseText);
      if(this.status!=200) {
        alert("Connection to API has been lost\n\nTry reloading the page or reconnecting to the network.\n\nIf this persists, send me an email at 3jbc22@gmail.com")
      } else {
        showResultsDiv()
        document.getElementById('loading').hidden=true
        // document.getElementById('innerResults').hidden=false
        document.getElementById('connectionCheck').hidden=false
      }
    }
  };

  var body = "PHKO 181735Z 1818/1918 VRB03KT P6SM FEW035 FM182000 20010KT P6SM FEW030 SCT060 FM190400 10007KT P6SM FEW030 BKN050 FM191200 VRB03KT P6SM SCT030";

  request.send(body)
}

function sendReq(airpt) {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://avwx.rest/api/taf/'+airpt+'?options=');

  request.setRequestHeader('Authorization', 'Token nA69iEdTQP6qhKB5oPSxzocbdlywiuctJ4wxO4-6-uI');
  request.setRequestHeader('Content-Type','application/json')

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
      printResults(this.responseText)
      console.log(this.responseText)
    }
  };

  var body = "PHKO 181735Z 1818/1918 VRB03KT P6SM FEW035 FM182000 20010KT P6SM FEW030 SCT060 FM190400 10007KT P6SM FEW030 BKN050 FM191200 VRB03KT P6SM SCT030";

  request.send(body)
}

function showResultsDiv() {
  document.getElementById("resultsDiv").style.visibility = "visible"
  document.getElementById("resultsDiv").style.backgroundColor = "rgba(255,255,255,1)"
  document.getElementById("resultsDiv").style.marginTop = "0px"
}

function hideResultsDiv() {
  document.getElementById("resultsDiv").style.marginTop = "30%"
  document.getElementById("resultsDiv").style.backgroundColor = "rgba(255,255,255,0)"
  document.getElementById("resultsDiv").style.visibility = "hidden"
  document.getElementById('loading').hidden=false
  document.getElementById('innerResults').hidden=true
  document.getElementById('connectionCheck').hidden=true
  
}

function searchIcao() {
  showResultsDiv()
  var icao = document.getElementById("autocomplete").value
  sendReq(icao)
}
var jsonsParsed = null;
function printResults(jsons) {
  jsonsParsed = JSON.parse(jsons)
  document.getElementById('station').innerHTML = jsonsParsed.station
  document.getElementById('timestamp').innerHTML = jsonsParsed.time.dt
  document.getElementById('windSpeed').innerHTML = jsonsParsed.forecast[0].wind_speed.value
  document.getElementById('windDirection').innerHTML = jsonsParsed.forecast[0].wind_direction.value
  document.getElementById('cloudType').innerHTML = jsonsParsed.forecast[0].clouds[0].type
  document.getElementById('cloudAltitude').innerHTML = jsonsParsed.forecast[0].clouds[0].altitude
  document.getElementById('visibility').innerHTML = jsonsParsed.forecast[0].visibility.value
  
  document.getElementById('loading').hidden=true
  document.getElementById('innerResults').hidden=false
  document.getElementById('connectionCheck').hidden=true
  // document.getElementById("resultsDiv").innerHTML = jsonsParsed.forcasts.altimiter.type
}

$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      // searchIcao();
      $('#autocomplete').blur();
      return false;
    }
  });
});