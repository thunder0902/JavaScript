var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];
var row = document.querySelector('.row');
var cnt = 0;
//기본 카드 3개
for(var i = 0 ;i<3;i++){
  let temp = `<div class="col-sm-4">
  <img src="https://via.placeholder.com/600" class="w-100">
  <h5>${products[i].title}</h5>
  <p>가격 : ${products[i].price}</p>
  <button class="buy">구매</button>
  </div>`;
  row.insertAdjacentHTML('beforeend', temp);
}

//다나가 정렬 버튼
function sortBtn(ary){
  ary.sort(function(a,b){
    if(a.title<b.title){
      return 1;
    }
    else{
      return -1;
    }
  });
}

document.querySelector('#sort1').addEventListener('click',function(){
  if(cnt==0){
    sortBtn(products);
    row.innerHTML='';
     for(var i = 0 ;i<3;i++){
     let temp = `<div class="col-sm-4">
     <img src="https://via.placeholder.com/600" class="w-100">
     <h5>${products[i].title}</h5>
     <p>가격 : ${products[i].price}</p>
     <button class="buy">구매</button>
     </div>`;
     row.insertAdjacentHTML('beforeend', temp);
    }
  }
});


//구매 버튼 로컬 storage에 저장하기
var buy = document.querySelectorAll('.buy');
var buyArr = [];
for(var i = 0; i<3; i++){
    let a = buy[i].previousElementSibling;
    let clickTitle = a.previousElementSibling
    buy[i].addEventListener('click',function(){
        buyArr.push(clickTitle.innerHTML);
        var localArr = JSON.stringify(buyArr);
        localStorage.setItem('cart',localArr);
    });
}


