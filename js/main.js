// Search Open
var headerMenu = $('.header-menu');
var headerSearch = $('.header-action.header-search img')
var isMenuOpen = false
headerSearch.click(function(){

    if (isMenuOpen == false){
        headerMenu.addClass('hide');
        isMenuOpen = true;
    }
    else{
        headerMenu.removeClass('hide');
        isMenuOpen = false;
    }
});



// HomeTab
var homeTabItem1 = $('.hometab-item.Item1')
var homeTabItem2 = $('.hometab-item.Item2')
var homeTabItem3 = $('.hometab-item.Item3')

homeTabItem1.click(function(){
    if (homeTabItem1.hasClass('is-active')){
        return;
    }
    else{
        homeTabItem2.removeClass('is-active');
        homeTabItem3.removeClass('is-active');
        homeTabItem1.addClass('is-active');
    }
})

homeTabItem2.click(function(){
    if (homeTabItem2.hasClass('is-active')){
        return;
    }
    else{
        homeTabItem1.removeClass('is-active');
        homeTabItem3.removeClass('is-active');
        homeTabItem2.addClass('is-active');
    }
})

homeTabItem3.click(function(){
    if (homeTabItem3.hasClass('is-active')){
        return;
    }
    else{
        homeTabItem1.removeClass('is-active');
        homeTabItem2.removeClass('is-active');
        homeTabItem3.addClass('is-active');
    }
})
