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


