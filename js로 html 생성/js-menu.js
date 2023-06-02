var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

//   function allBox(a){
//     var box = document.createElement('div');
//     var boxImg = document.createElement('img');
//     var boxTitle = document.createElement('h5');
//     var boxPrice = document.createElement('p');
//     var imgSrc = "https://via.placeholder.com/600";
//     boxImg.src=imgSrc;
//     box.classList.add('col-sm-4');
//     boxImg.classList.add('w-100');
//     document.querySelector('.row').appendChild(box);
//     document.querySelector('.col-sm-4').appendChild(boxImg);
//     document.querySelector('.col-sm-4').appendChild(boxTitle);
//     document.querySelector('.col-sm-4').appendChild(boxPrice);
//     boxTitle.innerHTML=products[a].title;
//     boxPrice.innerHTML='가격 : '+products[a].price;
//   }
//   for(var i = 0; i<3;i++){
//     allBox(i);  
//   }

var row = document.querySelector('.row');
for(var i = 0 ;i<3;i++){
    let temp = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p>
    </div>`;
    row.insertAdjacentHTML('beforeend', temp);
}
