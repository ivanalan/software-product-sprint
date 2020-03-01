// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Interstellar', 'Whiplash', 'Moonlight', 'Her', 
      'Mr. Happy', 'Guava Island', 'Kikis Delivery Service',
      'Pulp Fiction', 'Wall-E', 'Shutter Island', 'The Green Book',
      'Life of Pi', 'Guardians of the Galaxy', 'Bohemian Rhapsody'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

  //fetch /data server
  function getData() {
      console.log('Fetching Json String')
      fetch('/data').then(response => response.json()).then((data) => {
        //   document.getElementById('data-container').innerText = data;

          // Build the list of comments
          const commentsEl = document.getElementById('data-container');
          data.forEach((line) => {
          commentsEl.appendChild(createListElement(line));
          });
  });
}

// Creates an <li> element containing text.
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}


