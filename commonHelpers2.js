import"./assets/styles-12a767c5.js";const e=document.querySelector(".feedback-form"),t=e.elements.email,s=e.elements.message,l="feedback-form-state";e.addEventListener("input",()=>{localStorage.setItem(l,JSON.stringify({email:t.value,message:s.value}))});e.addEventListener("submit",a=>{a.preventDefault(),console.log({email:t.value,message:s.value}),localStorage.removeItem(l),e.reset()});const m=localStorage.getItem(l);if(m){const{email:a,message:o}=JSON.parse(m);t.value=a,s.value=o}
//# sourceMappingURL=commonHelpers2.js.map
