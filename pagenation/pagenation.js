$.ajax({
    type: 'GET',
    dataType: 'json',
    url: "data.json",
    data: "info",
    success: function(data){
        pagenation(data);
        firstPage();
        makeTr(filteredAdmins);
        makeIndex(pageIndex);


        $pageIndex.find('a').on('click', function(e){
            e.preventDefault();
            var selectedIdx = $(this).text();
            console.log(selectedIdx);
            setCurrentPageinput(selectedIdx);
            makeTr(filteredAdmins);
        });

        $pageWrap.find('.prev').on('click', function(e){
            e.preventDefault();
            beforePage();
            makeTr(filteredAdmins);
        });

        $pageWrap.find('.next').on('click', function(e){
            e.preventDefault();
            nextPage();
            makeTr(filteredAdmins);
        });
    }
});

var info, infoLen, filteredAdmins, itemsPerPage, currentPage, pageIndex, lastPage;
var $tableBody = $('.table tbody');
var $pageWrap = $('.pagenation');
var $pageIndex = $('.pageIndex');

function makeTr(data){
    $tableBody.empty();
    $.each(data, function(){
        var newtr;
        newtr += "<tr>";
        newtr += "<td>"+this.id+"</td>";
        newtr += "<td>"+this.title+"</td>";
        newtr += "</tr>";

        $tableBody.append(newtr);
    });
}

function makeIndex(indexArr){
    var newIndex ="";
    for (var i = 0; i < indexArr.length; i++) {
        newIndex += "<a href='#'>"+indexArr[i]+"</a>";
    }
    $pageIndex.append(newIndex);
}

function pagenation(data){
    info = data.info;
    infoLen = data.info.length;

    filteredAdmins = [];
    itemsPerPage = 5;
    currentPage = 1;
    pageIndex = [];
    lastPage = Math.ceil(infoLen/itemsPerPage);

    for (var i = 0; i < lastPage; i++) {
        pageIndex.push(i+1);
    }
}

function figureOutAdmin(){
    var begin = (currentPage-1) * itemsPerPage;
    var end = begin + itemsPerPage;
    filteredAdmins = info.slice(begin, end); //0~4 5~9
    console.log(filteredAdmins);
    return filteredAdmins;
}


function setCurrentPageinput(input){
    currentPage = input;
    figureOutAdmin();
}


function beforePage(){
    currentPage--;
    if (currentPage<1) {
        currentPage = 1;
    }
    figureOutAdmin();
}

function nextPage(){
    currentPage++;
    if (currentPage>lastPage) {
        currentPage = lastPage;
    }
    figureOutAdmin();
}

function firstPage(){
    currentPage = 1;
    figureOutAdmin();
}
