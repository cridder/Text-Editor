const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
	window.deferredPrompt = event;
	btnInstallEl.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
	const btnEvent = window.deferredPrompt;
	if (!btnEvent) {
		return;
	}
	btnEvent.prompt();
	window.deferredPrompt = null;
	btnInstallEl.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
	window.deferredPrompt = null;
});
