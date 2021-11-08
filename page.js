$secondsdelay = 20;
function unhide (divID){
var item = document.getElementById(divID);
if (item){
item.className=(item.className==&#39;hidden&#39;)?&#39;unhidden&#39;:&#39;hidden&#39;;}
}
$delay = $secondsdelay*400;
window.setTimeout(&quot;unhide(&#39;links&#39;)&quot;,$delay);
