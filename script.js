//tags in header
const tags =  document.querySelector(".card-tags").querySelectorAll("li");
const Alltag =  document.querySelector(".card-tags").querySelector("li");
const cards =  document.querySelectorAll(".card");
const borderStyle = "solid 1px";
let activeTags = new Set();
activeTags.add("All");

//Filter cards displayed by tag
tags.forEach(tag=>tag.addEventListener("click", function(event){
    const clickedTag = event.target;

    //display all cards 
    cards.forEach(card=>{
        card.style.display = "block";
    });
    
    if(clickedTag.textContent == "All"){
        //remove all active tags
        activeTags.clear()
        tags.forEach(t=>{t.style.outline = "none";});

        //style only All tag
        activeTags.add("All");
        Alltag.style.outline = borderStyle;
        return;
    }

    //remove All from activeTags
    activeTags.delete("All");
    Alltag.style.outline ="none";

    if(clickedTag.style.outline == borderStyle){ //tag already active
        //unselect tag
        clickedTag.style.outline ="none";
        activeTags.delete(clickedTag.textContent);

        if(activeTags.size == 0){ // no tags selected
            activeTags.add("All"); //display all
            Alltag.style.outline = borderStyle;
        }
    }else{ //tag inactive
        //select tag
        clickedTag.style.outline = borderStyle;
        activeTags.add(clickedTag.textContent);
    }
    
    //update card list shown
    if(!activeTags.has("All")){
        //for each displayed card,
        //check if card tags is present in activeTags.
        // if not, hide card
        cards.forEach(card=>{
            let currentTags = card.querySelector(".card-tags").querySelectorAll("li");
            let validCard  = false;
            currentTags.forEach(t=>{
                if(activeTags.has(t.textContent)){
                    validCard = true;
                    return;
                }
            });
            if(!validCard){
                card.style.display = "none";
            }
            // console.log(currentTags);
        });
    }



}));

//Flip card when clicked
cards.forEach(card=>{
    card.addEventListener("click",function(){
        const inner = card.querySelector(".card-inner");
        if(inner.classList.contains("rotate-inner")){
            inner.classList.remove("rotate-inner");
        }else{
            inner.classList.add("rotate-inner");
        };
    });
});