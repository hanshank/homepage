window.onload=function(){

  let code = document.querySelector("#code");
  let websites = document.querySelector("#websites");

  code.addEventListener("click", showCode);
  websites.addEventListener("click", showWebsite);

  function showCode() {
    document.querySelector("#code-row").classList.remove('hide');
    document.querySelector("#website-row").classList.add('hide');
  }

  function showWebsite() {
    document.querySelector("#code-row").classList.add('hide');
    document.querySelector("#website-row").classList.remove('hide');
  }


}
