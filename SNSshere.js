  // ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {

  // 共有するURLとタイトルを動的に取得
  // (encodeURIComponentは、URLに含めない文字をエンコードするために必須)
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  // 各ボタンの要素を取得
  const twitterBtn = document.getElementById('share-twitter');
  const facebookBtn = document.getElementById('share-facebook');
  const lineBtn = document.getElementById('share-line');
  const copyBtn = document.getElementById('copy-url');

  // --------------------------------
  // 各SNSの共有URLを設定
  // --------------------------------

  if (twitterBtn) {
    // X (Twitter)
    // text: ツイート本文, url: 共有URL
    twitterBtn.href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
  }

  if (facebookBtn) {
    // Facebook
    // u: 共有URL
    facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  }

  if (lineBtn) {
    // LINE
    // text: タイトル, url: 共有URL
    lineBtn.href = `https://social-plugins.line.me/lineit/share?url=${pageUrl}&text=${pageTitle}`;
  }

  // --------------------------------
  // URLコピーボタンの処理
  // --------------------------------
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      // クリップボードに現在のURLをコピー
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          // コピー成功時のフィードバック
          const originalText = copyBtn.innerHTML;
          copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> <span>コピーしました!</span>';
          copyBtn.classList.add('copied'); // CSSでスタイルを変更

          // 2秒後に元に戻す
          setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('copied');
          }, 2000);
        })
        .catch(err => {
          console.error('URLのコピーに失敗しました', err);
          alert('URLのコピーに失敗しました');
        });
    });
  }
});
