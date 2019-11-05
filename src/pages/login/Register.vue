<template>
  <div class="layout">
    <div class="n-frame">
      <div class="title-item">
        <h4 class="title_big30">注册小米帐号</h4>
      </div>

      <label class="labelbox err_label" for>
        <input v-model="valueName" type="text" name="username" placeholder="请输入用户名" />
      </label>
      <label class="labelbox err_label" for>
        <input v-model="valuePass" type="password" name="pwd" placeholder="请输入密码" />
      </label>
      <div class="fixed_bot mar_phone_dis1">
        <input class="btn332 btn_reg_1 submit-step" @click="register" type="submit" value="立即注册" />
        <div style="display:none" class="other_register_area">
          <input class="btn332 btn_reg_2 change-view" data-to="EMAIL" type="button" value="用邮箱注册" />
          <div class="facebook_area">
            <a class="btn332 btn_reg_2 box_center sns-login-facebook" href="#">
              <i class="iconfacebook"></i>使用Facebook登录
            </a>
          </div>
        </div>
        <img style="display:none;" src="/pass/ajax/tick?biz=register&amp;type=wap&amp;step=0" />
      </div>

      <div>
        <div class="privacy_box">
          <div class="msg">
            <label class="n_checked select-privacy">
              <!--<i class="icon_select"></i>-->
              已阅读并同意：小米
              <a
                href="/about/protocol/agreement"
                class="inspect_link agreement_link"
                title="用户协议"
                target="_blank"
              >用户协议</a>和
              <a
                href="/about/protocol/privacy"
                class="inspect_link privacy_link"
                title=" 隐私政策 "
                target="_blank"
              >隐私政策</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      valueName: "",
      valuePass: ""
    };
  },
  methods: {
    register() {
      let userName = this.valueName;
      let passWord = this.valuePass;
      window.console.log(userName, passWord);
      this.$http.post("/register",{
          userName: userName,
          passWord: passWord
        }).then(response => {
        const data = response.data;
        // window.console.log(data);
        if (data == "该用户已存在") {
          alert("该用户已存在");
        } else {
          alert("注册成功");
          this.$router.push({ name: "login" });
        }
      });
    }
  }
};
</script>
<style scoped lang="less">
.yout {
  width: 100%;
  margin-bottom: 10px;
}
.n-frame {
  width: 100%;
  padding: 35px 0 20px;
}
.title_big30 {
  font-size: 1.060074rem;
  font-weight: normal;
  color: #000;
}
.title-item {
  padding: 2.060074rem 0;
}
.labelbox input {
  margin: auto;
  width: 80%;
  padding: 1.060074rem 0;
  line-height: 1.060074rem;
  display: block;
  box-sizing: border-box;
  font-size: 0.954067rem;
  border: none;
  border-bottom: 0.026502rem solid #4a4a4a;
}
.btn_reg_1 {
  background-color: #ff6700;
  margin-top: 0.795056rem;
  *border: 0 none;
  color: #fff;
}
.btn332 {
  width: 80%;
  margin: 2.060074rem auto;
  line-height: normal;
  padding: 0.2rem 0;
  text-align: center;
  display: block;
  border-radius: 0.318022rem;
  font-size: 0.954067rem;
}
.msg {
  color: #9b9b9b;
  font-size: 0.636045rem;
  a {
    color: #9b9b9b;
    text-decoration: underline;
    font-weight: normal;
  }
}
</style>
