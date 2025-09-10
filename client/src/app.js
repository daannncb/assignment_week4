const guestbookContainer = document.getElementById("guestbook-container");
//I wanted to rename guestbookContainer to guestbookOutput but it broke something and the troubleshooting was getting a bit much

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(guestbookContainer);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  fetch("http://localhost:8080/guestbook", {
    //This url will need to be replaced with a live url once things are underway
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formValues }),
  });
}

guestbookContainer.addEventListener("submit", handleSubmit);

async function getGuestbookContent() {
  const response = await fetch("http://localhost:8080/guestbook");
  const guestBookEntries = await response.json();
  console.log(guestBookEntries);
  return guestBookEntries;
}

//TODO::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//            guestBookEntries is coming from the get request as "Row: /guestname", so the guestBookEntries.guestname can't get in there, and is returning null. You need to go into the get request in server.js and output the SQL query as json
//^ This note was left as a reminder for the next time I opened the code. The problem was that I had wrapped my columns in my get SQL query in brackets. It returned the results as a weird pseudo-json, and removing the brackets gave 'referencable' json and fixed everything. Brackets haunt me

getGuestbookContent().then((guestBookEntries) => {
  for (let i = 0; i < guestBookEntries.length; i++) {
    // console.log(date);
    let guestName = guestBookEntries[i].guestname;
    let guestDate = guestBookEntries[i].date;
    let guestContent = guestBookEntries[i].content;
    const guestMessageContainer = document.getElementById("guestbook-messages");
    const guestMessageElement = document.createElement("div");
    // guestMessageContainer2.content = guestName;
    guestMessageElement.className = "guestbook-message-parent";

    const guestMessageName = document.createElement("p");
    const guestMessageDate = document.createElement("p");
    const guestMessageContent = document.createElement("p");
    guestMessageName.className = "guestbook-message-child-name";
    guestMessageDate.className = "guestbook-message-child-date";
    guestMessageContent.className = "guestbook-message-child-content";
    guestMessageName.textContent = `Message from: ${guestName}`;
    guestMessageDate.textContent = `Dated: ${guestDate}`;
    guestMessageContent.textContent = `Saying: ${guestContent}`;

    guestMessageContainer.appendChild(guestMessageElement);
    guestMessageElement.appendChild(guestMessageName);
    guestMessageElement.appendChild(guestMessageDate);
    guestMessageElement.appendChild(guestMessageContent);
  }
});

//:::::::::::::::: Set date-time
