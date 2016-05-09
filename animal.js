 //when the page is loaded these buttons below need to be loaded onto the page


  $(document).ready(function () {

//inital buttons
	 var animals = [ "puppy", "kitten", "bird", "goat", "llama", "sloth", "panda", "pig", "hedgehog", "shark" ];

//generic function for displaying animal buttons
 	function renderButtons(){
// Deletes the movies prior to adding new movies
// (this is necessary otherwise you will have 
//repeat buttons)
		$("#animalButtons").empty();
// Loops through the array of animals
		for (var i = 0; i < animals.length; i++){
			// Then dynamicaly generates buttons for each animal in the array
			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('animal'); // Added a class 
		    a.addClass('btn btn-primary btn-s');
		    a.attr('data-name', animals[i]); // Added a data-attribute
		    a.attr('data-state'), $(this).attr('datat-state', 'animate');
		    a.text(animals[i]); // Provided the initial button text
		    $('#animalButtons').append(a); // Added the button to the HTML
		};
	};

	// This function handles events where one button is clicked
	$('#addAnimal').on('click', function(){
		// This line of code will grab the input from the textbox
		var animal = $('#animal-input').val().trim();
		// The movie from the textbox is then added to our array
		animals.push(animal);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();
		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	});

	renderButtons();

//Now we have to have the gifs appear when the button is clicked on
	
//when button is clicked on it will run this function
	$(document).on('click', function () {
		var animal = $(this).data('name');
//gif will show 10 images		
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

//get the data from ajax
		$.ajax({
			url:


 	});