function categoryInit() {
	$.ajax({
		type: "GET",
		url:"/categories",
		success: function(categoryList){
			loadCategoryAll(categoryList);
		}
	});
	
	$("ul.tab_lst_min").on('click',  'li.item', categoryActive);
}

//모든 카테고리 리스트
function loadCategoryAll(categoryList){
    
    var categorySize = categoryList.length-1;
    var $categoryList = $('ul.tab_lst_min');
    
    categoryList.map(function(category, i) {
    	var last = "";
    	
    	
    	if(categorySize === i) {
    		last = " last";
    		$categoryList.append(addCategoryHtml(category, last));
    	}
    	else $categoryList.append(addCategoryHtml(category, last));
    });
    //map 과 each의 차이
    //each는 반복문 이후에 인자값을 그대로 반환, map은 반복문 이후 새로운 결과값(배열,변수 등) 반환
}

//카테고리 dom에 추가
function addCategoryHtml(category, last){
  return '<li class="item" data-category="' + category.id + '">'
		    + '<a class="anchor'+ last +'"> <span>' + category.name + '</span> </a>'
		   + '</li>';
}

//카테고리 클릭시
function categoryActive(){
	$('ul.tab_lst_min li a.active').removeClass('active');
	$(this).children().eq(0).addClass('active');
}







