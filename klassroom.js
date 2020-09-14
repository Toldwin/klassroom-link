setInterval(myMethod, 2000);

function myMethod( )
{
  data = document.getElementsByClassName("fancybox-content");
  
  var i;
  for (i = 0; i < data.length; i++) {
	if(data[i].children.length==1){
		
		var aLink = document.createElement("a");   // Create a <button> element
		var link = document.createTextNode("Lien de téléchargement"); 
		// Append the text node to anchor element. 
		aLink.appendChild(link); 
		aLink.title = "(click droit -> Enregistrer le lien sous...)";
		aLink.href = data[i].firstElementChild.src;  
		aLink.style="position:relative;z-index:1000;"
		data[i].appendChild(aLink); 
	}
  }
}
