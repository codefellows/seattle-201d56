'use strict';

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Global variables for DOM access and such
var chatList = document.getElementById('chat-list');
var chatForm = document.getElementById('chat-form');
var clearChatList = document.getElementById('clear-chat-list');
var allComments = [];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Here's the constructor for the individual comments
var Comment = function(userName, text) {
  this.userName = userName;
  this.text = text;
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
  return liEl;
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS

// This function goes through the array of comments and calls the render() method on each one
function renderAllComments() {
  chatList.innerHTML = '';

  for (var i = 0; i < allComments.length; i++) {
    chatList.appendChild(allComments[i].render());
  }
}

// This function is the event handler for the submission of comments
function handleCommentSubmit(event) {
  // console.log('log of the event object', event);
  // console.log('log of the event.target', event.target);
  // console.log('log of the event.target.who', event.target.who);
  console.log('log of event.target.who.value', event.target.who.value);

  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

  // Validation to prevent empty form fields
  if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
  }

  var commenter = event.target.who.value;
  var remark = event.target.says.value;

  if (commenter === 'Sam') {
    remark = '@$^#$%$^@#$%@';
  }

  if (commenter === 'Allie') {
    remark = remark.toUpperCase();
  }

  if (commenter === 'Otis') {
    remark = '&#9835; Shama-lama-ding-dong &#9835;';
  }

  var newComment = new Comment(commenter, remark);
  // console.log('this is the Comment instance', newComment);

  // console.log('Comment by ' + event.target.who.value + ' at ' + Date());

  // This empties the form fields after the data has been grabbed
  event.target.who.value = null;
  event.target.says.value = null;

  allComments.unshift(newComment);
  renderAllComments();
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
chatForm.addEventListener('submit', handleCommentSubmit);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for the 'Clear all comments' button
clearChatList.addEventListener('click', function() {
  chatList.innerHTML = '';
  console.log('You just cleared the chat list!');
  allComments = [];
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
/* Here is where we would put everything else that we want to execute on page load. This is where you would usually find function calls, but since this app is all driven ansynchronously by user interaction, the first JS that will execute is waiting inside the event listeners. */
