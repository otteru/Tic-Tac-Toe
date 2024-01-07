function openPlayerConfig(event) {
	editedPlayer = +event.target.dataset.playerid; // +'1' => 1
	PlayerConfigOverlayElement.style.display = "block";
	backdropElement.style.display = "block";
}

function closePlayerConfig() {
	PlayerConfigOverlayElement.style.display = "none";
	backdropElement.style.display = "none";
	formElement.firstElementChild.classList.remove("error");
	// errorsOutputElement.textContent = "";  // 이거 없어도 됨
	formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
	event.preventDefault(); // 양식을 제출해서 페이지가 reload되는 것을 막는다.
	const formData = new FormData(event.target);
	const enteredPlayername = formData.get("playername").trim();
	
	if(!enteredPlayername){
		event.target.firstElementChild.classList.add("error");
		errorsOutputElement.textContent = "Please enter a valid name!";
		return;
	}
	
	const updatedPlayerDataElement = document.getElementById("player-"+editedPlayer+"-data");
	updatedPlayerDataElement.children[1].textContent = enteredPlayername;
	
	players[editedPlayer-1].name = enteredPlayername;
	
	closePlayerConfig();
}