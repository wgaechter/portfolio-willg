import $ from 'jquery';

//Fade in the page


var path:string = window.location.pathname
console.log(path);
//remove the underline from all to clear
$('a.nav-link').css("text-decoration", 'none');
//switch to active tab and set an underline
switch (path) {
    case "/":
        console.log(window.location.pathname);
        $('a:contains("Home")').css('text-decoration', 'underline');
        break;
    case "/resume":
        console.log(window.location.pathname);
        $('a:contains("Resume")').css('text-decoration', 'underline');
        break;
    case "/projects":
        console.log(window.location.pathname);
        $('a:contains("Projects")').css('text-decoration', 'underline');
        break;
    case "/contact":
        console.log(window.location.pathname);
        $('a:contains("Contact")').css('text-decoration', 'underline');
        break;
    default:
        console.log(window.location.pathname);
        console.log("Default case: check");
        break;
}
