import"./assets/styles-12a767c5.js";const m=document.querySelector(".feedback-form"),a="feedback-form-state";m.addEventListener("input",e=>{const t={...JSON.parse(localStorage.getItem(a))||{},[e.target.name]:e.target.value.trim()};localStorage.setItem(a,JSON.stringify(t))});m.addEventListener("submit",e=>{e.preventDefault();const{email:t,message:s}=e.currentTarget.elements,r=t.value.trim(),o=s.value.trim();if(r===""||o===""){console.log("Error: Fill in the fields");return}console.log({email:r,message:o}),localStorage.removeItem(a),e.currentTarget.reset()});const l=localStorage.getItem(a);if(l){const{email:e,message:t}=JSON.parse(l);document.querySelector('input[name="email"]').value=e,document.querySelector('textarea[name="message"]').value=t}
//# sourceMappingURL=commonHelpers2.js.map
