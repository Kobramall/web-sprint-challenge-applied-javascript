import axios from "axios";

const topicWrapper = document.createElement("div");
topicWrapper.classList.add("topics");

const Tabs = (topics) => {
  
  
  const tab = document.createElement("div");
  tab.classList.add("tab");
  topicWrapper.appendChild(tab);
  tab.textContent = topics



  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  return tab;
}

const tabsAppender = (selector) => {
  axios.get("http://localhost:5001/api/topics")
  .then(res =>{ 
    for(let i = 0; i < res.data.topics.length ; i++){
      document.querySelector(selector).appendChild(Tabs(res.data.topics[i]));
    }
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() =>{
    console.log("This is also working");
  })
  
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
