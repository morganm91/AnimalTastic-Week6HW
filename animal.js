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
	})

	renderButtons();

//Now we have to have the gifs appear when the button is clicked on
	
//when button is clicked on it will run this function
	$(document).on('click', function () {
		var a = $(this).data('name');
//gif will show 10 images		
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + a + "&api_key=dc6zaTOxFJmzC&limit=10";

//get the data from ajax
		$.ajax({
			url: queryURL,
			method: 'GET'
		})
//when it is finished getting the query this will respond
		.done(function(response) {
			var results= response.data;

//for the variable it will run throug the length to get to 10
		for (var i=0; i< results.length; i++) {

		//placing the objects in the div
		//creating a div and making it appear in the animalDiv
			var animalDiv = $('<div>')

		//paragraph tag to appear in variable named p to show the rating
			var p = $('<p>').text("Rating: " + rating);
		
		//grabbing the rating from the ajax	
			var rating = results[i].rating;

		//created an image and ahving it in the animalImage variable and makig it set to a fixed height
			var animalImage = $('<img>'); 
			animalImage.attr('src', results[i].images.fixed_height_still.url);
			animalImage.attr('data-still', results[i].images.fixed_height_still.url);
			animalImage.attr('data-animate', results[i].images.fixed_height.url);
			animalImage.attr('data-state', 'still'); 
				animalImage.addClass('animalGif');

		//appended the p variable and animal image to the animalDiv	
			animalDiv.append(p)
			animalDiv.append(animalImage)

		//append animalDiv to where the gifs will appear	
			$('#animals').prepend(animalDiv);

		}
	


//this section will make the image start and stop when clicked on
		$('#animalButtons').on('click','.animalGif', function (){

		//make a variable named state and then refrence the buttons data stat into it
			var state = $(this).attr('data-state');
			var animate = $(this).attr('data-animate');
			var still = $(this).attr('data-still');

		//if variable state is equal to 'still'
				if ( state == 'still'){
					$(this).attr('src', animate);
					$(this).attr('data-state', 'animate');
				} else{
					$(this).attr('src', still);
					$(this).attr('data-state', 'still');
				}
		});
	});
	});
});