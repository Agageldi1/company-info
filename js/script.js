new Swiper('.image__slider',{
	navigation:{
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},

	pagination:{
		el:'.swiper-pagination',
		clickable:true,
	},
});
$(document).ready(function () {
	let position = 0;
	const slidesToShow = 3;
	const slidesToScroll = 1;
	const container = $('.collection__container');
	const track = $('.collection__treck');
	const item = $('.collection__item');
	const btnPrev = $('btn__prev');
	const btnNext = $('btn__next');
	const itemCount = item.length;
	const itemWidth = container.width() / slidesToShow;
	const movePosition = slidesToScroll * itemWidth;

	item.each(function(index, item){
		$(item).css({
			"min-width": itemWidth,		
		})
	});

	$(document).ready(function () {
		$('.btn__next').click(function () {
			const itemleft =itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

			position -= itemleft >= slidesToScroll ?  movePosition: itemleft * itemWidth;

			setPosition();
			checBtns();
		});
	});

	$(document).ready(function () {
		$('.btn__prev').click(function (event) {
			const itemleft = Math.abs(position) / itemWidth;

			position += itemleft >= slidesToScroll ?  movePosition: itemleft * itemWidth;

			setPosition();
			checBtns();
		});
	});

	const setPosition = () => {
		$('.collection__track').css({
			transform: 	`translateX(${position}px)`
	   });
	};

	const checBtns= () => {
		$('.btn__prev').prop('disabled', position === 0);
		$('.btn__next').prop(
			'disabled',
			position <= -(itemCount - slidesToShow) * itemWidth
			);
	};
	checBtns();
});
$('.collection__filter-item').click(function (event) {
   var i=$(this).data('filter');
   console.log(i);
   if (i==1) {
      $('.collection__item').show();
   }else{
      $('.collection__item').hide();
      $('.collection__item.f-'+i).show();
   }
   $('.collection__filter-item').removeClass('active');
   $(this).addClass('active');
   return false;
})