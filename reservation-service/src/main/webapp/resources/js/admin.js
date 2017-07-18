$(function(){
	
	function deleteCategory(){
		
		var id = $(this).closest('tr').data('value');
		
		$.ajax({
			type: 'DELETE',
			url: "/categories/" + id,
			success: function(){
				$('#'+id).remove();
			}
		});		
	};
	
	function updateCategory (){
		
		var id = $(this).closest('tr').data('value');
		var value = $(this).prev().text();
		
		$('#categoryUpdateComplete').show();
		$('#inputBox').focus().val(value).data("id", id);
		
	};
 	
 	function update(){
 		
 		var id = $('#inputBox').data('id');
 		var name = $('#inputBox').val();
 		
 		$.ajax({
			type: 'PUT',
			contentType: "application/json",
			url: "/categories/" + id,
			data: JSON.stringify({name:name}),
			success: function(result){
				$('#'+result).find('.categoryName').text(name);
				$('#inputBox').val('');
			}
		});
 	}
 	
	$(document).on('click' , '.update' , updateCategory);
 	$(document).on('click' , '.delete' , deleteCategory);
 	$(document).on('click' , '#categoryUpdateComplete' , update);
}());