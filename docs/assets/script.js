"use strict";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookies");

    document
      .getElementById("accept-analytics")
      .addEventListener("click", function (e) {
        e.preventDefault();
        window.localStorage.setItem("analytics-allowed", "true");
        cookieBanner.style.display = "none";
        window.location.reload();
      });

    document
      .getElementById("reject-analytics")
      .addEventListener("click", function (e) {
        e.preventDefault();
        window.localStorage.setItem("analytics-allowed", "false");
        cookieBanner.style.display = "none";
      });

    if (window.localStorage.getItem("analytics-allowed") !== null) {
      cookieBanner.style.display = "none";
    }
  });
})();
