<template>
    <div class="open">
        <div class="sales-board">
            <div class="sales-board-intro">
                <h2>流量分析</h2>
                <p>
                    是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，
                    从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，
                    从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新
                    制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的
                    角度来考虑的
                </p>
            </div>
            <div class="sales-board-form">
                <div class="sales-board-line-left">购买数量:</div>
                <div class="sales-board-line-right">
                    <Counter :counterObj="counterObj" />
                </div>
            </div>
            <div class="sales-board-form">
                <div class="sales-board-line-left">产品类型:</div>
                <div class="sales-board-line-right">
                    <Types :selecterData="selecterData"/>
                </div>
            </div>
            <div class="sales-board-form">
                <div class="sales-board-line-left">有效时间:</div>
                <div class="sales-board-line-right">
                    <Timer :timerData="timerData"/>
                </div>
            </div>
        </div>

        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>
                网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。
            </p>

            <h3>用户行为指标</h3>
            <ul>
                <li>
                    用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：
                </li>
                <li>用户在网站的停留时间；</li>
                <li>用户来源网站（也叫“引导网站”）；</li>
                <li>用户所使用的搜索引擎及其关键词；</li>
                <li>在不同时段的用户访问量情况等。</li>
            </ul>

            <h3>浏览网站方式</h3>
            <ul>
                <li>用户上网设备类型</li>
                <li>用户浏览器的名称和版本</li>
                <li>访问者电脑分辨率显示模式</li>
                <li>用户所使用的操作系统名称和版本</li>
                <li>用户所在地理区域分布状况等</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Counter from "@/components/HomePage/counter";
import Types from "@/components/HomePage/types";
import Timer from "@/components/HomePage/timer";

export default {
    data() {
        return {
            counterObj: {
                min: 1,
                max: 20,
            },
            selecterData: [
                {
                    value: "经典性",
                    id: 1,
                },
                {
                    value: "豪华型",
                    id: 2,
                },
                {
                    value: "至尊豪华型",
                    id: 3,
                },
            ],
            timerData: [
                {
                    value: "一个月",
                    id: 1,
                },
                {
                    value: "三个月",
                    id: 3,
                },
                {
                    value: "六个月",
                    id: 6,
                },
                {
                    value: "一年",
                    id: 12,
                },
            ],
        };
    },
    components: {
        Counter,
        Types,
        Timer,
    },
};
</script>

<style scoped>
.open {
    text-align: left;
}
.buy-dialog-title {
    font-size: 16px;
    font-weight: bold;
}
.buy-dialog-btn {
    margin-top: 20px;
}
.buy-dialog-table {
    width: 100%;
    margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
    border: 1px solid #e3e3e3;
    text-align: center;
    padding: 5px 0;
}
.buy-dialog-table th {
    background: #4fc08d;
    color: #fff;
    border: 1px solid #4fc08d;
}

.button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
}
</style>