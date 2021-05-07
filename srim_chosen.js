$(document).ready(function () {
    $("body").append('<div class="srim-drop-down-container"></div>');

    $(".srim-drop-down-container").html('');

    var len_x_1 = $('.srim-chosen').length;

    for (var j = 0; j < len_x_1; j++) {      
        
        var id_of_input = $('.srim-chosen').eq(j).attr('id');

        $('#' + id_of_input).addClass('hidden');

        $(".srim-chosen").eq(j).after('<input type="text" class="form-control srim_dropdown_val" id="dynamic_product_values_' + id_of_input + '" readonly="">');

        modal_load(id_of_input);
    }

    $(".srim_dropdown_val").click(function () {
        var id = $(this).attr('id');
        var id = id.replace("dynamic_product_values_", "");
        $("#srim_Modal_" + id).modal('show');
    });

    $(".srim_dd_search_box").on("keyup", function () {
        var id = $(this).attr('data-val');
        var value = $(this).val().toLowerCase();
        $("#srim_drop_down_Table_" + id + " tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(document).on('click', ".srim_drop_down_table tr", function () {

        var input_field_id = $(this).closest('table').attr('data-id');

        $(this).find('input:radio').prop('checked', true);

        var id = $('input[name="srim_drop_down_tr_' + input_field_id + '"]:checked').val();
       
        var value = $('#srim_dropdown_row_vale_' + id).html();

        $('#' + input_field_id).val(id.toString().replace(/\__/g, ' '));
        $('#dynamic_product_values_' + input_field_id).val(value);
        $('#srim_Modal_' + input_field_id).modal('toggle');

        $('#' + input_field_id).trigger('change'); // triger change 

    });

});

function modal_load(id) {

    var modal = '<div id="srim_Modal_' + id + '" class="modal fade" role="dialog">\n\
    <div class="modal-dialog">\n\
    <div class="modal-content">\n\
    <div class="modal-header">\n\
    <div class="col-md-offset-2 col-md-8">\n\
    <input type="text" class="form-control srim_dd_search_box" data-val="' + id + '" id="srim_drop_down_search_box_' + id + '" placeholder="Search">\n\
    </div>\n\
    </div>\n\
    <div class="modal-body" >\n\
    <table class="table table-border table-hover srim_drop_down_table" data-id="' + id + '">\n\
     <tbody id="srim_drop_down_Table_' + id + '" class="srim_drop_down_tbody" style="display: block;max-height: 420px;overflow-y: scroll;">\n\
    </tbody>\n\
    </div>\n\
    </div>\n\
    </div>\n\
    </div>';

    $(".srim-drop-down-container").append(modal);

}

function srim_chosen_data(id, data_id, data_value) {
    data_id = data_id.toString().replace(/\s/g, "__");
    var radio_id = "product_type" + data_id;
    var data = '<tr><td hidden="">' + data_id + '</td><td style="width: 50px;"><input type="radio" id=' + radio_id + ' name="srim_drop_down_tr_' + id + '" value=' + data_id + '></td><td id="srim_dropdown_row_vale_' + data_id + '">' + data_value + '</td></tr>';
    $("#srim_drop_down_Table_" + id).append(data);
}