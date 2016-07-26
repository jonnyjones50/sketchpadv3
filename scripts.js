var count = 16; //Number of squares
var size = 720 / count; // Size of squares

var createSketch = document.createElement('div'); //Creates a container div for our grid
createSketch.id = 'sketch';

function createGrid()  {
  for (var i = 1; i <= count * count; i++) {
    var createSquare = document.createElement('div');
    createSquare.class.name = 'square';
    createSquare.style.height = size;
    createSquare.style.width = size;
    createSquare.appendChild(createSquare);
  };

  document.body.appendChild(createSketch);
};

createGrid();

$(document).ready(function ()  {
  $('.square').hover(function ()  {
    $(this).css('background-color', 'black');
  });
});
