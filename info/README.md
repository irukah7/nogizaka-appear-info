## poetryライブラリ追加 & 仮想環境内に入る
poetryがある階層に移動
```
$ cd info
```

必要なパッケージを pyproject.toml に追加し、インストールするコマンド
```
$ poetry add beautifulsoup4 requests
```
仮想環境にインストールされているパッケージを最新バージョンに更新する
```
$ poetry update
```

venv内に入る
```
$ poery shell
```
実行する
```
$ poetry run python info/main.py
```

利用可能なパッケージ一覧を表示する
```
$ poetry show
```

venvから抜ける
```
$ exit
```