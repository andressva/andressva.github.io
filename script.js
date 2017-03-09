
// Integracion de animate.css con jquery
$.fn.extend({
  animateCss: function (animationName) {
    console.log(animationName)
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
    });
  }
});

// Evento click en logo
var logo = $('#logo')
var animation = ['bounce', 'rubberBand', 'pulse', 'shake']
logo.click(function(){
  var max = animation.length
  var num = Math.floor(Math.random() * (max - 0))
  console.log(num)
  logo.animateCss(animation[num])
})
