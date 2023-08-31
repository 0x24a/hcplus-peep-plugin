window._lookupcallback=function(string){pushMessage({nick:'*',text:string})}
function peep(){
    if(myChannel!="your-channel"){
        pushMessage({nick:"!",text:"Sorry, this plugin currently can be used in your-channel only."})
        return
    }
    let query=Array.from(arguments).join(' ')
    let elem=document.createElement("script")
    elem.setAttribute("src",`https://lookup.thz.cool/hc/jsonp.js?token=${localStorageGet('lookup-key')}&query=getlast ${query}&callback=_lookupcallback&nocache=${[]+Math.floor(Math.random()*100000000000000000)}`)
    document.head.appendChild(elem)
}
function set_lookup_key(){
    localStorageSet("lookup-key",arguments[0])
    pushMessage({nick:"*",text:`Lookup Token set to \`${arguments[0]}\``})
}
run["peep"]=peep
run["set-lookup-key"]=set_lookup_key
