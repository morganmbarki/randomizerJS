var name = ['Morgan', 'Louis', 'Raphael', 'Azzedine', 'Lucas', 'Marie-Helene', 'Jordan', 'Pauline', 'Emilie', 'Severine', 'Marie', 'Melanie', 'Audrey'];
var button = document.getElementById('randomiz');
button.addEventListener('click',ask);
function ask() {
  var randomNumber = Math.floor(Math.random()*12);
  var result = name[randomNumber];
  console.log(name.length);
  // var item = name[Math.floor(Math.random()*name.length)];
  // alert(item)
}
