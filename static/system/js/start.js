const rosa = {};
const module = false;

const log = function(funName) {
    console.log(funName,{...arguments})
}
rosa.helper = {
    lang: document.documentElement.lang,
    setUrlLocation() {
        if (this.getMetaContent("location")!==decodeURI(location.pathname) && !this.getMetaContent("noredirect")) 
            location.href = this.getMetaContent("location");
    },
    getMetaContent(name) {
        let node = document.querySelector(`meta[name=${name}]`);
        return node ? node.getAttribute("content") : null;
    }
}

rosa.helper.setUrlLocation();
