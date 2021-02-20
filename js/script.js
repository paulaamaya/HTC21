$(document).ready(function(){
    // Year Select Dropdown
    for (let i = 0; i < 121; i++){
        let currentYear = 2020;
        $('#yearSelect').append(new Option(""+(currentYear-i), ""+(currentYear-i)));
    }

    // Add Family Member Card
    var familyMemberCount = 0;
    $('#addFamilyMemberButton').click(function(){
        familyMemberCount++;
        let label = $("<label>").text(`Family Member ${familyMemberCount}`);
        let input = $('<input type="text" class="form-control" placeholder="Health Card Number">').attr({name: `member${familyMemberCount}`});
        let wrapper = $('<div class="family-member-card">');

        wrapper.append(label);
        wrapper.append(input);
        $('#familyMemberCards').append(wrapper);
    });

    // Vaccine Centre Preference
    let locations = ["Windsor Regional Hospital","London Health Sciences Centre","Grand River Hospital","Halton Healthcare","Hamilton Health Sciences","William Osler Health System","Trillium Health Partners","Southlake Regional Health Centre","Mackenzie Health","Humber River Hospital","Sunnybrook Health Sciences Centre","Michael Garron Hospital","Unity Health Toronto","Scarborough Health Network","Lakeridge Health","Royal Victoria Regional Health Centre","Thunder Bay Regional Health Sciences Centre"];
    let table = $('#centrePreference');
    $('#provinceSelect').change(function(){
        table.empty();
        var limit = 3;
        let count = 0;
        for(let i = 0; i < Math.ceil(locations.length/3); i++){
            let tableRow = $('<div class="row mb-3">');
            table.append(tableRow);
            for(let j=0;j<3;j++){
                count++;
                if (count >= locations.length) break;
                let tableData = $('<div class="col-md-4 form-check">');
                let label = $('<label>').text(locations[count]).attr({for: `centre${count}`});
                let input = $(`<input class="centre-preference-check" type="checkbox" name="centre${count}" id="centre${count}">`);
                input.change(function(){
                    if ($('.centre-preference-check:checked').length > 3) {
                        this.checked = false;
                    }
                })

                tableData.append(input);
                tableData.append(label);
                tableData.append(`<p>Ontario, Canada</p>`);
                tableRow.append(tableData);
            }
        }
    })
});