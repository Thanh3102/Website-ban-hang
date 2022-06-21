// Mở thanh tìm kiếm
var headerMenu = $('.header-menu');
var headerLogo = $('.header-logo')
var headerAction = $('.header-actions')
var headerSearch = $('.header-action.header-search img')
var searchBoxIcon = $('.header-search-box img')
var searchBox = $('.header-search-box')
var dashboardBTN = $('.dashboard-btn')
headerSearch.click(function(){
        headerMenu.hide();
        headerLogo.hide();
        headerAction.hide();
        searchBox.show();
        $('.header-inner').css('flex-direction','column')
});

searchBoxIcon.click(function(){
    headerMenu.show();
    headerLogo.show();
    headerAction.show();
    searchBox.hide();
    $('.header-inner').css('flex-direction','row')
})

dashboardBTN.click(function(){
    if ($('#dashboard').css('display') == 'none'){
        $('#dashboard').show();
        $('.dashboard-btn i').removeClass('fa-align-justify')
        $('.dashboard-btn i').addClass('fa-x')
    }
    else{
        $('#dashboard').hide();
        $('.dashboard-btn i').removeClass('fa-x')
        $('.dashboard-btn i').addClass('fa-align-justify')
    }
})




// Thay đổi home tab

var homeTabItem = $('[data-tab-name]')
var productContainer = $('.product-wrapper .container')

var homeTabChange = function(name) {
    for(let i=0; i<homeTabItem.length; i++){
        if ($(homeTabItem[i]).data("tab-name") == name){
            if ($(homeTabItem[i]).hasClass('is-active')){
                return;
            }
            else{
                $(homeTabItem[i]).addClass('is-active');
            }
        }
        else{
            if ($(homeTabItem[i]).hasClass('is-active')){
                $(homeTabItem[i]).removeClass('is-active');
            }
        }
    }
}

var openHomeTabContainer = function(name){
    for(let i=0; i<productContainer.length; i++){
        if ($(productContainer[i]).data("tab-name") == name){
            $(productContainer[i]).show();
        }
        else{
            $(productContainer[i]).hide();
        }
    }
}


homeTabItem.each(function(index) {
    $(homeTabItem[index]).click(function() {
        homeTabChange($(homeTabItem[index]).data("tab-name"));
        openHomeTabContainer($(homeTabItem[index]).data("tab-name"))
    })
})


// Thay đổi nav tab
var navTabList = $('.nav-tab-title')
var navTabItemList = $('.nav-tab-content')

var openNavTab = function(tabname){
    navTabItemList.each(function(index){
        if ($(navTabItemList[index]).data('navtab-name') == tabname){
            $(navTabItemList[index]).show();
        }
        else{
            $(navTabItemList[index]).hide();
        }

    })
}

var navTabChange = function(tabname){
    for (let i = 0; i<navTabList.length ; i++){
        if ($(navTabList[i]).data('navtab-name') == tabname){
            if ($(navTabList[i]).hasClass('is-current')){
                return;
            }
            else(
                $(navTabList[i]).addClass('is-current')
            )
            openNavTab($(navTabList[i]).data('navtab-name'))
        }
        else{
            $(navTabList[i]).removeClass('is-current')
        }
    }
}

navTabList.each(function(index){
    $(navTabList[index]).click(function(){
        navTabChange($(navTabList[index]).data('navtab-name'))
    })
})


$(window).resize(function(){
    if($(window).width() > 1080){
        $('#dashboard').hide()
        $('.dashboard-btn i').removeClass('fa-x')
        $('.dashboard-btn i').addClass('fa-align-justify')
    }
})
