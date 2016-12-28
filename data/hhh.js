
var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

var markHeight =
Math.floor(document.documentElement.clientHeight *
	document.documentElement.clientHeight / scrollHeight);


var markPagePos = [];//массив, содержащий id'шники закладок mark

//основная функция по добавлению закладок mark
//в ней прописаны и все css-свойства mark
function addMark(){
	markPosition =
	window.pageYOffset * document.documentElement.clientHeight / scrollHeight;
	
	var mark = document.createElement('div');

	console.log("")

	console.log(markPagePos.push(window.pageYOffset));//чето не работает push
	//наверное как-то не правильно его использую, почемуто length всегда 1

	var pia = window.pageYOffset;//запоминаем текущую позицию скролла,
								 //что бы потом переходить к ней
	for(var i = 0; i < 50; i++) {
		if(!(document.getElementById("mark_" + i))) {
			mark.id = "mark_" + i;
			break;
		}
	}

	/*<STYLE>*/
	/*
	mark.style.position = "fixed";
	mark.style.right = '0px';
	mark.style.top = markPosition + 'px';
	mark.style.width = "20px";
	mark.style.height = markHeight + 'px';
	mark.style.background = "#ffa500";
	mark.style.opacity = '0.5';
	*/
	mark.style.position = "fixed";//стиль самого бокса
	mark.style.top = markPosition + 'px';
	mark.style.right = "10px";
	mark.style.height = "20px";
	mark.style.width = "20px";
	mark.style.backgroundColor = "black";
	mark.style.opacity = "0.5";
	mark.style.borderTopLeftRadius = "3px";
	mark.style.borderBottomLeftRadius = "3px";
	mark.style.zIndex = "999";
	mark.style.cursor = "pointer";
		var triangle = document.createElement('div');//маленький треугольник справа
		triangle.className = "triangle";
		triangle.style.position = "absolute";
		triangle.style.left = "20px";
		triangle.style.top = "0px";
		triangle.style.border = "10px solid transparent";
		triangle.style.borderLeft = "10px solid black"; 
	/*<STYLE>*/
	mark.onclick = function(){//при клике ЛКМ прыгаем к отметке
		window.scrollTo(0, pia);
	}
	mark.oncontextmenu = function(){//при клике ПКМ удаляет отметку
		document.body.removeChild(mark);
		return false;
	}
	mark.ondblclick = function(){
		switch(mark.style.backgroundColor){
			case "black":
				mark.style.backgroundColor = "red";
				triangle.style.borderLeftColor = "red";
				break;
			case "red":
				mark.style.backgroundColor = "yellow";
				triangle.style.borderLeftColor = "yellow";
				break;
			case "yellow":
				mark.style.backgroundColor = "green";
				triangle.style.borderLeftColor = "green";
				break;
			case "green":
				mark.style.backgroundColor = "black";
				triangle.style.borderLeftColor = "black";
				break;
		} 
	}

	//document.getElementById('scroll').appendChild(mark);
	document.body.appendChild(mark);
	mark.appendChild(triangle);
}

addMark();