//your JS code here. If required.
function change() {
	let paragraph = document.getElementById("status")
	let h1 = document.createElement("h1")
	h1.innerHTML = paragraph.innerHTML
	paragraph.replaceWith(h1)
}