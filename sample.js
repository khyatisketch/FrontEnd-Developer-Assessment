$(".menu > ul > li").click(function (e) {
    // remove active from already active
    $(this).siblings().removeClass("active");
    // add active to clicked
    $(this).toggleClass("active");
    // if has sub menu open it
    $(this).find("ul").slideToggle();
    // close other sub menu if any open
    $(this).siblings().find( "ul" ).slideUp();
    // remove active class of sub menu items
    $(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
});

/* ===== Search Bar ====  */
function filterList() {
    const searchInput = document.getElementById("searchInput");
    const filter = searchInput.value.toLowerCase();
    const items = document.getElementsByClassName("item");
  
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const name = item.getElementsByClassName("name")[0];
      const itemName = name.textContent.toLowerCase();
  
      if (itemName.includes(filter)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  }