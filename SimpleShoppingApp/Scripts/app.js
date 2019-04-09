var currentList = {};

function createShoppingList()
{
    currentList.name = $("#shoppingListName").val();
    currentList.items = new Array();

    showShoppingList();

}

function showShoppingList()
{

    $("#shoppingListTitle").html(currentList.name);
    $("#shoppingListItems").empty();

    $("#createListDiv").hide();
    $("#shoppingListDiv").show();
    $("#newItemName").focus();
    {
        $("#newItemName").keyup(function (event) {

            if (event.keyCode == 13)
            {
                addItem();
            }
        });
    };
}

function addItem()
{
    var newItem = {};
    newItem.name = $("#newItemName").val();
    currentList.items.push(newItem);
    console.log(currentList);
    showItems();
    $("#newItemName").val("");

}

function showItems()
{

    var $list = $("#shoppingListItems").empty();

    for (i = 0; i < currentList.items.length; i++)
    {

        var currentItem = currentList.items[i];
        var $li = $("<li>").html(currentItem.name).attr("id" , "item_" + i);
        var $deleteBtn = $("<button onclick='deleteItem(" + i + ")'>D</button>").appendTo($li);
        var $checkBtn = $("<button onclick='checkItem(" + i + ")'>C</button>").appendTo($li);
            
            $li.appendTo($list);

    }

}

function deleteItem(index)
{
    currentList.items.splice(index, 1);
    showItems();
}

function checkItem(index)
{
    $("#item_" + index).addClass("checked");
}

$(document).ready(function () {
    //console.info("I'm ready!");

    $("#shoppingListName").focus();
    $("#shoppingListName").keyup(function (event) {
        if (event.keyCode == 13) {
            createShoppingList();
        }
    });
});