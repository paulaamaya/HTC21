$(document).ready(function(){
    for (let i = 0; i < 121; i++){
        let currentYear = 2020;
        $('#yearSelect').append(new Option(""+(currentYear-i), ""+(currentYear-i)));
    }
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
});