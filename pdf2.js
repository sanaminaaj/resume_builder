//download code start
	window.onload=function(){
document.getElementById("download").addEventListener("click",()=>{
	const one=this.document.getElementById("two");
	console.log(one);
	html2pdf().from(one).save();
})
}
function add1(){
	let newNode1=document.createElement("label");
	newNode1.textContent='Study Program'; 
	
	let newNode2=document.createElement("textarea");
	newNode2.classList.add("form-control");
	newNode2.classList.add("mt-1");
	newNode2.classList.add("study1");
	newNode2.setAttribute("rows",1);
	newNode2.setAttribute("placeholder","Enter here");

	let newNode3=document.createElement("label");
	newNode3.textContent='Institution';

	let newNode4=document.createElement("textarea");
	newNode4.classList.add("form-control");
	newNode4.classList.add("mt-1");
	newNode4.classList.add("inst1");
	newNode4.setAttribute("rows",1);
	newNode4.setAttribute("placeholder","Enter here");


	let ed=document.getElementById("ed");
	let add=document.getElementById("inAddButton");
	ed.insertBefore(newNode1,add);
	ed.insertBefore(newNode2,add);
	ed.insertBefore(newNode3,add);
	ed.insertBefore(newNode4,add);
}

function add3()
{
	let newNode1=document.createElement("label");
	newNode1.textContent='Internship'; 

	let newNode2=document.createElement("textarea");
	newNode2.classList.add("form-control");
	newNode2.classList.add("mt-1");
	newNode2.classList.add("internship");
	newNode2.setAttribute("rows",1);
	newNode2.setAttribute("placeholder","Enter here");
	
	let newNode3=document.createElement("label");
	newNode3.textContent='Company';
	
	let newNode4=document.createElement("textarea");
	newNode4.classList.add("form-control");
	newNode4.classList.add("mt-1");
	newNode4.classList.add("company");
	newNode4.setAttribute("rows",1);
	newNode4.setAttribute("placeholder","Enter here");
	
	let newNode5=document.createElement("textarea");
	newNode5.classList.add("form-control");
	newNode5.classList.add("mt-1");
	newNode5.classList.add("describe3");
	newNode5.setAttribute("rows",1);
	newNode5.setAttribute("placeholder","Enter here");

	let newNode6=document.createElement("label");
	newNode6.textContent='Description';

	let projects=document.getElementById("internships");
	let add=document.getElementById("iAddButton");
	projects.insertBefore(newNode1,add);
	projects.insertBefore(newNode2,add);
	projects.insertBefore(newNode3,add);
	projects.insertBefore(newNode4,add);
	projects.insertBefore(newNode6,add);
	projects.insertBefore(newNode5,add);
	
}
function add4()
{
	let newNode1=document.createElement("label");
	newNode1.textContent='Skill'; 

	let newNode2=document.createElement("textarea");
	newNode2.classList.add("form-control");
	newNode2.classList.add("mt-1");
	newNode2.setAttribute("rows",1);
	newNode2.setAttribute("placeholder","Enter here");
	newNode2.classList.add("skills");

	let projects=document.getElementById("skills");
	let add=document.getElementById("sAddButton");
	projects.insertBefore(newNode1,add);
	projects.insertBefore(newNode2,add);
	
}
function generate()
{
	let n1=document.getElementById("name1").value;
	let n2=document.getElementById("name2");
	n2.innerHTML=n1;
	document.getElementById("describe2").innerHTML=document.getElementById("describe1").value;
	document.getElementById("gmail2").innerHTML=document.getElementById("gmail1").value.concat(" ",document.getElementById("icon1").innerHTML='<b><i class="fa fa-envelope" id="icon1"></i></b>');
	console.log(document.getElementById("address1").value);
	document.getElementById("phone2").innerHTML=document.getElementById("phone1").value.concat(" ",document.getElementById("icon2").innerHTML=' <b><i class="fa fa-phone" id="icon2"></i></b>');
	document.getElementById("address2").innerHTML=document.getElementById("address1").value.concat(" ",document.getElementById("icon3").innerHTML=' <b><i class="fa fa-map-marker"></i></b>');
	document.getElementById("linkedin2").innerHTML=document.getElementById("linkedin1").value.concat(" ",document.getElementById("icon4").innerHTML=' <b><i class="fa fa-linkedin-square" id="icon4"></i></b>');
	//education start
	let arr3=document.getElementsByClassName("study1");
	let arr4=document.getElementsByClassName("inst1");
	let result4="";
	for(let l=0;l<arr3.length;l++)
	{
		result4=result4+`<b><h4> ${arr3[l].value} </h4></b>`+`<p> ${arr4[l].value}</p>`;

		
	}
	document.getElementById("ed2").innerHTML=result4;
	//education end
	//skills code start
	let st1=document.getElementsByClassName("skills");	
	let str="";
	let i=0;
	//let len=str.length;
	for (let e of st1)
	{
		if(i<st1.length-1)
		{
		str=str+`<b><button style="background-color: #25316D;color:white;width:25%;border:none;border-radius:10px;margin-top: 2px">${e.value}</button></b>`+" ";
		i=i+1;
		}
	}
	document.getElementById("skills2").innerHTML=str;
	//skills code end

	//internships start
	let arr5=document.getElementsByClassName("internship");
	let arr6=document.getElementsByClassName("company");
	let arr7=document.getElementsByClassName("describe3");

	let result5="";
	for(let m=0;m<arr5.length;m++)
	{	
		result5=result5+`<b><h4> ${arr5[m].value} </h4></b>`+`<p> ${arr6[m].value}</p>`+`<p> ${arr7[m].value}</p>`;
	}
	document.getElementById("internships2").innerHTML=result5;
	//internship end
}