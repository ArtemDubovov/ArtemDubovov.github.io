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

$('.f-analitic').click(function(){ filterItem('analitic'); });
$('.f-brand').click(function(){ filterItem('brand'); });
$('.f-expirience').click(function(){ filterItem('expirience'); });
$('.f-experiment').click(function(){ filterItem('experiment'); });
$('.f-news').click(function(){ filterItem('news'); });

 
$('.f-all').click(function(){
 $('.main__catalog-item').fadeIn().delay(300);
 fActive = 'all';
});