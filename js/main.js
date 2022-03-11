window.addEventListener("load", () => {
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.5s"
  });

  //클릭한 버튼 변수에 저장
  const btns = document.querySelectorAll("main ul li");

  for(let el of btns) {

    //각 버튼에 클릭 이벤트 연결
    el.addEventListener("click", e => {
      e.preventDefault();

      //변수 sort에 클릭한 대상의 자식인 a요소의 href 속성값 저장
      const sort = e.currentTarget.querySelector("a").getAttribute("href");

      grid.arrange({
        //옵션값으로 sort 변수값 지정 
        filter : sort
      });

      for(let el of btns){
        //각 버튼의 클래스명 "on"을 제거해 비활성화
        el.classList.remove("on");
      }

      e.currentTarget.classList.add("on");

    })
  }
});