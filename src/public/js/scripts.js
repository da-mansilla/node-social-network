$('#post-comment').hide();
$('#btn-toggle-comment').click(e =>
{
	e.preventDefault();
	$('#post-comment').slideToggle();
})

$('#btn-like').click(function(e)
{
	e.preventDefault();
	let imageId = $(this).data('id');
	$.post('/images/' + imageId + '/like')
		.done(data=>{
			$('.likes-count').text(data.likes)
		})
});
$('#btn-delete').click(function(e)
{
	e.preventDefault();
	let button = $(this);
	const response = confirm('Are you sure you want to delete this image?');
	if(response)
	{
		let imgId = button.data('id');
		$.ajax({
			url: '/images/' + imgId,
			type: 'DELETE'
		})
		.done(function(result)
		{
			button.removeClass('btn-danger').addClass('btn-success');
			button.find('i').removeClass('fa-times').addClass('fa-check');

		})
		console.log(imgId);
	}
})