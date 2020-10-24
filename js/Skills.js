CLOUD = document.createElement("div");
CLOUD.id="TagCloud";
CLOUD.width="100%";
CLOUD.height="100%";


const Texts=["AutoCad","Rhino","Grasshopper","Revit",'Enscape','Sketchup','Python','Vray','Photoshop','Illustrator','CSS','JS','C#','3DSMAX','Blender'];
const Options=[];

body.appendChild(CLOUD);

//window.onload=ShowCloud;
SkillsB = document.querySelector('#CenterB');
SkillsB.onclick=ShowCloud;

function ShowCloud()
{
   
    CLOUD.style.animationFillMode="forwards";
    CLOUD.style.animationName="WORK";
    CLOUD.style.display="block";
    CLOUD.style.animationDuration="2s";
    CLOUD.style.animationIterationCount=1;
    TagCloud(CLOUD, Texts, Options);
}
