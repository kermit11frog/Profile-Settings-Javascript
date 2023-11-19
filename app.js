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

	var changes = {
		username: false,
		email: false,
		number: false
	},
	isChangesAvailable = false;
	// fill account element's information
	var account = window.localStorage.getItem('account');
	account = JSON.parse(account);

	var usernameElem = $("#username"),
		passwordElem = $("#password"),
		emailElem = $("#email"),
		numberElem = $("#number");

	usernameElem.textContent = account.username;
	for (x in account.password) {
		passwordElem.textContent += '*';
	};
	emailElem.textContent = account.email;
	numberElem.textContent = account.number;

	// define events
	$('.input').forEach(input => {
		input.addEventListener('keyup', readyForSave);
	});
	function readyForSave(event) {
		if (event.target.innerText !== account[event.target.id]) {
			changes[event.target.id] = true;
		} else {
			changes[event.target.id] = false;
		}

		isChangesAvailable = Object.values(changes).some(change => {return change == true});
		isChangesAvailable ? $('button').removeAttribute('disabled'):$('button').setAttribute('disabled', '');
	}

	$('button').addEventListener('click', save);
	function save() {
		if (isChangesAvailable) {
			account.username = usernameElem.textContent,
			account.email = emailElem.textContent,
			account.number = numberElem.textContent;

			account = JSON.stringify(account);
			window.localStorage.setItem('account', account);
			account = JSON.parse(account);
			$('button').setAttribute('disabled', '');
		} else {
			console.warn('nothing changed for save ...');
		}
	}
};