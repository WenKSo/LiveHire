function summarize() {
		  str = "";
          
          
          
          var radios = document.getElementsByName("event_type");
          for (var i = 0; i < radios.length; ++i) {
              if (radios[i].checked) {
				  if(radios[i].id == "rap" && !(document.getElementById("clean").checked) && !(document.getElementById("instrumental").checked)){
					  str += "<b>Wu-Tang Clan</b>" + "<br />";
				  }
				  if(radios[i].id == "rap" && document.getElementById("clean").checked && !(document.getElementById("instrumental").checked)){
					  str += "<b>The Fresh Prince</b>" + "<br />";
				  }
				  if(radios[i].id == "rap" && document.getElementById("instrumental").checked){
					  str += "<b>J Dilla</b>" + "<br />";
				  }
				  if(radios[i].id == "rock" && !(document.getElementById("instrumental").checked)){
					  str += "<b>The Black Keys</b>" + "<br />";
				  }
				  if(radios[i].id == "rock" && document.getElementById("instrumental").checked){
					  str += "<b>Phish</b>" + "<br />";
				  }
				  
				  if(radios[i].id == "jazz"){
					  str += "<b>Leland Whitty</b>" + "<br />";
				  }
				  if(radios[i].id == "orch"){
					  str += "<b>" + document.getElementById("state").value.trim() + " " +"Symphony Orchestra</b>" + "<br />";
				  }
				  if(radios[i].id == "band"){
					  str += "<b>Reel Big Fish</b>" + "<br />";
				  }
				  str += "Genre: ";
                  str += radios[i].value + "<br />";
                  break;
              }
          }
		  str += document.getElementById("city").value.trim() + ", " +
                 document.getElementById("state").value.trim() + " " + 
                 document.getElementById("zipcode").value.trim() + "<br />";
          str += "Booked For Date: " + document.getElementById("event_date").value + "<br />";
          
          document.getElementById("summary").innerHTML = str;
          document.getElementById("summary_wrapper").style.display = "block";
      }

      function reset_form() {
          document.getElementById("summary").innerHTML = "";
          document.getElementById("summary_wrapper").style.display = "none";
      }
//--------------------------------------------------------------

function summarize2() {
		  str = "";
          
          
          
          var radios = document.getElementsByName("instrument");
          for (var i = 0; i < radios.length; ++i) {
              if (radios[i].checked) {
				  if(radios[i].id == "guitar" && (document.getElementById("classic").checked)){
					  str += "<b>Employer:Edrick Ramos</b>" + "<br />";
				  }
				  if(radios[i].id == "guitar" && document.getElementById("rock").checked){
					  str += "<b>J Employer:Eric Zhen</b>" + "<br />";
				  }
				  if(radios[i].id == "guitar" && (document.getElementById("pop").checked)){
					  str += "<b>Employer:Kevin Poli</b>" + "<br />";
				  }
				  if(radios[i].id == "piano" && document.getElementById("rock").checked){
					  str += "<b>Employer:Angelababy</b>" + "<br />";
				  }
                  if(radios[i].id == "piano" && document.getElementById("classic").checked){
					  str += "<b>Employer:Soma</b>" + "<br />";
				  }
                  if(radios[i].id == "piano" && document.getElementById("pop").checked){
					  str += "<b>Employer:Stephen Westbrook</b>" + "<br />";
				  }
				  
				  if(radios[i].id == "violin"){
					  str += "<b>Kagami Taiga</b>" + "<br />";
				  }
				  if(radios[i].id == "drum"){
					  str += "<b>" + document.getElementById("state").value.trim() + " " +"Employer:Russell Durant</b>" + "<br />";
				  }
				  if(radios[i].id == "bass"){
					  str += "<b>Wenkang Su</b>" + "<br />";
				  }
				  str += "Instrument: ";
                  str += radios[i].value + "<br />";
                  break;
              }
          }
		  str += document.getElementById("city").value.trim() + ", " +
                 document.getElementById("state").value.trim() + " " + 
                 document.getElementById("zipcode").value.trim() + "<br />";
          str += "Experience: " + document.getElementById("fun_facts").value + "<br />";
    
          document.getElementById("summary").innerHTML = str;
          document.getElementById("summary_wrapper").style.display = "block";
      }

      function reset_form() {
          document.getElementById("summary").innerHTML = "";
          document.getElementById("summary_wrapper").style.display = "none";
      }

