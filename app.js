// desplay controller
var uiController = (function () {})();

// finance controller
var financeController = (function () {})();

// connect controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. oruulah ugugdliig delgetsees olj awna
    console.log("oruulah ugugdliig delgetsees olj awna");
    // 2. Olj awsan uguglvvdee sanhvvgiin controllert damjuulj tend hadgalna.
    // 3. 2 iig tohiroh hesegt gargana
    // 4. tuswiig tootsno
    // 5. etssiin vldegdel, tootsoog delgetsend gargana.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
