function sendWalk() {
	unityInstance.SendMessage('character', 'walk');
}
function sendWave() {
	unityInstance.SendMessage('character', 'wave');
}
function sendRun() {
	unityInstance.SendMessage('character', 'run');
}
function sendBackflip() {
	unityInstance.SendMessage('character', 'backflip');
}