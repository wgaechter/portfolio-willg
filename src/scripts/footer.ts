import $ from 'jquery';

var LangMode:boolean = true; //true for being in US mode, false for being in swiss mode
$("#swissMode").on('click', function(e) {
    if (LangMode) {
        $("#headerName_text").text("William Joseph Gächter");
        $("#copyright").text("© 2025 - William Gächter - Data Analyst and Engineer")
        $(this).find('img').attr('src', "../assets/US_flag.svg");
        LangMode = false;
    } else { 
        $("#headerName_text").text("William Joseph Gaechter");
        $("#copyright").text("© 2025 - William Gaechter - Data Analyst and Engineer");
        $(this).find('img').attr('src', "../assets/Flag_of_Switzerland.svg");
        LangMode = true;
    };
});