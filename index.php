<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Srim Chosen</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link href="srim_chosen.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container" style="margin-top: 50px;">
            <div class="row">
                <div class="col-md-12">                                               
                    <div class="col-md-4">
                        <p><b>Product Type</b></p>
                        <input type="text" class="form-control srim-chosen" id="product_type" readonly="" value="">
                    </div>                   
                </div>
            </div>
        </div>


        <script src="srim_chosen.js" type="text/javascript"></script>
        <script>
            $(document).ready(function () {
                load_product_type();
            });


            function load_product_type() { 
                $.ajax({
                    url: "data.json",
                    dataType: 'json',
                    type: 'post',
                    success: function (JSONObject) {
                        srim_chosen_data('product_type', 0, 'Select');
                        for (var key in JSONObject) {
                            if ((JSONObject.hasOwnProperty(key)) && key !== null) {
                                var data_id = JSONObject[key]["id"];
                                var data_value = JSONObject[key]["product_type"];

                                srim_chosen_data('product_type', data_id, data_value);                            
                            }
                        }
                    },
                    error: function (a) {
                        alert(a.responseText);
                    }, complete: function (jqXHR, textStatus) {
                    }
                });
            }

        </script>
    </body>
</html>
