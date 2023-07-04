<template>
    <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product, index) in productList" :key="index">
            <h3>{{ product.title }}</h3>
            <ul>
                <li v-for="(item, index) in product.list" :key="index">
                    <a :href="item.url">{{ item.name }}</a>
                    <span class="hot-tag" v-if="item.hot">HOT</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            productList:[{
                title:"手机应用类",
                list:[
                    {
                        id:1,
                        name:"实况足球",
                        url:"https://www.konami.com/efootball",
                        hot:true
                    },
                    {
                        id:2,
                        name:"绝地求生",
                        url:"https://pubg.com/zh-cn/",
                        hot:false
                    },
                    {
                        id:3,
                        name:"阴阳师",
                        url:"https://yys.163.com/baidu/",
                        hot:false
                    }
                ]
            },
            {
                title:"PC产品类",
                list:[
                    {
                        id:1,
                        name:"VSCode",
                        url:"https://code.visualstudio.com/",
                        hot:false
                    },
                    {
                        id:2,
                        name:"WebStrom",
                        url:"https://www.jetbrains.com/zh-cn/webstorm/",
                        hot:true
                    },
                    {
                        id:3,
                        name:"Postman",
                        url:"https://www.postman.com/",
                        hot:false
                    },
                    {
                        id:4,
                        name:"Dreamweaver",
                        url:"https://www.adobe.com/cn/products/dreamweaver.html",
                        hot:false
                    },
                    {
                        id:5,
                        name:"Photoshop",
                        url:"https://www.adobe.com/products/photoshop.html",
                        hot:false
                    },
                    {
                        id:6,
                        name:"Pycharm",
                        url:"https://www.jetbrains.com/pycharm/",
                        hot:false
                    }
                ]
            },
            {
                title:"音乐软件类",
                list:[
                    {
                        id:1,
                        name:"QQ音乐",
                        url:"https://y.qq.com/",
                        hot:false
                    },
                    {
                        id:2,
                        name:"酷狗音乐",
                        url:"https://www.kugou.com/",
                        hot:false
                    },
                    {
                        id:3,
                        name:"网抑云音乐",
                        url:"https://music.163.com/",
                        hot:true
                    },
                    {
                        id:4,
                        name:"Spotify音乐",
                        url:"https://www.spotify.com/",
                        hot:false
                    }
                ]
            }
        ]}
    }
}
</script>

<style scoped lang="less">

.index-left-block {
    margin: 15px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background: #ddd;
}
.index-left-block h2 {
    background: #4fc08d;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;
}
.index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
}
.index-left-block ul {
    padding: 10px 15px;
}
.index-left-block li {
    padding: 5px;
    a {
        color: rgb(161, 47, 213);
    }
}
.hot-tag {
    background: red;
    color: #fff;
}
</style>