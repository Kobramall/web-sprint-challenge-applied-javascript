const newArticle = {"articles":{"javascript":[{"id":"1e4d8724-5973-4b5b-84d9-a30a3c5adb70","headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg","authorName":"SIR RUFF'N'STUFF"},{"id":"553e2401-c95d-4029-89b8-fc6bdb60ae5e","headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences","authorPhoto":"https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg","authorName":"BONES R. LIFE"},{"id":"9c2ed89e-7150-4cd6-a5c2-4a4f3d6932c8","headline":"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'","authorPhoto":"https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg","authorName":"PUPPER S. DOGGO"},{"id":"b3af02ec-5733-4a14-8876-5db708d20051","headline":"Typescript: Ten Things you Should Know Before Building Your Next Angular Application","authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg","authorName":"SIR RUFF'N'STUFF"}],"bootstrap":[{"id":"5efa1378-c91f-49eb-9955-02e477c95920","headline":"Bootstrap 5: Get a Sneak Peak at all the New Features","authorPhoto":"https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg","authorName":"FIDO WALKSALOT"},{"id":"d03affc6-b06e-4b4a-9909-3981c7cb8389","headline":"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"},{"id":"a85f88d3-0845-426d-9f02-930daa5c9b34","headline":"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"}],"technology":[{"id":"be3dc9bd-52a0-4874-97d8-99223b937da9","headline":"AI: What Are the Ethical Ramifications of the Future?","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"},{"id":"1749a430-f470-4c23-be75-fe736a5409c2","headline":"AR or VR: How We Will See the World Through a Digital Lense","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"},{"id":"3a80aa8b-644a-4382-a544-f1f68cb35cb5","headline":"Quantum Computing: Where we Are Now, and Where We Will Be Very Soon","authorPhoto":"https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg","authorName":"MAX GOODBOYE"}],"jquery":[{"id":"6945439f-363a-49b2-93b5-d50c97a717b7","headline":"History of Javascript Libraries: from jQuery to React","authorPhoto":"https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg","authorName":"PUPPER S. DOGGO"},{"id":"43410bfb-e9cd-4a56-9022-315003b727e1","headline":"jQuery Animations: When and Where to Use Them, and Not CSS","authorPhoto":"https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg","authorName":"FIDO WALKSALOT"},{"id":"68fd787a-f5bc-4563-bbba-c11dd5818927","headline":"Why I Use jQuery in Every Application I Create and Why You Should Too","authorPhoto":"https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg","authorName":"FIDO WALKSALOT"}],"node":[{"id":"75e89d6c-e4f4-411b-8855-bef0b8ed3508","headline":"Node.js in 2018: Which Framework? Express, Sails, Hapi?","authorPhoto":"https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg","authorName":"SIR RUFF'N'STUF"},{"id":"04468917-d408-4e2d-804f-143474f11d29","headline":"MongoDB: NoSQL vs. SQL, the Debate Continues..","authorPhoto":"https://tk-assets.lambdaschool.com/a9471235-ed71-4b11-ae15-5a4fa1151d30_bones.jpg","authorName":"BONES R. LIFE"}]}}

const Card = (article) => {
  
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card");
  const cardHeadline = document.createElement("div");
  cardHeadline.classList.add("headline");
  const author = document.createElement("div");
  author.classList.add("author");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const cardImg = document.createElement("img");
  const authorNameSpan = document.createElement("span");

  imgContainer.appendChild(cardImg);
  author.appendChild(imgContainer);
  author.appendChild(authorNameSpan);
  cardWrapper.appendChild(cardHeadline);
  cardWrapper.appendChild(author);

  cardHeadline.textContent = `${article.headline}`
  cardImg.src = `${article.authorPhoto}`
  authorNameSpan.textContent = `${article.authorName}`

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardWrapper;
}
 

const cardAppender = (selector) =>{

  
  newArticle.forEach(element => {
    return Card(element);
  });
  
  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
