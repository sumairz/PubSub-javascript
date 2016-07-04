events.on("activate", printData); // subscribing to event activate

function printData(data) {
	console.log("Module 1 -- " + data);
}