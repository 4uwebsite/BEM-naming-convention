// Get the elements
const luaBtn = document.getElementById('lua-btn')
const htmlBtn = document.getElementById('html-btn')


// Button click events
luaBtn.addEventListener('click', function() {
    const copiedData = document.getElementById('code-block-lua').innerText
    const currentHTML = luaBtn.innerHTML
    copyData(luaBtn, copiedData, currentHTML)
})
htmlBtn.addEventListener('click', function() {
    const copiedData = document.getElementById('code-block-html').innerText
    const currentHTML = htmlBtn.innerHTML
    copyData(htmlBtn, copiedData, currentHTML)
})

// Copying the data to clipboard
function copyData(btnObject, data, html) {
    navigator.clipboard.writeText(data).then(function() {
        btnObject.innerText = `Copied!`
        setTimeout(function() {
            btnObject.innerHTML = html
        }, 2000)
    }).catch(function(err) {
        console.error(`Could not copy: ${err}`)
    })
}