import os
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/product-details', methods=['GET'])
def get_product_details():
    # Exemplu de detalii produs
    product = {
        'id': 1,
        'name': 'Laptop XYZ',
        'description': 'Laptop puternic pentru jocuri.',
        'price': 1200.99
    }
    return jsonify(product)

if __name__ == '__main__':
    # Aici poți seta variabilele de mediu pentru IBM Cloud
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
