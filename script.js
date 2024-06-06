//your JS code here. If required.
function change() {
	let paragraph = document.getElementById("status")
	let h1 = document.createElement("h1")
	h1.innerHTML = "Entered Metaverse"
	h1.id = "status"
	paragraph.replaceWith(h1)
}