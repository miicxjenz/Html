 (function($) {
   var myBlog = [
     {
       title: "GMMTV",
       text: "OTHER",
       lightbox: "http://logo-th.com/wp-content/uploads/2019/05/GMMTV.jpg",
       image: "http://logo-th.com/wp-content/uploads/2019/05/GMMTV.jpg",
       link: "#"
     },
     {
       title: "Phuwintang",
       text: "OTHER",
       lightbox: "https://pbs.twimg.com/media/E3mhTdsUYAAHhBe.jpg",
       image: "https://www.gmm-tv.com/cms/upload_file/vj_floating/pic/88eb1da5af7bde5fa0f4397f5786b041.jpg",
       link: "#"
     },
     {
       title: "Pond Naravit",
       text: "OTHER",
       lightbox: "https://i.pinimg.com/736x/22/09/7f/22097fd3084fa064abb5064070fe9295.jpg",
       image: "https://www.gmm-tv.com/cms/upload_file/vj_floating/pic/0763aef8436192fb0c871f4d0a1a21a7.jpg",
       link: "#"
     },
     {
       title: "Win metawin",
       text: "OTHER",
       lightbox: "https://i.pinimg.com/originals/e9/42/a3/e942a3d30d1357b28acf0f4d1976618d.jpg",
       image: "https://www.gmm-tv.com/cms/upload_file/vj_floating/pic/35693ddc6e03a73931baceee78b42cd2.jpg",
       link: "#"
     },
     {
       title: "GMMTV",
       text: "OTHER",
       lightbox: "https://www.camphub.in.th/wp-content/uploads/2020/11/camphub-idol-ep29-phuwin-40.jpg",
       image: "http://logo-th.com/wp-content/uploads/2019/05/GMMTV.jpg",
       link: "#"
     },
     {
       title: "Bright",
       text: "OTHER",
       lightbox: "https://pbs.twimg.com/media/ETArQJ6VAAEZM56.jpg",
       image: "https://www.gmm-tv.com/cms/upload_file/vj_floating/pic/adda67ee0faafc8a4a9e6f88de9a0e3f.jpg",
       link: "#"
     }
   ];
   var blog = document.getElementById("Mylistblog");
   var innerHTML = "";
   for (let i = 0; i < myBlog.length; i++) {
     let data = myBlog[i];
     innerHTML += `
     <li class="list-item">
        <div class="pic">         
            <a href="${data.image}" class="lightbox">
            <img src="${data.image}" alt="" class="info-img"></a>
            <div>
                <h3 class="H3">${data.title}</h3>
                <p>${data.text}</p>
            </div>
            <div class="center">
                <div class="button">
                    <a href="${data.lightbox}">Viwe</a>
                </div>
            </div>
        </div>
     </li>
     `;
   }
   blog.innerHTML = innerHTML;

   $('#Mylistblog').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  });
   
 })(jQuery);
