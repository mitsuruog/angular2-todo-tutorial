# Angular2でTodoアプリを作る

これはAngular2を利用したTodoアプリを作成するワークショップ資料です。

> このハンズオンは以下のバージョンで動作するように作成されています。ご利用の際はご注意ください。

- node@5.11.1
- npm@3.8.6
- typescript@1.8.10
- angular@2.0.0-rc.4

## 作るもの

ワークショップでは簡単なTodoアプリを作成します。作成する機能は次の通りです。

- Todoの作成
- Todoの削除
- Todoのクローズ
- Todoの保存

![](/images/sample1.png)

Demo: https://angular2-todo.herokuapp.com/

フロントエンド開発の経験がある方は、下の[プロジェクト構成]と[作成手順]の内容に沿って自分の力で進めてください。
あまり経験の無い方は、[docs](/docs)に細かな手順を記載したものがありますので、見ながら進めてください。

## 凡例

- :sparkles: は、より深くAngular2について知るためのTipsを表します。
- :black_large_square: は、ターミナルなどCUIでの操作を表します。
- :pencil2: は、ソースコードの編集を表します。

## 事前準備

始める前にハンズオンのscaffold(ひな形)を準備します。

- [mitsuruog/angular2-minimum-starter: Minimum starter kit for angular2](https://github.com/mitsuruog/angular2-minimum-starter)

それでは、scaffoldをcloneして必要なモジュールをインストールします。

:black_large_square:
```
git clone --depth 1 https://github.com/mitsuruog/angular2-minimum-starter.git angular2-todo
cd angular2-todo
npm install
```

モジュールのインストールが終わったところで、実際にアプリケーションを動かしてみましょう。

:black_large_square:
```
npm start
```

この画面が表示されたら準備はOKです。

![](/images/sample2.png)

:warning: 本ワークショップでは[Bootstrap](http://getbootstrap.com/)を使って画面をデザインしています。画面を変更する際はBootstrapのドキュメントも合わせて参照してください。

- [Bootstrap · The world's most popular mobile-first and responsive front-end framework.](http://getbootstrap.com/)

## ツール

Augular2のブラウザでのデバックを容易にするため、以下のツール(Chrome extensions)を導入することを推奨します。

- [Augury - Chrome Web Store](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd?hl=en)

## プロジェクト構成

完成した場合、次のようなプロジェクト構成になる予定です。

```
app
├── common
│   └── services
│       └── logger.service.ts
├── components
│   ├── app.component.ts
│   ├── app.html
│   ├── content
│   │   ├── content.component.ts
│   │   ├── content.css
│   │   └── content.html
│   ├── footer
│   │   ├── footer.component.ts
│   │   └── footer.html
│   └── header
│       ├── header.component.ts
│       └── header.html
├── main.ts
├── models
│   └── todo.model.ts
├── services
│   └── todo.service.ts
└── system-config.js
```

## コンポーネント関連図

Angular2はComponentベースのフレームワークです。画面を作成するために幾つかのComponentを作成していきます。次に本ワークショップで作成するCompoenntとそれらと画面との関連図を示します。



## 作成手順

以下の手順に沿って作成してください。

1. [TodoModelクラスを作成する](/docs/01.md)
1. [TodoServiceクラスを作成する](/docs/02.md)
1. [Todo新規作成を作成する](/docs/03.md)
1. [Todo一覧と消化状況を表示する](/docs/04.md)
1. [Todoのクローズと削除機能を作成する](/docs/05.md)

## カスタマイズ

上記の機能が完成した場合は、お好みでカスタマイズしてみましょう。以下にカスタマイズの例を提示します。

- アニメーションを付ける
- Todoの保存先をAPIサーバーにする
- ユニットテストを書く
- ルーティングを追加する(例： ` /completed`でアクセスすると完了済みのTodoのみ表示する)
- Todoにカテゴリを追加する

など

## まとめ

簡単なTodo作り方についてワークショップにて体験しました。

さらにAnuglar2について学習したい場合は、まず本家の`tutorial`や`developer guide`を実際にやってみることをオススメします。

- [Angular Docs - ts](https://angular.io/docs/ts/latest/)

`ng-japan(日本Angularユーザーグループ)`のslackチャネルに参加することで、技術的な質問を行うことができます。また`#ng_jp`でtweetすると誰かが答えてくれるかもしれません。

- [Join ng-japan on Slack!](https://ng-japan-invite.herokuapp.com/)
