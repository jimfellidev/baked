<template>

        
<footer class="footer">
    <ul class="footer__container">
        <li class="footer__copyright footer__item"> &copy <a id="copyright"></a> Jim Felli
        </li>
        <div class="footer__image-wrap">
        <li class="footer__app-link footer__item do-nothing"><a href="#"><img class="ig-image" src="../../images/insta1.png"></a></li>
        <li class="footer__app-link footer__item do-nothing"><a href="#"><img class="twitter-image" src="../../images/twitter.png"></a></li>
        <li class="footer__app-link footer__item do-nothing"><a href="#"><img class="fb-image" src="../../images/fb.png"></a></li>
    </div>
    </ul>
</footer>

</template>

<script>

export default {
  name: 'FooterSection',  
}
</script>

<style lang="scss" scoped>
.footer {
  display: block;
  position: relative;
  -webkit-box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.2);
          box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.2);
}

.footer__container {
  padding-top: 20px;
  padding-left: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
  list-style: none;
  margin-bottom: 0;
  padding-bottom: 11px;
}

.footer__copyright {
  padding-top: 10px;
}

@media only screen and (min-width: 430px) {
  .footer__copyright {
    padding-top: 16px;
  }
}

.footer__image-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
  width: 50%;
}

.footer__app-link {
  width: 40px;
  padding-left: 12px;
}

@media only screen and (min-width: 430px) {
  .footer__app-link {
    width: 50px;
    padding-left: 20px;
  }
}

.ig-image {
  width: 100%;
}

.fb-image {
  width: 100%;
}

.twitter-image {
  width: 100%;
}
</style>