var one = $('.tab-button');
var two = $('.tab-content');

one.click(function(e){
    console.log('a');
    tapButton(e.target.dataset.id);
});


function tapButton(a){
    one.removeClass('orange');
    one.eq(a).addClass('orange');
    two.removeClass('show');
    two.eq(a).addClass('show');
};
