from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.schema import Sequence
from config import TOKEN
import requests
import psycopg2
import pprint

# from sqlalchemy import create_engine

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://localhost:5432/events'
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, Sequence('id_sequence'), primary_key=True)
    name = db.Column(db.String(80), nullable=False)


# dialect+driver://username:password@host:port/database
# engine = create_engine('postgresql+psycopg2://localhost:5000/events')


#
# endpoint_user = 'users/me'
# base_url = f'https://www.eventbriteapi.com/v3'
# base_url = f'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&'
# base_url = f'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&'
# url = f'{base_url}apikey={TOKEN}'


def get_events(base_url):
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
    pprint.pprint(data)
    return data


data = get_events('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=12&size=50')

# list of all the events in given country
# first 20 events
events = data['_embedded']['events']


# next_data = get_events('https://app.ticketmaster.com' + data['_links']['next']['href'])
# events_page_2 = next_data['_embedded']['events']


# event1_city = events[0]['_embedded']['venues'][0]['city']['name']


def get_events_by_city(city):
    # return a list of all events
    events_in_city = []

    for event in events:
        venues = event['_embedded']['venues']
        for venue in venues:
            if venue['city']['name'].lower() == city.lower():
                events_in_city.append(event)
                break
    return events_in_city


events_sf = get_events_by_city('San Francisco')


def event_names(city):
    current_events = get_events_by_city(city)

    names = []

    for event in current_events:
        names.append(event['name'])
    return names

#   return [event['name'] for event in current_events]

# conn = psycopg2.connect("host=localhost dbname=events")
# cur = conn.cursor()

# for row in get_data:
#     cur.execute('INSERT INTO events VALUES')
#
# cur.execute('SELECT * FROM events')
#
# all = cur.fetchall()
# conn.commit()
#
# print(all)
