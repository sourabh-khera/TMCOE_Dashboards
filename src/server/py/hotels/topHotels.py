from pyhive import hive
import pandas as pd
import json
import os
import redis
import pickle


def checkForExistingKey():
    r = redis.StrictRedis(host='localhost', port=6379, db=0);
    exist = r.exists('topHotels');
    if exist == 1:
       result = pickle.loads(r.get('topHotels'));
       print(result);
    else:
        getDataframe();

topHotels = [];
query = 'select hotel_name, sum(iov_usd) as iov_usd, count(booking_id) as totalBookings from hotel_view group by hotel_name order by iov_usd desc limit 10';

def createConnection():
     # hostUrl = os.environ.get('HIVEHOSTURL');
     cursor = hive.Connection(host='10.17.3.181', username='hive', port=10000, database='tapro_atg').cursor();
     return cursor;

def getDataframe():
     cursor = createConnection()
     cursor.execute(query);
     results = cursor.fetchall();
     for t in results:
         topHotels.append({
               'Hotel': t[0]
               'IBV': t[1],
               'TotalBookings': t[2]
         });
     data = json.dumps(topHotels);
     r = redis.StrictRedis(host='localhost', port=6379, db=0);
     pickled_object = pickle.dumps(data);
     r.set('topHotels', pickled_object);
     print(data);

getDataframe();
