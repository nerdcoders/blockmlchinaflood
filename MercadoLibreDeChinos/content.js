function filterChina(){
	document.querySelectorAll('.ui-search-item__group__element.ui-search-item__details').forEach(function(elm){
		if(elm.innerText.indexOf('Internacional')>-1)
			elm.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none'
	});
}
document.addEventListener('DOMContentLoaded', function() {
	filterChina();
}, false);

window.onload= function(){
	filterChina();
};