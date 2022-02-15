from cgitb import text
from distutils.log import info
from webbrowser import get
from pyrsistent import get_in
import requests
from bs4 import BeautifulSoup


def get_info():
    # スクレイピング対象のURLにリクエストを送りHTMLを取得する
    url = 'https://www.nogizaka46.com/schedule/'
    # 403エラーを出さないようにheadersの設定を記述する
    header = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
    res = requests.get(url, headers={'User-Agent': header})
    # レンスポンスのHTMLからBeautifulSoupオブジェクトを作る
    soup = BeautifulSoup(res.text, 'html.parser')

    month = soup.select_one('#scheduleH2')
    # カレンダー各日付の文字列の取得
    elems = soup.select('#scheduleTable ul')
    info_list = {}
    for i in range(len(elems)):
        info_list[i+1] = []
    for idx, elem in enumerate(elems):
        days_info = elem.select('li', class_='scheduleTableList')
        for day in days_info:
            info_list[idx+1].append(day.text)

    return month.text, info_list