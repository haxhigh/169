AFRAME.registerComponent('markerHandler', {
    schema: {
        
    },

    init: function () {
      this.el.addEventListener("markerFound",()=>{
        console.log("Marker Found!")
        this.markerFound()
      })
      this.el.addEventListener("MarkerLost",()=>{
        console.log("Marker Lost!")
        this.markerLost
      })
    },
    markerFound:function(){
        var button = getElementById("button")
        button.style.display = "flex"

        var rateingButton = getElementById("rating-button")
        var orderNowButton = getElementById("order-now-button")

        rateingButton.addEventListener("click",function(){
          swal({
            title:"Rate Us",
            icon:"warning"
          })
        })
        orderNowButton.addEventListener("click",function(){
          swal({
            title:"Order now",
            icon:"https://i.imgur.com/4NZ6uLY.jpg"
          })
        })
    },
    markerLost:function(){
      var button = getElementById("button")
      button.style.display = "none" 
    }
});
