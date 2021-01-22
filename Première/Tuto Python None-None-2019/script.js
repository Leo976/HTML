function random(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}//Je l'ai prise sur internet, trop difficile... x)
function index(x){
	for(var i=1;i!=19;i++){
		y=(x==i)?'auto':'none';
		disp.innerHTML=(i==1)?'#x'+i+'{display:'+y+'}':disp.innerHTML+'#x'+i+'{display:'+y+'}';
	}//J'ai fait ce programme pour ne pas avoir plein de index.html, mais je peux utiliser plusieurs index si vous voulez..
	if (x==11) {
		for (var i=1;i!=10;i+=3) {
			var fruits=['abricot','ananas','citron','kiwi','pomme','orange','citron'];
			var vehicules=['voiture','scooter','bus','moto','camion','avion','bateau'];
			var animaux=['cheval','chien','chat','lion','cochon','lapin','mouton'];
			var r=random(1,3);
			var list=(r==1)?fruits:(r==2)?vehicules:animaux;//['abricot','ananas','citron','kiwi','...']
			var x=random(0,5);
			var var1str=list.splice(x,1);//abricot
			var x=random(0,5);
			var var2str=list.splice(x,1);//orange
			var text=document.getElementById('x11');
			var list=(r==1)?'fruits':(r==2)?'vehicules':'animaux';//fruits
			var var1int=random(0,9);//5 
			var var2int=random(0,9);//4
			var ans1=var1int+var2int;//5+4=9
			var ans2=ans1+random(1,5);//9+4=13
			var ans3=ans1-random(1,5);//9-5=4
			var pos=random(1,3);//2
			var lists=(pos==1)?[ans1,ans2,ans3]:(pos==2)?[ans2,ans1,ans3]:[ans3,ans2,ans1];//[13,9,4] or [4,13,9] or [9,4,13]
			var bools=(pos==1)?[1,0,0]:(pos==2)?[0,1,0]:[0,0,1];
			var question='La variable '+list+' est égal à combien ?<br/><br/>';
			var R1=i%3;
			var R2=(i+1)%3;
			var R3=(i+2)%3;
			R1=(R1==0)?3:R1;
			R2=(R2==0)?3:R2;
			R3=(R3==0)?3:R3;
			var buttons="<button onclick='quiz("+bools[R1-1]+")'>"+lists[0]+"</button><button onclick='quiz("+bools[R2-1]+")'>"+lists[1]+"</button><button onclick='quiz("+bools[R3-1]+")'>"+lists[2]+"</button>";
			var all="<center>"+question+buttons+"</center>";			
			text.innerHTML=text.innerHTML+'<python>'+var1str+'='+var1int+'<br/>'+var2str+'='+var2int+'<br/>'+list+'='+var1str+'+'+var2str+'</python>'+all;
			}
	}
}
index(1);
function quiz(b) {
	alert((b==1)?'Bonne réponse !':'Mauvaise réponse !');
	//..
	//..
}