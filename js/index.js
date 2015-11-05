$(document).ready(function(){
	// about slider
	$("#owl-about").owlCarousel({
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,2],
		itemsTablet : [768,1],
		itemsMobile : [479,1],
		navigation : false,
		slideSpeed : 800,
		paginationSpeed : 800,
		autoPlay : true,
	});
});



$(window).load(function(){
	// about img height
	var maxHeight = Math.max.apply(null, $('.about .col-sm-8').map(function(){
		return $(this).outerHeight();
	}).get());
	$('.about .col-sm-8').css('height',maxHeight);
	
	if(window.innerWidth>768){
		$('.about .col-sm-4').css('height',$('.about .col-sm-8').height());
	}else{
		$('.about .col-sm-4').css('height','');
	}
	
	// pay img height
	if($('.pay .imgbg img').css('display')=='none'){
	   $('.pay .imgbg').css('height',$('.pay .content').height());
	}else{
	   $('.pay .imgbg').css('height','');
	};
	
	// contact height
	if(window.innerWidth>768){
		var maxHeight = Math.max.apply(null, $('.contact .row div').map(function(){
			 return $(this).outerHeight();
		}).get());
		$('.contact .row div').css('height',maxHeight);
	}else{
		$('.contact .row div').css('height','');
	}
})



$(window).resize(function(){
	// about img height
	$('.about .col-sm-8').css('height','');
	var maxHeight = Math.max.apply(null, $('.about .col-sm-8').map(function(){
		 return $(this).outerHeight();
	}).get());
	$('.about .col-sm-8').css('height',maxHeight);

	if(window.innerWidth>768){
		$('.about .col-sm-4').css('height',$('.about .col-sm-8').height());
	}else{
		$('.about .col-sm-4').css('height','');
		
	}
	
	// pay img height
	if($('.pay .imgbg img').css('display')=='none'){
	   $('.pay .imgbg').css('height',$('.pay .content').height());
	}else{
	   $('.pay .imgbg').css('height','');
	};
	
	// contact height
	if(window.innerWidth>768){
		$('.contact .row div').css('height','');
		var maxHeight = Math.max.apply(null, $('.contact .row div').map(function(){
			 return $(this).outerHeight();
		}).get());
		$('.contact .row div').css('height',maxHeight);
	}else{
		$('.contact .row div').css('height','');
	}
})
