<?php
header('Access-Control-Allow-Origin:*');error_reporting("E_ALL");ini_set("display_errors", 1);
header('Content-Type:application/json; charset=utf-8');
$url = isset($_GET['url']) ? $_GET['url'] : "";
$pwd = isset($_GET['pwd']) ? $_GET['pwd'] : "";
$type = isset($_GET['type']) ? $_GET['type'] : "";
include('lanzou.clsss.php');
$lz = new lanzou;
$res=$lz->getUrl($url,$pwd);
if($res['status']==0)ajaxReturn($res);
switch($type){
    case "down":
    header("Location:".$res['info']);die;
    break;
    default:
    ajaxReturn($res);
    break;
}

function ajaxReturn($array){
    $content=json_encode($array);
    if(empty($_GET['callback'])){
        echo $content;exit;
    }else{
        echo $_GET['callback']."(".$content.")";exit;
    }
}
?>