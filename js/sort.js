(function () {

    $(document).ready(function () {

        $("#file").on('click', function () {
            sort("fName");
        });
        $("#size").on('click', function () {
            sort("size");
        });
        $("#date").on('click', function () {
            sort("date");
        });

        var json_t_data = "[{\"fName\": \"archive.rar\",\"size\": 1, \"date\": \"2014-12-30T12:00:00.000Z\"}," +
            "{\"fName\": \"barchive.rar\",\"size\": 5, \"date\": \"2014-11-30T11:00:00.000Z\"}," +
            "{\"fName\": \"azrchive.rar\",\"size\": 3, \"date\": \"2014-01-30T10:00:00.000Z\"}," +
            "{\"fName\": \"garchive.rar\",\"size\": 35, \"date\": \"2014-11-30T10:15:00.000Z\"}]";

        t_data = JSON.parse(json_t_data, function (key, value) {
            if (key == 'date') {
                return new Date(value);
            }
            return value;
        });

        sort("fName");
    });


    function sortTable(data_arr, column_name, dir) {
        var rows = $('.BODY > tr').remove();

        data_arr.sort(function (a, b) {

            var A = a[column_name];
            var B = b[column_name];

            if (A < B) {
                return -1 * dir;
            }
            if (A > B) {
                return 1 * dir;
            }
            return 0;
        });

        $.each(data_arr, function (index, data_item) {
            var rows = $('.BODY');
            rows.append("\<tr\>\<td\>\<a href=\"\"\>" + data_item.fName + "\<\/a\>\<\/td\>" +
                "\<td\>" + data_item.size + "\<\/td\>" +
                "\<td\>" + data_item.date + "\<\/td\>" +
                "\<td\>\<a href=\"\"\>Delete\<\/a\>\<\/td\>\<\/tr\>");
        });

    };

    var directionFlag = 1;
    var lastSort = "fName";

    function getDirection(currentSort){
        if(currentSort === lastSort) {
            directionFlag*= -1;
            return -directionFlag;
        }
        lastSort = currentSort;
        return directionFlag = 1;
    }

    function sort(column_name) {
        var direction = getDirection(column_name);
        sortTable(t_data, column_name, direction);
    };


})();
