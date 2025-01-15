// 一文字ずつ表示させるアニメーション
document.addEventListener('DOMContentLoaded', function() {
  const actionElement = document.querySelector('.js-mainview__action');
  setTimeout(() => {
      actionElement.style.opacity = '1';
  }, 4000); // 4秒遅れて表示
});

// 牛をゆっくり表示させる
$(document).ready(function() {
  $('.mainview__container').addClass('open');
});

// eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
          $(this).addClass("appeartext");
      } else {
          $(this).removeClass("appeartext");
      }
  });
}

// eachTextAnime2にappeartextというクラス名を付ける定義
function EachTextAnime2Control() {
  $('.eachTextAnime2').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
          $(this).addClass("appeartext");
      } else {
          $(this).removeClass("appeartext");
      }
  });
}

// eachTextAnime3にappeartextというクラス名を付ける定義
function EachTextAnime3Control() {
  $('.eachTextAnime3').each(function () {
      var elemPos = $(this).offset().top - 50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
          $(this).addClass("appeartext");
      } else {
          $(this).removeClass("appeartext");
      }
  });
}

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  // spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
          if (t !== " ") {
              if (i < 10) {
                  textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
              } else {
                  var n = i / 10;
                  textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
              }
          } else {
              textbox += t;
          }
      });
      $(this).html(textbox);
  });

  EachTextAnimeControl(); // アニメーション用の関数を呼ぶ
});

// フェードアウト後にappearクラス付与
$(window).on('load', function() {
  $(".mainview").delay(1200).fadeIn('slow'); // ロゴを1.2秒でフェードアウトする記述

  // ローディングエリアを1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $(".js-mainview__anime").delay(1500).fadeIn('slow', function() {
      $('.mainview').addClass('appear');
  });
});

// Swiperの初期化
const swiper = new Swiper(".swiper", {
  loop: true, // ループ有効
  slidesPerView: 2, // 一度に表示する枚数
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
      delay: 0, // 途切れなくループ
  },
  breakpoints: {
      767: {
          slidesPerView: 4, // スマホで2枚表示
          spaceBetween: 10,
      }
  }
});

// ページの全てのDOM要素が読み込まれて、初期化されてから実行
$(document).ready(function() {
  // アコーディオン開閉ボタンのDOMを変数に格納
  const accordionBtn = $(".accordion__head");
  // アコーディオン開閉ボタンがクリックされると、開閉ボタンの親要素（accordion__item）にactiveというcssのclassが付与される
  accordionBtn.on("click", function() {
      $(this).parent().toggleClass("active");
  });
});

// フォームの入力チェック
$(document).ready(function () {
  const $submitBtn = $('#js-submit');
  $('#form input,#form textarea').on('change', function () {
      if (
          $('#form input[type="text"]').val() !== "" &&
          $('#form input[type="email"]').val() !== "" &&
          $('#form input[type="radio"]').val() !== "" 
      ) {
          $submitBtn.prop('disabled', false);
      } else {
          $('#js-submit').prop('disabled', true);
      }
  });
});

// ドロワーメニュー
$(function () {
  // ハンバーガーメニュー
  $(".js-hamberger, .js-grawer, .js-drawer a").click(function () {
      $(this).toggleClass("is-active");
      $(".sp-nav").toggleClass("is-active");
  });
  $(".js-drawer a").click(function() {
      $(".js-hamberger").removeClass("is-active");
      $(".sp-nav").removeClass("is-active");
  });
});

// セクションの高さをウィンドウの高さに合わせる
$(document).ready(function () {
  hsize = $(window).height();
  $("section").css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $("section").css("height", hsize + "px");
});