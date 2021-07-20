function filterChina(){
	document.querySelectorAll('.ui-search-icon--international-logo').forEach(function(elm){
		elm.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none'
	});
}
document.addEventListener('DOMContentLoaded', function() {
	filterChina();
}, false);

window.onload= function(){
	filterChina();
};