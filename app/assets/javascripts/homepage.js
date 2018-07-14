window.onload=function(){

  let websites = document.querySelector("#websites-link");
  let code = document.querySelector("#code-link");
  let school = document.querySelector("#school-link");
  let fun = document.querySelector("#fun-link");

  code.addEventListener("click", showCode);
  websites.addEventListener("click", showWebsite);
  school.addEventListener("click", showSchool);
  fun.addEventListener("click", showFun);

  function showWebsite() {
    document.querySelector("#websites-container").classList.remove('hide');
    document.querySelector("#code-container").classList.add('hide');
    document.querySelector("#school-container").classList.add('hide');
    document.querySelector("#fun-container").classList.add('hide');
  }

  function showCode() {
    document.querySelector("#websites-container").classList.add('hide');
    document.querySelector("#code-container").classList.remove('hide');
    document.querySelector("#school-container").classList.add('hide');
    document.querySelector("#fun-container").classList.add('hide');
  }

  function showSchool() {
    document.querySelector("#websites-container").classList.add('hide');
    document.querySelector("#code-container").classList.add('hide');
    document.querySelector("#school-container").classList.remove('hide');
    document.querySelector("#fun-container").classList.add('hide');
  }

  function showFun() {
    document.querySelector("#websites-container").classList.add('hide');
    document.querySelector("#code-container").classList.add('hide');
    document.querySelector("#school-container").classList.add('hide');
    document.querySelector("#fun-container").classList.remove('hide');
  }


}
