import $ from 'jquery';

//on click of md container grid
$("md-card").on('click', function(this: HTMLElement) {
    console.log('clicked');
});
    // change id/class of clicked element to active
    // fade all inactive elements
    // transform active element to full screen and adjust

//on return to grid:
    //set active element to inactive
    //fade full screen out
    //fade grid back in one by one
