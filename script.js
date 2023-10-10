$(document).ready(function() {
  var s_round = '.s_round';
  var flipContainers = $('.container');
  var currentContainer = 0;

  $(s_round).hover(function() {
    $('.b_round').toggleClass('b_round_hover');
    return false;
  });

  $(s_round).click(function() {
    $('.flip_box').toggleClass('flipped');
    $(this).addClass('s_round_click');
    $('.s_arrow').toggleClass('s_arrow_rotate');
    $('.b_round').toggleClass('b_round_back_hover');
    return false;
  });

  $(s_round).on('transitionend', function() {
    $(this).removeClass('s_round_click');
    $(this).addClass('s_round_back');
    return false;
  });

  $('.prev-button').click(function() {
    currentContainer = (currentContainer - 1 + flipContainers.length) % flipContainers.length;
    updateVisibleContainer();
  });

  $('.next-button').click(function() {
    currentContainer = (currentContainer + 1) % flipContainers.length;
    updateVisibleContainer();
  });

  function updateVisibleContainer() {
    flipContainers.hide();
    $(flipContainers[currentContainer]).show();
  }

  updateVisibleContainer();
});