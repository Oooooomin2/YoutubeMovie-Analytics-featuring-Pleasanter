# Pleasanter-Script アシスタント

Pleasanterのスクリプト開発において、プリザンター独自の関数補完やES6以降のJavaScriptで書いた際のIE対応などに役立つかと思います。（もちろんES6以前のJavaScriptでも補完機能は利用できます！）  
あくまで個人の趣味で作ったものですので完璧ではありませんが、ぼちぼちブラッシュアップしていけたらなと思っています!(^^)!

技術キーワード  
ECMAScript/JavaScript/webpack/Babel

# 機能一覧

## スクリプトの補完機能

プリザンターで使用できる関数の補完が可能です。  
補完に対応している関数は[プリザンター公式ユーザマニュアルのスクリプト欄](https://pleasanter.net/fs/publishes/418092/index?View=%7b%22Id%22%3a1%2c%22Name%22%3a%22%u6a19%u6e96%22%2c%22ColumnFilterHash%22%3a%7b%22ClassA%22%3a%22%5b%272200%27%5d%22%7d%2c%22ColumnSorterHash%22%3a%7b%22ClassA%22%3a0%2c%22Title%22%3a0%7d%7d)にある関数が主です(もちろんJavaScriptですので、ここで表示される補完関数以外の関数を使用しても問題ありません。)

![関数補完](https://user-images.githubusercontent.com/63548353/87864280-5d45e200-c9a1-11ea-91fc-16162572b982.png)

必要なパラメータの型も見ることが出来ます。  
以下に注意点も記載します。

* あくまでJavaScriptであり、明確な型定義をされているわけではありませんので違う型の値を入力してもエラーにはなりません。
* 表示されている全てのパラメータが入力必須というわけではありません。
* 全てのパラメータではなく、使用頻度の高そうなパラメータのみ補完されるようにしております（~~全部書き出すのがめんどかった。~~ たくさん補完候補を書いても混乱するかと思いまして。）

![関数補完2](https://user-images.githubusercontent.com/63548353/87864306-9bdb9c80-c9a1-11ea-9cb3-d31b829051a4.png)

## webpack + BabelによるIE対応(IE11)のJavaScriptへの変換

本パッケージをダウンロード（クローン）後、npm run start コマンドで必要なモジュールが全てインストールされます。  
その後、npm run build, npm run release等のコマンドを使用するとdistフォルダが新しく作られ、そちらにIE対応のJavaScriptが出力されます。  

※npm run build は開発用のスクリプトへ、npm run release は本番用で圧縮されたスクリプトが表示されます。後者の方がサイズも小さいので本番に適用する際はこちらを載せるのが良いかと思います。

![packagejson](https://user-images.githubusercontent.com/63548353/87864582-e7437a00-c9a4-11ea-86f0-330175b32c79.png)

# 推奨エディタ  

おそらく大体は大丈夫かと思います。とりあえずVSCodeとVisualStudioで動くのは確認しました。

# 操作方法

1. 本パッケージをクローン、もしくはダウンロードします。
1. package.jsonのあるフォルダへ移動し、ターミナル等で「npm run start」と入力し、Enterを押します。
1. package.jsonのdevDependencies欄に色々入ったのを確認します。  
![modules](https://user-images.githubusercontent.com/63548353/87864741-178c1800-c9a7-11ea-9346-923abc677cfc.png) 

1. src配下にスクリプトを書き、ターミナル等で「npm run build」「npm run release」と実行します。
1. 新たにdistフォルダが作成され、その中に[実行したファイルと同じ名前].bundle.jsというファイルがあることを確認します。

※初期設定ではindex.jsのみしか読み込まれません。複数ファイルを使用する際はwebpack.dev.config.jsとwebpack.pro.config.jsの赤枠部分を書き換える必要がありますのでご了承ください。

![webpack](https://user-images.githubusercontent.com/63548353/87864796-08599a00-c9a8-11ea-945a-fee66f20abe6.png)