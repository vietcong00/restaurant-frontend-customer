<template>
    <el-container class="login-page background-img">
        <el-form ref="ruleForm" status-icon class="demo-ruleForm">
            <div class="label-login">
                <h3><b>Đăng Nhập</b></h3>
            </div>
            <el-form-item label="Email" :error="emailError">
                <el-input v-model="email" placeholder="Type your Email">
                    <template #prefix>
                        <comp-icon :iconName="'user-icon'" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item label="Password" :error="passwordError">
                <el-input
                    v-model="form.password"
                    type="password"
                    autocomplete="off"
                    placeholder="Type your Password"
                >
                    <template #prefix> <comp-icon :iconName="'locked-icon'" /> </template
                ></el-input>
            </el-form-item>

            <el-form-item class="login-btn">
                <el-button type="primary" @click="handleSubmit()">Đăng nhập</el-button>
            </el-form-item>
        </el-form>
    </el-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CompIcon from '../components/CompIcon.vue';

@Options({
    components: {
        CompIcon,
    },
})
export default class LoginLayout extends Vue {}
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1f1f1f;
    font-size: 0.9375rem;
    background-color: #f7f7f7;
    min-height: 100%;
    overflow-x: hidden;
    &.background-img {
        background-image: url('../assets/images/auth-bg.png');
        height: 100vh;
        background-position: center;
        background-repeat: no-repeat;
    }
    .el-card {
        width: 480px;
        max-width: 90%;
    }
    .demo-ruleForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px 30px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        .label-login {
            margin-bottom: 20px;
        }
        .login-btn {
            width: 100%;
            .el-form-item__content {
                margin: 0;
            }
        }
    }
}
</style>
