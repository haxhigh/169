AFRAME.registerComponent('button', {
    init: function () {
      var button1 = document.createElement("button");
      button1.setAttribute("id","rating-button")
      button1.innerHTML = "rate us"
      button1.setAttribute("class","btn btn-warning")

      var button2 = document.createElement("button");
      button2.setAttribute("id","order-now-button");
      button2.innerHTML = "Order now"
      button2.setAttribute("class","btn btn-warning")

      var buttonDiv = document.getElementById("button");
      buttonDiv.appendChild(button1)
      buttonDiv.appendChild(button2)
    },
});