#!/usr/bin/python3

import sys
studio_id       = 'yhi5ygbtkt@icloud.com'
studio_password = 'onomomokappa03'
#url = 'https://www.studio-gaku.net'
url='https://web.star7.jp/mypage/mobile_info.php?p=c6370ba213'

account  = 'momo_03@arrow.ocn.ne.jp'
password = 'SHgQWf72'

import time

# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.chrome.options import Options
import unittest, time, re
from pprint import pprint

import requests
import json

#from bs4 import BeautifulSoup

import sys
import io
import os
# windows だが cygwin なので stdout に unicode 出力する。
sys.stdin = io.TextIOWrapper(sys.stdin.buffer, encoding='utf-8')
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')



headless = True


#print(os.name)
#print( os.environ['PATH'] ) 

# ChromeのWebDriverオブジェクトを作成する。
#if os.name == 'nt': # windows
#if "/cygdrive/" in os.environ['PATH']: 
#if "Program Files" in os.environ['PATH']: 
if 'WINDOWS' in os.environ['PATH']: 
    if headless:
        #browser_path = '/usr/bin/google-chrome-stable'
        options = Options()
        options.binary_location = 'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
        #options.binary_location = '/temp/chromedriver.exe'
        options.add_argument('--headless')
        #options = webdriver.ChromeOptions()
        #options.add_argument('--headless')
        #driver = webdriver.Chrome("./chromedriver.exe", chrome_options=options)
        driver = webdriver.Chrome("./chromedriver.exe", chrome_options=options)
    else :
        driver = webdriver.Chrome("./chromedriver.exe") #chromedriver.exe読み込み
else:   # linux
    if headless:
        options = Options()
        options.binary_location = '/usr/bin/google-chrome-stable'
        options.add_argument('--headless')
        driver = webdriver.Chrome(chrome_options=options)   # assume /usr/local/bin/chromedriver
    else :
        driver = webdriver.Chrome() 


driver.implicitly_wait(10)
def get_yoyaku_joukyou():
    #driver = self.driver

    page_width = driver.execute_script('return document.body.scrollWidth')
    page_height = driver.execute_script('return document.body.scrollHeight')
    print( "page_width=", page_width)
    print( "page_height=", page_height)
    #driver.set_window_size(page_width, page_height)
    driver.set_window_size(page_width, page_height*3)

    #os.remove('./screenshot.png')
    if os.path.isfile( './screenshot_a.png'):
        os.remove('./screenshot_a.png')
    if os.path.isfile( './screenshot_b.png'):
        os.remove('./screenshot_b.png')
    if os.path.isfile( './screenshot_c.png'):
        os.remove('./screenshot_c.png')
    if os.path.isfile( './screenshot_d.png'):
        os.remove('./screenshot_d.png')
    if os.path.isfile( './screenshot_e.png'):
        os.remove('./screenshot_e.png')
    if os.path.isfile( './screenshot_f.png'):
        os.remove('./screenshot_f.png')
    if os.path.isfile( './screenshot_g.png'):
        os.remove('./screenshot_g.png')


    driver.get("https://web.star7.jp/mypage/mobile_info.php?p=c6370ba213")
    driver.find_element_by_name("login_id").clear()
    driver.find_element_by_name("login_id").send_keys("yhi5ygbtkt@icloud.com")
    driver.find_element_by_name("password").clear()
    driver.find_element_by_name("password").send_keys("onomomokappa03")
    driver.find_element_by_name("login_ok").click()
    driver.find_element_by_name("yoyaku").click()

    #text = driver.page_source
    #return text
    time.sleep(2)
    driver.save_screenshot('./screenshot_a.png')


    driver.find_element_by_id("check_staff_4").click()
    time.sleep(2)
    driver.save_screenshot('./screenshot_b.png')

    driver.find_element_by_id("check_staff_5").click()
    time.sleep(2)
    driver.save_screenshot('./screenshot_c.png')

    driver.find_element_by_id("check_staff_6").click()
    time.sleep(2)
    driver.save_screenshot('./screenshot_d.png')

    driver.find_element_by_id("check_staff_7").click()
    time.sleep(2)
    driver.save_screenshot('./screenshot_e.png')

    driver.find_element_by_id("check_staff_8").click()
    time.sleep(2)
    driver.save_screenshot('./screenshot_f.png')

    driver.find_element_by_id("check_staff_9").click()
    time.sleep(2)
    driver.save_screenshot('./screenshot_g.png')

    # 戻る
    driver.find_element_by_xpath("(.//*[normalize-space(text()) and normalize-space(.)='STUDIO'])[1]/following::button[1]").click()
    driver.find_element_by_name("logout").click()
    return

#sys.exit()

######################################
import smtplib, base64
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
#from email.MIMEBase import MIMEBase
#from email.mime.base.MIMEBase import MIMEBase
from email.mime.application import MIMEApplication
from os.path import basename


msg = MIMEMultipart()

msg["Subject"] = "スタジオ楽予約状況"
msg["To"] = "momo_03@arrow.ocn.ne.jp"
msg["From"] = "momo_03@arrow.ocn.ne.jp"


# png 画像取得
get_yoyaku_joukyou()

# ファイルを添付

from email.mime.image import MIMEImage


related = MIMEMultipart('related')
alt = MIMEMultipart('alternative')
related.attach(alt)

text = "こんにちは\nhtmlメールのテスト配信です。"

img_file_a = open('./screenshot_a.png', 'rb')
img_a = MIMEImage( img_file_a.read() )
img_file_a.close()
img_a.add_header('Content-ID', '<{}>'.format("screenshot_a.png")) 
msg.attach(img_a)

img_file_b = open('./screenshot_b.png', 'rb')
img_b = MIMEImage( img_file_b.read() )
img_file_b.close()
img_b.add_header('Content-ID', '<{}>'.format("screenshot_b.png")) 
msg.attach(img_b)

img_file_c = open('./screenshot_c.png', 'rb')
img_c = MIMEImage( img_file_c.read() )
img_file_c.close()
img_c.add_header('Content-ID', '<{}>'.format("screenshot_c.png")) 
msg.attach(img_c)

img_file_d = open('./screenshot_d.png', 'rb')
img_d = MIMEImage( img_file_d.read() )
img_file_d.close()
img_d.add_header('Content-ID', '<{}>'.format("screenshot_d.png")) 
msg.attach(img_d)

img_file_e = open('./screenshot_e.png', 'rb')
img_e = MIMEImage( img_file_e.read() )
img_file_e.close()
img_e.add_header('Content-ID', '<{}>'.format("screenshot_e.png")) 
msg.attach(img_e)

img_file_f = open('./screenshot_f.png', 'rb')
img_f = MIMEImage( img_file_f.read() )
img_file_f.close()
img_f.add_header('Content-ID', '<{}>'.format("screenshot_f.png")) 
msg.attach(img_f)

img_file_g = open('./screenshot_g.png', 'rb')
img_g = MIMEImage( img_file_g.read() )
img_file_g.close()
img_g.add_header('Content-ID', '<{}>'.format("screenshot_g.png")) 
msg.attach(img_g)



html = """\
<html>
  <head></head>
  <body>
    <p>こんにちは<br>
        ごきげんいかがですか？<br>
        Pythonウェブサイトへのリンクはこちらです<a href="http://www.python.org">link</a>
    </p>

    <p>●防音室Aの画像ファイルを以下に埋め込みます</p>
    <img src="cid:screenshot_a.png"> 
    <br>

    <p>●防音室Bの画像ファイルを以下に埋め込みます</p>
    <img src="cid:screenshot_b.png"> 
    <br>

    <p>●防音室Cの画像ファイルを以下に埋め込みます</p>
    <img src="cid:screenshot_c.png"> 
    <br>

    <p>●防音室Dの画像ファイルを以下に埋め込みます</p>
    <img src="cid:screenshot_d.png"> 
    <br>

    <p>●防音室Eの画像ファイルを以下に埋め込みます</p>
    <img src="cid:screenshot_e.png"> 
    <br>

    <p>●防音室Fの画像ファイルを以下に埋め込みます</p>
    <img src="cid:screenshot_f.png"> 
    <br>

    <p>●防音室Gの画像ファイルを以下に埋め込みます</p>
    <img src="cid:screenshot_g.png"> 
    <br>


  </body>
</html>
""".format(**vars())

#part1 = MIMEText(text, 'plain')
#msg.attach(part1)
part2 = MIMEText(html, 'html')
msg.attach(part2)


import ssl
# サーバを指定する
#server = smtplib.SMTP("smtp.ocn.ne.jp", 465)
server = smtplib.SMTP_SSL("smtp.ocn.ne.jp", 465, context=ssl.create_default_context())
#server.set_debuglevel(True)
# 認証を行う
server.login(account, password)

# メールを送信する
server.send_message(msg)
# 閉じる
server.quit()


####################################################
