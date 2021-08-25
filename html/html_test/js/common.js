window.addEventListener('load',function(){
	/* 공통 부분 html 불러오기 */
	var allEl = document.querySelectorAll('.include');
	
	Array.prototype.forEach.call(allEl, function(e){
		var includePath = e.dataset.path;
		if(includePath){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if(this.readyState == 4 && this.status == 200){
					e.outerHTML = this.responseText;
				}
			};
			xhttp.open('GET', includePath, true);
			xhttp.send();
		}
	});
	/* 공통 부분 html 불러오기 */

	/* 동적 요소 이벤트 걸기 */
	document.addEventListener('click',function(e){
		if(e.target && e.target.className == "test"){
			console.log(e.target.innerHTML)
		}
	});
	/* 동적 요소 이벤트 걸기 */

	var pathName = window.location.pathname;
	if(pathName.includes('page')){
		console.log('has page')
	}else if(pathName.includes('index')){
		console.log("index")
		// history.pushState(null,null,'main.do')
	}
	
	window.onpopstate = function(){
		history.go(1);
	}

});

