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

const galery=document.querySelector('#Grid');

let mouseX = body.offsetWidth/2;
let mouseY = body.offsetHeight/2;
let ringX = -100
let ringY = -100
let isHover = false
let isHover2 = false
let timer;
let mouseDown = false
const init_pointer = (options) => {

 
    window.onmousemove = (mouse) => {
        mouseX = mouse.clientX
        mouseY = mouse.clientY
        
    
        requestAnimationFrame(render)
        


        
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
            ringSize: 20,
            ringClickSize: (options["ringSize"] || 15) - 5,
        }
        if (options[option] == undefined) {
            return defaultObj[option]
        } else {
            return options[option]
        }
    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.19)
        ringY = trace(ringY, mouseY, 0.19)

        body.style.setProperty('--mox',ringX+'px');
        body.style.setProperty('--moy',ringY+'px');
        
        HOVERED =document.querySelector('div[alt="HoverMe"]:hover');
        JustHover = document.querySelector('p[alt="Hover"]:hover');
        HOVEREDIMG=document.querySelector('img:hover');
        if (HOVERED) {
            isHover = true;
            

        } 
        else 
        {
            //pointer.style.padding ="36px";
            isHover = false
           

        }
        if(JustHover)
        {
            isHover2 = true;
        }
        else
        {
            isHover2 = false

        }
        if(HOVEREDIMG)
        {
            r= HOVEREDIMG.getBoundingClientRect();
            H=HOVEREDIMG.naturalHeight;
            Ratio = HOVEREDIMG.height / H ;
            W=HOVEREDIMG.naturalWidth * Ratio;

            body.style.setProperty('--mousex',(mouseX-((r.right + r.left)/2))*119+'px');
            HOVEREDIMG.style.setProperty('--actw',W+'px');
            body.style.setProperty('--mousey',(mouseY-((r.bottom + r.top)/2))*119+'px');
            body.style.setProperty('--FLT','grayscale(1)');
            HOVEREDIMG.style.filter="";
            // document.querySelectorAll('.GAL').forEach(element => {
            //     if(element!=HOVEREDIMG)
            //     {
            //         element.classList.add('GALHOVER');
            //     }
            // });
            
        }
        else
        {
            body.style.setProperty('--FLT','grayscale(0)');

        }
        // else
        // {
        //     document.querySelectorAll('.GAL').forEach(element => {
        //         element.classList.remove('GALHOVER');
        //     });
        // }
        //ring.style.borderColor = getOption("pointerColor")
        if (mouseDown) {
            ring.classList.add("Clicked");
            //ring.style.padding = getOption("ringClickSize") + "px"
        } else {
            ring.classList.remove("Clicked");

            //ring.style.padding = getOption("ringSize") + "px"
        }
        
        //pointer.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`
        //ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`
        if(isHover)
        {
            ring.style.transform="scale(0.7)";
            //pointer.style.setProperty('--hovering','hov 0.7s 1');
            ring.style.backgroundColor="white";
            const rect = HOVERED.getBoundingClientRect();
            x=mouseX - rect.left;
            y=mouseY  - rect.top;
            HOVERED.onmouseleave=function(){this.style.transform=""};
            HOVERED.style.transform=`translate(-50%,-50%) translate(${x}px, ${y}px) `;

        }
        else if(isHover2)
        {
            ring.style.backgroundColor="white";

            ring.style.transform="scale(2)";

        }
        else
        {
            ring.style.transform="";
            ring.style.backgroundColor="";


        }
        //requestAnimationFrame(render)
    }
}
