setInterval(myMethod, 2000);

function myMethod( )
{
  data = document.getElementsByClassName("ril-image-current ril__image ril__imageDiscourager");
  
  var i;
  for (i = 0; i < data.length; i++) {
	if(data[i].children.length==1){
	
		var aSpacer = document.createElement("p");
		aSpacer.innerText = "<br><br><br><br><br>"; 
		data[i].appendChild(aSpacer);
		
		var aLink = document.createElement("a");   // Create a <button> element
		var link = document.createTextNode("Lien de téléchargement"); 
		// Append the text node to anchor element. 
		aLink.appendChild(link); 
		aLink.href = data[i].style.backgroundImage.replaceAll('url(\"','').replaceAll('\")','');
		aLink.title = "(click droit -> Enregistrer le lien sous...)";
		aLink.style="position:relative;z-index:1000;"
		data[i].appendChild(aLink); 
	}
  }
}
