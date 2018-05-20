/*
 * Global variables and functions that are tied to handling API calls
 */
var search_list=[];
var collection=[];
//var search_card="";

/*function displayCard(card){
	
    var txt=card.name;
    var pic=card.thumbnail_path;
    $("#results_name").text(txt);
    $(".search_results_img").attr('src', pic);
    //console.log('cardToSearch is being called');
    ygo_folder_app.updateCollection();

}

/*function getCard(name){
	
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
}*/
