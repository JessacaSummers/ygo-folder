
/*$( document ).ready(function() {
    
    $(".btn-outline-secondary").on('click', function(){
	//var name='lunalight blue cat';
	getCard(search_card);
    });

});*/

var ygo_folder_app = angular.module('ygo_folder_app', []);

ygo_folder_app.controller('ygo_folder_controller', function ygo_folder_controller($scope) {
    
    var c = this;
    
    c.search_list = [];
    c.collection = [];

    c.search_for_card = function(card){
        
        getCard(card);
        //console.log(c.search_list);
    };
    
    c.add_to_collection = function(card){
        console.log("add_to_collection was called");
        c.collection.push(card);
        console.log(c.collection);
    }

    
    //c.search_for_card();
    
    //Retrieves 
    function getCard(name){
	
	url='https://www.ygohub.com/api/card_info?name='+name;
	//console.log(url);
    
	$.ajax({
            type: 'GET',
            url: url,
            crossDomain: true,
            contentType: 'application/x-www-form-urlencoded',

            beforeSend:function(){
                // this is where we append a loading image
            },
            success: function(data){
                var card = JSON.parse(data);
                //console.log(card);
                c.search_list.push(card.card);
                $scope.$apply();
                
            },
            error:function(jqXHR, textStatus, errorThrown){
                console.log(textStatus);
            }
	});
    }
    
    /*function append_search_list(card){
        c.search_list.push(card);
    }*/

    /*function displaySearch(card){

        var txt=card.name;
        var pic=card.thumbnail_path;
        $("#results_name").text(txt);
        $(".search_results_img").attr('src', pic);
        //console.log('cardToSearch is being called');

    }*/
    

});
