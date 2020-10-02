import time
import dload
import base64
import io

from bs4 import BeautifulSoup
from selenium import webdriver
from PIL import Image

driver = webdriver.Chrome('./chromedriver')
driver.get('https://www.google.com/search?q=nier+replicant+official+art&tbm=isch&ved=2ahUKEwiCjsC0_JLsAhVM5JQKHSyfBOkQ2-cCegQIABAA&oq=nier+replicant+official+art&gs_lcp=CgNpbWcQAzIECAAQEzoICAAQBRAeEBM6CAgAEAgQHhATUKWFAVi6nQFgl54BaAFwAHgAgAFhiAHuCJIBAjEzmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=wZJ1X8KpGszI0wSsvpLIDg&bih=946&biw=1920')
time.sleep(5)

req = driver.page_source
soup = BeautifulSoup(req, 'html.parser')

thumbnails = soup.select('#islrg > div.islrc > div > a.wXeWr.islib.nfEiy.mM5pbd > div.bRMDJf.islir > img')

index = 1
not_has_source_count = 0


def download_image(attribute):
    if thumbnail[attribute].split(':')[0] == 'data':
        # with open(f'./1st_homework_img/nier_official_{index}.jpg', 'wb') as img_file:
        #     img_file.write(base64.b64decode(str(thumbnail[attribute])))
        mime_type = thumbnail[attribute]
        data = mime_type[mime_type.find('/9'):]
        Image.open(io.BytesIO(base64.b64decode(data))).save(f'./1st_homework_img/nier_official_{index}.jpg')
    else:
        dload.save(thumbnail[attribute], f'./1st_homework_img/nier_official_{index}.jpg')


for thumbnail in thumbnails:
    if thumbnail.has_attr('src'):
        download_image('src')
        index += 1
    elif thumbnail.has_attr('data-src'):
        download_image('data-src')
        index += 1
    else:
        not_has_source_count += 1

print('not has source number', not_has_source_count)

driver.quit()
