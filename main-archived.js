// lua code copy
const luaBtn = document.getElementById('lua-btn')
const luaBtnCurrentHTML = luaBtn.innerHTML
luaBtn.addEventListener('click', function() {
    luaBtn.innerText = `Copied!`
    const copiedData = document.getElementById('code-block-lua').innerText

    navigator.clipboard.writeText(copiedData).then(function() {
        console.log(copiedData)
        setTimeout(function() {
            luaBtn.innerHTML =  luaBtnCurrentHTML
        }, 2000)
    }).catch(function(err) {
        console.error('Could not copy: ' + err)
    })
})

// html code copy
const htmlBtn = document.getElementById('html-btn')
const htmlBtnCurrentHTML = htmlBtn.innerHTML
htmlBtn.addEventListener('click', function() {
    htmlBtn.innerText = `Copied!`
    const copiedData = document.getElementById('code-block-html').innerText

    navigator.clipboard.writeText(copiedData).then(function() {
        console.log(copiedData)
        setTimeout(function() {
            htmlBtn.innerHTML =  htmlBtnCurrentHTML
        }, 2000)
    }).catch(function(err) {
        console.error('Could not copy: ' + err)
    })
})