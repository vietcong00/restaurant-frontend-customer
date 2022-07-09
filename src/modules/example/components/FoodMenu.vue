<template>
    <div class="list-food">
        <food
            v-for="(food, index) in listFood"
            :key="index"
            :imgLink="food.imgLink"
            :name="food.name"
            :price="food.price"
        />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CompIcon from '../../../components/CompIcon.vue';
import Food from '../components/Food.vue';

@Options({
    name: 'product-table-component',
    components: {
        CompIcon,
        Food,
    },
    props: {
        listFood: {
            type: Array,
        },
    },
})
export default class ProductTable extends Vue {}
</script>

<style lang="scss" scoped>
.list-food {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
