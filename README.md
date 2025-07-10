# 🌈 　概要

Lenis 様のサイトを見たときから、Gsap の練習にぴったりだと思っていたので、アニメーションの練習に使っています。
参考：https://lenis.darkroom.engineering/

# 📝 メモ

- useSmoother は overflow:hidden を使うので、lenis の方が良いかもしれない

- rethink の水平スクロールは、js でコンテナの高さを水平スクロールの幅に合わせて、position:sticky で固定し、
  gsap で item の x を動かす。
  たしかにこうして pin を使わない方法だと、pin 要素の固定位置に来たときにしかアニメーションできない。
  axe の例でもこのようにできたかもしれない。

- lenis サイトは通して、pin ではなく、sticky で固定させているようだ。
  確かにパフォーマンス的に良さそうだ。
