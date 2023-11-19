// -------------------- don't remove below function ----------------------
function $(elems) {
 let elements = document.querySelectorAll(elems);
 if (elements.length === 1) {
  let elements = document.querySelector(elems);
  return elements;
 }
 return elements;
};

function random(min=0, max=1) {
	max++;
	return Math.floor(Math.random() * (max - min) + min);
};
// -------------------- don't remove above function ----------------------
$('body').onload = e => {
	$('.loading').classList['add']('hidden');
};