<template>
  <div id="custom_display_4" class="n-footer">
    <div class="nf-link-area clearfix">
      <ul class="lang-select-list">
        <li>
          <a href="javascript:void(0)" data-lang="zh_CN" class="lang-select-li current">简体</a>|
        </li>
        <li>
          <a
            href="?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket&amp;_locale=zh_TW"
            data-lang="zh_TW"
            class="lang-select-li"
          >繁体</a>|
        </li>
        <li>
          <a
            href="?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&amp;sid=mi_eshopm_go&amp;_bal=true&amp;_loginSign=ticket&amp;_loginType=ticket&amp;_locale=en"
            data-lang="en"
            class="lang-select-li"
          >English</a>|
        </li>
        <li>
          <a href="https://static.account.xiaomi.com/html/faq/faqList.html" target="_blank">常见问题</a>|
        </li>
        <li>
          <a id="msg-privacy" href="/about/protocol/privacy" target="_blank">隐私政策</a>
        </li>
      </ul>
    </div>
    <p class="nf-intro" style="display: none;">
      小米公司版权所有-京ICP备10046444-
      <a
        class="beian-record-link"
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020134"
      >
        <span>
          <img
            src="https://account.xiaomi.com/static/res/9204d06/account-static/respassport/acc-2014/img/ghs.png"
          />
        </span>京公网安备11010802020134号
      </a>-京ICP证110507号
    </p>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="less">
.n-footer {
  line-height: 1.5;
  text-align: center;
  font-size: 0.14rem;
  margin-top: -0.9rem;
  height: 0.9rem;
}
.nf-link-area {
  color: #9b9b9b;
}
ol,
ul {
  list-style: none;
  font-size: 0.742052rem;
}
.nf-link-area li {
  display: inline-block;
}
.nf-link-area li a.current {
  color: #4a4a4a;
}
.nf-link-area li a {
  padding: 0 10px;
  color: #9b9b9b;
}
</style>
