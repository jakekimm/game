zapp = 0;
zap = function() {
  this.remove()
	zapp = zapp+1;
	$('#zaps').html('Total Zaps: '+ zapp)
}
misses = 0;
miss = function(){
	misses = misses + 1;
	shape.remove()
	$('#misses').html('Total Misses '+ misses)
}
	
show_result = function() {
   m = $('#difficulty').val()
   l = $('#options').val()
	for ( n=1;n<=m;n+=1) {
	x = Math.random() * 140
	y = Math.random() * 140
		if(l=='a'){
			shape = paper.circle(0,0,25)
		}
		if(l=='b'){
			shape = paper.rect(0,0,25,25)
		}
		if(l=='c'){
			shape = paper.path('M50,120 Q100,180 150,120 Z')
		}
		
	  	shape.attr({
			'transform': 't' + x +','+ y,
			  'fill': '#ddf',
	  	      'stroke': '#000',
	  	    })
			shape.click(zap)
			final = {
				'transform': 't' + x*10.5 +','+ y*10.5,
			}
		shape.animate(final, 3000, 'linear', miss)
			}
		
	}

setup = function() {
	paper = Raphael('svg1', 300, 300)
	$('#go').click(show_result)
}
jQuery(document).ready(setup)