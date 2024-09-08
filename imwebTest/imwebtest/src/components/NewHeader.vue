<template lang="">
<div class="header-category">
        <img class="scroll_logo" src="https://cdn.imweb.me/thumbnail/20240906/e8273ec82a563.png" alt="새움소프트">
        <ul class="viewport-nav">
            <li class="dropdown" id="dropdown_features">
                <a href="/#doz_body" class="dropdown-toggle">핵심 기능</a>
            </li>
            <li class="dropdown" id="dropdown_competition">
                <a href="/#doz_menu_edge" class="dropdown-toggle">경쟁력</a>
            </li>
            <li class="dropdown" id="dropdown_applications">
                <a href="/#doz_menu_applications" class="dropdown-toggle">활용 영역</a>
            </li>
            <li class="dropdown" id="dropdown_deployment">
                <a href="/#doz_menu_deployment" class="dropdown-toggle">도입 방법</a>
            </li>
            <li class="dropdown" id="dropdown_contact">
                <a href="/#doz_menu_contact" class="dropdown-toggle">문의하기</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        
    }
}
</script>
<style>
    
        .header-category {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background-color: #f8f8f8;
}

        .scroll_logo {
            width: 116px;
            height: auto;
        }
        .viewport-nav {
            list-style: none;
            display: flex;
            gap: 20px;
        }
        .viewport-nav li {
            position: relative;
        }
        .dropdown-toggle {
            font-size: 12px;
            text-decoration: none;
            color: #333;
            padding: 10px;
            transition: color 0.3s;
        }
        .dropdown-toggle:hover {
            color: #007BFF;
        }
</style>