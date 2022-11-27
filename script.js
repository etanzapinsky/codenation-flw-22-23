
// task 1: declare your selector variables for tiles 1-9. There should be 9 variables total.
let tile1 = document.querySelector(".tile1");
let tile2 = document.querySelector(".tile2");
let tile2Button = document.querySelector(".tile2Button");
let tile3 = document.querySelector(".tile3");
let tile4 = document.querySelector(".tile4");


/********* NOTE: unsure which tile is which? Be sure to reference the HTML when you need to double-check! ************/


// task 2: tile 1 feels a little sad. Update the inner HTML to show an encouraging message! Something like "YOU GOT THIS!" or even a "You're a beautiful person!" 
tile1.innerHTML = "<div style='background-color: grey;'>you're the best!</div>";



// task 3: tile 2 has a button. Create a click event and have the background color of tile 2 change to a shade of green.BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.Can you see if there's a way to toggle it???
tile2Button.onclick = function() {
  tile2.style.backgroundColor = 'green';
};


// task 4: what's this? A totoro? Where's his friends? Using either appendChild or insertAdjacentHTML, add a friend to tile 3. Need some inspiration? Go to giphy.com, search a character and choose the "stickers".
tile3.insertAdjacentHTML("beforeend", '<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/452215da-afc1-4582-befb-7d51c35ed5b3/dboci1c-318f3332-2d24-45e5-afee-05ab25f6adc2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1MjIxNWRhLWFmYzEtNDU4Mi1iZWZiLTdkNTFjMzVlZDViM1wvZGJvY2kxYy0zMThmMzMzMi0yZDI0LTQ1ZTUtYWZlZS0wNWFiMjVmNmFkYzIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JZjyf-yYUhl1mCJwpy1e5Nact9lFjjG2J0xS0I2Umpg" />')

// task 5: Oh no! A broken image! We need to fix this - update the src for tile 4 to have an image of your favorite TV show.
tile4.src = 'https://upload.wikimedia.org/wikipedia/en/4/41/The_White_Lotus_Title_Card.png';



/*******These following tasks may require a little bit of digging. Unsure how to complete the task? Use your resources! Code Nation reference table might help. Can't find it there? Google search the keywords of what you're trying to do and use web dev documentation! W3schools, MDN Web Docs, and Stack Overflow all super reliable 😊*********/


// task 6: Hmm. Looks like the font is too small. Update the font-size of tile 5 to 35 pixels.


// task 7: Another sad box! Let make this tile 6 feel special and add a gradient background! What kind of gradient? What color? YOU CHOOSE!

// task 8: Too many squares. Let's change tile 7 to have rounded edges - be sure to search for which CSS property does this :)

// task 9: task 9: Replace the image with your favorite emoji. Try going to this site to search: https://emojipedia.org/

// task 10: Display a random number in the tile when the button is clicked.BE SURE TO SAVE THE BUTTON FIRST AS A VARIABLE.



