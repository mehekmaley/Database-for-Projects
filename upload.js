var $form,
	$input,
    $list;
    
var i = 0;
var a = [];
var submit1 = document.getElementById("submit1");
var display = document.getElementById("display");

submit1.addEventListener("click",chalbc);
display.addEventListener("click",chaldisplay);
<!---function chalbc() {

    console.log("submit start")
    firebase.firestore().collection("mehek").doc("project").set({
        tag: a
        
    });
    console.log("submit")
}
// function chaldisplay() {
//     console.log("display start");
//     firebase.firestore().collection("mehek").where("tag","array-contains","css").get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {
//           console.log(doc.id);
          
          
//         })
//       });
// }

document.addEventListener("DOMContentLoaded", start);

function start() {
	$form = document.querySelector(".tag-form");
	$list = document.querySelector(".tag-list");
	$input = document.querySelector(".tag-input");
	
	
	$form.onsubmit = onSubmit;
	
	// keypress
	// $input.addEventListener("keypress", onKeyInput);
}

function onSubmit() {
	addTagFromInput();
	return false;
}

function onKeyInput(event) {
	console.log(event);
	if (event.key != "Enter") return;
	addTagFromInput();
}

function addTagFromInput() {
	var name = $input.value.replace(/^\s+/, "");
	if (name.length < 1) return;
    addTag(name);
    console.log(name);
    addArray(name);
	 $input.value = "";
}

function addArray(name) {
    a[i]=name;
    console.log(a[i]);
    i++;
}




function addTag(name) {
	var $tag_li = document.createElement("li"),
		$tag_a = document.createElement("a");
	
	$tag_a.innerText = name;
	$tag_a.href = "#";
	$tag_a.addEventListener("click", function (event) {
		event.preventDefault();
		$tag_li.remove();
		return false;
	});
	
	$tag_li.appendChild($tag_a);
	
	
	var len = $list.children.length;
	$list.insertBefore($tag_li, $list.children[len-1]);
}