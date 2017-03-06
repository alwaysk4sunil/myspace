function preload()
{
  var images = [];
  for (i = 0, length = arguments.length; i < length; ++i) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

//-- usage --//
preload(
// "images/page1Content.png",
// "images/bur_ban.png",
// "images/pfizer_logo.png",
// "images/anim1.png",
// "images/anim2.png",
// "images/anim3.png",
// "images/anim4.png",
// "images/anim5.png",
// "images/anim6.png",
// "images/sitemapbg.png"
)
