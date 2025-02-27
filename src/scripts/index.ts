import $ from 'jquery';

//on click of md container grid
    // change id/class of clicked element to active
    // fade all inactive elements
    // transform active element to full screen and adjust

$("div.md-card.inactive").on('click', function() { 
    console.log("clicked");
    $(this).closest('.md-item').toggleClass("expanded");
    $(this).toggleClass("inactive active");
});

//on return to grid:
    //set active element to inactive
    //fade full screen out
    //fade grid back in one by one
