$(document).ready(function() {

  // get message output dom element
  var $messageContainer = $('.message-output__display');

  var $messageOutput = $('.message-output');



  //get message input element
  var $messageInput = $('input[name="input-message"]');

  //get send button element
  var $sendBtn = $('button[name="send"]');


  var sentMessage = '';

  var $textBubble = $('.text-bubble.sender.template');


  //get message when send button is clicked
  $sendBtn.on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    sentMessage = getMessage();
    $messageInput.val('');
    $messageContainer.append(displayMessage());
    updateScroll();
    //get timestamp
    // console.log(moment().format('h:mm a'));

  });



  function getMessage(){

    var msg = $messageInput.val();
    console.log(msg);
    return msg;

  }

  function displayMessage(){

  var $copy =  $textBubble.clone().removeClass('template');
  $copy.text(sentMessage);
  $copy.append('<div class="timestamp">' + moment().format('h:mm a') + '</div>');
    return $copy;

  }

  function updateScroll(){

    $messageOutput.animate({scrollTop: $messageOutput.prop('scrollHeight')}, 500);
    console.log($messageOutput.prop('scrollHeight'));

}

//on enter press send message
$messageInput.keydown(function(e) {
    if(e.keyCode === 13) {

      sentMessage = $(this).val();
      $messageInput.val('');
      $messageContainer.append(displayMessage());
      updateScroll();
    }
  });



});
