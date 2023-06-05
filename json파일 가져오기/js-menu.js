var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];
var row = document.querySelector('.row');
var cnt = 0;
document.querySelector('#more').addEventListener('click',function(){
  console.log(cnt);
  cnt++;
  if(cnt>2){
    cnt = 2;
    return false;
  }
  fetch(`https://codingapple1.github.io/js/more${cnt}.json`)
  .then(res=>res.json())
  .then(function(data){
    console.log(data);
    for(var j = 0 ;j<3;j++){
      let temp = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${data[j].title}</h5>
      <p>가격 : ${data[j].price}</p>
      </div>`;
      row.insertAdjacentHTML('beforeend', temp);
    }
  })
  .catch(function(erroe){
    console.log('실패');
  })
});




for(var i = 0 ;i<3;i++){
    let temp = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${products[i].title}</h5>
    <p>가격 : ${products[i].price}</p>
    </div>`;
    row.insertAdjacentHTML('beforeend', temp);
}
