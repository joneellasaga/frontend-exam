
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


jQuery(document).ready(function($) {

    console.log("test");
    //default data
    var options = {
        data: [{location: "Noweheresville, XX", zipcode: "00000"},
        ],
        getValue: "location",
        template: {
            type: "description",
            fields: {
                description: "zipcode"
            }
        }
    };

    $("#searchZipcode").easyAutocomplete(options);
});
