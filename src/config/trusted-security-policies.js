import { trustedTypes } from 'trusted-types'

// if (window.trustedTypes && trustedTypes.createPolicy) { // Feature detection
//   trustedTypes.createPolicy('myEscapePolicy', {
//     createHTML: (string) => string.replace(/>/g, ">"),
//   });
// }

// let el = document.getElementById("myDiv");
// const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
// console.log(escaped instanceof TrustedHTML); // true
// el.innerHTML = escaped;

// Define the policy
let escapeHTMLPolicy;
if (window.trustedTypes && trustedTypes.createPolicy) { // Feature detection
  trustedTypes.createPolicy('myEscapePolicy', {
    createHTML: (string) => string.replace(/>/g, ">"),
  });
}

// Use the policy
// let el = document.getElementById("btnSing");
if (escapeHTMLPolicy) {
  escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
  // console.log(escaped instanceof TrustedHTML); // true
  // el.innerHTML = escaped;
} else {
  console.error("Trusted Types policy 'escapeHTMLPolicy' is not defined.");
}
