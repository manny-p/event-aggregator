from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.schema import Sequence
from config import TOKEN
from helper import *
import pprint as p
import requests
import psycopg2
from dateutil import parser

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://localhost:5432/events'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Event(db.Model):
    id = db.Column(db.Integer, Sequence('id_sequence'), primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(100), nullable=False)
    time = db.Column(db.String(100), nullable=False)
    date_time = db.Column(db.DateTime, nullable=False)
    city = db.Column(db.String(100), nullable=False)
    genre = db.Column(db.String(100), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    tix_url = db.Column(db.String(100), nullable=False)


def get_data(base_url):
    url = f'{base_url}&apikey={TOKEN}'
    response = requests.get(
        url,
        headers={
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {TOKEN}'
        }
    )

    data = response.json()
    pp(data)
    return data


data = get_data('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=01&size=100')
us_data = data['_embedded']['events']
la = 'Los Angeles'
sf = 'San Francisco'


def get_events_by_city(city):
    events_by_city = []

    for event in us_data:
        venues = event['_embedded']['venues']
        for venue in venues:
            if venue['city']['name'].lower() == city.lower():
                events_by_city.append(event)
                break
    return events_by_city


test_endpoint_la = get_events_by_city(la)


def get_event_details_by_city(city):
    upcoming_events = get_events_by_city(city)

    results = []

    for event in upcoming_events:
        event_name = event['name']
        event_date = event['dates']['start']['localDate']
        event_time = event['dates']['start']['localTime']
        event_date_time = event['dates']['start']['dateTime']
        event_genre = event['classifications'][0]['subGenre']['name']
        event_city = event['_embedded']['venues'][0]['city']['name']
        event_zipcode = event['_embedded']['venues'][0]['postalCode']
        event_tix = event['url']

        results.append(
            {
                'name': event_name,
                'date': event_date,
                'time': convert12(event_time),
                'date_time': parser.parse(event_date_time),
                'city': event_city,
                'genre': event_genre,
                'zipcode': int(event_zipcode),
                'tix_url': event_tix
            }
        )
    pp(results)
    return results


upcoming_la_events = get_event_details_by_city(la)


def write_db(results):
    for row in results:
        db.session.add(Event(
            name=row['name'],
            date=row['date'],
            time=row['time'],
            date_time=row['date_time'],
            city=row['city'],
            genre=row['genre'],
            zipcode=row['zipcode'],
            tix_url=row['tix_url'],

        ))
    db.session.commit()


