var posts = [
  // {
  //   text: text,
  //   id: id
  // },
  // {
  //   text: text,
  //   id: id
  // }
];

//function that creates a new post and pushes the post 
//to posts array
var createNewPost = function(text){
  var idMaker = function (){
    return posts.length;
  };
  var newPost = {
    text: text,
    id: idMaker(),
    commentsArray: []
  };
  posts.push(newPost);
};


//add post array objects to div
var addToPostsDiv = function (){
  $('.posts').empty();
  for(var i = 0; i < posts.length; i++){
    //append post text to .posts DIV
    var postContainerToHTML = '<p class="postAndCommentContainer" data-id="' + posts[i].id + '">' 
      + posts[i].text + '  '
      + '<a href="#" class="remove">remove </a>'  
      //append comment ID
      + '</p>'//this is the end of the containing P element that holds both Posts and Comments

    var postCommentToContainer = '<div class="comment" >' 
      + '<input type="text" class="name" placeholder="name" >' + '</input>'
      + '<input type="text" class="comments" placeholder="write something" >' + '</input>'
      + '<button class="btn btn-primary add-comment">' + 'Comment' + '</button>'
      + '</div>'

    $('.posts').append($(postContainerToHTML).append(postCommentToContainer));
  }
  $('.remove').on("click", function(){
  $(this).closest('p').remove();

  console.log('remove');
})
}

$('.add-post').on("click", function(){
  //append input field value to text variable
  var text = $('#post-name').val();
  createNewPost(text);
  addToPostsDiv();

});

var addCommentToCommentsArray = function(name, comment, postID){

  var newComment = {
    name: name,
    comment: comment
  }
  posts[postID].commentsArray.push(newComment);
}

//if you click on 'comment' button
$('.posts').on("click", ".add-comment", function(){
  var comment = $('.comments').val();
  var name = $('.name').val();
  //push newComment to newPost.commentArray[]
  var postID = $(this).closest('.postAndCommentContainer').data('id')
  console.log(postID);
  addCommentToCommentsArray(name, comment, postID);
  //append commentsArray[i] to .postAndCommentContainer
  var commentItem = '<p>' + name + ' - ' +  comment + '</p>'
  var commentContainer = '<p class="commentContainer">' + '</p>'
  $('.postAndCommentContainer').append(commentContainer);
  $('.commentContainer').append(commentItem);
  //create a child container in postAndCommentContainer and append into there
  

});

// var posts = [
  // {
  //   text: text,
  //   id: id,
  //    commentsArray: [
//        {
//          name: name,
//          comment: comment
//        },
//        {
//          name: name,
//          comment: comment
//        }

  //  ]
  // },
 // {
  //   text: text,
  //   id: id,
  //    commentsArray: comment
  // } 
// ];




