import os
import stripe
from flask import Flask, request, jsonify # type: ignore

app = Flask(__name__)

# Configuration des clés d'API Stripe
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')  # Clé secrète pour l'API

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        # Obtenez les informations du panier de l'utilisateur
        data = request.json

        # Créez une session de checkout Stripe
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'price_data': {
                    'currency': 'eur',
                    'product_data': {
                        'name': data['product_name'],
                    },
                    'unit_amount': data['amount'],  # Montant en centimes
                },
                'quantity': 1,
            }],
            mode='payment',
            success_url='https://votre-site.com/success',
            cancel_url='https://votre-site.com/cancel',
        )
        return jsonify({'id': session.id})
    except Exception as e:
        return jsonify(error=str(e)), 403

if __name__ == '__main__':
    app.run(port=4242)