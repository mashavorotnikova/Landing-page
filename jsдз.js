
function changebackground(){
	let menuElement = document.getElementById('header-top');
	menuElement.style.transition = '2s';
	if (window.pageYOffset > 0){
		menuElement.style.backgroundColor="rgba(5, 3, 43, 0.4)";		
	} else {
		menuElement.style.background="none";	
	};	
 
}

window.addEventListener('scroll', changebackground);

function changeplan() { 
	let buttonyearly = document.getElementsByClassName("plan-tab")[1];
	let buttonmonthly = document.getElementsByClassName("plan-tab")[0];
	
	let plans = document.getElementsByClassName('plan');
	let plansyerly = plans[1];
	let plansmonsly = plans[0];

	console.log('click');
	if (buttonyearly.className.includes('plan-tab-selected')) {
		buttonyearly.className = "plan-tab";
		buttonmonthly.className = "plan-tab plan-tab-selected";
		plansyerly.className = "plan";
		plansmonsly.className ="plan plan-selected";
	}else{
		buttonyearly.className = "plan-tab plan-tab-selected";
		buttonmonthly.className = "plan-tab";
		plansyerly.className = "plan plan-selected";
		plansmonsly.className ="plan";
	}

}



let plansbutton=document.getElementsByClassName("plan-select")[0];//получаем и сохраняем,чтобы с ним работать 

plansbutton.addEventListener('click', changeplan);// обработчик , при нажатии запустить функцию, название сами придумали 


