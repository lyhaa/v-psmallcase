
  <template>
  <div>
    <div class="login-wrap">
      <div class="logo">
        <img src="./img/logo.png" style="width:2.544179rem;height:2.544179rem" alt />
        <h3>小米账号登录</h3>
      </div>
    </div>
    <div>
      <div class="lgn_inputbg c_b login-panel pwdLogin">
        <!--验证用户名-->
        <div class="single_imgarea" id="account-info">
          <div class="na-img-area" id="account-avator">
            <div class="na-img-bg-area" id="account-avator-con"></div>
          </div>
          <p class="us_name tac" id="account-displayname"></p>
          <p class="us_id tac"></p>
        </div>
        <label id="region-code" class="labelbox login_user c_b disable" for>
          <div class="turn_area">
            <a class="btn_turn" id="manual_code" href="javascript:void(0);" title="关闭国家码"></a>
          </div>
          <div class="country_list">
            <div class="animation countrycode_selector" id="countrycode_selector">
              <span class="country_code">
                <tt style="display:none;" class="countrycode-value" id="countrycode_value">+86</tt>
                <i class="icon_arrow_down"></i>
              </span>
            </div>
          </div>
          <!-- 账户名 -->
          <input
            class="item_account"
            ref="input1"
            v-model="valueName"
            autocomplete="off"
            :type="ti?'number':'text'"
            name="user"
            :placeholder="ti?k.name1:k.name2"
            _type="text"
          />
          <!-- 清除内容的标签 -->
          <div id="btn-clear-link" class="clear_link_panel">
            <span v-show="valueName.length>=1" @click="clear" class="clear_link">x</span>
          </div>
        </label>
        <div class="country-container" id="countrycode_container">
          <div class="country_container_con" id="countrycode_container_con"></div>
        </div>
        <label class="labelbox pwd_panel c_b">
          <!-- 密码选项框 -->
          <input
            class="item_account"
            :type="ti?'number':'password'"
            :placeholder="ti?i.name1:i.name2"
            v-model="valuePass"
            autocomplete="off"
            name="password"
            _type="password"
          />

          <!-- 验证码显示隐藏 -->
          <div id="sms-code-panel" class="code_panel">
            <a v-show="ti" class="send_ticket" href="javascript:;" id="getSMSCode">获取验证码</a>
          </div>

          <!-- 提示信息窗口 -->
          <div class="Tips">
            <em class="icon_error"></em>
            <span class="error-con" v-text="link"></span>
          </div>
          <!-- 登录按钮 -->
          <div class="btns_bg">
            <input @click="login" class="btnadpt" id="login-button" type="submit" value="登录" />
          </div>
          <!-- 切换登录方式按钮 -->

          <div class="other_panel clearfix">
            <span id="custom_display_256" class="sms_link">
              <!-- 添加点击事件切换 不同登录界面-->
              <!-- 添加一个布尔值，判断状态显示 -->
              <!-- tel()方法，切换时清除掉原来的值 -->
              <a
                @click="ti = !ti;del()"
                href="#"
                class="btnadpt btn_gray login_type_link"
                id="ChangeLoginType"
              >手机短信登录/注册</a>
            </span>

            <div class="reverse">
              <div class="n_links_area" id="custom_display_64" style>
                <!-- 跳转到注册页面 -->
                <router-link :to="{name:'register'}">立即注册</router-link>
                <span>|</span>
                <a class="outer-link" href="#">忘记密码？</a>
              </div>
            </div>

            <!-- 其他登录方式 s -->
            <div
              style="display: block;"
              class="other_login_type sns-login-container"
              id="custom_display_16"
            >
              <fieldset class="oth_type_tit">
                <legend align="center" class="oth_type_txt">其他方式登录</legend>
              </fieldset>
              <div id="sns-login-links" class="oth_type_links">
                <a
                  class="icon_type btn_qq sns-login-link"
                  data-type="qq"
                  href="#"
                  title="QQ登录"
                  target="_blank"
                >
                  <i class="btn_sns_icontype icon_default_qq"></i>
                </a>
                <a
                  class="icon_type btn_weibo sns-login-link"
                  data-type="weibo"
                  href="#"
                  title="微博登录"
                  target="_blank"
                >
                  <i class="btn_sns_icontype icon_default_weibo"></i>
                </a>
                <a
                  class="icon_type btn_alipay sns-login-link"
                  data-type="alipay"
                  href="#"
                  title="支付宝登录"
                  target="_blank"
                >
                  <i class="btn_sns_icontype icon_default_alipay"></i>
                </a>
                <a
                  class="icon_type btn_weixin sns-login-link"
                  data-type="weixin"
                  href="#"
                  title="微信登录"
                  target="_blank"
                >
                  <i class="btn_sns_icontype icon_default_weixin"></i>
                </a>
              </div>
            </div>
            <!-- 其他登录方式 e -->
            <p class="acq_tips" style="display: none;"></p>
          </div>
        </label>
      </div>
    </div>
    <!-- 注册组件 -->
    <!-- <Register /> -->
    <!-- 底部组件 -->
    <Asiders />
  </div>
</template>

<script>
import Asiders from "./Aside";
export default {
  data() {
    return {
      isplay: true,
      ti: true,
      link: "",
      valueName: "",
      valuePass: "",
      i: { name1: "短信验证码", name2: "密码" },
      k: { name1: "手机号码", name2: "邮箱/手机号码/小米ID" }
    };
  },
  components: {
    Asiders
    // Register
  },
  methods: {
    clear() {
      this.valueName = "";
      this.valuePass = "";
    },
    del() {
      this.valueName = "";
      this.valuePass = "";
    },
    login() {
      // axios请求
      let req = user => {
        // 拿到用户名和密码，发送请求到服务器拿数据
        this.$http.post("/user",{
          ...user
        }).then(response => {
          const data = response.Whether;
          const uname = response.d;
          if (this.ti) {
            switch (data) {
              case "该用户未注册":
                this.link = "该手机号码未注册";
                break;
              case "密码不正确":
                this.link = "验证码不正确";
                break;
            }
          } else {
            switch (data) {
              case "该用户未注册":
                this.link = "该用户未注册";
                break;
              case "密码不正确":
                this.link = "密码不正确";
                break;
            }
          }
          // 状态码成功，跳转路由
          if (data == "登陆成功") {
            this.Cookies.set("userpass", uname, { expires: 7 });
            this.$router.push({ path: "/" });
          }
          return data;
          // }
        });
      };

      let userName = this.valueName;
      let passWord = this.valuePass;

      let user = {
        userName: this.valueName,
        passWord: this.valuePass
      };
      // window.console.log(user);
      // 如果 "ti" 为true 则进行手机匹配
      if (this.ti) {
        var reg = /^1[3456789]\d{9}$/;
        if (!reg.test(userName)) {
          this.link = "请输入正确的手机号码";
        } else {
          if (passWord.length == 0) {
            this.link = "请输入验证码";
          } else {
            req(user);
            // window.console.log(w);
          }
        }
      } else {
        if (userName.length == 0) {
          this.link = "请输入账号";
        } else if (passWord.length == 0) {
          this.link = "请输入密码";
        } else {
          req(user);
        }
      }
    }
    // 测试函数
  },
  watch: {
    valueName() {
      if (this.valueName.length > 0) {
        this.link = "";
      } else {
        this.link = "";
      }
    },
    valuePass() {
      if (this.valuePass.length > 0) {
        this.link = "";
      }
    }
  }
};
</script>
<style scoped lang="less">
a {
  text-decoration: none;
}

.logo {
  padding-top: 2.650186rem;
  padding-bottom: 0.530037rem;
  h3 {
    padding-top: 0.795056rem;
    font-size: 0.954067rem;
  }
}
.login-wrap {
  text-align: center;
}
.item_account {
  text-align: left;
  display: block;
  width: 80%;
  line-height: 2.120149rem;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: none;
  border-bottom: 1px solid #dadada;
  box-sizing: border-box;
  font-size: 0.84806rem;
}
.btns_bg {
  padding-top: 1.272089rem;
  .btnadpt {
    width: 80%;
    padding: 0.530037rem 0;
    display: block;
    margin-bottom: 0.742052rem;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    border-radius: 0.318022rem;
    overflow: hidden;
    background-color: #ff6700;
    margin: auto;
  }
}

// 登录注册按钮
.btn_gray {
  background: #fff;
  margin-top: 0.530037rem;
  border: 1px solid #d3d3d3;
  color: #000;
}
.btnadpt {
  width: 80%;
  padding: 0.50186rem 0;
  display: block;
  margin: 1.272089rem auto;
  margin-bottom: 14px;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.318022rem;
}
.reverse .n_links_area a {
  padding: 0 9px;
  font-size: 0.84806rem;
  color: #9b9b9b;
}
// 其他登录方式
.other_login_type {
  width: 80%;
  margin: auto;
  padding-top: 40px;
  text-align: center;
}
.oth_type_tit {
  border: none;
  padding-top: 0.530037rem;
}
.oth_type_txt {
  font-size: 0.636045rem;
  color: #b0b0b0;
  width: 4.240298rem;
}
.btn_sns_icontype {
  background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png)
    no-repeat;
  display: block;
  width: 18px;
  height: 18px;
  margin: 5px auto 0;
}
// 获取验证码标签设置
#sms-code-panel {
  width: 20%;
  height: 0.053004rem;
  position: relative;
  right: -14.148432rem;
  top: -1.961138rem;
  font-size: 0.742052rem;
  a {
    color: #2ea5e5;
  }
}
// 账号输入切换

// 清除图标样式设置
#btn-clear-link .clear_link {
  color: #fff;
  display: block;
  position: absolute;
  right: 2.332164rem;
  top: 8.26858rem;
  width: 0.9rem;
  height: 0.9rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  // padding: 2px;
}
// 提示信息框
.Tips {
  // display: none;
  width: 80%;
  height: 0.730037rem;
}
.error-con {
  font-size: 0.742052rem;
  float: left;
  text-align: left;
  padding-left: 2.120149rem;
  color: #f66;
}
</style>
