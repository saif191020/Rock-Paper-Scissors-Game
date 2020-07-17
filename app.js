user_score = 0;
comp_score = 0;
result = document.getElementById("result")
user_score_text = document.getElementById("user-score");
comp_score_text = document.getElementById("comp-score");
rock_button = document.getElementById("r");
scissor_button = document.getElementById("s");
paper_button = document.getElementById("p");

opt = ['r', 'p', 's']
items = {
	'r': 'Rock',
	'p': 'Paper',
	's': 'Scissor'
}


paper_button.addEventListener("click", compute);
rock_button.addEventListener("click", compute);
scissor_button.addEventListener("click", compute);

function compute() {
	comp_choice = opt[parseInt(Math.random() * 3)];
	user_choice = this.id;
	user = "(user)".fontsize(3).sub()
	comp = "(comp)".fontsize(3).sub()
	if (user_choice == comp_choice ) {
		//draw
		result.innerText = items[user_choice] + " with " + items[comp_choice] + ". Draw!"
		this.classList.add("grayRing");
		curb=this
		setTimeout(function () { curb.classList.remove("grayRing") }, 1000)
	}
	else if (user_choice == 'r') {
		if (comp_choice == 'p') {
			//user lose
			result.innerHTML = `Paper${comp} covers Rock${user}. You Lose!`
			lose(this);

		} else {
			//user wins
			result.innerHTML = `Rock${user} breaks Scissor${comp}. You Win!`
			win(this);
		}
	} else if (user_choice == 'p') {
		if (comp_choice == 's') {
			//user lose
			lose(this);
			result.innerHTML = `Scissor${comp} cuts Paper${user}. You Lose!`
		} else {
			//user wins
			result.innerHTML = `Paper${user} covers Rock${comp}. You Win!`
			win(this);

		}
	} else if (user_choice == 's') {
		if (comp_choice == 'r') {
			//user lose
			result.innerHTML = `Rock${comp} breaks Scissor${user}. You Lose!`
			lose(this);
		} else {
			//user wins
			result.innerHTML = `Scissor${user} cuts Paper${comp}. You Win!`
			win(this);

		}
	}
	user_score_text.innerHTML = user_score
	comp_score_text.innerHTML = comp_score
	//console.log(user_choice+comp_choice)
}


function win(button) {
	button.classList.add("greenRing");
	user_score++;
	setTimeout(function () { button.classList.remove("greenRing"); }, 1000)
}
function lose(button) {
	button.classList.add("redRing");
	comp_score++;
	setTimeout(function () { button.classList.remove("redRing"); }, 1000)
}