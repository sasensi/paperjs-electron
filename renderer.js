// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


// Setup Paper.js on the canvas element.
paper.setup(document.querySelector('canvas'));

// Draw a circle.
new paper.Path.Circle({
    center: paper.view.center,
    radius: 50,
    fillColor: 'orange'
});
