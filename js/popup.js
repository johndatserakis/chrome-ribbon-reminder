'use strict';

var saveButton = document.getElementById('save-button')
var ribbonInput = document.getElementById('ribbon-input')
var ribbonDisplay = document.getElementById('ribbon-display')

async function onDocumentLoad() {
    console.log('popup loaded')

    var ribbons = await getRibbons()
    await updateRibbonDisplay(ribbons)

    console.log(ribbons)
}

document.addEventListener('DOMContentLoaded', onDocumentLoad, false);

async function getRibbons() {
    try {
        var result = await chrome.storage.sync.get({ribbons: []})
        return result.ribbons
    } catch (error) {
        console.log(error)
    }
}

async function updateRibbonDisplay(ribbons) {
    ribbonDisplay.innerHTML = ''
    return new Promise(function(resolve, reject){
        for (var x = 0; x < ribbons.length; x++) {
            ribbonDisplay.innerHTML += ribbons[x].content
        }
        resolve()
    })
}

saveButton.addEventListener('click', async function() {
    var ribbons = await getRibbons()

    var newRibbon = {
        content: ribbonInput.value,
        timestamp: Date.now()
    }

    ribbons.push(newRibbon)

    await chrome.storage.sync.set({'ribbons': ribbons})
    await updateRibbonDisplay(ribbons)
})