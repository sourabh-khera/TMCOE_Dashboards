from pyhive import hive
import pandas as pd
import json
import os
import redis
import pickle


def checkForExistingKey():
    r = redis.StrictRedis(host='localhost', port=6379, db=0);
    exist = r.exists('topAirlines');
    if exist == 1:
       result = pickle.loads(r.get('topAirlines'));
       print(result);
    else:
        getDataframe();

topAirlines = [];
query = 'select airline, sum(iov) as iov, count(booking_id) as totalBookings, count(no_of_passengers) as totalPassengers from flight_kpi where airline is not null  group by airline order by iov desc limit 30';

def createConnection():
     # hostUrl = os.environ.get('HIVEHOSTURL');
     cursor = hive.Connection(host='10.17.3.181', username='hive', port=10000, database='tmp').cursor();
     return cursor;

def getDataframe():
     cursor = createConnection();
     cursor.execute(query);
     results = cursor.fetchall();
     for t in results:
         topAirlines.append({
            'Airline': t[0],
            'IOV': t[1],
            'TotalBookings': t[2],
            'TotalPassengers': t[3],
         });
     data = json.dumps(topAirlines);
     r = redis.StrictRedis(host='localhost', port=6379, db=0);
     pickled_object = pickle.dumps(data);
     r.set('topAirlines', pickled_object);
     print(data);

checkForExistingKey();
