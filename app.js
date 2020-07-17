user_score =0;
comp_score =0;
result= document.getElementById("result")
user_score_text = document.getElementById("user-score");
comp_score_text = document.getElementById("comp-score");
rock_button = document.getElementById("r");
scissor_button = document.getElementById("s");
paper_button = document.getElementById("p");

opt =['r','p','s']
items ={
	'r':'Rock',
	'p':'Paper',
	's':'Scissor'
}

paper_button.addEventListener("click",compute);
rock_button.addEventListener("click",compute);
scissor_button.addEventListener("click",compute);

function compute()
{
	comp_choice = opt[parseInt(Math.random()*3)];
	user_choice = this.id;
	status =0;
	if(user_choice == comp_choice)
	{	
		//draw
		result.innerText = items[user_choice]+" with "+items[comp_choice]+". Draw!"
	}
	else if(user_choice =='r')
	{
		if (comp_choice == 'p')
		{
			//user lose
			result.innerText="Paper covers Rock. You Lose!"
			comp_score++;

		}else{
			//user wins
			result.innerText="Rock breaks Scissor. You Win!"
			user_score++;
		}
	}else if(user_choice =='p')
	{
		if (comp_choice == 's')
		{
			//user lose
			comp_score++;
			result.innerText="Scissor cuts Paper. You Lose!"
		}else{
			//user wins
			result.innerText="Paper covers Rock. You Win!"
			user_score++;			

		}
	}	else if(user_choice =='s')
	{
		if (comp_choice == 'r')
		{
			//user lose
			result.innerText="Rock breaks Scissor. You Lose!"
			comp_score++;
		}else{
			//user wins
			result.innerText="Scissor cuts Paper. You Win!"
			user_score++;			

		}
	}
	user_score_text.innerText=user_score
	comp_score_text.innerText=comp_score
	//console.log(user_choice+comp_choice)
}

