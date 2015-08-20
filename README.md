# Angular2でTodoアプリを作る

これはAngular2を利用したTodoアプリを作成するハンズオン資料です。

  > angular2がまだalphaバージョンであるため、本内容が常に正しいとは限りません。ご利用の際はご注意ください。

利用する主なライブラリのバージョンは次の通りです。

- Node.js@0.12.9
- typescript@^1.5.0-beta
- angular@2.0.0-alpha.28

## 作るもの

簡単なTodoアプリを作成します。機能は次の通りです。

- Todoの作成
- Todoの削除
- Todoのクローズ
- Todoの保存

![](/images/sample1.png)

## 事前準備

次の`5 min quickstart`でも行いますが、利用するNode.jsモジュールを事前準備します。

Todoアプリを作成するルートディレクトリを作成して、直下で次のコマンドを実行します。

```
# TypeScriptで利用するパッケージマネージャ(tsd)をインストール
npm install -g tsd@^0.6.0
# 必要なライブラリをダウンロード
tsd install angular2 es6-promise rx rx-lite

# TypeScript compilerをインストール
npm install -g typescript@^1.5.0-beta
```

次に開発用Webサーバーを準備します。
(既になんらかの手段を持っている場合は不要です。)

```
npm install -g http-server

# 開発用Webサーバー起動
# -p でポートが指定できます。 ex) -p 9000
http-server
```

## (公式)5 min quickstart

公式の`5 min quickstart`を元に、まず`Hello world`を作成していきます。
(※)事前準備が終わっている方は「3. Import Angular」からで進めてください。

[5 Min Quickstart - js](https://angular.io/docs/js/latest/quickstart.html)

作成した内容は次のようになります。
(コンポーネント名は`MyAppComponent` -> `TodoApp`にしています。)

**app.ts**

```ts
/// <reference path="typings/angular2/angular2.d.ts" />

// モジュールインポート
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotationセクション
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})

// Componentコントローラ
class TodoApp {
  name: string;
  constructor() {
    this.name = 'Alice';
  }
}

// 開始
bootstrap(TodoApp);
```

**index.html**

```html
<html>
  <head>
    <title>Angular 2 Quickstart</title>
    <script src="https://github.jspm.io/jmcriffey/bower-traceur-runtime@0.0.87/traceur-runtime.js"></script>
    <script src="https://jspm.io/system@0.16.js"></script>
    <script src="https://code.angularjs.org/2.0.0-alpha.28/angular2.dev.js"></script>
  </head>
  <body>
    <!-- The app component created in app.ts -->
    <my-app></my-app>
    <script>System.import('app');</script>
  </body>
</html>
```

ローカルサーバーを立ち上げて、ブラウザでURLを表示すると次のような画面が表示されます。

<http://localhost:8080>

![](/images/sample2.png)

## Todoアプリの作成

では`5 min quickstart`で作成したアプリをベースに、Todoアプリを作成していきます。

### Todoコンポーネントの作成

Todo機能を`コンポーネント`として切り出します。新しく`todo.html`を作成してください。

**todo.html**

```html
<section>

  <header>
    <h1>Todos</h1>
    <!-- ここにTodo追加INPUTが入ります -->
  </header>

  <div>
    <!-- ここにTodo一覧が表示されます -->
  </div>

  <footer>
    <!-- ここにTodo完了状況が表示されます -->
  </footer>

</section>

<footer>
  Created by あなたの名前とか
</footer>
```

コンポーネントのテンプレートを変更します。
**app.ts**
```ts
@View({
　// template: '<h1>Hello world</h1>'
  templateUrl: 'todo.html'
})
```

### Todo作成機能の実装

新しいTodoを入力するフィールドを作成し、追加ボタンを押したタイミングで登録します。

**todo.html**

```html
<header>
  <h1>Todos</h1>
  <!-- ここにTodo追加INPUTが入ります -->
  新しいTodo：<input #new-todo>
  <button (click)="enterTodo(newTodo)">追加</button>
</header>
```

- `#new-todo`：テンプレート内で利用するローカル変数です。Componentコントローラでは`newTodo`で受け取ります。
- `(click)`：イベントハンドラ`onClick`のことです。Componentコントローラの`enterTodo`が呼び出されます。

**app.ts**

```ts
class TodoApp {
  // 型定義
  todos: eny;
  constructor() {
    // アプリ内で利用するTodoリストオブジェクト
    this.todos = [];
  }

  // キーイベントハンドラ
  enterTodo(newTodo) {
    var text = newTodo.value.trim();
    if(text) {
      this.addTodo(text);
      newTodo.value = '';
    }
  }

  // 新しいtodoを追加
  addTodo(text) {
    this.todos.push({
      title: text,
      completed: false
    });
  }
}
```

> (Anguler2のイベント)
> TBD

### Todo一覧の表示

Todoが作成された場合に一覧表示します。

**todo.html**

```html
<div>
  <ul *ng-for="#todo of todos; #i = index">
    <li>
      {{i+1}}. {{todo.title}}
    </li>
  </ul>
</div>
```

- `*ng-for`：ビルトインディレクティブ。angular1系の`ng-repeat`と同じです。

テンプレートにてビルトインディレクティブを利用する場合は、コンポーネント側で設定する必要があります。

**app.ts**
```ts
// ビルトインディレクティブをインポートする
import {bootstrap, Component, View, NgFor} from 'angular2/angular2';

// directivesに設定することでテンプレート側で利用できるようになります
@View({
  templateUrl: 'todo.html',
  directives: [NgFor]
})
```
> (Anguler2のビルトインディレクティブ)
> TBD

### Todoのクローズ

Todoをクローズするチェックボックスを作成して、Todoを完了状態にできるようにします。

**todo.html**
```html
<div>
  <ul *ng-for="#todo of todos; #i = index">
    <li>
      <input type="checkbox"
             (click)="toggleComplete(todo)"
             [checked]="todo.completed">
      <label
         [style.text-decoration]="todo.completed?'line-through':''">
        {{i+1}}. {{todo.title}}
      </label>
    </li>
  </ul>
</div>
```

- `[checked]`：inputタグのchecked属性を操作します。
- `[style.text-decoration]`：labelタグのstyleのtext-decorationを操作します。
 
コントローラにTodoを操作するコードを追加します。
**app.ts**
```ts
// Todoの完了ステータスを変更
toggleComplete(todo) {
  todo.completed = !todo.completed;
}
```

> (Anguler2のプロパティ)
> TBD

### Todoの削除

Todoの削除機能を作成します。

**todo.html**
```html
<div>
  <ul *ng-for="#todo of todos; #i = index">
    <li>
      <input type="checkbox"
             (click)="toggleComplete(todo)"
             [checked]="todo.completed">
      <label
         [style.text-decoration]="todo.completed?'line-through':''">
        {{i+1}}. {{todo.title}}
      </label>
      <!--  削除ボタンを追加 -->
      <button (click)="deleteTodo(todo)">delete</button>
    </li>
  </ul>
</div>
```
コントローラにTodoを削除するコードを追加します。
**app.ts**
```ts
// Todoを削除
deleteTodo(todo) {
  var index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
}
```

### Todo完了状況の表示

Todoの完了状況を表示します。

**index.html**
```html
<footer>
  <p>Todo消化状況： {{getCompletedCount()}} / {{todos.length}}</p>
</footer>
```
コントローラにTodoの残数を計算するコードを追加します。
**app.ts**
```ts
 getCompletedCount() {
   return this.todos.filter(todo => todo.completed).length
 }
```

### WebStorageとの連携

最後に、Todoを操作した際にWebStorageへ保存して、ブラウザが閉じられた場合でもTodoの内容を保持できるようにします。

まず、初期表示時にWebStorageの内容を読み込みます。

**app.ts**
```ts
class TodoApp {

  todos: any;
  
  constructor() {
    // WebStorageで利用するキー
    this.STORAGE_KEY = 'angular2-todo';
    // localStorageからTodoを取得して、なければ空の配列をセットする
    this.todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
  }

...

}
```

続いて変更時に変更内容をWebStorageへ書き込みます。

**app.ts**
```ts
addTodo(text) {
  this.todos.push({
    title: text,
    completed: false
  });
  // ここ
  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
}

deleteTodo(todo) {
  var index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);
  // ここ
  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
}

toggleComplete(todo) {
  todo.completed = !todo.completed;
  // ここ
  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
}
```

## 完成

以上で完成です。
