# Youtube分析アプリ featuring-Pleasanter

本アプリは国産OSSのWebデータベースであるPleasanterを用いてYoutubeの動画を解析するアプリです。  
![分析レコード2](https://user-images.githubusercontent.com/63548353/102189549-26490d80-3efa-11eb-8a27-65bf4a3fdc69.png)

## 本アプリで出来ること

・対象Youtubeチャンネルの再生回数の多い順に動画を表示する（5つ）  
・対象YoutubeチャンネルのGoodの多い順に動画を表示する（5つ）  
・対象Youtubeチャンネルの動画投稿が新しい順に表示する（5つ）  

## 本アプリの前提条件

・国産OSSのWebデータべースであるPleasanterが利用可能であること。  
https://pleasanter.net/fs/publishes/420234/edit  

## 環境構築手順
本手順はVisual Studio Codeを使用します。  

1. ソースコードをクローンします。  
1. YoutubeMovie-Analytics-featuring-Pleasanter/src/data.jsonを開き、YoutubeAPIのAPIKeyを入力します。  
1. トップフォルダに戻り、VisualStudioCodeのターミナルにて「npm run release」と打ち、コンパイルを行います。
1. Pleasanterのトップ画面を開きます。  
1. サイトパッケージのインポート機能を用い、本アプリのsitepackage\Youtube分析アプリ.jsonをインポートします。  
![インポート後](https://user-images.githubusercontent.com/63548353/102185623-b1270980-3ef4-11eb-80d9-9f70700a1d3d.png)

1. フォルダの中身は以下のようになっています。  
![フォルダの中身](https://user-images.githubusercontent.com/63548353/102185784-ef242d80-3ef4-11eb-8921-d421c1547048.png)  

1. 投稿者マスタテーブルにてレコードを新規作成します。下記の赤枠の2項目「投稿者名」「チャンネルId」をそれぞれ入力してください。  
![項目の説明](https://user-images.githubusercontent.com/63548353/102186061-69ed4880-3ef5-11eb-8b75-2fb265c74796.png)   
チャンネルIdは各YoutubeチャンネルのURL(https://www.youtube.com/channel/xxxxxxx)のxxxxxxx部分です。 

1. 動画分析テーブルを開き「管理」>「テーブルの管理」を開き、スクリプトタブを開きます。
そこで「新規作成」ボタンをクリックし、任意のタイトルを入力後に3にて作成されたdistフォルダ内のindex.bundle.jsの中身をスクリプト項目に入れて「変更」ボタンをクリックします。  
1. 画面下の「更新」ボタンをクリックします。

1. 投稿者マスタテーブルにてレコードを作成後に動画分析テーブルにてレコードを作成します。  
![分析レコード](https://user-images.githubusercontent.com/63548353/102187692-aa4dc600-3ef7-11eb-9f13-279e5276586e.png)  

1. レコード作成後、以下のような画面に切り替わります。  
![分析レコード2](https://user-images.githubusercontent.com/63548353/102189549-26490d80-3efa-11eb-8a27-65bf4a3fdc69.png)  

## 制約

・動画は5つ固定表示となっております。  
・カテゴリは「再生回数順」「Good順」「投稿日時順」の3パターンのみです。  
