			function setVisibility(id) {
				if(document.getElementById('mouseRegion').value=='Hide Account Details'){
				document.getElementById('mouseRegion').value = 'Show Account Details';
				document.getElementById(id).style.display = 'none';
				}else{
				document.getElementById('mouseRegion').value = 'Hide Account Details';
				document.getElementById(id).style.display = 'inline';
				}
			}