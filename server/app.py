from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.schema import Sequence
from config import TOKEN
import requests
import pprint as p
import psycopg2


# Python program to print
# colored text and background
def prRed(skk):
    print("\033[91m {}\033[00m".format(skk))


def prGreen(skk):
    print("\033[92m {}\033[00m".format(skk))


def prYellow(skk):
    print("\033[93m {}\033[00m".format(skk))


def prLightPurple(skk):
    print("\033[94m {}\033[00m".format(skk))


def prPurple(skk):
    print("\033[95m {}\033[00m".format(skk))


def prCyan(skk):
    print("\033[96m {}\033[00m".format(skk))


def pp(input):
    p.pprint(input)


app = Flask(__name__)
# dialect+driver://username:password@host:port/database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://localhost:5432/events'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, Sequence('id_sequence'), primary_key=True)
    name = db.Column(db.String(80), nullable=False)


class Event(db.Model):
    id = db.Column(db.Integer, Sequence('id_sequence'), primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    date = db.Column(db.Date, nullable=False)


# base_url = f'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&'
# base_url = f'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&'
# url = f'{base_url}apikey={TOKEN}'


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
    p.pprint(data)
    return data


us_data = get_data('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=01&size=25')
us_data = us_data['_embedded']['events']


def get_events_by_city(city):
    # return a list of all events
    events_in_city = []

    for event in us_data:
        venues = event['_embedded']['venues']
        for venue in venues:
            if venue['city']['name'].lower() == city.lower():
                events_in_city.append(event)
                break
    return events_in_city


la = 'Los Angeles'
la_events = get_events_by_city(la)

sf = 'San Francisco'
sf_events = get_events_by_city(sf)


# la_events[0].keys()
# dict_keys([
#     'name', 'type', 'id', 'test', 'url',
#     'locale', 'images', 'sales', 'dates',
#     'classifications', 'promoter',
#     'promoters', 'info', 'pleaseNote',
#     'priceRanges', 'products', 'seatmap',
#     'accessibility', 'ticketLimit',
#     'ageRestrictions', '_links',
#     '_embedded'
# ])


# def get_event_name(city):
#     current_events = get_events_by_city(city)
#     names = []
#     for event in current_events:
#         names.append(event['name'])
#     return names


def get_event_name(city):
    upcoming_events = get_events_by_city(city)

    event_name = [event['name'] for event in upcoming_events]

    print('name')
    prCyan(type(event_name))
    prYellow(len(event_name))
    prGreen(event_name)
    return pp(event_name)


def get_event_date(city):
    upcoming_events = get_events_by_city(city)

    event_date = [event['dates']['start']['localDate'] for event in upcoming_events]

    print('date')
    prCyan(type(event_date))
    prYellow(len(event_date))
    prGreen(event_date)
    return pp(event_date)


def get_event_time(city):
    upcoming_events = get_events_by_city(city)

    event_time = [event['dates']['start']['localTime'] for event in upcoming_events]

    print('time')
    prCyan(type(event_time))
    prYellow(len(event_time))
    prGreen(event_time)
    return pp(event_time)


def get_event_genre(city):
    upcoming_events = get_events_by_city(city)

    event_genre = [event['classifications'][0]['subGenre']['name'] for event in upcoming_events]

    print('genre')
    prCyan(type(event_genre))
    prYellow(len(event_genre))
    prGreen(event_genre)
    return pp(event_genre)


def get_event_zipcode(city):
    upcoming_events = get_events_by_city(city)

    event_zipcode = [event['_embedded']['venues'][0]['postalCode'] for event in upcoming_events]

    print('zipcode')
    prCyan(type(event_zipcode))
    prYellow(len(event_zipcode))
    prGreen(event_zipcode)
    return pp(event_zipcode)


def get_event_tix_url(city):
    upcoming_events = get_events_by_city(city)

    event_tix = [event['url'] for event in upcoming_events]

    print('ticket url')
    prCyan(type(event_tix))
    prYellow(len(event_tix))
    prGreen(event_tix)
    return pp(event_tix)


def get_event_info(city):
    upcoming_events = get_events_by_city(city)

    results = []

    for event in upcoming_events:
        event_name = event['name']
        event_date = event['dates']['start']['localDate']
        event_time = event['dates']['start']['localTime']
        event_genre = event['classifications'][0]['subGenre']['name']
        event_zipcode = event['_embedded']['venues'][0]['postalCode']
        event_tix = event['url']

        results.append({'name': event_name, 'date': event_date})
    pp(results)
    return results


# class Event(db.Model):
#     id = db.Column(db.Integer, Sequence('id_sequence'), primary_key=True)
#     name = db.Column(db.String(80), nullable=False)
#     date = db.Column(db.Date, nullable=False)

def write_db(results):
    for row in results:
        db.session.add(Event(name=row['name'], date=row['date']))
    db.session.commit()

# def get_event_details(city):
#     upcoming_events = get_events_by_city(city)
#
#     event_name = [event['name'] for event in upcoming_events]
#     event_date = [event['dates']['start']['localDate'] for event in upcoming_events]
#
#     print('name')
#     prCyan(type(event_name))
#     prGreen(event_name)
#     print('-----')
#     print('date')
#     prCyan(type(event_date))
#     prRed(event_date)
#     print('-----')


# event1_city = events[0]['_embedded']['venues'][0]['city']['name']
