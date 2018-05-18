function displayCard(card){
	
	var txt=card.text;
	var pic=card.image_path;
	console.log(pic);
    $("#card_data").text(txt);
	$("#card_image").attr('src', pic);

}

function getCard(name){
	
	url='https://www.ygohub.com/api/card_info?name='+name;
	console.log(url);
    
	$.ajax({
		type: 'GET',
		url: url,
		crossDomain: true,
		contentType: 'application/x-www-form-urlencoded',

		beforeSend:function(){
			// this is where we append a loading image
		},
		success:function(data, textStatus, jqXHR){
			// successful request; do something with the data
			//var desc = data.card.text;
			//alert(desc);
			card = JSON.parse(data);
		    displayCard(card.card);
		},
		error:function(jqXHR, textStatus, errorThrown){
			// failed request; give feedback to user
			console.log(textStatus);
		}
	});
}

