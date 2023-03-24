let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
    document.getElementById("main-title").innerHTML =  "Welcome to Toretto homepage";
    //Accessed the #main-title and Changed the text of the title.

    // Part 2
     document.querySelector("body").style.backgroundColor = 'lightblue';
     //Selected the body and changed the background-color to a other color.
    
    // Part 3
 
     const lastitem= document.querySelector("#favorite-things  li:last-child"); // accessing the last item in list
     lastitem.parentElement.removeChild(lastitem);
     //Selected DOM's favorite things list and removed the last list item.

    // Part 4
    
     function changeFontSize() {
     var elements = document.getElementsByClassName("special-title");
     for (var i = 0; i < elements.length; i++) {
     var element = elements[i];
     element.style.fontSize = "2rem";
    }   
  }      
  changeFontSize();

    // Part 5
    var r = document.getElementById("past-races");
    r.children[3].remove();
    //accessed the past-races list and removed the third element
  
    // Part 6   Creating new DOM elements
     let races = document.getElementById("past-races") //accessed the past-races list
     let newRace = document.createElement("li");      //Created a new list element
     let textNode =document.createTextNode("Spain")   //changed the new list text to the name of a different city,
     newRace.appendChild(textNode);
     races.appendChild(newRace);                     // added to the past races list.
      

    // Part 7
      let mainDiv= document.querySelector(".main")       
     
     let newBlogPost = document.createElement("div")  //craeting a new div with class of blog post
     newBlogPost.classList.add("blog-post")

    let newH2 = document.createElement("h2")      //creating a new heading for the cityname we created in part 6
    newH2.textContent = "Spain"
    newH2.style.color= "white"                   

    let newP = document.createElement("p")         //adding text to the the city name by craeting a new paragraph
    newP.textContent= "EVERY RACE IS A QUESTION, AND I NEVER KNOW UNTIL THE LAST YARDS WHAT THE ANSWER WILL BE."
    

     newBlogPost.appendChild(newH2);                //adding new heading to main blog post
     newBlogPost.appendChild(newP);                 //adding new paragraph text under the aheading to the blog post
     mainDiv.appendChild(newBlogPost);              //adding the new blog post to the main div
     
     newBlogPost.style.background= "rebeccapurple";    //added the background 
     mainDiv.insertBefore(newBlogPost, document.querySelector(".blog-post"));   //reordered the list as the blogs generally show the recentone to the top
                                                                                //as shown in the side past races list
     
  
    // Part 8
     document.querySelector("#quote-title").addEventListener("click", randomQuote);
    //Added an click eventListener so that whenever the quote of the day("quote-title") is clicked it would generate a random quote
    //instead of randomQuote  being displayed whenever the page is refreshed.

    // Part 9
  
     let blogPostList = document.querySelectorAll(".blog-post");

     for(let i=0;i<blogPostList.length;i++){
        blogPostList[i].addEventListener("mouseenter",(event) => {    //added an eventlistener so that when the cursor enters the event it turns red
            blogPostList[i].classList.toggle("purple");
        });
        blogPostList[i].addEventListener("mouseout" ,(event) =>{      //once the cusrsor moves away it goes back to normal
            blogPostList[i].classList.toggle("red");
        })
     }
  });
