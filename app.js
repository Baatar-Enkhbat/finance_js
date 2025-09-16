// desplay controller
var uiController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn",
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value,
      };
    },
    getDOMstrings: function () {
      return DOMstrings;
    },
  };
})();
// finance controller
var financeController = (function () {})();

// connect controller
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. oruulah ugugdliig delgetsees olj awna
    console.log(uiController.getInput());
    // 2. Olj awsan uguglvvdee sanhvvgiin controllert damjuulj tend hadgalna.
    // 3. 2 iig tohiroh hesegt gargana
    // 4. tuswiig tootsno
    // 5. etssiin vldegdel, tootsoog delgetsend gargana.
  };
  var setupEventListeners = function () {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function () {
      ctrlAddItem();
    });

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function () {
      console.log("Application started");
      setupEventListeners();
    },
  };
})(uiController, financeController);
