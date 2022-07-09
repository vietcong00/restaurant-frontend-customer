<template>
    <div class="food-item">
        <div class="menu-item-title">
            <img
                style="width: 100px"
                :src="require(`../../../assets/images/${imgLink}`)"
                alt=""
            />
            <h3>{{ name }}</h3>
        </div>
        <div class="menu-item-price">{{ price }}</div>
    </div>
</template>

<script>
export default {
    name: 'food',
    props: {
        imgLink: {
            type: String,
        },
        name: {
            type: String,
        },
        price: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.food-item:hover .menu-item-price {
    color: var(--white);
}

.food-item {
    width: 46%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 2%;
    .menu-item-title {
        display: flex;
        align-items: center;
        img {
            max-width: 100x;
            margin-right: 15px;
        }
        h3 {
            font-size: 16px;
            transition: all 0.5s ease;
            text-transform: capitalize;
        }
    }

    .menu-item-price {
        font-size: 16px;
        color: var(--main-color);
        transition: all 0.5s ease;
    }
}
</style>
