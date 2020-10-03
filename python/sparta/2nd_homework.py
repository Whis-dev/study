import smtplib
import json
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from bs4 import BeautifulSoup
from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')

# config.json 파일에서 email config 정보 가지고 오기
# config.json은 .gitignore 파일에 추가한다(보안)
with open('config.json', 'r') as file:
    config = json.load(file)

url = f"https://search.naver.com/search.naver?&where=news&query=코로나"

driver.get(url)
request = driver.page_source
soup = BeautifulSoup(request, 'html.parser')
articles = soup.select('#main_pack > div.news.mynews.section._prs_nws > ul > li')

table_row = []

for article in articles:
    img_tag = article.select_one('.thumb > a > img')
    a_tag = article.select_one('dl > dt > a')
    description = article.select_one('._sp_each_source')

    url = a_tag['href']
    title = a_tag.text
    thumbnail = img_tag['src'].split('&')[0]
    press = description.text.split(' ')[0].replace('언론사', '')
    table_row_contents = f"""
                <tr>
                    <td>
                        <img src="{thumbnail}" alt="썸네일" width='300' style="vertical-align: top"/>
                    <td>
                    <td>
                        <a href="{url}">[{press}]{title}</a>
                    </td>
                </tr>
    """
    table_row.append(table_row_contents)

table_contents = '\n'.join(table_row)
html_content = f"""
    <!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta http-equiv="Cache=Control" content="no-cahce" />
            <meta name="viewport" content="width=device-width" />
            <style>
            </style>
        </head>
        <body>
            <h1 style="width: fit-content; margin: auto">오늘의 코로나 뉴스</h1>
            <table
                cellspacing='0'
                cellpadding='0'
                border='1'
                style='margin:auto; border-collapse: collapse'
            >
                {table_contents}
            </table>
        </body>
    </html>
"""

me = config["EMAIL"]["ADDRESS"]
password = config["EMAIL"]["PASSWORD"]

server = smtplib.SMTP_SSL('smtp.gmail.com')
server.login(me, password)

you = "보낼 메일 주소"

msg = MIMEMultipart('alternative')
msg['Subject'] = '오늘의 코로나 뉴스'
msg['From'] = me
msg['To'] = you

msg.attach(MIMEText(html_content, 'html'))

server.send_message(msg)

server.quit()
driver.quit()
