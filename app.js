var Shayan = document.getElementById("MainRoot")
Shayan.classList.add("RootMain")
var Heading = document.createElement("h2")
var Heading2 = document.createTextNode("To do list")
Heading.appendChild(Heading2)
Shayan.appendChild(Heading)
var Heading3 = document.createElement("h1")
var Heading4 = document.createTextNode("Simple App to manage your Task")
Heading3.appendChild(Heading4)
Shayan.appendChild(Heading3)
var MainInput = document.createElement("input")

MainInput.setAttribute("id", "Main_input")
MainInput.setAttribute("placeholder", "Enter your Task")
Shayan.appendChild(MainInput);
var valueInput = document.getElementById("Main_input".value);

var ShayanZubair = document.querySelector('input');
ShayanZubair.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        ValueEnter()
    }
})



function ValueEnter() {
    if (MainInput.value == "") {
        alert("Please Enter Task")
    }
    else {
        var ShowList = document.createElement("div")
        ShowList.setAttribute("id", "tasklist")
        ShowList.classList.add("ShowList")
        Shayan.appendChild(ShowList)
        var ListDescription = document.createElement("p")
        var ListDescription2 = document.createTextNode(MainInput.value)
        var Close = document.createElement("a")
        var closeDescription = document.createTextNode("Close")

        ListDescription.classList.add("Font")
        ListDescription.appendChild(ListDescription2)
        ShowList.appendChild(ListDescription)
        Shayan.appendChild(ShowList)
        ShowList.appendChild(Close)
        var del = document.createElement("button")
        var del2 = document.createTextNode("Remove")
        del.appendChild(del2)
        ShowList.appendChild(del)
        del.classList.add("delete")
        del.setAttribute("onclick", "removeItem(event)")
        
        MainInput.value = " "
    }
   
}

function removeItem(e) {
    console.log(e)
   var parent = e.target.parentNode
   Shayan.removeChild(parent)
    
   
  }
 


