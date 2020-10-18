#!/usr/bin/env python
# coding: utf-8

import pandas as pd
import matplotlib.pyplot as plt

pizza09 = pd.read_csv('./data/pizza_09.csv')
weeks = ['월','화','수','목','금','토','일']
pizza_weeks_data = pizza09.groupby('요일').sum()['통화건수'].sort_values(ascending=True).reindex(weeks)
pizza_weeks_data

plt.rcParams['font.family'] = 'AppleGothic'

plt.figure(figsize=(8,5))
plt.bar(pizza_weeks_data.index, pizza_weeks_data)
plt.title('9월 요일별 피자 주문 건수')

pizza_adress_data = pizza09.groupby('발신지_구').sum()['통화건수'].sort_values(ascending=True)
pizza_adress_data

plt.figure(figsize=(20,8))
plt.bar(pizza_adress_data.index, pizza_adress_data)
plt.title('9월 시군구 별 피자 주문량')

chicken09 = pd.read_csv('./data/chicken_09.csv')
chicken_weeks_data = chicken09.groupby('요일').sum()['통화건수'].sort_values(ascending=True).reindex(weeks)
chicken_weeks_data

plt.figure(figsize=(8,5))
p1 = plt.bar(chicken_weeks_data.index, chicken_weeks_data)
p2 = plt.bar(pizza_weeks_data.index, pizza_weeks_data)
plt.title('9월 치킨/피자 요일별 주문량')
plt.legend((p1, p2), ('Chicken', 'Pizza'), fontsize=10)
plt.show()
