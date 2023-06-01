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

//데이터 넣기
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];
var card = document.querySelectorAll('.card-body h5');
var cardPrice = document.querySelectorAll('.card-body p');
for(var i=0;i<3;i++){
    card[i].innerHTML=products[i].title;
    cardPrice[i].innerHTML='가격 : '+products[i].price;
}


var choice = document.querySelectorAll('.form-select')[0];

choice.addEventListener('input',function(){
    let opt = choice.options[choice.selectedIndex].text;
    if(opt=='셔츠'){
        document.querySelectorAll('.form-select')[1].classList.remove('hide');
    }
    else{
        document.querySelectorAll('.form-select')[1].classList.add('hide');
    }
});



