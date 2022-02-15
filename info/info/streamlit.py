import streamlit as st
from get_bs4 import get_info
from datetime import datetime


month, dic = get_info()
st.title(month)
st.title('乃木坂46出演情報一覧')

st.write(dic)