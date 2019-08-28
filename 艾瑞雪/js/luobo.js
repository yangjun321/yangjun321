var bus = document.getElementsByTagName("button");
var carousel = document.getElementsByClassName("carousel")[0];
var imgs = carousel.getElementsByTagName("img");
console.log(imgs);

var lis = carousel.getElementsByTagName("li");
j = 0;
for (var i = 0; i < bus.length; i++) { 
	bus[i].onclick = function () { 
		if (this.innerHTML=="&gt;") { 
			btn();
			
		}else { 
			j--;
			if (j == -1) {
				j = 4;
			}
			for (i = 0; i < imgs.length-1; i++) { 
				imgs[i].className = "";
				lis[i].className = "";
			}
			imgs[j].className = "active";
			lis[j].className = "active";
			
		}
	}
}

for (i = 0; i < lis.length; i++) { 
	lis[i].onclick = function () { 
		for (i = 0; i < lis.length; i++) { 
			lis[i].className = "";
			imgs[i].className = "";
		
		}
		this.className = "active";
		j = this.getAttribute("yj");
		imgs[j].className = "active";
	}

}



var str = setInterval(btn, 3000);
var divs = document.getElementsByClassName("carousel")[0];
divs.onmouseover = function () { 
	clearInterval(str);
}
divs.onmouseout = function () { 
	str = setInterval(btn, 2000);
}








function btn() { 
	j++;
			if (j == 5) {
				j = 0;
			}
			for (var i = 0; i < imgs.length-1; i++) { 
				imgs[i].className = "";
				lis[i].className = "";
			}
			imgs[j].className = "active";
			lis[j].className = "active";
}


var td2 = document.getElementsByClassName("td2");
var tdz = document.getElementsByClassName("tdz")[0];

tdz.onmouseover = function (e) { 
	e = e || window.event;
	var target = e.target || e.scrElement;
	if (target.className != "td2" && target.className != "tdz") { 
	
		
		target.parentNode.children[0].style.display = "none"
		target.parentNode.children[1].style.display = "block"
		target.parentNode.children[2].style.color="red"
		
		
	}
}
tdz.onmouseout = function (e) { 
	e = e || window.event;
	var target = e.target || e.scrElement;
	if (target.className != "td2" && target.className != "tdz") { 
	
		
		target.parentNode.children[0].style.display = "block"
		target.parentNode.children[1].style.display = "none"
		target.parentNode.children[2].style.color="black"
		
		
	}
}

