let descs = ".desc";
let options = ".btn-card";
let path = [];

function showDesc(e) {
  let descsi = document.querySelectorAll(descs);
  for(let i = 0; i < descsi.length; i++) {
    descsi[i].style.display = "none"
  }
  document.querySelector(e).style.display = "block"
}

showDesc(".desc-default");

function selectDesc(arr) {
  console.log(arr)
  let optionsi = document.querySelectorAll(options);
  for(let i = 0; i < optionsi.length; i++) {
    optionsi[i].style.display = "none"
  }
  for(let i = 0; i < arr.length; i++) {
    document.querySelector(arr[i]).style.display="block";
  }
  showDesc(".desc-default");
}

selectDesc(['.btn-one','.btn-two']);
