<template>
    <div class="footer">
        <div class="save">
            保存
        </div>
        <div class="release">
            发布
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
    }
    .footer .save{
        width: 160px;
        height:22px;
        background-color:#fff;
        font-size: 14px;
        color: #333;
        border: 1px solid #ddd;
        border-radius: 5px;
        line-height: 22px;
        cursor: pointer
    }
    .footer .release{
        width: 160px;
        height:22px;
        background-color: #319bd7;
        font-size: 14px;
        color: #fff;
        line-height: 22px;
        cursor: pointer;
        border-radius: 5px;
    }
</style>
