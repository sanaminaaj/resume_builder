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
	
	let projects=document.getElementById("internships");
	let add=document.getElementById("iAddButton");
	projects.insertBefore(newNode1,add);
	projects.insertBefore(newNode2,add);
	projects.insertBefore(newNode3,add);
	projects.insertBefore(newNode4,add);
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
function add8()
{
	
	let newNode1=document.createElement("label");
	newNode1.textContent='Language';
	
	let newNode2=document.createElement("textarea");
	newNode2.classList.add("form-control");
	newNode2.classList.add("mt-1");
	newNode2.setAttribute("rows",1);
	newNode2.setAttribute("placeholder","Enter here");
	newNode2.classList.add("languages");
	
	let projects=document.getElementById("languages");
	let add=document.getElementById("lAddButton");
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
function add6()
{
	let newNode1=document.createElement("label");
	newNode1.textContent='Interest'; 

	let newNode2=document.createElement("textarea");
	newNode2.classList.add("form-control");
	newNode2.classList.add("mt-1");
	newNode2.classList.add("interests");
	newNode2.setAttribute("rows",1);
	newNode2.setAttribute("placeholder","Enter here");

	let projects=document.getElementById("interests");
	let add=document.getElementById("iAddButton2");
	projects.insertBefore(newNode1,add);
	projects.insertBefore(newNode2,add);
}
function generate()
{
	let n1=document.getElementById("name1").value;
	let n2=document.getElementById("name2");
	n2.innerHTML=n1;
	document.getElementById("describe2").innerHTML=document.getElementById("describe1").value;

	document.getElementById("gmail2").innerHTML="".concat(document.getElementById("icon1").innerHTML='<b><i class="fa fa-envelope" id="icon1"></i></b>'," ",document.getElementById("gmail1").value);
	document.getElementById("phone2").innerHTML="".concat(document.getElementById("icon2").innerHTML=' <b><i class="fa fa-phone" id="icon2"></i></b>'," ",document.getElementById("phone1").value);
	document.getElementById("address2").innerHTML="".concat(document.getElementById("icon3").innerHTML=' <b><i class="fa fa-map-marker"></i></b>'," ",document.getElementById("address1").value);


	//education start
	let arr3=document.getElementsByClassName("study1");
	let arr4=document.getElementsByClassName("inst1");
	let result4="";
	for(let l=0;l<arr3.length;l++)
	{
		result4=result4+`<b><h5> ${arr3[l].value} </h5></b>`+`<p> ${arr4[l].value}</p>`;

		
	}
	document.getElementById("ed2").innerHTML=result4;
	//education end

	//internships start
	let arr5=document.getElementsByClassName("internship");
	let arr6=document.getElementsByClassName("company");
	let result5="";
	for(let m=0;m<arr5.length;m++)
	{	
		result5=result5+`<b><h2> ${arr5[m].value} </h2></b>`+`<p> ${arr6[m].value}</p>`;
	}
	document.getElementById("internship2").innerHTML=result5;
	//internship end

	//certificate start
	let arr7=document.getElementsByClassName("certificate");
	let arr8=document.getElementsByClassName("description2");
	let result6="";
	for(let n=0;n<arr7.length;n++)
	{
		result6=result6+`<b><h2> ${arr7[n].value} </h2></b>`+`<p> ${arr8[n].value}</p>`;
	}
	document.getElementById("certificates2").innerHTML=result6;
	
	//project start
	
	let arr1=document.getElementsByClassName("project");
	let arr2=document.getElementsByClassName("description");
	//console.log(p);
	let s="";
	//console.log(arr1.length);
	for(let k=0;k<arr1.length;k++)
	{
		s=s+`<h2> ${arr1[k].value} </h2>`+`<p> ${arr2[k].value}</p>`;

		
	}
	//console.log(s);
	document.getElementById("pr2").innerHTML=s;
	
	//project end

	//skills start
	let ar1=document.getElementsByClassName("skills");
	let re1="";
	for(let z=0;z<ar1.length;z++)
	{
		re1=re1+`<b><button style="background-color: grey;color:white;width:20%;border:none;border-radius:10px;margin-top:2px"> ${ar1[z].value}</button></b>`;
	}
	document.getElementById("skills2").innerHTML=re1;

	//language start
	let ar2=document.getElementsByClassName("languages");
	let re2="";
	for(let y=0;y<ar2.length;y++)
	{
	re2=re2+`<b><button style="background-color: white;color: grey;width:20%;border:none;border-radius:10px;margin-top:2px">${ar2[y].value}</button></b>`;
	}
	document.getElementById("languages2").innerHTML=re2;

	
}