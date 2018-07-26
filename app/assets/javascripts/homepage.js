document.addEventListener("turbolinks:load", function() {

  var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

  document.addEventListener('scroll', function() {
    const mb = document.getElementById("main-banner");
    const mbHeight = mb.clientHeight;
    const mbTopPos= mb.offsetTop;
    const ab = document.getElementById("about");
    const abHeight = ab.clientHeight;
    const abTopPos = ab.offsetTop;
    const pr = document.getElementById("projects");
    const prHeight = pr.clientHeight;
    const prTopPos = pr.offsetTop;
    const co = document.getElementById("contact");
    const coHeight = co.clientHeight;
    const coTopPos = co.offsetTop;
    const fromTop = window.pageYOffset;

    if (fromTop < mbTopPos + mbHeight / 2 ) {
      dot1.classList.add('active-dot');
    }
    else {
      dot1.classList.remove('active-dot');
    }

    if (fromTop < abTopPos + abHeight / 2 && fromTop > mbTopPos + mbHeight / 2) {
      dot2.classList.add('active-dot');
    }
    else {
      dot2.classList.remove('active-dot');
    }

    if (fromTop < prTopPos + prHeight / 2 && fromTop > abTopPos + abHeight / 2 ) {
      dot3.classList.add('active-dot');
    }
    else {
      dot3.classList.remove('active-dot');
    }

    if (fromTop < coTopPos + coHeight / 2 && fromTop > prTopPos + prHeight / 2) {
      dot4.classList.add('active-dot');
    }
    else {
      dot4.classList.remove('active-dot');
    }
  });





  let dot1 = document.querySelector("#dot-1");
  let dot2 = document.querySelector("#dot-2");
  let dot3 = document.querySelector("#dot-3");
  let dot4 = document.querySelector("#dot-4");
  let successMessage = document.getElementById('success');


  dot1.addEventListener('click', function() {
    dot1.classList.add('bg-black');
  })

  if (document.querySelector("#websites-link")) {
    document.querySelector("#websites-link").addEventListener("click", function() {
      openTab('websites');
    })
  }

  if (document.querySelector("#school-link")) {
    document.querySelector("#school-link").addEventListener("click", function() {
      openTab('school');
    })
  }



  if (document.querySelector("#fun-link")) {
    document.querySelector("#fun-link").addEventListener("click", function() {
      openTab('fun');
    })
  }



  if (document.querySelector("#contact-btn")) {
    document.querySelector("#contact-btn").addEventListener("click", function() {
      hide('contact-btn-container')
      show('contact-form');
      setTimeout(function() { fadeIn('contact-form') }, 50);
    })
  }


  if (document.querySelector("#close-btn")) {
    document.querySelector("#close-btn").addEventListener("click", function() {
      hide('contact-form');
      show('contact-btn-container');
    })
  }



function showhide(id) {
  if (document.getElementById) {
    var divid = document.getElementById(id);
    var divs = document.getElementsByClassName("hideable");
    for (var i = 0; i < divs.length; i++) {
      $(divs[i]).fadeOut("slow");
    }
    setTimeout(function(){ show('contact-form'); }, 3000);
    }
  return false;
}

function show(id) {
  let hidden = document.getElementById(id);
  hidden.style.display = "block";
}

function hide(id) {
  let hideable = document.getElementById(id);
  hideable.style.display = "none";
}

function fadeIn(id) {
  let div = document.getElementById(id);
    div.style.opacity = 1;
}
function fadeOut(id) {
  let div = document.getElementById(id);
    div.style.opacity = 0;
}


// setTimeout(function() { show('contact-btn')  }, 2000);

document.body.addEventListener('ajax:success', function(event) {
  var detail = event.detail;
  var data = detail[0], status = detail[1], xhr = detail[2];
  hide('contact-form');
  document.getElementById("the-contact-form").reset();
  show('success-message');
  fadeIn('success-message');
  setTimeout(function() {
     fadeOut('success-message');
     hide('success-message');
     show('contact-btn-container');
   }, 5000);
})

document.body.addEventListener('ajax:error', function(event) {
  var detail = event.detail;
  var data = detail[0], status = detail[1], xhr = detail[2];
  hide('contact-form');
  show('error-message');
  fadeIn('error-message');
  setTimeout(function() {
     fadeOut('error-message');
     hide('error-message');
     show('contact-form');
   }, 2000);
})

  function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
       x[i].classList.add('hide');
    }
    document.getElementById(tabName).classList.remove('hide');
  }

  // Add active class to the current button (highlight it)
  var linkContainer;
  if (document.getElementById("links-container")) {
    linkContainer = document.getElementById("links-container");
  }
  var btns;
  if (linkContainer) {
    btns = linkContainer.getElementsByClassName("js-link");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-tab");
        current[0].className = current[0].className.replace(" active-tab", "");
        this.className += " active-tab";
      });
    }
  }
});
