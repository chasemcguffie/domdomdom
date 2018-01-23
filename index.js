document.addEventListener("DOMContentLoaded", function() {

    var boxDiv = document.createElement("div");
    boxDiv.id = ("boxDiv");
    var element = document.getElementsByClassName("box");
    document.body.appendChild(boxDiv);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return "" + color + "";
        }
        console.log(getRandomColor())
        function colorChange(n) {
        };
    
document.getElementById("myBtn").addEventListener("click", function(item){
    var newElement = document.createElement('div');
    var numberOfChildren = document.getElementById("boxDiv").childElementCount;
    newElement.className = ("box"); newElement.id = (numberOfChildren);
    newElement.style.backgroundColor = "black";
    newElement.style.height = '100px';
    newElement.style.width = '100px';
    newElement.style.display = "inline-block";
    newElement.style.margin = "10px";
    var h = document.createElement ("H2");
    var boxId = document.createTextNode(numberOfChildren);
    boxId.id = (numberOfChildren + "txt"); boxId.className = ("boxNumber")
    for (i = 0; i < document.getElementById('boxDiv').childElementCount + 1; i++);
    h.appendChild (boxId);
    newElement.appendChild(h);
    boxDiv.appendChild(newElement);
    

Array.from(document.getElementsByClassName("box")).forEach((item)=>{
    item.addEventListener("click", () => {
        item.style.backgroundColor = (getRandomColor());
    });
    newElement.addEventListener("pointerover", () => {
        h.style.visibility = "visible";
    })
    newElement.addEventListener("pointerout",  () => {
        h.style.visibility = "hidden";
})
});
document.getElementById(numberOfChildren).addEventListener("dblclick", () => {
    if (newElement.id % 2 == 0) {    
        if (newElement.nextElementSibling == null) 
        {
        alert('does not exist!');
        } else if (numberOfChildren !== i) {
        document.getElementById(numberOfChildren).nextElementSibling.remove(this);
        }
    } else if (newElement.id % 2 == 1) {
        if (newElement.previousElementSibling === null) 
        {
        alert('does not exist!'); 
        } else {
        document.getElementById(numberOfChildren).previousElementSibling.remove(this);
        }
    }
    })
});      
});
