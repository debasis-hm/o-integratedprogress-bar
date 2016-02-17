function integratedorigamiProgressbar() {

		let db = this;

	    db.draw_Circular_ProgressBar = function(){ 
  				
  				let element_list = document.getElementsByClassName("Circular-prg-chart");
  				let element_list_length = element_list.length;
  			
  				if(element_list_length){

						let index = -1;
						setInterval(function() {
							index++;
							if(index < element_list_length){

								let index_element = element_list[index];
								let jsoninfo  = index_element.getAttribute("data");
								let colorinfo = index_element.getAttribute("color") || "green";
								let isanimation = index_element.getAttribute("isanimated") || "true";
								let animationspeed = index_element.getAttribute("animationspeed") || 160;
								let height = index_element.clientHeight;
								let width = index_element.clientWidth ;
								let linewidth = index_element.getAttribute("linewidth") || 15;
								let radius = (height - linewidth)/2;

								let canvas = document.createElement('canvas');
								canvas.classList.add("o-canvas");								
								let span = document.createElement('span');
								if (typeof(G_vmlCanvasManager) !== 'undefined') {
								    G_vmlCanvasManager.initElement(canvas);
								}
								let ctx = canvas.getContext('2d');
								canvas.width = width; 
								canvas.height = height;
								index_element.appendChild(span);							
								index_element.appendChild(canvas);								
								let iterator =0;
								
								ctx.translate(height/2,width/2);
								ctx.rotate((-1 / 2 + 0 / 180) * Math.PI); 

								if(isanimation === "false"){
									animationspeed = 0;									
								}

								let data_prcntg = jsoninfo/100;
								data_prcntg = Math.min(Math.max(0, data_prcntg || 1), 1);

								let progress = setInterval(function () { 
																if (iterator == data_prcntg) {
																	clearInterval(progress);						
																}
																else{
																						
																	iterator += 0.1;	
																	iterator = Math.round( iterator* 10 ) / 10;
																	span.textContent =  iterator*100 + '%';
																	ctx.beginPath();
																	ctx.arc(0, 0, radius, 0, Math.PI * 2 * iterator, false);
																	ctx.strokeStyle = colorinfo;
															        ctx.lineCap = 'round'; 
																	ctx.lineWidth = 15;
																	ctx.stroke();					
																	 
																}
														    }, animationspeed); 

											}
										},50);
					}

				  	};
		db.draw_Flat_ProgressBar = function(){

				let element_list = document.getElementsByClassName("horizontal-prg-chart");
  				let element_list_length = element_list.length;

				if(element_list_length){
						let index = -1;
						setInterval(function() {
							index++;
							if(index < element_list_length){
								let index_element = element_list[index];
								let jsoninfo  = index_element.getAttribute("data");
								let isanimation = index_element.getAttribute("isanimated") || "true";
								let animationspeed = index_element.getAttribute("animationspeed") || 30;
								let innerDiv = document.createElement("DIV");								
							    index_element.appendChild(innerDiv);
								let width = 0;
								let percentValue = jsoninfo;
								if(isanimation === "false"){
									animationspeed =0;
								}	
									

								if(percentValue){

									let progress = setInterval(function () { 
										if (width == percentValue) {
											 clearInterval(progress);						
										}
										else{
											width++;
											innerDiv.style.width = width+ "%";
											innerDiv.innerHTML = width+ "%";
										}										    
								    }, animationspeed); 
							}
						}
						},50);
					}		
		
		};

		
}
 var integratedpBar = new integratedorigamiProgressbar();
export default function () {       
        integratedpBar.draw_Circular_ProgressBar();
		integratedpBar.draw_Flat_ProgressBar();  
}