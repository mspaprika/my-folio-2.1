const mybutton = document.getElementsByClassName("btn-bottom")[0];
const mybutton2 = document.getElementsByClassName("btn-bottom")[1];
const mybutton3 = document.getElementsByClassName("btn-bottom")[2];
const mybutton4 = document.getElementsByClassName("btn-bottom")[3];

// const mybutton2 = document.getElementById("btn-take-to-top-2");

mybutton.style.display = "none";
mybutton2.style.display = "none";
mybutton3.style.display = "none";
mybutton4.style.display = "none";

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        mybutton2.style.display = "block";
        mybutton3.style.display = "block";
        mybutton4.style.display = "block";
    } else {
        mybutton.style.display = "none";
        mybutton2.style.display = "none";
        mybutton3.style.display = "none";
        mybutton4.style.display = "none";
    }
};

// mybutton.onclick = function () {
//     console.log("clicked");
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// };

// mybutton2.onclick = function () {
//     console.log("clicked");
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// };


function takeMeToTop() {
    console.log("clicked");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// $(document).ready(function () {
//     $('a[href^="#"').on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             var target = $(this).attr('href');
//             $('html, body').animate({
//                 // scrollLeft: $(target).offset().left,
//                 // scrollLeft: $(hash).offset().left,
//                 scroll: $(hash).offset()
//             }, 300, function () {
//                 window.location.hash = hash;
//             });
//         }
//     });
// });
//

// $('a[href^="#"]').on('click', function (e) {
//     e.preventDefault();
//     var target = $(this).attr('href');
//     $('html, body').animate(
//         {
//             scrollLeft: $(target).offset().left,
//         },
//         500,
//         'linear'
//     );
// });

// function delayNavigation(event) {
//     event.preventDefault(); // prevent default navigation behavior
//     var target = event.target; // get the clicked link
//     setTimeout(function () {
//         window.location.href = target.href; // navigate to link after 200ms delay
//     }, 200);
// }

// // attach click event listener to all anchor links on the page
// var links = document.getElementsByTagName('a');
// for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', delayNavigation);
// }

