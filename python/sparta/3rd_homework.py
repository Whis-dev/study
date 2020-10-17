import re
import numpy as np
import matplotlib.font_manager as fm

from PIL import Image
from wordcloud import WordCloud


font_path = '/System/Library/Fonts/Supplemental/AppleGothic.ttf'


text = ""
delete_language_set = 'ㅋ|ㅎ|ㅜ|ㅠ|이모티콘|사진|삭제된 메시지입니다'

with open("kakaotalk.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()
    for line in lines[7:]:
        if ': ' in line:
            clean_line = re.sub(delete_language_set, '', line.split(': ')[1])
            if len(clean_line.strip()) > 0:
                text += clean_line

mask = np.array(Image.open('cloud.png'))
word_cloud = WordCloud(font_path=font_path, background_color="white", mask=mask)
word_cloud.generate(text)
word_cloud.to_file("result.png")