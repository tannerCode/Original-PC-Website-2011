$(document).ready(function() { 


//index
        // main img fade in
        mainFade();
        $('img#picmain').fadeIn(1500);

        //first to second
        $('#vidcover').click(function() {
            $('#first').animate({left: "-1235px"}, 500);
            $('#second').animate({right: "0px"}, 500);
            });
        $('#back').click(function() {
            $('#second').animate({right: "-1235px"}, 500);
            $('#first').animate({left: "0px"}, 500);
            });        
        //button expand
        $(".options").hover(function() {
    	$(this).animate({"padding-bottom": "23px"},"fast"); 
        },
	function() {
	$(this).animate({"padding-bottom": "12px"},"fast");
	});

//adventure options
        // overview to highlights and back
        $('#left_overview').click(function() {
            $('#overview').animate({top: '10px'}, 500);
            $('#main').animate({top: '576px'}, 500);
        });
        $('#left_highlights').click(function() {
            $('#overview').animate({top: '-576px'}, 500);
            $('#main').animate({top: '10px'}, 500);
        });

        // highlight tab to highlights
        $('#high_tab').click(function() {
            $('#overview').animate({top: '-576px'}, 500);
            $('#main').animate({top: '10px'}, 500);
        });

        //select week
        $('.week_img').hover(function() {
            
            $('.week_img').removeClass('.week_selected');
    	    $('.week_img').addClass('.week_selected');
    	    $('#hover_week').show();
    	    $('#hover_arrow').show();
            
            var pos = $('.week_img:first').position().top - 60;
            var arrow = pos + 48;
            $('#hover_week').css("top", pos + "px");
            $('#hover_arrow').css("top", arrow + "px");
            
            var weekHov = $(this).attr('alt')
            var currentWk = $('#hovweek li').get(weekHov);
            var newWk = $(currentWk).html();
            $('#hover_week').html(newWk);
            
            var i = $(this).attr('src').replace("bw", ""); 
            $(this).attr('src', i);
            },
            function() {
            var c = $(this).attr('src').replace(".jpg", "bw.jpg");
            $(this).attr('src', c);
            $('#hover_week').hide();
    	    $('#hover_arrow').hide();
            });


//slideshow
	// Generate Photo Lineup
	$('img.slide_panel_photo').each(function(index){
		var photoWidth = $('.slide_container').width();                     
		var photoPosition = index * photoWidth;                                    
		$('.slide_photos').append('<img class="slide_photo" style="left: '+photoPosition+'" src="'+$(this).attr('src')+'" alt="'+$(this).attr('alt')+'" width="652" height="556" />');
		$('.slide_photos').css('width', photoPosition+photoWidth);
		initializeslide();
	});
	// List Navigation
	$('.act').click(function(){
	
		// Set the navigation state
		$('#activity li.act').removeClass('selected');
		$(this).addClass('selected');
		
		var navClicked = $(this).index();
		var slideWidth = $('.slide_container').width();
		var distanceToMove = slideWidth*(-1);                             
		var newPhotoPosition = navClicked*distanceToMove + 'px';
		var newCaption = $('.slide_panel_caption').get(navClicked);
		
		// Animate the photos and caption
		$('.slide_photos').animate({left: newPhotoPosition}, 1000);
		$('.slide_caption').animate({left: '-416px'}, 500, function(){
			var newHTML = $(newCaption).html();
			$('.slide_caption_content').html(newHTML);
			setCaption();
		});
	});

	//Arrow Navigation
	$('#left').click(function(){
            actPrev = $('.selected').prev();
            check = actPrev.length;       
       
            if(check > 0) {
                // Set list navigation state
                $('#activity li.act').removeClass('selected');
		$(actPrev).addClass('selected');
		
		var navClicked = actPrev.index();
		var slideWidth = $('.slide_container').width();
		var distanceToMove = slideWidth*(-1);                             
		var newPhotoPosition = navClicked*distanceToMove + 'px';
		var newCaption = $('.slide_panel_caption').get(navClicked);
		
		// Animate the photos and caption
		$('.slide_photos').animate({left: newPhotoPosition}, 1000);
		$('.slide_caption').animate({left: '-416px'}, 500, function(){
			var newHTML = $(newCaption).html();
			$('.slide_caption_content').html(newHTML);
			setCaption();
		});
		};
	 });
	$('#right').click(function(){
            actNext = $('.selected').next();
            check = actNext.length;
            
            if(check > 0) {
                // Set list navigation state
                $('#activity li.act').removeClass('selected');
		$(actNext).addClass('selected');
		
		var navClicked = actNext.index();
		var slideWidth = $('.slide_container').width();
		var distanceToMove = slideWidth*(-1);                             
		var newPhotoPosition = navClicked*distanceToMove + 'px';
		var newCaption = $('.slide_panel_caption').get(navClicked);
		
		// Animate the photos and caption
		$('.slide_photos').animate({left: newPhotoPosition}, 1000);
		$('.slide_caption').animate({left: '-416px'}, 500, function(){
			var newHTML = $(newCaption).html();
			$('.slide_caption_content').html(newHTML);
			setCaption();
		});
	    };
	 });
//faq
                $('.questions').click(function() {
                
                // set select state of question
                $('#questions li.questions').removeClass('qselected');
		$(this).addClass('qselected');
		
	        var qClicked = $(this).index();
		var newQuestion = $('.questions').get(qClicked);	
                var newAnswer = $('.answers').get(qClicked);
               
                //animate Q & A box
                $('#qa').animate({'left': '-390px'}, 300, function() {
                 var newHTMLQ = $(newQuestion).html();
                var newHTMLA = $(newAnswer).html();
                $('#qa').html('<p id="question">' + newHTMLQ + '</p><p id="answer">' + newHTMLA + '</p>');
                setQA();
                });   
                });
        
});

///functions
function mainFade () {
        $('img#picmain').fadeIn(1500);
}
function initializeslide(){
	$('.slide_caption_content').html(
		$('.slide_panels .slide_panel:first .slide_panel_caption').html()
	);
	$('#activity li.act:first').addClass('selected');
	$('.slide_photos').fadeIn(1500);
	setCaption();
}

function setCaption(){
	$('.slide_caption').animate({left: '0px'}, 500);
}

function setQA() {
        $('#qa').animate({left: '0px'}, 500);
}

function setBox() {
        $('.box_activity').animate({left: '0px'}, 150);
}
function hightab1() {
        $('#high_tab').animate({right: '-10px'}, 800);
        hightab2();
        }
function hightab2() {
        $('#high_tab').animate({right: '0px'}, 800);
        hightab1();
        }







