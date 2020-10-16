/* 
    pointer.js was created by OwL for use on websites, 
     and can be found at https://seattleowl.com/pointer.
*/

const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
pointer.insertBefore(ring, pointer.children[0])


let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false
const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
        
        
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        let defaultObj = {
            pointerColor: "#750c7e",
            ringSize: 15,
            ringClickSize: (options["ringSize"] || 15) - 5,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.4)
        ringY = trace(ringY, mouseY, 0.4)
        HOVERED =document.querySelector('div[alt="HoverMe"]:hover');
        if (HOVERED) {
            isHover = true;
            

        } else {
            //pointer.style.padding ="36px";
            isHover = false
           

        }
      
        ring.style.borderColor = getOption("pointerColor")
        if (mouseDown) {
            ring.style.padding = getOption("ringClickSize") + "px"
        } else {
            ring.style.padding = getOption("ringSize") + "px"
        }
        
        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`
        //ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`
        if(isHover)
        {
            ring.style.transform="scale(2)";
            ring.style.transition="transform 0.3s";
            const rect = HOVERED.getBoundingClientRect();
            x=mouseX - rect.left;
            y=mouseY  - rect.top;
            HOVERED.onmouseleave=function(){this.style.transform=""};
            HOVERED.style.transform=`translate(-50%,-50%) translate(${x}px, ${y}px) `;

        }
        else
        {
            ring.style.transform="";
            ring.style.transition="0.3s";
            

        }
        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}
