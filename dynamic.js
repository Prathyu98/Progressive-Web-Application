function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function () {
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);

	}
		}
		htp.send(null);
}
getfile("dynamic.json",function(text) {
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	Career(data.Career);
	edu(data.Educational);
	lang(data.Languages);

})
var left=document.querySelector(".left");
function profile(p) {
       var pimg=document.createElement("img");
       pimg.src=p.img;
       left.appendChild(pimg);

       var ph3=document.createElement("h1");
       ph3.textContent=p.name;
       left.appendChild(ph3);

       var ph4=document.createElement("h3");
       ph4.textContent=p.roll;
       left.appendChild(ph4);

       var ph2=document.createElement("h3");
       ph2.textContent=p.Institute;
       left.appendChild(ph2);

       var ph5=document.createElement("h3");
       ph5.textContent=p.Place;
       left.appendChild(ph5); 
}

var right=document.querySelector(".right");
function Career(car) {
       var hc=document.createElement("h1");
       hc.innerHTML="Resume";
       right.appendChild(hc);

       var cc=document.createElement("h2");
       cc.innerHTML="Career objective: ";
       right.appendChild(cc);

       var chr=document.createElement("hr");
       right.appendChild(chr);

       var cp=document.createElement("p");
       cp.innerHTML=car.info;
       right.appendChild(cp);

  }

  function edu(e){
  	  var ed=document.createElement("h2")
  	  ed.innerHTML="Educational Details: ";
  	  right.appendChild(ed);

  	  var ehr=document.createElement("hr")
  	   right.appendChild(ehr);

  	   var etable=document.createElement("table")
  	   etable.border="1";
  	   var tr1="<tr><td>No</td><td>Degree</td><td>Institute</td><td>YOP</td></tr>";
  	   var tr2="";
  	   for(var i=0;i<e.length;i++){
  	   tr2=tr2+"<tr><td>"+e[i].No+"</td><td>"+e[i].Degree+"</td><td>"+e[i].Institute+"</td><td>"+e[i].YOP+"</td></tr>";
  	   }
  	   etable.innerHTML=tr1+tr2;
  	   right.appendChild(etable);

  }

  function lang(l){
  	   var lh=document.createElement("h2");
  	   lh.innerHTML="Languages known: ";
       right.appendChild(lh);

   	    var ul=document.createElement("ul");
        right.appendChild(ul);
  	    for(i=0;i<l.length;i++){
  	    	  var li=document.createElement("li");
  	    	  li.textContent=l[i].lang;
  	    	  ul.appendChild(li);

  	    }
  	  

  	}