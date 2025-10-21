function toggleInner() {
  document.getElementById('inner-text').classList.toggle('hidden');
}

function toggleInner2() {
  document.getElementById('inner2').classList.toggle('hidden2');
}

const acc = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}