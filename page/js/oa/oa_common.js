//撤销按钮 选中颜色
function select_color(itself) {
    itself.style.background = "#fff";
}

//撤销按钮 未选中颜色
function unselected_color(itself) {
    itself.style.background = "#f1f1f1";
}

//鼠标移动
$("#top_toolbar_a").mousemove(function () {
    $(".top_toolbar_inside a").css("background", "#fff");
});

// 富文本
var state = UM.getEditor('editor-state');
state.setWidth("100%");
$(".edui-body-container").css("background", "#FFF");
$(".edui-body-container").css("height", "450px");

$('select.select').select();

/*oa首页菜单切换*/
$("#upcoming").on('click', function () {
    document.getElementById("upcoming").style.borderBottom = "3px solid #cae4fff0";
    document.getElementById("form_approval").style.borderBottom = "3px solid #fff";
    document.getElementById("menu1").style.display = "block";
    document.getElementById("menu2").style.display = "none";
});

$("#form_approval").on('click', function () {
    document.getElementById("upcoming").style.borderBottom = "3px solid #fff";
    document.getElementById("form_approval").style.borderBottom = "3px solid #cae4fff0";
    document.getElementById("menu1").style.display = "none";
    document.getElementById("menu2").style.display = "block";
});

$("#tracking_items").on('click', function () {
    document.getElementById("tracking_items").style.borderBottom = "3px solid #cae4fff0";
    document.getElementById("schedule").style.borderBottom = "3px solid #fff";
    document.getElementById("menu3").style.display = "block";
    document.getElementById("menu4").style.display = "none";
});

$("#schedule").on('click', function () {
    document.getElementById("tracking_items").style.borderBottom = "3px solid #fff";
    document.getElementById("schedule").style.borderBottom = "3px solid #cae4fff0";
    document.getElementById("menu4").style.display = "block";
    document.getElementById("menu3").style.display = "none";
})


//查询条件 : 标题 重要程度 状态(待发送)
$("#condition").on("change", function () {
    var opt = $("#condition").val();
    if (opt == 1) {
        $(".matter_title").css("display", "block");
        $(".matter_importance  , .matter_status").css("display", "none");
    } else if (opt == 2) {
        $(".matter_importance").css("display", "block");
        $(".matter_title  , .matter_status").css("display", "none");
    } else if (opt == 3) {
        $(".matter_status").css("display", "block");
        $(".matter_title  , .matter_importance").css("display", "none");
    } else {
        $(".head_right_side_input").css("display", "none");
        $(".head_right_side_select").css("display", "none");
    }
});

//标题 重要程度 流程状态 (已发送 已办)
$("#condition1").on("change", function () {
    var opt = $("#condition1").val();
    if (opt == 1) {
        $(".matter_title").css("display", "block");
        $(".matter_importance  , .matter_status").css("display", "none");
    } else if (opt == 2) {
        $(".matter_importance").css("display", "block");
        $(".matter_title  , .matter_status").css("display", "none");
    } else if (opt == 3) {
        $(".matter_status").css("display", "block");
        $(".matter_title  , .matter_importance").css("display", "none");
    } else {
        $(".head_right_side_input").css("display", "none");
        $(".head_right_side_select").css("display", "none");
    }
});

//标题 重要程度 发起人 处理状态 (待办事项)
$("#condition2").on("change", function () {
    var opt = $("#condition2").val();
    if (opt == 1) {
        $(".matter_title").css("display", "block");
        $(".matter_importance  , .matter_status ,.Initiator").css("display", "none");
    } else if (opt == 2) {
        $(".matter_importance").css("display", "block");
        $(".matter_title  , .matter_status ,.Initiator").css("display", "none");
    } else if (opt == 3) {
        $(".Initiator").css("display", "block");
        $(".matter_title  , .matter_importance,.matter_status").css("display", "none");
    } else if (opt == 4) {
        $(".matter_status").css("display", "block");
        $(".matter_title  , .matter_importance,.Initiator").css("display", "none");
    } else {
        $(".head_right_side_input").css("display", "none");
        $(".head_right_side_select").css("display", "none");
    }
});

//标题 标题 重要程度 发起人(督办事项)
$("#condition3").on("change", function () {
    var opt = $("#condition3").val();
    if (opt == 1) {
        $(".matter_title").css("display", "block");
        $(".matter_importance   ,.Initiator").css("display", "none");
    } else if (opt == 2) {
        $(".matter_importance").css("display", "block");
        $(".matter_title  ,.Initiator").css("display", "none");
    } else if (opt == 3) {
        $(".Initiator").css("display", "block");
        $(".matter_title  , .matter_importance").css("display", "none");
    } else {
        $(".head_right_side_input").css("display", "none");
        $(".head_right_side_select").css("display", "none");
    }
});

/* 预定撤销 - 查询条件*/
$("#condition4").on("change", function () {
    var opt = $("#condition4").val();   //news_title    news_publisher    news_department    news_keywords    news_summary
    if (opt == 1) {
        $(".news_title").css("display", "block");
        $(".news_publisher  , .news_department ,.news_keywords,.news_summary").css("display", "none");
    } else if (opt == 2) {
        $(".news_publisher").css("display", "block");
        $(".news_title  , .news_department ,.news_keywords,.news_summary").css("display", "none");
    } else if (opt == 3) {
        $(".news_department").css("display", "block");
        $(".news_title  , .news_publisher ,.news_keywords,.news_summary").css("display", "none");
    } else if (opt == 4) {
        $(".news_keywords").css("display", "block");
        $(".news_title  , .news_publisher ,.news_department,.news_summary").css("display", "none");
    } else if (opt == 5) {
        $(".news_summary").css("display", "block");
        $(".news_title  , .news_publisher ,.news_department,.news_keywords").css("display", "none");
    } else {
        $(".head_right_side_input").css("display", "none");
        $(".head_right_side_select").css("display", "none");
    }
});

/*搜索*/
$('#conditional_search').on('click', function () {
    location.reload();
});

//标记
function flag(parameter) {
    var currentColor = $(parameter).css('color');
    var presetColor = 'rgb(255, 0, 0)';
    if (currentColor == presetColor) {
        var results = confirm("确定要删除标记吗？");
        if (results) {
            $(parameter).removeClass('flag_color');
        }
    } else {
        var result = confirm("确定要标记吗？");
        if (result) {
            $(parameter).addClass('flag_color');
        }
    }
}