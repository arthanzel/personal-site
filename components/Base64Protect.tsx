import { useEffect } from "react";

export default function Base64Protect({ content }) {
    const id = `base64-${Math.random().toString().substring(2)}`;
    const script = `
document.addEventListener("DOMContentLoaded", function(event) {
    const el = document.getElementById("${id}");
    console.log(el);
    const base64 = el.innerText.substring("base64:".length);
    console.log(base64);
    console.log(atob(base64));
    setTimeout(() => { el.innerText = "decoded"; }, 100);
});
    `;
    console.log(content);
    return <>
        <span id={id}>base64:{btoa(content)}</span>
        <script lang="text/javascript" dangerouslySetInnerHTML={{__html: script }}></script>
    </>
};