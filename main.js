// Create a function that creates a new post object and add it 
// to a posts array.

// Each post object should have two properties: text(the users 
// input, a string) and id (a number, dynamically generated).
// Each id should be unique to that post (no two post objects 
// should have the same id).

var posts = [];

var createNewPost = function(text){
  var newPost = {
    text: text, 
    id: 0
  }

  //check if posts array has length, if not assign first id to be 0
  if(posts.length === 0){
    newPost.id = 0;
  } else {
    var lastId = posts[posts.length - 1].id 
    newPost.id = lastId + 1
    
  }
  posts.push(newPost);
}

//add from array to html
var addPost= function()  {

    //empty the div of all of its contents
    $('.posts').empty();

    for (var i = 0; i < posts.length; i++) {
        $('.posts').append('<p data-id="' + posts[i].id + '"> <a href="#" class="remove">remove </a>' + posts[i].text + '</p>');
    }
}

$('.add-post').on("click", function(){
  var text = $('#post-name').val()
  createNewPost(text)
  addPost();
});

//when a button is clicked, remove it 
// $('.remove').on('click', function(){
//   alert('yo yo')
//   $(this).remove();
// });

$('.posts').on('click', ".remove", function(){
  $(this).closest('p').remove();
});



