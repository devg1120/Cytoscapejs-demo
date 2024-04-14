#!/usr/bin/python3

import sys
website_id       = 'your_id'
website_password = 'your_password'
website_url='https://sample.com'
mail_server_account  = 'mail_server_account'
mail_server_password = 'mail_server_password'
mail_from = mail_server_account
mail_to   = mail_server_account
smtp_server = 'smtp.*.jp'    

import time
import re

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

page_width = driver.execute_script('return document.body.scrollWidth')
page_height = driver.execute_script('return document.body.scrollHeight')
print( "page_width=", page_width)
print( "page_height=", page_height)
###############################################

def get_vacant_room():
    #driver = self.driver

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


    driver.get(website_url)
    driver.find_element_by_name("login_id").clear()
    driver.find_element_by_name("login_id").send_keys(website_id)
    driver.find_element_by_name("password").clear()
    driver.find_element_by_name("password").send_keys(website_password)
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
    time.sleep(2)
    # ログアウト
    driver.find_element_by_name("logout").click()

    return

#sys.exit()





####################################################
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
#from email.MIMEBase import MIMEBase
#from email.mime.base.MIMEBase import MIMEBase
from email.mime.application import MIMEApplication
from os.path import basename

def attach_file(send_msg, path): 
    #path = "./screenshot.png"
    with open(path, "rb") as f:
        part = MIMEApplication(
            f.read(),
            Name=basename(path)
        )
     
    part['Content-Disposition'] = 'attachment; filename="%s"' % basename(path)
    send_msg.attach(part)

#######################################


import smtplib, base64
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
#from email.MIMEBase import MIMEBase
#from email.mime.base.MIMEBase import MIMEBase
from email.mime.application import MIMEApplication
from os.path import basename

def send_vacant_room_mail():

    # png 画像取得
    get_vacant_room()

    msg = MIMEMultipart()

    msg["Subject"] = "スタジオ楽予約状況"
    msg["To"] = mail_to
    msg["From"] = mail_from



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
    #server = smtplib.SMTP(smtp_server, 465)
    server = smtplib.SMTP_SSL(smtp_server, 465, context=ssl.create_default_context())
    #server.set_debuglevel(True)
    # 認証を行う
    server.login(mail_server_account, mail_server_password)

    # メールを送信する
    server.send_message(msg)
    # 閉じる
    server.quit()

######################################

def get_kakunin():
    #driver = self.driver

    driver.set_window_size(page_width, page_height*2)

    #os.remove('./screenshot.png')
    if os.path.isfile( './screenshot_kakunin.png'):
        os.remove('./screenshot_kakunin.png')


    driver.get(website_url)
    driver.find_element_by_name("login_id").clear()
    driver.find_element_by_name("login_id").send_keys(website_id)
    driver.find_element_by_name("password").clear()
    driver.find_element_by_name("password").send_keys(website_password)
    driver.find_element_by_name("login_ok").click()
    driver.find_element_by_xpath("(.//*[normalize-space(text()) and normalize-space(.)='STUDIO'])[1]/following::input[5]").click()


    #text = driver.page_source
    #return text
    time.sleep(2)
    driver.save_screenshot('./screenshot_kakunin.png')
    time.sleep(2)

    driver.find_element_by_name("return").click()
    driver.find_element_by_name("logout").click()

    return

#sys.exit()





####################################################


def send_kakunin_mail():

    send_msg = MIMEMultipart('alternative')

    # MIMETextを作成
    #text = "メール本文"
    text = "スタジオ**の予約状況は添付画像見てね"
    part = MIMEText(text, "plain")
    send_msg.attach(part)


    # png 画像取得
    get_kakunin()

    # ファイルを添付

    attach_file(send_msg, "./screenshot_kakunin.png")

    #sys.exit()

    send_msg["Subject"] = "スタジオ**予約状況"
    send_msg["To"] = mail_to
    send_msg["From"] = mail_from

    import ssl
    # サーバを指定する
    #server = smtplib.SMTP(smtp_server, 465)
    server = smtplib.SMTP_SSL(smtp_server, 465, context=ssl.create_default_context())
    #server.set_debuglevel(True)
    # 認証を行う
    server.login(mail_server_account, mail_server_password)

    # メールを送信する
    server.send_message(send_msg)
    # 閉じる
    server.quit()

#############################################

def get_cancel():
    #driver = self.driver

    driver.set_window_size(page_width, page_height*2)

    #os.remove('./screenshot.png')
    if os.path.isfile( './screenshot_cancel.png'):
        os.remove('./screenshot_cancel.png')


    driver.get(website_url)
    driver.find_element_by_name("login_id").clear()
    driver.find_element_by_name("login_id").send_keys(website_id)
    driver.find_element_by_name("password").clear()
    driver.find_element_by_name("password").send_keys(website_password)
    driver.find_element_by_name("login_ok").click()

    driver.find_element_by_xpath("(.//*[normalize-space(text()) and normalize-space(.)='STUDIO'])[1]/following::input[5]").click()

    time.sleep(2)
    driver.save_screenshot('./screenshot_cancel.png')
    time.sleep(2)

    driver.find_element_by_name("cancel").click()
    driver.find_element_by_name("cancel_ok").click()
    driver.find_element_by_name("cancel_no").click()
    driver.find_element_by_name("return").click()
    driver.find_element_by_name("logout").click()

    return

#sys.exit()

###################################################

from datetime import date

def get_yoyaku(room, hour):
    #driver = self.driver

    today = date.today()
    d1 = today.strftime("%Y/%m/%d") 
    print(d1, flush=True)

    driver.get(website_url)
    driver.find_element_by_name("login_id").clear()
    driver.find_element_by_name("login_id").send_keys(website_id)
    driver.find_element_by_name("password").clear()
    driver.find_element_by_name("password").send_keys(website_password)
    driver.find_element_by_name("login_ok").click()
    driver.find_element_by_name("yoyaku").click()

    time.sleep(2)

    try:
        if room == 'A':
            #driver.find_element_by_id("check_staff_3").click()
            pass
        elif room == 'B':
            driver.find_element_by_id("check_staff_4").click()
        elif room == 'C':
            driver.find_element_by_id("check_staff_5").click()
        elif room == 'D':
            driver.find_element_by_id("check_staff_6").click()
        elif room == 'E':
            driver.find_element_by_id("check_staff_7").click()
        elif room == 'F':
            driver.find_element_by_id("check_staff_8").click()
        elif room == 'G':
            driver.find_element_by_id("check_staff_9").click()

        time.sleep(2)

        #driver.find_element_by_xpath("//td[contains(@onclick,'2019/09/09') and contains(@onclick,'09:00')]").click() 
        driver.find_element_by_xpath(
            "//td[contains(@onclick,'" + d1 + "') and contains(@onclick,'" + hour + ":00')]").click() 

        time.sleep(2)
        driver.find_element_by_xpath("//button[@class='btn btn-primary setNext']").click()
        time.sleep(2)
        driver.find_element_by_xpath("//button[@class='btn btn-default setBack']").click()
        driver.find_element_by_name("logout").click()
    except NoSuchElementException as exception:
        return "faiure"

    return "success"



####################################################


def send_cancel_mail():

    send_msg = MIMEMultipart('alternative')

    # MIMETextを作成
    #text = "メール本文"
    text = "添付画像の予約をキャンセルしました"
    part = MIMEText(text, "plain")
    send_msg.attach(part)


    # png 画像取得
    get_cancel()

    # ファイルを添付

    attach_file(send_msg, "./screenshot_cancel.png")

    #sys.exit()

    send_msg["Subject"] = "スタジオ**予約キャンセル"
    send_msg["To"] = mail_to
    send_msg["From"] = mail_from

    import ssl
    # サーバを指定する
    #server = smtplib.SMTP(smtp_server, 465)
    server = smtplib.SMTP_SSL(smtp_server, 465, context=ssl.create_default_context())
    #server.set_debuglevel(True)
    # 認証を行う
    server.login(mail_server_account, mail_server_password)

    # メールを送信する
    server.send_message(send_msg)
    # 閉じる
    server.quit()


########################################

def send_error_mail():

    send_msg = MIMEMultipart('alternative')

    # MIMETextを作成
    #text = "メール本文"
    text = "予約がエラーしました。防音室の予約状況を確認して下さい"
    part = MIMEText(text, "plain")
    send_msg.attach(part)


    #sys.exit()

    send_msg["Subject"] = "スタジオ楽予約エラー"
    send_msg["To"] = mail_to
    send_msg["From"] = mail_from

    import ssl
    # サーバを指定する
    #server = smtplib.SMTP(smtp_server, 465)
    server = smtplib.SMTP_SSL(smtp_server, 465, context=ssl.create_default_context())
    #server.set_debuglevel(True)
    # 認証を行う
    server.login(mail_server_account, mail_server_password)

    # メールを送信する
    server.send_message(send_msg)
    # 閉じる
    server.quit()


######################################
#import sys
import poplib
import email
import email.header
from email.header import decode_header, make_header

from email.parser import Parser
from email.header import decode_header
from email.utils import parseaddr



last_kakunin_date = ""
while True: 
    # サーバに接続
    cli = poplib.POP3('pop.ocn.ne.jp')
    print('connected.')

    # 認証
    cli.user(mail_server_account) 
    cli.pass_(mail_server_password) 
    print('logged in.')

    # メールボックス内のメールの総数を取得
    count = len(cli.list()[1])
    print('found ' + str(count) + ' messages.')

    server = cli


    # stat() function return email count and occupied disk size
    #print('Messages: %s. Size: %s' % server.stat())
    # list() function return all email list
    resp, mails, octets = server.list()
    #print(mails)

    # retrieve the newest email index number
    index = len(mails)
    # server.retr function can get the contents of the email with index variable value index number.
    resp, lines, octets = server.retr(index)

    # lines stores each line of the origijal text of the message
    # so that you can get the original text of the entire message use the join function and lines variable. 
    msg_content = b'\r\n'.join(lines).decode('utf-8')
    # now parse out the email object.
    msg = Parser().parsestr(msg_content)

    # get email from, to, subject attribute value.
    email_from = msg.get('From')
    email_to = msg.get('To')
    email_subject = msg.get('Subject')
    email_date = msg.get('Date')
    print('From ' + email_from, flush=True)
    print('To ' + email_to, flush=True)
    print('Subject ' + email_subject, flush=True)
    print('Date ' + email_date, flush=True)

    if email_date != last_kakunin_date :
        if    "check" in email_subject: 
            print("call send_vacant_room_mail()", flush=True) 
            send_vacant_room_mail()

        elif  "kakunin" in email_subject: 
            print("call send_kakunin_mail()", flush=True) 
            send_kakunin_mail()

        elif  "cancel" in email_subject: 
            print("call send_cancel_mail()", flush=True) 
            send_cancel_mail()

        elif  "yoyaku" in email_subject: 
            room = ""
            start_time = ""
            result = re.search( r'[A-G]', email_subject) 
            if result:
                room = result.group()

            result = re.search( r'(09|10|11|12|13|14|15|16|17|18|19|20|21|22)', email_subject) 
            if result:
                start_time = result.group()

            print( "start_time=", start_time, ", room=", room, flush=True) 
            if  room != "" and start_time != "": 
                print("call send_yoyaku_mail()", flush=True) 
                yoyaku_result = get_yoyaku(room, start_time )
                if yoyaku_result == "success":
                    send_kakunin_mail()
                else:
                    send_error_mail()
        else:
            pass
        last_kakunin_date = email_date


    # delete the email from pop3 server directly by email index.
    # server.dele(index)
    # close pop3 server connection.
    server.quit()
    time.sleep(60)



####################################################
