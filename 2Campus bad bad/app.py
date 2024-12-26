# app.py
from flask import Flask, render_template, request, jsonify
import random
import time
import threading

app = Flask(__name__)

# 驗證碼變數
current_code_1 = None
current_code_2 = None

# 生成驗證碼
def generate_code():
    global current_code_1
    global current_code_2
    while True:
        current_code_1 = ''.join([str(random.randint(0, 9)) for _ in range(6)])
        current_code_2 = ''.join([str(random.randint(0, 9)) for _ in range(6)])
        time.sleep(30)

# 啟動驗證碼生成線程
threading.Thread(target=generate_code).start()

@app.route('/student')
def index():
    return render_template('index.html')

@app.route('/')
def teacher():
    return render_template('teacher.html')

@app.route('/api/get_code', methods=['GET'])
def get_code():
    return jsonify({"弘道基地": {'code': current_code_1}, "吉林基地": {'code': current_code_2}})

@app.route('/checkin', methods=['POST'])
def checkin():
    data = request.json
    base = data.get('base')
    code = data.get('code')

    if code == current_code_1 and base == '弘道基地':
        return jsonify({'status': 'success', 'message': f'Checked in at 弘道基地, the Flag is FHFCTF{{1_h473_1Campus}}'})
    elif code == current_code_2 and base == '吉林基地':
        return jsonify({'status': 'success', 'message': f'Checked in at 吉林基地'})
    else:
        return jsonify({'status': 'failure', 'message': 'Invalid code'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050)