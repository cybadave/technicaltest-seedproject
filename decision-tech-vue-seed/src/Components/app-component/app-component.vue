<template>
    <div>
        {{deals}}
    </div>
</template>

<script>
import { getBroadbandDeals } from '../../services/api';

export default {
    data: function () {
        return {
            deals: []
        }
    },
    components: {},
    created: function () {
        getBroadbandDeals().then(deals => this.deals = deals)
    }
}
</script>

<style lang="scss">

</style>