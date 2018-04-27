$(document).ready(function(){
  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();


    //Pin scene



    // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: '.p2',
    triggerHook: 0.7


  })

  .setClassToggle('.p2', 'fade-in') // add class to title-1
  .addIndicators()
  .addTo(controller);

  // build a scene
var ourScene2 = new ScrollMagic.Scene({
  triggerElement: '.boi',
  triggerHook: 0.35


})

.setClassToggle('.boi', 'fade-in') // add class to title-1
.addIndicators()
.addTo(controller);

var ourScene3 = new ScrollMagic.Scene({
  triggerElement: '.outline',
  triggerHook: 0.7


})

.setClassToggle('.outline', 'fade-in') // add class to title-1
.addIndicators()
.addTo(controller);

// build a scene
var ourScene3 = new ScrollMagic.Scene({
triggerElement: '.manman',
triggerHook: 0.7


})

.setClassToggle('.manman', 'fade-in') // add class to title-1
.addIndicators()
.addTo(controller);

// build a scene
var ourScene4 = new ScrollMagic.Scene({
triggerElement: '.skills-table',
triggerHook: 0.7


})

.setClassToggle('.skills-table', 'fade-in') // add class to title-1
.addIndicators()
.addTo(controller);
});
