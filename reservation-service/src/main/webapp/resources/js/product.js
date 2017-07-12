var productAllCount;
var showProductsDefaultCount = 4;//상품 전시 개수 기본값
var $productdiv = $('.wrap_event_box');

var $productLeftList = $('.wrap_event_box').find('ul.lst_event_box').eq(0);
var $productRightList = $productLeftList.next();

function productInit(){

	selectProductAll();

	$("ul.event_tab_lst").on('click', 'li.item', selectProductAll);
	$("div.more").on('click', '.btn', showMoreProducts);
	
}

function selectProductAll(){
	var url ="/products";
	var categoryId = $(this).data('category');
	showProductsDefaultCount = 4;
	
	if(categoryId > 0) {
		url = "/products/"+ categoryId;
	}
	
	$.ajax({
		type: "GET",
		url: url,
		success: function(productList){		

			//기존 상품 리스트 삭제
			$productdiv.find('li').remove();
			
			//리스트 개수
			productAllCount = productList.length;
			
			//리스트 저장
			$productdiv.data('productList', productList);
			loadProductsList(productList);
			productsCountHtml(productAllCount);
			
		}
	});

}

function loadProductsList(productList){
	var half = showProductsDefaultCount/2;
	
	if(productAllCount < showProductsDefaultCount) {
		half = productAllCount/2;
	}
	
	for(var i=0; i<showProductsDefaultCount; i++){
		if( productAllCount <= i ) break;
		else if(i<half)	{
			$productLeftList.append(addProductHtml(productList[i]));
		}
		else if(i>=half) {
			$productRightList.append(addProductHtml(productList[i]));
		}
	}
	
}

function productsCountHtml(productAllCount) {
    var html = productAllCount + '개';
    $('span.pink').text(html);
}

function addProductHtml(product){
	return '<li class="item">'
    		+'<a href="#" class="item_book">'
    			+'<div class="item_preview"> <img alt="뮤지컬 드림걸즈(DREAMGIRLS) 최초 내한" class="img_thumb" src="https://ssl.phinf.net/naverbooking/20170303_271/1488514705030TuUK4_JPEG/17%B5%E5%B8%B2%B0%C9%C1%EE_%B8%DE%C0%CE%C6%F7%BD%BA%C5%CD_%C3%D6%C1%BE.jpg?type=l591_945">'
    				+'<span class="img_border"></span>' 
    			+'</div>'
				+'<div class="event_txt">'
	    		+	'<h4 class="event_txt_tit"> <span>'+ product.name +'</span> <small class="sm">' + product.placeName + '</small> </h4>'
	    				+'<p class="event_txt_dsc">'+ product.description +'</p>'
	            +'</div>'
			+'</a>'
            +'</li>'
}

//더보기
function showMoreProducts(){
	var productMoreDefault = 10;//상품 증가 개수 기본값
	var allProduct = showProductsDefaultCount+productMoreDefault;//증가되어 보여질 모든 상품 수
	var half = showProductsDefaultCount + productMoreDefault/2;
		
	if(productMoreDefault > productAllCount-showProductsDefaultCount) {
		half = showProductsDefaultCount + ((productAllCount-showProductsDefaultCount)/2);
	}

	for(i=showProductsDefaultCount; i<allProduct; i++){
		
		if( productAllCount <= i ) break;
		else if(i<half)	$productLeftList.append(addProductHtml($productdiv.data('productList')[i]));
		else if(i>=half) $productRightList.append(addProductHtml($productdiv.data('productList')[i]));
		
	}
	
	showProductsDefaultCount +=10;
}

function scrollAuto() {
	$(window).scroll(function() {
	    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	    	showMoreProducts();   
	    }
	});
}