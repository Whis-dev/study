#!/usr/bin/env python
# coding: utf-8

# In[5]:


import MeCab
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm

from PIL import Image
from wordcloud import WordCloud


# In[2]:


plt.rcParams['font.family'] = 'AppleGothic'
for font in fm.fontManager.ttflist:
    if 'Gothic' in font.name:
        print(font.name, font.fname)


# In[7]:


lyric = open('./data/amazarashi.txt','r',encoding='utf-8-sig')
lyric = lyric.read()
lyric


# In[8]:


# reference from  : dev.startialab.blog/etc/a55
# MeCab Japanese install reference: https://qiita.com/paulxll/items/72a2bea9b1d1486ca751

# tokenize Japanese text
mecab = MeCab.Tagger("-Owakati")
tokenized_text = mecab.parse(lyric).replace('\n','')
tokenized_text


# In[24]:


font_path = '/System/Library/Fonts/ヒラギノ丸ゴ ProN W4.ttc'

mask = np.array(Image.open('./data/amazarashi.jpg'))
wc = WordCloud(font_path=font_path, background_color='white', mask=mask).generate(tokenized_text)

plt.figure(figsize=(50,50))
plt.imshow(wc, cmap=plt.cm.gray)
plt.axis('off')
plt.show()

wc.to_file('amazarashi_wc.png')


# In[25]:


enroll_data = pd.read_csv('./data/enrolleds_detail.csv')
enroll_data.tail(5)


# In[27]:


format = '%Y-%m-%dT%H:%M:%S.%f'

enroll_data['done_date_time'] = pd.to_datetime(enroll_data['done_date'], format=format)
enroll_data.tail(5)


# In[29]:


weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

enroll_data['done_date_time_weekday'] = enroll_data['done_date_time'].dt.day_name()
enroll_data['done_date_time_hour'] = enroll_data['done_date_time'].dt.hour
enroll_data.tail(5)


# In[52]:


pivot_table = pd.pivot_table(enroll_data, values = 'user_id', aggfunc='count'
                            ,index=['done_date_time_hour']
                            ,columns=['done_date_time_weekday'])
pivot_table


# In[55]:


compare_data = pd.DataFrame(pivot_table, columns=["Monday", "Tuesday"])
compare_data


# In[56]:


compare_data.plot()


# In[ ]:




