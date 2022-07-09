<template>
    <div class="main-container-layout">
        <header class="header">
            <div class="container-layout">
                <div class="logo-img">
                    <a href="#"
                        ><img
                            width="50"
                            src="../../../assets/images/Logo1.jpg"
                            alt="Ảnh Logo"
                    /></a>
                </div>
                <button class="nav-toggler">
                    <span></span>
                </button>
                <!-- <nav class="nav">
            <ul>
              <li class="nav-item"><a href="#Home">Home</a></li>
              <li class="nav-item"><a href="#About">About</a></li>
              <li class="nav-item"><a href="#Menu">Menu</a></li>
              <li class="nav-item"><a href="#Testimonial">Testimonial</a></li>
              <li class="nav-item"><a href="#Team">Team</a></li>
              <li class="nav-item"><a href="#Booking">Booking</a></li>
              <li class="nav-item"><a href="#Contact">Contact</a></li>
            </ul>
          </nav> -->
            </div>
        </header>
        <!--Header - end-->
        <section class="home-section" id="home">
            <div class="home-section-bg"></div>
            <div class="container-layout">
                <div class="row-layout min-h-100">
                    <div class="home-text">
                        <h1>Nhà hàng GR2</h1>
                        <p>Lưu luyến trong từng hương vị</p>
                        <a href="#our-menu" class="button">Menu</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Home Section begin -->
        <!-- About-Section-begin -->
        <section class="about-section section-padding" id="about">
            <div class="container-layout">
                <div class="row-layout">
                    <div class="section-title">
                        <h2 data-title="our story">about us</h2>
                    </div>
                </div>
                <div class="row-layout">
                    <div class="about-text">
                        <h3>Chào mừng các bạn đến với GR2</h3>
                        <p>
                            Một nhà hàng nổi tiếng với những món ăn tuyệt vời, gắn liền
                            với tên tuổi của những đầu bếp nổi tiếng nhất Việt Nam!
                        </p>
                        <p>
                            Chúng tôi cam kết mang đến cho khách hàng sự trải nghiệm hài
                            lòng bởi dịch vụ hiện đai, món ăn tươi ngon, và bằng chính sự
                            chuyên nghiệp của chúng tôi.
                        </p>
                        <a href="#our-menu" class="button">Xem menu</a>
                    </div>
                    <div class="about-img">
                        <div class="img-box">
                            <h2>10 + Year Experence</h2>
                            <img src="../../../assets/images/about.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About-Section-end -->
        <!-- Menu-Section-begin -->
        <section class="menu-section section-padding" id="Menu">
            <div class="container-layout">
                <div class="row-layout">
                    <div class="section-title">
                        <h2 data-title="order now">our menu</h2>
                    </div>
                </div>
                <div class="row-layout">
                    <div class="menu-taps">
                        <button
                            type="button"
                            class="menu-tap-item active"
                            data-target="#Lunch"
                        >
                            Lunch
                        </button>
                        <button type="button" class="menu-tap-item" data-target="#Dinner">
                            Dinner
                        </button>
                        <button type="button" class="menu-tap-item" data-target="#Drinks">
                            Drinks
                        </button>
                        <button
                            type="button"
                            class="menu-tap-item"
                            data-target="#Desserts"
                        >
                            Desserts
                        </button>
                    </div>
                </div>
                <div class="row-layout menu-tap-content active" id="Lunch">
                    <food-menu :listFood="getFoods" />
                </div>
                <div class="row-layout menu-tap-content" id="Dinner">
                    <food-menu :listFood="getFoods" />
                </div>
                <div class="row-layout menu-tap-content" id="Drinks">
                    <food-menu :listFood="getFoods" />
                </div>
                <div class="row-layout menu-tap-content" id="Desserts"></div>
            </div>
        </section>
        <!-- Menu-Section-end -->
        <!-- Testimonis-Section -->
        <section class="testimony section-padding" id="Testimonial">
            <div class="container-layout">
                <div class="row-layout">
                    <div class="section-title">
                        <h2 data-title="testimony">Some Feedback</h2>
                    </div>
                </div>
                <div class="row-layout">
                    <div class="testimony-item">
                        <div class="testimony-author">
                            <div class="testimony-name">
                                <h3>Chi Pu</h3>
                                <span>Ca sĩ</span>
                            </div>
                            <div class="testimony-img">
                                <img src="../../../assets/images/Test1.jpg" alt="" />
                            </div>
                        </div>
                        <p>
                            Một trong những nhà hàng ngon nhất tôi từng đến và thưởng
                            thức. Hương vị của từng món ăn rất đậm đà, lưu luyến.
                        </p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="testimony-item">
                        <div class="testimony-author">
                            <div class="testimony-name">
                                <h3>Trấn Thành</h3>
                                <span>MC</span>
                            </div>
                            <div class="testimony-img">
                                <img src="../../../assets/images/Test2.jpg" alt="" />
                            </div>
                        </div>
                        <p>
                            Một trong những nhà hàng ngon nhất tôi từng đến và thưởng
                            thức. Hương vị của từng món ăn rất đậm đà, lưu luyến.
                        </p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <div class="testimony-item">
                        <div class="testimony-author">
                            <div class="testimony-name">
                                <h3>Đen Vâu</h3>
                                <span>Rapper</span>
                            </div>
                            <div class="testimony-img">
                                <img src="../../../assets/images/Test3.jpg" alt="" />
                            </div>
                        </div>
                        <p>
                            Một trong những nhà hàng ngon nhất tôi từng đến và thưởng
                            thức. Hương vị của từng món ăn rất đậm đà, lưu luyến.
                        </p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Team Section begin -->
        <section class="team-section section-padding" id="Team">
            <div class="container-layout">
                <div class="row-layout">
                    <div class="section-title">
                        <h2 data-title="team">Our Chefs</h2>
                    </div>
                </div>
                <div class="row-layout">
                    <div class="team-item">
                        <img src="../../../assets/images/team1.jpg" alt="" />
                        <div class="team-item-info">
                            <h3>Nguyễn Văn Nhẽ</h3>
                            <p>Bếp trưởng</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <img src="../../../assets/images/team2.jpg" alt="" />
                        <div class="team-item-info">
                            <h3>Phạm Thị Duyên</h3>
                            <p>Bếp phó</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <img src="../../../assets/images/team3.jpg" alt="" />
                        <div class="team-item-info">
                            <h3>Nguyễn Tiến Tùng</h3>
                            <p>Đầu bếp</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="testimony section-padding" id="Order">
            <div class="container-layout">
                <div class="row-layout">
                    <div class="section-title">
                        <h2 data-title="Đặt bàn">Booking</h2>
                    </div>

                    <el-form
                        ref="ruleFormRef"
                        :model="ruleForm"
                        :rules="rules"
                        label-width="120px"
                        class="rule-form-booking"
                        :size="formSize"
                    >
                        <label for="name">Họ và tên</label>
                        <el-form-item>
                            <el-input
                                v-model="form.nameCustomer"
                                placeholder="Type your Name"
                                :error="form.errors.nameCustomer"
                            >
                                <template #prefix>
                                    <comp-icon :iconName="'user-icon'" />
                                </template>
                            </el-input>
                        </el-form-item>
                        <label for="phone">Số điện thoại</label>

                        <el-form-item>
                            <el-input
                                v-model="form.phone"
                                placeholder="Type your Phone"
                                type="number"
                                :error="form.errors.phone"
                            >
                                <template #prefix>
                                    <comp-icon :iconName="'user-icon'" />
                                </template>
                            </el-input>
                        </el-form-item>

                        <label for="typeTable">Số lượng người</label>
                        <el-form-item>
                            <el-select
                                v-model="form.numberPeople"
                                placeholder="Select"
                                size="large"
                                :error="form.errors.numberPeople"
                                @change="changePeople"
                            >
                                <el-option
                                    v-for="item in numberPeople"
                                    :key="item.number"
                                    :label="item.name"
                                    :value="item.number"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <label for="typeTable">Thời gian dự kiến</label>
                        <el-form-item>
                            <div class="demo-datetime-picker">
                                <el-date-picker
                                    v-model="form.arrivalTime"
                                    type="datetime"
                                    :format="'YYYY-MM-DD HH:mm'"
                                    :value-format="'YYYY-MM-DD HH:mm'"
                                    :disabled-date="disabledDate"
                                    placeholder="Select date and time"
                                    @change="checkTime"
                                    :error="form.errors.arrivalTime"
                                >
                                </el-date-picker>
                            </div>
                        </el-form-item>
                    </el-form>

                    <div class="section-title" @click="sendBooking">
                        <div class="button">Đặt bàn</div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-section -->
        <section class="footer-section" id="Contact">
            <div class="container-layout">
                <div class="row-layout">
                    <div class="footer-item">
                        <h3>Địa chỉ</h3>
                        <p>
                            Số 1, Đại Cồ Việt <br />
                            Hai Bà Trưng, Hà Nội
                        </p>
                    </div>
                    <div class="footer-item">
                        <h3>Giờ mở cửa</h3>
                        <p>
                            09:30-23:00 <br />
                            Các ngày trong tuần
                        </p>
                    </div>
                    <div class="footer-item">
                        <h3>Liện hệ</h3>
                        <p>
                            Phone: 0377980440 <br />
                            Email: UyenGR2@gmail.com
                        </p>
                        <div class="social-item">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div class="row-layout">
                    <div class="copyright">
                        <p>©20211. Project GR2</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component';
import { productStore } from '../store';
import { IFood } from '../types';
import { NUMBER_PEOPLE } from '../constants';
import CompIcon from '../../../components/CompIcon.vue';
import { initData } from '../form';

import FoodMenu from '../components/FoodMenu.vue';
import { ElMessageBox } from 'element-plus';

@Options({
    name: 'home-page-component',
    components: {
        CompIcon,
        FoodMenu,
    },
})
export default class HomePage extends Vue {
    numberPeople = NUMBER_PEOPLE;
    nameCustomer = '';

    get getFoods(): Array<IFood> {
        return productStore.foodList;
    }

    get getNumberPeople(): number {
        return productStore.numberPeople;
    }

    changePeople(number: number): void {
        productStore.setNumberPeople(number);
    }

    checkTime(): boolean {
        const now = new Date();
        if (now.getTime() > Date.parse(this.form.arrivalTime as string)) {
            ElMessageBox.alert('Vui lòng chọn thời gian trong tương lai!', 'Chú ý', {
                confirmButtonText: 'OK',
                callback: () => {
                    this.form.arrivalTime = '';
                },
            });
            return false;
        } else {
            return true;
        }
    }

    form = setup(() => initData());

    async sendBooking(): Promise<void> {
        await this.form.onSubmit();
    }

    created(): void {
        productStore.getCategories('');
        productStore.getFoods();
    }

    disabledDate(time: Date): boolean {
        return time.getTime() < Date.now();
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,700;1,100;1,200;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,700;1,100;1,200;1,400&display=swap');
@import '../../../assets/styles/style.css';

.header {
    .container-layout {
        display: flex;
        flex-direction: row-layout;
        justify-content: space-between;
        align-items: center;
    }
}

.info-section {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0 auto;
    margin-bottom: 20px;
}

.rule-form-booking {
    margin: 0 auto;
}

.demo-datetime-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}
.demo-datetime-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color-base);
    flex: 1;
}
.demo-datetime-picker .block:last-child {
    border-right: none;
}
.demo-datetime-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>
