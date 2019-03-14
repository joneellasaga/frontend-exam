//Choose category---->
// modal by ID
var myModal = document.getElementById('myModal');

// category select
var categorySelect = document.getElementById('category');

// init modal Function
var categoryModalInitJS = new Modal(myModal);

// when we click btnModal, open the modal
categorySelect.addEventListener('change', function(e){
    categoryModalInitJS.show();
}, false)

// access to the initialization object from another application
var findModalInitJS = myModal.Modal;

//Read review
var readReview = document.getElementsByClassName('read-review');
var modalLawyerProfile = document.getElementById('lawyerReview');
var lawyerModalInitJS = new Modal(modalLawyerProfile);

for( var i = 0; i < readReview.length; i++ ){
    readReview[i].addEventListener('click', function (e) {
        lawyerModalInitJS.show();
    }, false);
}
//Find Lawyer Modal
//Read review
var findCategory = document.getElementById('find-category-list');
var modalCategory = document.getElementById('findCategory');
var findCategoryModalInitJS = new Modal(modalCategory);

findCategory.addEventListener('click', function (e) {
    findCategoryModalInitJS.show();
}, false);

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
