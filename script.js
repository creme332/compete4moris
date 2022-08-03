//tags in header
const tags =  document.querySelector(".card-tags").querySelectorAll("li");

const cards =  document.querySelectorAll(".card");
console.log(cards);
//array. From


tags.forEach(tag=>tag.addEventListener("click", function(event){
    //display all cards first
    cards.forEach(card=>{
        card.style.display = "block";
    });
    //remove all borders from tags
    tags.forEach(t=>{
        t.style.outline = "none";
    });
    // add border to clicked tag
    const clickedTag = event.target;
    clickedTag.style.outline ="1px solid";
    if(clickedTag.textContent == "All")return;

    // console.log(clickedTag.textContent);

    //check if clicked tag is present in each card.
    // if not, hide card
    cards.forEach(card=>{
        let currentTags = card.querySelector(".card-tags").querySelectorAll("li");
        let validCard  = false;
        currentTags.forEach(t=>{
            if(t.textContent == clickedTag.textContent){
                validCard = true;
                return;
            }
        });
        if(!validCard){
            card.style.display = "none";
        }
        // console.log(currentTags);
    });

}));