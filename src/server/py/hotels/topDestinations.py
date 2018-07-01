from pyhive import hive
import pandas as pd
import json
import os
import redis
import pickle


def checkForExistingKey():
    r = redis.StrictRedis(host='localhost', port=6379, db=0);
    exist = r.exists('topHotelsDestinations');
    if exist == 1:
       result = pickle.loads(r.get('topHotelsDestinations'));
       print(result);
    else:
        getDataframe();

topHotelsDestinations = [];
query = 'select hotel_city, sum(iov_usd) as iov_usd, count(booking_id) as totalBookings from hotel_view group by hotel_city order by iov_usd desc limit 10';

def createConnection():
     # hostUrl = os.environ.get('HIVEHOSTURL');
     cursor = hive.Connection(host='10.17.3.181', username='hive', port=10000, database='tapro_atg').cursor();
     return cursor;

def getDataframe():
     cursor = createConnection()
     cursor.execute(query);
     results = cursor.fetchall();
     for t in results:
         topHotelsDestinations.append({
           t[0]: {
             'IOV': t[1],
             'TotalBookings': t[2],
             }
         });
     print(json.dumps(topHotelsDestinations));

checkForExistingKey();
