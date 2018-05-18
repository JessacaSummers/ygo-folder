/*
 *  Essentially just an AJAX interface(?) for calling the ygoprices API
 */

var dataURL = 'http://yugiohprices.com/api/card_data/';
var imageURL = 'http://yugiohprices.com/api/card_image/';
var priceURL = 'http://yugiohprices.com/api/get_card_prices/';

/*function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}*/

function getCard(name){
	
	url='https://www.ygohub.com/api/card_info?name='+name;
	console.log(url);
    
	$.ajax({
		type: 'GET',
		url: url,
		//data: 'zombino',
		//async: false,
		crossDomain: true,
		contentType: 'application/x-www-form-urlencoded',

		//dataType: 'JSON',
		beforeSend:function(){
			// this is where we append a loading image
		},
		success:function(data, textStatus, jqXHR){
			// successful request; do something with the data
			//var desc = data.card.text;
			//alert(desc);
			console.log("Success!");
			data = JSON.parse(data);
			
			return data.card.text;
		},
		error:function(jqXHR, textStatus, errorThrown){
			// failed request; give feedback to user
			console.log(textStatus);
		}
	});
	
	/*var request = new XMLHttpRequest();
	var params = {'card_name':name};
	request.open('GET', dataURL+name, true);
	//request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
	request.onload = function(){alert("It loaded!"); }
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST');

	//request.setRequestHeader("Content-length", params.length);
	//request.setRequestHeader("Connection", "close");
	request.send(params);
	console.log(request);*/

	
    /*$.getJSON(dataURL+name, function(card){
		if(json.status == "fail") {
			return "Failure";
		} else {
			return JSON.stringify(card);
		}
	});*/
	
	
/*	var xhr = createCORSRequest('GET', dataURL+name);
	if (!xhr) {
	  throw new Error('CORS not supported');
	}
	
	xhr.onload = function() {
    var text = xhr.responseText;
    alert('Response from CORS request to ' + url + ': ' + title);
	return text;
  };
  
   xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
	
	xhr.send();
	
	*/


};

/*function card_data(name){
    //data = JSON.stringify(data);
    var card = call_api(dataURL + name 'json');
    return card;
};

function card_image(name){
    var data = {'card_name': name};
    //data = JSON.stringify(data);
    var img = call_api(imageURL + name,'image/jpeg');
    return img;
};*/