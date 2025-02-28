import $ from 'jquery';


$('input[type="checkbox"]').on('change', function() {
    var mdItem = $(this).closest('.md-item');
    var mdCard = mdItem.find('.md-card');
    console.log(mdItem);
    console.log(mdCard);
    if (mdItem && mdCard) {
        const currentHeight = mdItem.height() ?? -1;
        let extendedHeight = mdCard.height() ?? -1;

        console.log("Current Height:", currentHeight);
        console.log("Extended Height:", extendedHeight);
        
        if (currentHeight == -1 || extendedHeight == -1){
            console.log("Error: height is 0");
            return;
        }
        if (currentHeight < extendedHeight) {
            console.log("Extending height");
            mdItem.animate(
                { height: extendedHeight + 50 }, 2000, 
                function() {
                    mdItem.css('height', extendedHeight + 50);
                });
            return;
        }
        if (currentHeight > 300) {
            console.log("Retracting height");
            mdItem.animate(
                { height: '300px' }, 2000, 
                function() {
                    mdItem.css('height', '300px');
                });
            return;
        }
        else {
            console.log("Error: currentHeight > extendedHeight???")
            console.log("Current Height:", currentHeight);
            console.log("Extended Height:", extendedHeight);
        }
    }
    else {
        console.log("Error: mdItem or mdCard is null");
    }
});