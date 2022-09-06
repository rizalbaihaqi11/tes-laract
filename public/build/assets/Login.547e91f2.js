import{a as e,u as h,r as f,j as s,H as b,L as x}from"./app.f06525b8.js";import{G as w,B as N}from"./Guest.1866d711.js";import{I as i,a as c}from"./InputError.ecdb73de.js";import{L as d}from"./Label.909f11b3.js";import"./ApplicationLogo.cacc7cd3.js";function y({name:t,value:o,handleChange:r}){return e("input",{type:"checkbox",name:t,value:o,className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:m=>r(m)})}function E({status:t,canResetPassword:o}){const{data:r,setData:m,post:u,processing:p,errors:l,reset:g}=h({email:"",password:"",remember:""});f.exports.useEffect(()=>()=>{g("password")},[]);const n=a=>{m(a.target.name,a.target.type==="checkbox"?a.target.checked:a.target.value)};return s(w,{children:[e(b,{title:"Log in"}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),s("form",{onSubmit:a=>{a.preventDefault(),u(route("login"))},children:[s("div",{children:[e(d,{forInput:"email",value:"Email"}),e(i,{type:"text",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,handleChange:n}),e(c,{message:l.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(d,{forInput:"password",value:"Password"}),e(i,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:n}),e(c,{message:l.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:s("label",{className:"flex items-center",children:[e(y,{name:"remember",value:r.remember,handleChange:n}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),s("div",{className:"flex items-center justify-end mt-4",children:[o&&e(x,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900",children:"Forgot your password?"}),e(N,{className:"ml-4",processing:p,children:"Log in"})]})]})]})}export{E as default};