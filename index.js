import galleryImages from "./gallery-items.js";
console.log(galleryImages);

const jsList = document.querySelector(".js-gallery");
const div = document.querySelector(".js-lightbox");
console.log(div);

const modalImage = document.querySelector(".lightbox__image");
console.log(modalImage);

const closeBtn = document.querySelector(".lightbox__button");
console.log(closeBtn);
{
  /* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>; */
}

galleryImages.map((item) => {
  const img = document.createElement("img");

  img.classList.add("gallery__image");
  img.src = item.preview;
  img.setAttribute("data-source", item.original);
  img.alt = item.description;

  const link = document.createElement("a");

  link.classList.add("gallery__link");
  link.href = item.original;

  link.append(img);

  const list = document.createElement("li");
  // console.log(list);
  list.classList.add("gallery__item");

  list.append(link);

  jsList.append(list);
});

jsList.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.dataset.source);
  let modalLink = event.target.dataset.source;

  div.classList.add("is-open");

  modalImage.src = modalLink;
});

closeBtn.addEventListener("click", () => {
  div.classList.remove("is-open");
  modalImage.src = "";
});
