import pprint as p


def pp(input):
    p.pprint(input)


def convert12(str):  # sourcery skip: assign-if-exp, hoist-statement-from-if
    # Get Hours
    h1 = ord(str[0]) - ord('0')
    h2 = ord(str[1]) - ord('0')

    hh = h1 * 10 + h2

    # Finding out the Meridien of time
    # ie. AM or PM
    Meridien = ""
    if hh < 12:
        Meridien = "AM"
    else:
        Meridien = "PM"

    hh %= 12

    # Handle 00 and 12 case separately
    if (hh == 0):
        print("12", end="")

        # Printing minutes and seconds
        for i in range(2, 8):
            print(str[i], end="")

    else:
        print(hh, end="")

        # Printing minutes and seconds
        for i in range(2, 8):
            print(str[i], end="")

    print(" " + Meridien)


# # Driver code
# if __name__ == '__app__':
#     # 24 hour format
#     str = "17:35:20"
#     convert12(str)


# app = Flask(__name__)
# # dialect+driver://username:password@host:port/database
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://localhost:5432/events'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)


# base_url = f'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&'
# base_url = f'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&'
# url = f'{base_url}apikey={TOKEN}'


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
