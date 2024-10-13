let car = document.getElementById("car");

let enemyCar1 = document.getElementById("enCar1");
let enemyCar2 = document.getElementById("enCar2");
let enemyCar3 = document.getElementById("enCar3");
let enemyCar4 = document.getElementById("enCar4");

let voskl1 = document.getElementById("voskl1");
let voskl2 = document.getElementById("voskl2");
let voskl3 = document.getElementById("voskl3"); 
let voskl4 = document.getElementById("voskl4");

let randTimer =  Math.floor(Math.random() * (6 - 3) + 3);

let posNum = 1


let pos1 = "3%";
let pos2 = "29%";
let pos3 = "57%";
let pos4 = "82%";  


let lastPos = 1;
let check_an = true;

let car1 = false;
let car2 = false;
let car3 = false;
let car4 = false;

let carMove1 = false;
let carMove2 = false;
let carMove3 = false;
let carMove4 = false;

let scoreText = document.getElementById("score");
let score = 0;

let n = true;

let timerForCar = 1100;
let minColCar = 1;
let name;



setInterval(function(){
	randTimer =  Math.floor(Math.random() * (6 - 3) + 3);
	
	let randCol = Math.floor(Math.random() * (4 - minColCar) + minColCar);
	
	while(randCol != 0){
		if (car1 == false && randCol != 0){
			let rand1 = Math.floor(Math.random() * (3 - 1) + 1);
			if(rand1 == 2){
				voskl1.classList.add("vosklAnimClass");
				car1 = true;
				randCol -= 1;
			};	
		};
		
		if (car2 == false && randCol != 0){
			let rand2 = Math.floor(Math.random() * (3 - 1) + 1);
			if(rand2 == 2){
				voskl2.classList.add("vosklAnimClass");
				car2 = true;
				randCol -= 1;
			};	
		};
		
		if (car3 == false && randCol != 0){
			let rand3 = Math.floor(Math.random() * (3 - 1) + 1);
			if(rand3 == 2){
				voskl3.classList.add("vosklAnimClass");
				car3 = true;
				randCol -= 1;
			};	
		};
		
		if (car4 == false && randCol != 0){
			let rand4 = Math.floor(Math.random() * (3 - 1) + 1);
			if(rand4 == 2){
				voskl4.classList.add("vosklAnimClass");
				car4 = true;
				randCol -= 1;
			};	
		};
	};
}, +(String(randTimer) + "000"));

setInterval(function(){
	if(carMove1 == true && posNum == 1){
		window.location.href = 'lose-window.html';
		localStorage.setItem('score', score);
	}
	if(carMove2 == true && posNum == 2){
		window.location.href = 'lose-window.html';
		localStorage.setItem('score', score);
	}
	if(carMove3 == true && posNum == 3){
		window.location.href = 'lose-window.html';
		localStorage.setItem('score', score);
	}
	if(carMove4 == true && posNum == 4){
		window.location.href = 'lose-window.html';
		localStorage.setItem('score', score);
	}
	
	score += 1;
	scoreText.textContent = String(score);

}, 200);


setInterval(function(){
	if(car1 == true){
		setTimeout(function(){
			voskl1.classList.remove("vosklAnimClass");
			enemyCar1.classList.add("enemyCarMove");
			setTimeout(function(){
				if (car1 == true){carMove1 = true;};
			}, 400); 
			setTimeout(function(){
				enemyCar1.classList.remove("enemyCarMove");
				car1 = false;

			}, 1000);
			setTimeout(function(){
				carMove1 = false;
			}, 1300);
		}, timerForCar);
	}
	if(car2 == true){
		setTimeout(function(){
			voskl2.classList.remove("vosklAnimClass");
			enemyCar2.classList.add("enemyCarMove");
			setTimeout(function(){
				if (car2 == true){carMove2 = true;};
			}, 500); 
			setTimeout(function(){
				enemyCar2.classList.remove("enemyCarMove");
				car2 = false;

			}, 1000);
			setTimeout(function(){
				carMove2 = false;
			}, 1300);
		}, timerForCar);
	}
	if(car3 == true){
		setTimeout(function(){
			voskl3.classList.remove("vosklAnimClass");
			enemyCar3.classList.add("enemyCarMove");
			setTimeout(function(){
				if (car3 == true){carMove3 = true;};
			}, 500); 
			setTimeout(function(){
				enemyCar3.classList.remove("enemyCarMove");
				car3 = false;

			}, 1000);
			setTimeout(function(){
				carMove3 = false;
			}, 1300);
		}, timerForCar);
	}
	if(car4 == true){
		setTimeout(function(){
			voskl4.classList.remove("vosklAnimClass");
			enemyCar4.classList.add("enemyCarMove");
			setTimeout(function(){
				if (car4 == true){carMove4 = true;};
			}, 500); 
			setTimeout(function(){
				enemyCar4.classList.remove("enemyCarMove");
				car4 = false;

			}, 1000);
			setTimeout(function(){
				carMove4 = false;
			}, 1300);
		}, timerForCar);
	}

	if(timerForCar >= 600){
		timerForCar -= 5;
	}
	if(timerForCar <= 800){
		minColCar = 2;
	}
	if(timerForCar <= 600){
		minColCar = 3;
	}
	
},1000);


document.addEventListener("keydown", function(event){
	

    if (event.code === 'ArrowRight'){
		if(posNum == 4){
			posNum = 4;
		}

		if (posNum == 1 && check_an == true){
		check_an = false;
		car.classList.add("carHorizMove2");
			setTimeout(function(){
				car.classList.remove("carHorizMove2");
				check_an = true;
				posNum = 2;
			}, 300);
		car.style.left = pos2;
		}
		
		if (posNum == 2 && check_an == true){
		check_an = false;
		car.classList.add("carHorizMove3");
			setTimeout(function(){
				car.classList.remove("carHorizMove3");
				check_an = true;
				posNum = 3;
			}, 300);
		car.style.left = pos3;
		}
			
		if (posNum == 3 && check_an == true){
		check_an = false;
		car.classList.add("carHorizMove4");
			setTimeout(function(){
				car.classList.remove("carHorizMove4");
				check_an = true;
				posNum = 4;
			}, 300);
		car.style.left = pos4;
		}
	 

	}
});

document.addEventListener("keydown", function(event){

    if (event.code === 'ArrowLeft'){
		if(posNum == 1){
			posNum = 1;
		}

		
		if (posNum == 4 && check_an == true){
		check_an = false;
		car.classList.add("carHorizMove4back");
			setTimeout(function(){
				car.classList.remove("carHorizMove4back");
				check_an = true;
				posNum = 3;
			}, 300);
		car.style.left = pos3;
		}
		
		if (posNum == 3 && check_an == true){
		check_an = false;
		car.classList.add("carHorizMove5back");
			setTimeout(function(){
				car.classList.remove("carHorizMove5back");
				check_an = true;
				posNum = 2;
			}, 300);
		car.style.left = pos2;
		}
		
		if (posNum == 2 && check_an == true){
		check_an = false;
		car.classList.add("carHorizMove6back");
			setTimeout(function(){
				car.classList.remove("carHorizMove6back");
				check_an = true;
				posNum = 1;
			}, 300);
		car.style.left = pos1;
		}
		
		
		
     }
});



/*========================================================================*/




	
