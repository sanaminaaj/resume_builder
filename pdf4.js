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

	let newNode5=document.createElement("label");
	newNode5.textContent='Description';
	
	let newNode6=document.createElement("textarea");
	newNode6.classList.add("form-control");
	newNode6.classList.add("mt-1");
	newNode6.classList.add("desc1");
	newNode6.setAttribute("rows",1);
	newNode6.setAttribute("placeholder","Enter here");

	let ed=document.getElementById("ed");
	let add=document.getElementById("inAddButton");
	ed.insertBefore(newNode1,add);
	ed.insertBefore(newNode2,add);
	ed.insertBefore(newNode3,add);
	ed.insertBefore(newNode4,add);
	ed.insertBefore(newNode5,add);
	ed.insertBefore(newNode6,add);
}
function add2()
{
	let newNode1=document.createElement("label");
	newNode1.textContent='Project'; 
	let newNode2=document.createElement("textarea");
	newNode2.classList.add("form-control");
	newNode2.classList.add("mt-1");
	newNode2.setAttribute("rows",1);
	newNode2.setAttribute("placeholder","Enter here");
	newNode2.classList.add("project");

	let newNode3=document.createElement("label");
	newNode3.textContent='Description';
	
	let newNode4=document.createElement("textarea");
	newNode4.classList.add("form-control");
	newNode4.classList.add("mt-1");
	newNode4.setAttribute("rows",3);
	newNode4.setAttribute("placeholder","Enter here");
	newNode4.classList.add("description");

	let projects=document.getElementById("projects");
	let add=document.getElementById("prAddButton");
	projects.insertBefore(newNode1,add);
	projects.insertBefore(newNode2,add);
	projects.insertBefore(newNode3,add);
	projects.insertBefore(newNode4,add);
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
	
	let newNode5=document.createElement("label");
	newNode5.textContent='Description';
	
	let newNode6=document.createElement("textarea");
	newNode6.classList.add("form-control");
	newNode6.classList.add("mt-1");
	newNode6.classList.add("desc3");
	newNode6.setAttribute("rows",1);
	newNode6.setAttribute("placeholder","Enter here");

	let projects=document.getElementById("internships");
	let add=document.getElementById("iAddButton");
	projects.insertBefore(newNode1,add);
	projects.insertBefore(newNode2,add);
	projects.insertBefore(newNode3,add);
	projects.insertBefore(newNode4,add);
	projects.insertBefore(newNode5,add);
	projects.insertBefore(newNode6,add);
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
function add5()
{
	let newNode1=document.createElement("label");
	newNode1.textContent='Certificate'; 
	let newNode2=document.createElement("textarea");
	newNode2.classList.add("form-control");
	newNode2.classList.add("mt-1");
	newNode2.classList.add("certificate");
	newNode2.setAttribute("rows",1);
	newNode2.setAttribute("placeholder","Enter here");
	
	let newNode3=document.createElement("label");
	newNode3.textContent='Description';
	
	let newNode4=document.createElement("textarea");
	newNode4.classList.add("form-control");
	newNode4.classList.add("mt-1");
	newNode4.classList.add("description2");
	newNode4.setAttribute("rows",3);
	newNode4.setAttribute("placeholder","Enter here");
	
	let projects=document.getElementById("certificates");
	let add=document.getElementById("cAddButton");
	projects.insertBefore(newNode1,add);
	projects.insertBefore(newNode2,add);
	projects.insertBefore(newNode3,add);
	projects.insertBefore(newNode4,add);
}
function add10()
{
	let newNode1=document.createElement("label");
	newNode1.textContent='Language';

	let newNode2=document.createElement("textarea");
	newNode2.classList.add("form-control");
	newNode2.classList.add("mt-1");
	newNode2.classList.add("language");
	newNode2.setAttribute("rows",1);
	newNode2.setAttribute("placeholder","Enter here");
	
	let projects=document.getElementById("languages");
	let add=document.getElementById("lAddButton");
	projects.insertBefore(newNode1,add);
	projects.insertBefore(newNode2,add);
}
function change1()
{
let color=document.getElementById('color').value;
document.getElementById('name2').style.color=color;
document.getElementById('address2').style.color=color;
document.getElementById('gmail2').style.color=color;
document.getElementById('phone2').style.color=color;
document.getElementById('linkedin2').style.color=color;
document.getElementById('obj').style.color=color;
document.getElementById('edu').style.color=color;
document.getElementById('pro').style.color=color;
document.getElementById('int').style.color=color;
document.getElementById('ski').style.color=color;
document.getElementById('cer').style.color=color;
document.getElementById('lan').style.color=color;
}
function change2()
{
let color=document.getElementById('color2').value;
document.getElementById('name3').style.backgroundColor=color;
document.getElementById('name4').style.backgroundColor=color;
document.getElementById('ed2').style.color=color;
document.getElementById('pr2').style.color=color;
document.getElementById('in2').style.color=color;
document.getElementById('certificates2').style.color=color;
document.getElementById('languages2').style.color=color;
document.getElementById('objective2').style.color=color;
}

function generate()
{
      let n1=document.getElementById("name1").value;
	let n2=document.getElementById("name2");
	n2.innerHTML=n1;

	document.getElementById("objective2").innerHTML=document.getElementById("objective1").value;
	document.getElementById("gmail2").innerHTML=document.getElementById("gmail1").value.concat(" ",document.getElementById("icon1").innerHTML='<b><i class="fa fa-envelope" id="icon1"></i></b>');
	
	
	document.getElementById("phone2").innerHTML=document.getElementById("phone1").value.concat(" ",document.getElementById("icon2").innerHTML=' <b><i class="fa fa-phone" id="icon2"></i></b>');
document.getElementById("address2").innerHTML=document.getElementById("address1").value.concat(" ",document.getElementById("icon3").innerHTML='<b><i class="fa fa-home" id="icon3"></i></b>');
	
	
	document.getElementById("linkedin2").innerHTML=document.getElementById("linkedin1").value.concat(" ",document.getElementById("icon4").innerHTML=' <b><i class="fa fa-linkedin-square" id="icon4"></i></b>');
//education start
	let arr3=document.getElementsByClassName("study1");
      let arr11=document.getElementsByClassName("desc1");
	let arr4=document.getElementsByClassName("inst1");
	let result4="";
	for(let l=0;l<arr3.length;l++)
	{
		result4=result4+`<b><h2> ${arr3[l].value} </h2></b>`+`<h4> ${arr4[l].value}</h4>`+`<h4> ${arr11[l].value}</h4>`;

		
	}
	document.getElementById("ed2").innerHTML=result4;
	//education end

	//projects start
	let arr5=document.getElementsByClassName("project");
	let arr6=document.getElementsByClassName("description");
	let result5="";
	for(let m=0;m<arr5.length;m++)
	{
		result5+=`<b><h2> ${arr5[m].value} </h2></b>`+`<h4> ${arr6[m].value}</h4>`;
	}
	document.getElementById("pr2").innerHTML=result5;
	//console.log(result5);
      //projects end

	//internships start
	let arr7=document.getElementsByClassName("internship");
	let arr8=document.getElementsByClassName("company");
	let arr12=document.getElementsByClassName("desc3");
	let result6="";
	for(let n=0;n<arr7.length;n++)
	{	
		result6=result6+`<b><h2> ${arr7[n].value} </h2></b>`+`<p> ${arr8[n].value}</p>`+`<p> ${arr12[n].value}</p>`;
	}
	console.log(arr7.length);
	document.getElementById("in2").innerHTML=result6;
	//internship end

	//skills code start
	let arr9=document.getElementsByClassName("skills");	
	let result7="";
      for(let p=0;p<arr9.length-1;p++)
	{
	result7=result7+`<b><button style="background-color: black;color:white;width:15%;border:none;border-radius:10px">${arr9[p].value}</button></b>`;
	}
	document.getElementById("skills2").innerHTML=result7;
	//skills code end
    
	//certificate start
	let arr13=document.getElementsByClassName("certificate");
	let arr14=document.getElementsByClassName("description2");
	let result8="";
	for(let q=0;q<arr13.length;q++)
	{
		result8=result8+`<b><h2> ${arr13[q].value} </h2></b>`+`<p> ${arr14[q].value}</p>`;
	}
	document.getElementById("certificates2").innerHTML=result8;
	//certificate end
     
	//languages start
	let arr15=document.getElementsByClassName("language");
	let result9="";
	for(let r=0;r<arr15.length;r++)
	{
		result9=result9+`<b><h4> ${arr15[r].value} </h4></b>`;
	}
	document.getElementById("languages2").innerHTML=result9;
}
	