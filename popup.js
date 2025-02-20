document.getElementById("toggle").addEventListener("click", function() {
  let status = document.getElementById("status");
  if (status.innerText === "Enabled") {
      status.innerText = "Disabled";
      this.innerText = "Enable";
  } else {
      status.innerText = "Enabled";
      this.innerText = "Disable";
  }
});
