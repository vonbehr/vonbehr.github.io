document.addEventListener("DOMContentLoaded", function () {
  var images = Array.prototype.slice.call(document.querySelectorAll(".page__content figure img"));
  if (!images.length) return;

  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lightbox-prev" aria-label="Previous image">&#10094;</button>' +
    '<figure class="lightbox-content">' +
    '<img class="lightbox-image" alt="">' +
    '<figcaption class="lightbox-caption"></figcaption>' +
    "</figure>" +
    '<button type="button" class="lightbox-next" aria-label="Next image">&#10095;</button>';
  document.body.appendChild(overlay);

  var imgEl = overlay.querySelector(".lightbox-image");
  var captionEl = overlay.querySelector(".lightbox-caption");
  var closeBtn = overlay.querySelector(".lightbox-close");
  var prevBtn = overlay.querySelector(".lightbox-prev");
  var nextBtn = overlay.querySelector(".lightbox-next");
  var currentIndex = -1;

  function fullSrc(img) {
    var srcset = img.getAttribute("srcset");
    if (srcset) {
      var entry = srcset.split(",").map(function (s) { return s.trim(); }).filter(function (s) { return / 2x$/.test(s); })[0];
      if (entry) return entry.split(" ")[0];
    }
    return img.src;
  }

  function open(index) {
    currentIndex = index;
    var img = images[currentIndex];
    imgEl.src = fullSrc(img);
    imgEl.alt = img.alt || "";
    var figure = img.closest("figure");
    var caption = figure ? figure.querySelector("figcaption") : null;
    captionEl.textContent = caption ? caption.textContent : "";
    overlay.classList.add("is-open");
    document.body.classList.add("lightbox-locked");
    closeBtn.focus();
  }

  function close() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("lightbox-locked");
    imgEl.src = "";
    currentIndex = -1;
  }

  function show(delta) {
    if (currentIndex === -1) return;
    open((currentIndex + delta + images.length) % images.length);
  }

  images.forEach(function (img, index) {
    img.classList.add("lightbox-trigger");
    img.setAttribute("tabindex", "0");
    img.setAttribute("role", "button");
    img.addEventListener("click", function () { open(index); });
    img.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(index);
      }
    });
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", function () { show(-1); });
  nextBtn.addEventListener("click", function () { show(1); });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!overlay.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(-1);
    if (e.key === "ArrowRight") show(1);
  });
});
