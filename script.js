(() => {
  function getTooltip(element) {
    while ((element = element.nextSibling)) {
      if (element.className === "error") {
        return element;
      }
    }
    return false;
  }
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  var check = {};
  check["last"] = function (id) {
    var name = document.getElementById(id),
      tooltipStyle = getTooltip(name).style;
    if (name.value.length >= 1) {
      tooltipStyle.visibility = "hidden";
      tooltipStyle.marginBottom = 0 + "px";
      name.className = "";
      return true;
    } else if (name.value == "") {
      name.className = "ficti";
      tooltipStyle.visibility = "visible";
      tooltipStyle.marginBottom = 15 + "px";
      return false;
    }
  };
  check["first"] = check["password"] = check["last"];

  check["email"] = function (id) {
    var name = document.getElementById(id),
      tooltipStyle = getTooltip(name).style;
    if (validateEmail(name.value)) {
      tooltipStyle.visibility = "hidden";
      tooltipStyle.marginBottom = 0 + "px";
      name.className = "";
      return true;
    } else {
      name.className = "ficti";
      tooltipStyle.visibility = "visible";
      tooltipStyle.marginBottom = 15 + "px";
      return false;
    }
  };

  (function () {
    var inputs = document.querySelectorAll("input"),
      inputsLength = inputs.length;
    var button = document.querySelector("button");
    button.addEventListener("click", (e) => {
      for (var i = 0; i < inputsLength; i++) {
        if (inputs[i].type == "text" || inputs[i].type == "password") {
          if (!check[inputs[i].id](inputs[i].id)) {
            e.preventDefault();
          }
        }
      }
    });
  })();
})();
