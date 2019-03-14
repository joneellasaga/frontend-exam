
// modal by ID
var myModal = document.getElementById('myModal');

// category select
var categorySelect = document.getElementById('category');

// init modal Function
var modalInitJS = new Modal(myModal);

// when we click btnModal, open the modal
categorySelect.addEventListener('change', function(e){
    modalInitJS.show();
}, false)

// access to the initialization object from another application
var findModalInitJS = myModal.Modal;


