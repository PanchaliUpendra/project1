//document.getElementById("count-el").innerText=count+1;
/*
we can also write the above code by using the below method

let counters= document.getElementById("count-el")
counters.innerText=count+1;

*/





let count=0;
let text="ubbu"
function reset()
{
	count=0;
	document.getElementById("count-el").innerText=count;
}
function headname()
{
	text=prompt("enter your headname:");
	document.getElementById("head_js").innerText=text;
}
function increment()
{
	count=count+1;
	document.getElementById("count-el").textContent=count;
}
function decrement()
{
	if(count>0){
		count=count-1;
	}
	document.getElementById("count-el").innerText=count;
}
function save()
{
	document.getElementById("save-el").textContent+=text+":"+count+" - ";
	count=0;
	document.getElementById("count-el").textContent=count;
}