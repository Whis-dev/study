import folium
import json

import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = 'AppleGothic'


population04 = pd.read_csv('./data/population04.csv')
population07 = pd.read_csv('./data/population07.csv')
geo_data = './data/seoul_geo.json'
geo_data = json.load(open(geo_data, encoding='utf-8'))


population04.tail(5)


gu_population04 = population04.groupby('군구')['유동인구수'].sum().sort_values(ascending=False)
gu_population04


plt.figure(figsize=(20,5))
plt.bar(gu_population04.index, gu_population04)
plt.title('구별 유동인구수')


map04 = folium.Map(location=[37.55, 126.98], zoom_start=11, tiles="stamentoner")

folium.Choropleth(
    geo_data=geo_data,
    data=gu_population04,
    columns=[gu_population04.index, gu_population04],
    fill_color='PuRd',
    key_on='feature.properties.name'
).add_to(map04)
map04


gangnam04 = population04[population04['군구'] == '강남구']
gangnam04


gangnam07 = population07[population07['군구'] == '강남구']
gangnam07


gangnam04_day = gangnam04.groupby('일자')['유동인구수'].sum().reset_index()
gangnam04_day['일'] = gangnam04_day.index + 1
gangnam04_day

gangnam07_day = gangnam07.groupby('일자')['유동인구수'].sum().reset_index()
gangnam07_day['일'] = gangnam07_day.index + 1
gangnam07_day

plt.figure(figsize=(40,15))
p1, = plt.plot(gangnam04_day['일'], gangnam04_day['유동인구수'])
p2, = plt.plot(gangnam07_day['일'], gangnam07_day['유동인구수'])
plt.legend((p1, p2), ('4월', '7월'), fontsize=30)
plt.rcParams['font.size'] = 30
plt.ticklabel_format(style = 'plain')
plt.title('4월/7월 일별 강남구 유동인구')
plt.show()

