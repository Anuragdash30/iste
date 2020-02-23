function onSignIn(googleUser)
{   
    window.location="vote.html"

}
function signOut()
{
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){

        alert("you have been successfully signed out");
        $(".g-signin2").css("display","block");
        $(".data").css("display","none");
    });
}