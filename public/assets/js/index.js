


const $saveBurgerBtn = $(".mt-4");
const $devouredBtn =$(".update")



// A function for getting all notes from the db
const getNotes = () => {
  return $.ajax({
    url: "/api/burger",
    method: "GET",
  });
};

// A function for saving a note to the db
const saveNote = (note) => {
  return $.ajax({
    url: "/api/burger/save",
    data: note,
    method: "POST",
  });
};
const handleNoteSave = function () {
  const newNote = {
    title: $noteTitle.val(),
    text: $noteText.val(),
  };

  saveNote(newNote).then(() => {
    getAndRenderNotes();
    renderActiveNote();
  });
};

// Delete the clicked note
// const handleNoteDelete = function (event) {
//   // prevents the click listener for the list from being called when the button inside of it is clicked
//   event.stopPropagation();

//   const note = $(this).parent(".list-group-item").data();

//   if (activeNote.id === note.id) {
//     activeNote = {};
//   }

//   deleteNote(note.id).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });
// };

const handleRenderSaveBtn = function () {
  if (!$noteTitle.val().trim() || !$noteText.val().trim()) {
    $saveNoteBtn.hide();
  } else {
    $saveNoteBtn.show();
  }
};

// Render's the list of note titles
const renderNoteList = (notes) => {
  $noteList.empty();

  const noteListItems = [];

  // Returns jquery object for li with given text and delete button
  // unless withDeleteButton argument is provided as false
  const create$li = (text, withDeleteButton = true) => {
    const $li = $("<li class='list-group-item'>");
    const $span = $("<span>").text(text);
    $li.append($span);
  }
};

// Gets notes from the db and renders them to the sidebar
const getAndRenderNotes = () => {
  return getNotes().then(renderNoteList);
};

$saveBurgerBtn.on("click", handleNoteSave);
$devouredBtn.on("click", handleNoteSave);
$noteText.on("keyup", handleRenderSaveBtn);

//devour button
$devouredBtn.on("click", function(event){
  event.preventDefault()
  alert("buttom clicked")
})
// Gets and renders the initial list of notes
console.log("7897897897897" + burger.devoured)

getAndRenderNotes();
