function updateParallax(){scrollOffset=$(window).scrollTop()+$(window).height()/4*5,$(".parallax").each(function(a,l){objOffset=$(l).offset(),parallaxScale=.8,parallaxOpacity=0,parallaxOffset=-100,scrollOffset>objOffset.top&&(scrollValue=(scrollOffset-objOffset.top)/$(window).height()*2,scrollValue=scrollValue>1?1:scrollValue,parallaxScale+=.2*scrollValue,parallaxOpacity+=1*scrollValue,parallaxOffset+=parseInt(100*scrollValue)),$(l).hasClass("-pop")&&$(l).css({filter:"opacity("+parallaxOpacity+")",transform:"scale("+parallaxScale+")",transition:"all 500ms ease-out"}),$(l).hasClass("-slide-top")&&$(l).css({webkitFilter:"opacity("+parallaxOpacity+")",transform:"translate3d( 0px, "+-1*parallaxOffset+"px, 0px )",transition:"all 1000ms ease-out"}),$(l).hasClass("-slide-bottom")&&$(l).css({webkitFilter:"opacity("+parallaxOpacity+")",transform:"translate3d( 0px, "+1*parallaxOffset+"px, 0px )",transition:"all 1000ms ease-out"}),$(l).hasClass("-slide-left")&&$(l).css({webkitFilter:"opacity("+parallaxOpacity+")",transform:"translate3d( "+-1*parallaxOffset+"px, 0px, 0px )",transition:"all 1000ms ease-out"}),$(l).hasClass("-slide-right")&&$(l).css({webkitFilter:"opacity("+parallaxOpacity+")",transform:"translate3d( "+1*parallaxOffset+"px, 0px, 0px )",transition:"all 1000ms ease-out"})}),scrollOffset=$(window).scrollTop(),$(".parallax-inverted").each(function(a,l){objOffset=$(l).offset(),parallaxOpacity=1,parallaxOffset=0,scrollOffset>objOffset.top&&(scrollValue=(scrollOffset-objOffset.top)/$(window).height()*2,scrollValue=scrollValue<0?0:scrollValue,scrollValue=scrollValue>1?1:scrollValue,parallaxOpacity-=1*scrollValue,parallaxOffset+=parseInt(150*scrollValue)),$(l).hasClass("-slide-top")&&$(l).css({webkitFilter:"opacity("+parallaxOpacity+")",transform:"translate3d( 0px, "+-1*parallaxOffset+"px, 0px )",transition:"all 1000ms ease-out"}),$(l).hasClass("-slide-bottom")&&$(l).css({webkitFilter:"opacity("+parallaxOpacity+")",transform:"translate3d( 0px, "+1*parallaxOffset+"px, 0px )",transition:"all 1000ms ease-out"}),$(l).hasClass("-slide-left")&&$(l).css({webkitFilter:"opacity("+parallaxOpacity+")",transform:"translate3d( "+-1*parallaxOffset+"px, 0px, 0px )",transition:"all 1000ms ease-out"}),$(l).hasClass("-slide-right")&&$(l).css({webkitFilter:"opacity("+parallaxOpacity+")",transform:"translate3d( "+1*parallaxOffset+"px, 0px, 0px )",transition:"all 1000ms ease-out"})})}$(document).ready(function(){updateParallax(),$(window).scroll(function(){updateParallax()}),$(window).resize(function(){updateParallax()})});