setInterval(myMethod, 500);

function myMethod( )
{
  //data = document.getElementsByClassName("ril-image-current ril__image ril__imageDiscourager");
  data = document.getElementsByClassName("ril-image-current ril__image");
  
  var i;
  for (i = 0; i < data.length; i++) {
	if(data[i].children.length==0){
	
		var aLink = document.createElement("a");   // Create a link element
		var link = document.createTextNode("Lien de téléchargement"); 
		// Append the text node to anchor element. 
		aLink.appendChild(link); 
		aLink.href = data[i].src;
		aLink.title = "(click droit -> Enregistrer le lien sous...)";
		aLink.style="position:relative;z-index:1000;"
		aLink.id="addedLink";
		
		// Remove existing link
		var existingLink=document.getElementById("addedLink");
		if(existingLink){
			existingLink.parentElement.removeChild(existingLink);
		}
		// Add the updated one
		data[i].parentElement.appendChild(aLink); 
	}
  }
}
