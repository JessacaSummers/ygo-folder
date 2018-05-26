angular.module('ygo_folder_app', []);

angular.module('ygo_folder_app', []).controller('ygo_folder_controller', function ygo_folder_controller($scope) {
    
    /* 
     *      Variable Initializations 
     */
    
    //Define this controller as a variable for simplicity of handling scope
    c = this;
        
    //Declare array that will be used when searching
    c.search_list = {};
    c.search_list.cards = [];
    
    //Declare string that will be parsed when importing cards into a collection
    c.import_cards = ""; 
    
    //Declare int that will keep track of which collection in collections is "active"
    c.current_collection = -1;
    
    //Initializes the collections
    if (true){ //If no existing data
        c.collections = [{
            "name": "Main Collection",
            "cards": []
        }];
    
        c.current_collection = 0;
    }    
    
    /*
     *       Generic
     */
    c.process_card_data = function(data){
        var card = JSON.parse(data);
        return card.card;
    };

    /*
     *       Searching
     */

    //Validates user input, then analyses their entry to see if it matches
    //any card names. Then, sends that name to an AJAX call to handle accordingly
    c.search_for_card = function(entry){
        get_card_from_api(entry, c.search_list);
        //refresh();
        console.log(c.search_list);
    };
    
    function refresh(){
        $scope.$apply();
    }
    
    //Adds provided card to the specified collection. 
    //Gives card a unique identifier property based on order of entry
    c.add_to_collection = function(card, collection){
        
        
        //Use current collection in the event that no collection has been specified
        if (typeof collection === undefined){
            c.collections[current_collection].cards.push(card);
            
        //Otherwise, push to specified collection
        } else {
            collection.cards.push(card);
        }
        //card.identifier = collection.length;
        //console.log("Identifier: "+card.identifier);
        //console.log(collection);
        
        
    };
    
    //Creates a new JSON object for collections and adds it to the c.collections array
    c.add_new_collection = function(name, cards){
        console.log(cards);
        //Add unique identifier to each card in the collection
        for (var i = 0; i < cards.length; i++){
            cards[i].identifier = i;
        }
        var x = {
            "name": name,
            "cards": cards,
            "identifier": c.collections.length
        };
        
        c.collections.push(x);
        
        return x;
    };
    
    //Handles string for creating a new collection of cards from scratch
    c.mass_import_collection = function(data, collection){
    
        //Turn string into array of card names
        var entries = data.split(',');
        
        //Creates new collection if a name was given for one
        /*if (typeof name !== "undefined"){
            alert("New collection being made");
            collection = c.add_new_collection(name, []);
        }*/

        //Import card objects using names
        for (var i = 0; i < entries.length; i++){
            entries[i] = entries[i].trim();
            get_card_from_api(entries[i], collection);
        }
            
           // card = c.process_card_data(hold);
           

         //console.log(c.collections);

    };

    //Retrieves card object from the API and adds it to the list of searche
    function get_card_from_api(name, collection){
	
	url='https://www.ygohub.com/api/card_info?name='+name;
	//console.log(url);
    
	$.ajax({
            type: 'GET',
            url: url,
            crossDomain: true,
            contentType: 'application/x-www-form-urlencoded',

            success: function(data){
                var card = c.process_card_data(data);
                collection.cards.push(card);
                $scope.$apply();
            },
            
            error:function(jqXHR, textStatus, errorThrown){
                console.log(textStatus);
            }
	});
    }    

});
