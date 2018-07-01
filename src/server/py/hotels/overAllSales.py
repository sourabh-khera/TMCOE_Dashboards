from pyhive import hive
import pandas as pd
import json
import os
import redis
import pickle


def checkForExistingKey():
    r = redis.StrictRedis(host='localhost', port=6379, db=0);
    exist = r.exists('overAllSales');
    if exist == 1:
       result = pickle.loads(r.get('overAllSales'));
       print(result);
    else:
        getDataframe();

overAllSales = {};
query = 'select sum(iov_usd) as iov_usd, count(booking_id) as totalBookings, sum(room_count) as totalRooms, sum(room_nights) as totalNights from hotel_view';

def createConnection():
     # hostUrl = os.environ.get('HIVEHOSTURL');
     cursor = hive.Connection(host='10.17.3.181', username='hive', port=10000, database='tapro_atg').cursor();
     return cursor;

def getDataframe():
     cursor = createConnection()
     cursor.execute(query);
     result = cursor.fetchall();
     for t in result:
        overAllSales = {
        'IBV': t[0],
        'Number Of Bookings': t[1],
        'Number Of Rooms': t[2],
        'Number of Room Nights': t[3]
        };
     r = redis.StrictRedis(host='localhost', port=6379, db=0);
     pickled_object = pickle.dumps(overAllSales);
     r.set('overAllSales', pickled_object);
     print(json.dumps(overAllSales));

checkForExistingKey();
