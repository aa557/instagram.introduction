'use strict';

// 特徴のアニメーション
// アニメーションを監視する処理
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear");
      observer.unobserve(entry.target); // 1回だけアニメーション
    }
  });
};

const observer = new IntersectionObserver(callback, {
  threshold: 0.2 // 20%見えたら発火
});

document.querySelectorAll(".tokutyou section").forEach(target => {
  observer.observe(target);
});

// ユーザーの声のアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".yuz section");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // アニメーション開始
        obs.unobserve(entry.target); // 1回だけ
      }
    });
  }, {
    threshold: 0.8 // 80%見えたら開始
  });

  targets.forEach(target => observer.observe(target));
});

