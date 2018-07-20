document.addEventListener("turbolinks:load", function() {
  let dot1 = document.querySelector("#dot-1");
  let dot2 = document.querySelector("#dot-2");
  let dot3 = document.querySelector("#dot-3");
  let dot4 = document.querySelector("#dot-4");
  let successMessage = document.getElementById('success');


  dot1.addEventListener('click', function() {
    dot1.classList.add('bg-black');
  })

  document.querySelector("#websites-link").addEventListener("click", function() {
    openTab('websites');
  })
  document.querySelector("#code-link").addEventListener("click", function() {
    openTab('code');
  })
  document.querySelector("#school-link").addEventListener("click", function() {
    openTab('school');
  })
  document.querySelector("#fun-link").addEventListener("click", function() {
    openTab('fun');
  })

  document.querySelector("#contact-btn").addEventListener("click", function() {
    hide('contact-btn-container')
    show('contact-form');
    setTimeout(function() { fadeIn('contact-form') }, 50);
  })

  document.querySelector("#close-btn").addEventListener("click", function() {
    hide('contact-form');
    show('contact-btn-container');
  })


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
  var linkContainer = document.getElementById("links-container");
  var btns = linkContainer.getElementsByClassName("js-link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active-tab");
      current[0].className = current[0].className.replace(" active-tab", "");
      this.className += " active-tab";
    });
  }

});
