var fActive = '';
 
function filterItem(item){
 if(fActive != item){
 $('.main__catalog-item').fadeOut(500);
 $('.main__catalog-item').filter(':not(.'+item+')').hide(num);
 $('.main__catalog-item').filter('.'+item).fadeIn(500);
 fActive = item;
 var num = 500;
 }
}

$('.f-startup').click(function(){ filterItem('startup'); });
$('.f-charity').click(function(){ filterItem('charity'); });
$('.f-medicine').click(function(){ filterItem('medicine'); });
$('.f-beauty').click(function(){ filterItem('beauty'); });
$('.f-technology').click(function(){ filterItem('technology'); });
$('.f-building').click(function(){ filterItem('building'); });
$('.f-clothing').click(function(){ filterItem('clothing'); });
 
$('.f-all').click(function(){
 $('.main__catalog-item').fadeIn().delay(300);
 fActive = 'all';
});

// let fActive='';
// function filterColor(color){
// if(fActive!=color){
// 	$('.sort').filter('.'+color).slideDown();
// 	$('.sort').filter(':not(.'+color+')').slideUp();fActive=color;}
// }
// let fActive='';
// $('.f-startup').click(function(){ filterColor('startup'); });
// $('.f-charity').click(function(){ filterColor('charity'); });
// $('.f-medicine').click(function(){ filterColor('medicine'); });
// $('.f-beauty').click(function(){ filterColor('beauty'); });
// $('.f-technology').click(function(){ filterColor('technology'); });
// $('.f-building').click(function(){ filterColor('building'); });
// $('.f-clothing').click(function(){ filterColor('clothing'); });
// 	$('.f-all').click(function(){$('div').slideDown();fActive='all';});