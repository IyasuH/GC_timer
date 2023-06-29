import os
from flask import Flask, render_template
from dotenv import load_dotenv

from deta import Deta

load_dotenv()

DETA_KEY=os.getenv("DETA_KEY")
deta = Deta(DETA_KEY)

last_word_db=deta.Base("last_word")

app = Flask(__name__)

@app.route('/')
def home():
    all_last_words = last_word_db.fetch().items
    sorted=[]
    for x in range(0, len(all_last_words), 3):
        t=x+3
        sorted.append(all_last_words[x:t])
    #print(sorted)
    return render_template('home.html', datas=sorted)

if __name__ == "__main__":
    app.run(debug=True, host="192.168.1.14", port=7070)