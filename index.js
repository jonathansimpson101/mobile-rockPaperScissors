const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userResult = document.querySelector('.user-result');
const computerResult = document.querySelector('.computer-result');
const resultTitle = document.querySelector('.results > h2');
const button = document.querySelector('.button');


const computerOptions = ['rock', 'paper', 'scissors'];
let computerChoice = Math.floor(Math.random() * computerOptions.length);

rock.addEventListener('touchend', (e) => {
	userChoice = 'rock';
	userResult.innerHTML = '<p>👊</p>';

	if(computerOptions[computerChoice] == 'rock'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>Draw!</h2>'); 
		computerResult.innerHTML = '<p>👊</p>';
	}

	if(computerOptions[computerChoice] == 'paper'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>Computer Wins!</h2>'); 
		computerResult.innerHTML = '<p>🖐</p>';
	}

	if(computerOptions[computerChoice] == 'scissors'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>You Win!</h2>'); 
		computerResult.innerHTML = '<p>✌️</p>';
	}
})

paper.addEventListener('touchend', (e) => {
	userChoice = 'paper';
	userResult.innerHTML = '<p>🖐</p>';

	if(computerOptions[computerChoice] == 'rock'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>You Win!</h2>'); 
		computerResult.innerHTML = '<p>👊</p>';
	}

	if(computerOptions[computerChoice] == 'paper'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>Draw!</h2>'); 
		computerResult.innerHTML = '<p>🖐</p>';
	}

	if(computerOptions[computerChoice] == 'scissors'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>Computer Wins!</h2>'); 
		computerResult.innerHTML = '<p>✌️</p>';
	}
})

scissors.addEventListener('touchend', (e) => {
	userChoice = 'scissors';
	userResult.innerHTML = '<p>✌️</p>';

	if(computerOptions[computerChoice] == 'rock'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>Computer Wins!</h2>'); 
		computerResult.innerHTML = '<p>👊</p>';
	}

	if(computerOptions[computerChoice] == 'paper'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>You Win!</h2>'); 
		computerResult.innerHTML = '<p>🖐</p>';
	}

	if(computerOptions[computerChoice] == 'scissors'){
		resultTitle.insertAdjacentHTML('beforeend','<h2>Draw!</h2>'); 
		computerResult.innerHTML = '<p>✌️</p>';
	}
})

button.addEventListener('touchend', (e) => {

	window.location.reload();

});







