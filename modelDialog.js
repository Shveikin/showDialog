String.prototype.replaceAll = function(search, replace){
	return this.split(search).join(replace);
}

function replaceAll2(str, search, replace){
	if (str!=undefined)
	return str.split(search).join(replace);
}

let backFunction = [];
function showDialog(className = '', callBack = false, data = false, oldData2 = false){
	let lastFunc = backFunction.length-1;

	console.log('className', `[${className}]`);
	
	backFunction.push((xdata) => { 
		//console.log('Стек функций: '+backFunction.length);
		if (backFunction.length == 2) backFunction = [];
		showDialog(className, callBack, Object.assign(data, xdata), data);
	});

	const serializator = (className) => {
		let array = Array.from(new FormData(document.querySelector(className)));
		let result = {};
		for (let i in array){

			console.log('array', array);
			let name = array[0][0];//array[i].name;
			let value = array[0][1];//array[i].value;

			if (name.indexOf('[')!=-1){
				let exp = name.split('[');
				let new_name = exp[0];
				let id = exp[1].replace(']', '');

				if (new_name in result){
					result[new_name] = Object.assign(result[new_name], {[id]: value});
				} else {
					result = Object.assign(result, {[new_name]: {[id]: value}});
				}
			} else {
				result = Object.assign(result, {[name]: value});
			}
		}
		return result;
	}

	let html = `<div class="default_mess" style='padding: 10px; 
							border-bottom: 10px;
							font-weight: 600;
							font-size: 22px;
							'>$title</div><div style='
							padding: 10px; 
							border-bottom: 30px;
							font-weight: 600;
							font-size: 20px;
							
							'>$body</div>`;


	const insertData = function(data, html){
		if (data){
			for (let i of Object.keys(data)){
				html = replaceAll2(html, '$'+i, data[i]);
			}
		}
		return html;
	}



	if (!(className instanceof Promise)){ // если это не promise
		if (className!='')
			if (className.substr(0,1)=='#')
				html = document.getElementById(className.substr(1)).innerHTML;
			else 
				html = className;

		html = insertData(data, html);
	} else {
		html = '<div class="promise_data">Подождите...</div>';
	}

	let mouseOnCloseWrapper = false;



	let form_btns = `	<div style="position: sticky;
									top: 0;
									background: #fff;
									padding: 10px;
									border-bottom: 1px solid #eee;
									margin-bottom: 20px;"><button class="saveandclosewindowonclick">Сохранить</button>
									<button class="closewindowonclick" href="?#">Закрыть</button>
						</div>
					`;

	if (typeof (callBack) == 'object'){
		form_btns = '';
		for (let i of Object.keys(callBack)){
			form_btns += `<button class="saveandclosewindowonclick" type="submit" style="margin-right: 5px;">${i}</button>`;
		}
		form_btns = `<div style="	border-top: 1px solid #eee; 
									padding: 10px; 
									background: #eee; 
									margin: -13px;
									margin-top: 10px;	
									text-align: right;">${form_btns}</div>`; 
		html += form_btns;
	} else html = form_btns + html;
	

	document.body.innerHTML += `
					<div class="black closewindowonclick">
						<form class="window">
							${html}
						</form>
					</div>`;





	document.body.style.overflow = 'hidden';
	const remove_black = () => {
		var element = document.querySelector('.black');
		element.parentNode.removeChild(element);
	}

	const on_mousedown = function (e) {
		if (e.target == this && window.outerWidth - e.clientX > 50)
			mouseOnCloseWrapper = true;
	}

	const on_mouseup = function () {
		if (mouseOnCloseWrapper) {
			document.body.style.overflow = 'auto';
			remove_black();
		}
	}

	const on_click = (event) => {
		let __action = event.target.innerHTML;
		if (document.querySelector('.black form').reportValidity()) {
			document.body.style.overflow = 'auto';

			let data2 = serializator('.black form');
			let last_ballback = false;

			if (typeof (callBack) == 'function') {
				callBack(data2, oldData2 ? oldData2 : data, last_ballback);
			} else if (typeof (callBack) == 'object'){
				callBack[__action](data2, oldData2 ? oldData2 : data, last_ballback);
			}

			remove_black();
		}
	}

	document.querySelector('.closewindowonclick').onmousedown = on_mousedown;
	document.querySelector('.closewindowonclick').onmouseup = on_mouseup;
	
	let btnd = document.querySelectorAll('.saveandclosewindowonclick');

	for(i=0; i<btnd.length; i++){
		btnd[i].onclick = on_click;
	}
	
	document.querySelector('.black form').onsubmit = () => false;




	if (className instanceof Promise){ // это промис
        // document.querySelector(".black form").innerHTML = "Подождите";
		setTimeout(() => {
			className.then(itm => {
				let html = insertData(data, itm);
				document.querySelector('.black form .promise_data').innerHTML = html;
			});
		},5000);
		
	}
}
