$(document).ready(function() {

  // get message output dom element
  var $messageContainer = $('.message-output__display');

  var $messageOutput = $('.message-output');

  var $mc = ('.messages-container')[0];

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

  });



  function getMessage(){

    var msg = $messageInput.val();
    console.log(msg);
    return msg;

  }

  function displayMessage(){

  var $copy =  $textBubble.clone().removeClass('template');
    $copy.text(sentMessage);
    return $copy;

  }

  function updateScroll(){

    $messageOutput.animate({scrollTop: $messageOutput.prop('scrollHeight')}, 500);
    console.log($messageOutput.prop('scrollHeight'));

}




});
