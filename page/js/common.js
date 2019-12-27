const vm = new Vue({
	el: "#page",
	data: {
		product: 1
	},
	mounted() {
		this.$nextTick(function() {
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
		})
	}
});