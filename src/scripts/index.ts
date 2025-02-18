import $ from 'jquery';

//on click of md container grid
    // change id/class of clicked element to active
    // fade all inactive elements
    // transform active element to full screen and adjust

$("div.md-card.inactive").on('click', function(this) { 
    console.log("clicked")
    $(this).removeClass("inactive").addClass("active");
    $("div.md-card.inactive").fadeOut();

    // 
});

//on return to grid:
    //set active element to inactive
    //fade full screen out
    //fade grid back in one by one
