/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    const breed = url.split("/")[4];
    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    const dogCard = document.createElement("figure");
    const dogImg = document.createElement("img");
    const dogCaption = document.createElement("figcaption");
    const dogWrapper = document.createElement("li");

    dogImg.setAttribute("src", url);
    dogCaption.innerHTML = breed;

    dogCard.appendChild(dogImg);
    dogCard.appendChild(dogCaption);
    dogWrapper.appendChild(dogCard);

    const galleryList = document.querySelector("section.gallery").children[0];
    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
    galleryList.appendChild(dogWrapper);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const dogList = document.querySelector("section.gallery").children[0];

  try {
    dogList.children[0].remove();
  } catch (e) {
    console.log("No dog there");
  }

  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here

  const dogList = document.querySelector("section.gallery").children[0];
  try {
    dogList.children[dogList.children.length - 1].remove();
  } catch (e) {
    console.log("No dog there");
  }
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
});
