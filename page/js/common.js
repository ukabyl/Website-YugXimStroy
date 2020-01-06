const vm = new Vue({
	el: "#page",
	data: {
		product: 1
	},
	mounted() {
		this.$nextTick(function() {
	
			const vm = this;

			// *****************************************Anchor
      $(".anchor").on("click", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1000);
      });
      // *****************************************Anchor

      $('.tel-mask').mask("+7(999) 999-9999");

      $('.callback-round__trigger').click(function() {
		      $( this ).parent().toggleClass('active');
		  })

		  $('form').submit(function (e) {
		    let form_data = $(this).serialize();
		    $.ajax({
		        type: "POST",
		        url: "feedback.php",
		        data: form_data,
		        success: function () {
		            $('form').trigger("reset");
		            $('#modal').modal('hide');
		            setTimeout(function() {
		                $('#success').modal('show');
		            }, 500);
		            setTimeout(function() {
		                $('#success').modal('hide');
		            }, 4000);
		        }
		    });
		    return false;
			});

			$( document ).ready( function() {
        $( "#sidebar" ).simplerSidebar( {
      		align: 'left',
      		init: 'closed',
          selectors: {
            trigger: "#toggle-sidebar",
            quitter: ".close-sidebar"
          }
        } );
    	});

    	// let productionTab = $('.production__tab');
     //  let productionTabSettings = {
     //      slidesToShow: 1,
     //      infinite: false,
     //      asNavFor: '.production__tab',
     //      prevArrow: '<button type="button" class="arrow slick-prev">&#9668;</button>',
     //      nextArrow: '<button type="button" class="arrow slick-next">&#9658;</button>',
     //  };
     //  productionTab.on('afterChange', function(event, slick, currentSlide){
     //      vm.product = currentSlide+1;
     //  });
     //  $(window).on('resize load', function(){
     //      if($(window).width() > 1200){
     //          if(productionTab.hasClass('slick-initialized')){
     //              productionTab.slick('unslick')
     //          }
     //          return 0;
     //      }
     //      if(!productionTab.hasClass('slick-initialized')){
     //          return productionTab.slick(productionTabSettings)
     //      }
     //  });

		})
	}
});