var copy = function (target) {
  var textArea = document.createElement("textarea");
  textArea.setAttribute("style", "width:1px;border:0;opacity:0;");
  document.body.appendChild(textArea);
  textArea.value = target.innerHTML;
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
};

var copyableElements = document.querySelectorAll(".copyable");
// var copyableElements = document.querySelectorAll(".copyable");/* real working code */
copyableElements.forEach(function (item) {
  var button = document.createElement("button");

  button.className = "copyButton";
  button.innerHTML = "Copy to clipboard";

  item.insertBefore(button, item.getElementsByTagName("a").nextSibling); /* Amazing, it places after that node. Yikes!! */
  // item.insertBefore(button, item.childNodes[1].nextSibling); /*:#learning:This can be useful too. */
  // item.parentNode.insertBefore(button, item.nextSibling); /* Amazing, it places after that node. Yikes!! */
  // item.parentNode.insertBefore(button, item);/* original code */
  button.addEventListener("click", function (e) {
    e.preventDefault();
    // let copyingText = item.getElementsByTagName("a")[0];
    // console.log(`::myLog::${copyingText} is copied to cliboard, Yikes!!`);
    // console.log(`::myLog::${item.childNodes[1].innerHTML} is copied to cliboard, Yikes!!`);
    // console.log(`some function -> ${copy}`);

    copy(item.getElementsByTagName("a")[0]); /* This works good for my case. */
    // copy(item.childNodes[1].innerHTML); /* This works good for my case. */
    // copy(item.childNodes[0]);
  });
});

// ────────────────────────────────────────────────────────
// Sources:
// https://stackoverflow.com/questions/31908564/easy-way-to-add-copy-to-clipboard-to-github-markdown
// https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
// --------------
// Another copyToClipboard function that actually works with copying code snippets too
// https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript

// const copyToClipboard = (str) => {/* This works amazingly with code snippets too. */
//   const el = document.createElement("textarea");
//   el.value = str;
//   document.body.appendChild(el);
//   el.select();
//   document.execCommand("copy");
//   document.body.removeChild(el);
// };
