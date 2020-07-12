<template>
    <li>{{duration}} {{getUnits}}</li>
</template>

<script>
    import {unitOfTime} from "moment";

    const moment = require('moment')

    export default {
        name: "time-diff",
        props: {
            date: String,
            units: {
                type: unitOfTime,
                default: 'days'
            }
        },
        computed: {
            duration: function () {
                let temp = new moment(this.date, 'YYYY-MM-DD');
                return moment().diff(temp, this.units)
            },
            getUnits: function () {
                switch (this.units) {
                    case 'years':
                        return '年';
                    case 'months':
                        return '月';
                    case 'days':
                        return '天'
                }
            }
        }
    }
</script>

<style scoped>

</style>
